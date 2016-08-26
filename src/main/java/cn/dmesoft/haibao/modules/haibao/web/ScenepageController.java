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
import cn.dmesoft.haibao.modules.haibao.entity.Scenepage;
import cn.dmesoft.haibao.modules.haibao.service.ScenepageService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-05
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/scenepage")
public class ScenepageController extends BaseController {

	@Autowired
	private ScenepageService scenepageService;
	
	@ModelAttribute
	public Scenepage get(@RequestParam(required=false) String id) {
		Scenepage entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = scenepageService.get(id);
		}
		if (entity == null){
			entity = new Scenepage();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:scenepage:view")
	@RequestMapping(value = {"list", ""})
	public String list(Scenepage scenepage, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Scenepage> page = scenepageService.findPage(new Page<Scenepage>(request, response), scenepage); 
		model.addAttribute("page", page);
		return "modules/haibao/scenepageList";
	}

	@RequiresPermissions("haibao:scenepage:view")
	@RequestMapping(value = "form")
	public String form(Scenepage scenepage, Model model) {
		model.addAttribute("scenepage", scenepage);
		return "modules/haibao/scenepageForm";
	}

	@RequiresPermissions("haibao:scenepage:edit")
	@RequestMapping(value = "save")
	public String save(Scenepage scenepage, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, scenepage)){
			return form(scenepage, model);
		}
		scenepageService.save(scenepage);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenepage/?repage";
	}
	
	@RequiresPermissions("haibao:scenepage:edit")
	@RequestMapping(value = "delete")
	public String delete(Scenepage scenepage, RedirectAttributes redirectAttributes) {
		scenepageService.delete(scenepage);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenepage/?repage";
	}

}