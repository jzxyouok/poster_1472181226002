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
import cn.dmesoft.haibao.modules.haibao.entity.Scene;
import cn.dmesoft.haibao.modules.haibao.service.SceneService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-05
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/scene")
public class SceneController extends BaseController {

	@Autowired
	private SceneService sceneService;
	
	@ModelAttribute
	public Scene get(@RequestParam(required=false) String id) {
		Scene entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = sceneService.get(id);
		}
		if (entity == null){
			entity = new Scene();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:scene:view")
	@RequestMapping(value = {"list", ""})
	public String list(Scene scene, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Scene> page = sceneService.findPage(new Page<Scene>(request, response), scene); 
		model.addAttribute("page", page);
		return "modules/haibao/sceneList";
	}

	@RequiresPermissions("haibao:scene:view")
	@RequestMapping(value = "form")
	public String form(Scene scene, Model model) {
		model.addAttribute("scene", scene);
		return "modules/haibao/sceneForm";
	}

	@RequiresPermissions("haibao:scene:edit")
	@RequestMapping(value = "save")
	public String save(Scene scene, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, scene)){
			return form(scene, model);
		}
		sceneService.save(scene);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scene/?repage";
	}
	
	@RequiresPermissions("haibao:scene:edit")
	@RequestMapping(value = "delete")
	public String delete(Scene scene, RedirectAttributes redirectAttributes) {
		sceneService.delete(scene);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scene/?repage";
	}

}