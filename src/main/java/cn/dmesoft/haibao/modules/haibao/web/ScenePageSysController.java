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
import cn.dmesoft.haibao.modules.haibao.entity.ScenePageSys;
import cn.dmesoft.haibao.modules.haibao.service.ScenePageSysService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-05
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/scenePageSys")
public class ScenePageSysController extends BaseController {

	@Autowired
	private ScenePageSysService scenePageSysService;
	
	@ModelAttribute
	public ScenePageSys get(@RequestParam(required=false) String id) {
		ScenePageSys entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = scenePageSysService.get(id);
		}
		if (entity == null){
			entity = new ScenePageSys();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:scenePageSys:view")
	@RequestMapping(value = {"list", ""})
	public String list(ScenePageSys scenePageSys, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<ScenePageSys> page = scenePageSysService.findPage(new Page<ScenePageSys>(request, response), scenePageSys); 
		model.addAttribute("page", page);
		return "modules/haibao/scenePageSysList";
	}

	@RequiresPermissions("haibao:scenePageSys:view")
	@RequestMapping(value = "form")
	public String form(ScenePageSys scenePageSys, Model model) {
		model.addAttribute("scenePageSys", scenePageSys);
		return "modules/haibao/scenePageSysForm";
	}

	@RequiresPermissions("haibao:scenePageSys:edit")
	@RequestMapping(value = "save")
	public String save(ScenePageSys scenePageSys, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, scenePageSys)){
			return form(scenePageSys, model);
		}
		scenePageSysService.save(scenePageSys);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenePageSys/?repage";
	}
	
	@RequiresPermissions("haibao:scenePageSys:edit")
	@RequestMapping(value = "delete")
	public String delete(ScenePageSys scenePageSys, RedirectAttributes redirectAttributes) {
		scenePageSysService.delete(scenePageSys);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/scenePageSys/?repage";
	}

}