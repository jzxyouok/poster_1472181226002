/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import cn.dmesoft.haibao.common.config.Global;
import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.web.BaseController;
import cn.dmesoft.haibao.common.utils.StringUtils;
import cn.dmesoft.haibao.modules.haibao.entity.Upfilesys;
import cn.dmesoft.haibao.modules.haibao.service.UpfilesysService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-10
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/upfilesys")
public class UpfilesysController extends BaseController {

	@Autowired
	private UpfilesysService upfilesysService;
	
	@ModelAttribute
	public Upfilesys get(@RequestParam(required=false) String id) {
		Upfilesys entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = upfilesysService.get(id);
		}
		if (entity == null){
			entity = new Upfilesys();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:upfilesys:view")
	@RequestMapping(value = {"list", ""})
	public String list(Upfilesys upfilesys, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Upfilesys> page = upfilesysService.findPage(new Page<Upfilesys>(request, response), upfilesys); 
		model.addAttribute("page", page);
		return "modules/haibao/upfilesysList";
	}

	@RequiresPermissions("haibao:upfilesys:view")
	@RequestMapping(value = "form")
	public String form(Upfilesys upfilesys, Model model) {
		model.addAttribute("upfilesys", upfilesys);
		return "modules/haibao/upfilesysForm";
	}

	@RequiresPermissions("haibao:upfilesys:edit")
	@RequestMapping(value = "save")
	public String save(Upfilesys upfilesys, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, upfilesys)){
			return form(upfilesys, model);
		}
		upfilesysService.save(upfilesys);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/upfilesys/?repage";
	}
	
	@RequiresPermissions("haibao:upfilesys:edit")
	@RequestMapping(value = "delete")
	public String delete(Upfilesys upfilesys, RedirectAttributes redirectAttributes) {
		upfilesysService.delete(upfilesys);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/upfilesys/?repage";
	}

}