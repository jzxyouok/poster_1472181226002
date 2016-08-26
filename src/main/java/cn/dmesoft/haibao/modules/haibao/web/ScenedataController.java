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
import cn.dmesoft.haibao.modules.haibao.entity.Scenedata;
import cn.dmesoft.haibao.modules.haibao.service.ScenedataService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-18
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/scenedata")
public class ScenedataController extends BaseController {

	@Autowired
	private ScenedataService scenedataService;
	
	@ModelAttribute
	public Scenedata get(@RequestParam(required=false) String id) {
		Scenedata entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = scenedataService.get(id);
		}
		if (entity == null){
			entity = new Scenedata();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:scenedata:view")
	@RequestMapping(value = {"list", ""})
	public String list(Scenedata scenedata, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Scenedata> page = scenedataService.findPage(new Page<Scenedata>(request, response), scenedata); 
		model.addAttribute("page", page);
		return "modules/haibao/scenedataList";
	}

	@RequiresPermissions("haibao:scenedata:view")
	@RequestMapping(value = "form")
	public String form(Scenedata scenedata, Model model) {
		model.addAttribute("scenedata", scenedata);
		return "modules/haibao/scenedataForm";
	}

	@RequiresPermissions("haibao:scenedata:edit")
	@RequestMapping(value = "save")
	public String save(Scenedata scenedata, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, scenedata)){
			return form(scenedata, model);
		}
		scenedataService.save(scenedata);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenedata/?repage";
	}
	
	@RequiresPermissions("haibao:scenedata:edit")
	@RequestMapping(value = "delete")
	public String delete(Scenedata scenedata, RedirectAttributes redirectAttributes) {
		scenedataService.delete(scenedata);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenedata/?repage";
	}

}