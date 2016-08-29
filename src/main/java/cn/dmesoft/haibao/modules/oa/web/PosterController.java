package cn.dmesoft.haibao.modules.haibao.web;

import java.beans.PropertyEditorSupport;
import java.io.IOException;
import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.druid.util.StringUtils;

import cn.dmesoft.haibao.common.utils.DateUtils;
import cn.dmesoft.haibao.common.web.BaseController;
import cn.dmesoft.haibao.modules.haibao.entity.BaseRes;
import cn.dmesoft.haibao.modules.haibao.entity.Poster;
import cn.dmesoft.haibao.modules.haibao.enums.BaseResCodeEnum;
import cn.dmesoft.haibao.modules.haibao.service.PosterService;

/**
 * 
 * @author hexuannenng
 *
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/poster")
public class PosterController extends BaseController {

	private String basePath = null;

	@Resource
	private PosterService posterService;

	/**
	 * 保存海报
	 * @param poster
	 * @param result
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("save")
	@ResponseBody
	public BaseRes<Poster> save(@Valid Poster poster, BindingResult result, HttpServletRequest request) throws Exception {
		BaseRes<Poster> res = new BaseRes<Poster>();
		posterService.savePoster(poster);
		poster.setPath(getUrlPath(request, poster.getId()));
		res.setData(poster);
		return res;
	}

	/**
	 * 访问海报页面
	 * @throws ServletException 
	 * @throws IOException 
	 */
	@RequestMapping("access/{posterId}")
	public void access(@PathVariable String posterId, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String path = posterService.getPosterUrl(posterId);
		request.getRequestDispatcher("/" + path).forward(request, response);
	}
	public static void main(String[] args) {
		System.out.println(System.currentTimeMillis());
	}

	/**
	 * 修改海报
	 * @param poster
	 * @param result
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("update")
	@ResponseBody
	public BaseRes<Poster> update(@Valid Poster poster, BindingResult result, HttpServletRequest request) throws Exception {
		BaseRes<Poster> res = new BaseRes<Poster>();
		if (StringUtils.isEmpty(poster.getId())) {
			res.setRequestEnum(BaseResCodeEnum.PARAMETER_FAIL);
			res.putFieldError("id", "海报ID不能为空");
			return res;
		}
		Map<String, String> fieldError = posterService.updatePoster(poster);
		if (fieldError != null && fieldError.size() > 0) {
			res.setRequestEnum(BaseResCodeEnum.PARAMETER_FAIL);
			res.putAllFieldError(fieldError);
			return res;
		}
		poster.setPath(getUrlPath(request, poster.getId()));
		res.setData(poster);
		return res;
	}

	private String getUrlPath(HttpServletRequest request, String posterId) {
		if (basePath == null) {
			basePath = request.getScheme() + "://" + request.getServerName() + ":"+request.getServerPort() + request.getContextPath() + "/";
		}
		return basePath + adminPath + "/haibao/poster/access/" + posterId;
	}

	protected void initBinder(WebDataBinder binder) {
		binder.registerCustomEditor(Date.class, new PropertyEditorSupport() {
			@Override
			public void setAsText(String text) {
				setValue(DateUtils.parseDate(text));
			}
		});
	}
}
