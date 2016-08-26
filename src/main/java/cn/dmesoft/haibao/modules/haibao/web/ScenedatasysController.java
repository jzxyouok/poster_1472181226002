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
import cn.dmesoft.haibao.modules.haibao.entity.Scenedatasys;
import cn.dmesoft.haibao.modules.haibao.service.ScenedatasysService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-18
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/scenedatasys")
public class ScenedatasysController extends BaseController {

	@Autowired
	private ScenedatasysService scenedatasysService;
	
	@ModelAttribute
	public Scenedatasys get(@RequestParam(required=false) String id) {
		Scenedatasys entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = scenedatasysService.get(id);
		}
		if (entity == null){
			entity = new Scenedatasys();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:scenedatasys:view")
	@RequestMapping(value = {"list", ""})
	public String list(Scenedatasys scenedatasys, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Scenedatasys> page = scenedatasysService.findPage(new Page<Scenedatasys>(request, response), scenedatasys); 
		model.addAttribute("page", page);
		return "modules/haibao/scenedatasysList";
	}

	@RequiresPermissions("haibao:scenedatasys:view")
	@RequestMapping(value = "form")
	public String form(Scenedatasys scenedatasys, Model model) {
		model.addAttribute("scenedatasys", scenedatasys);
		return "modules/haibao/scenedatasysForm";
	}

	@RequiresPermissions("haibao:scenedatasys:edit")
	@RequestMapping(value = "save")
	public String save(Scenedatasys scenedatasys, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, scenedatasys)){
			return form(scenedatasys, model);
		}
		scenedatasysService.save(scenedatasys);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenedatasys/?repage";
	}
	
	@RequiresPermissions("haibao:scenedatasys:edit")
	@RequestMapping(value = "delete")
	public String delete(Scenedatasys scenedatasys, RedirectAttributes redirectAttributes) {
		scenedatasysService.delete(scenedatasys);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenedatasys/?repage";
	}

}