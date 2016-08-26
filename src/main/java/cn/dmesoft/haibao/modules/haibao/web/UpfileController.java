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
import cn.dmesoft.haibao.modules.haibao.entity.Upfile;
import cn.dmesoft.haibao.modules.haibao.service.UpfileService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-10
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/upfile")
public class UpfileController extends BaseController {

	@Autowired
	private UpfileService upfileService;
	
	@ModelAttribute
	public Upfile get(@RequestParam(required=false) String id) {
		Upfile entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = upfileService.get(id);
		}
		if (entity == null){
			entity = new Upfile();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:upfile:view")
	@RequestMapping(value = {"list", ""})
	public String list(Upfile upfile, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Upfile> page = upfileService.findPage(new Page<Upfile>(request, response), upfile); 
		model.addAttribute("page", page);
		return "modules/haibao/upfileList";
	}

	@RequiresPermissions("haibao:upfile:view")
	@RequestMapping(value = "form")
	public String form(Upfile upfile, Model model) {
		model.addAttribute("upfile", upfile);
		return "modules/haibao/upfileForm";
	}

	@RequiresPermissions("haibao:upfile:edit")
	@RequestMapping(value = "save")
	public String save(Upfile upfile, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, upfile)){
			return form(upfile, model);
		}
		upfileService.save(upfile);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/upfile/?repage";
	}
	
	@RequiresPermissions("haibao:upfile:edit")
	@RequestMapping(value = "delete")
	public String delete(Upfile upfile, RedirectAttributes redirectAttributes) {
		upfileService.delete(upfile);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/upfile/?repage";
	}

}