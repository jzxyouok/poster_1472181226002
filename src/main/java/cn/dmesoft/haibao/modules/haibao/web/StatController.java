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
import cn.dmesoft.haibao.modules.haibao.entity.Stat;
import cn.dmesoft.haibao.modules.haibao.service.StatService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-22
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/stat")
public class StatController extends BaseController {

	@Autowired
	private StatService statService;
	
	@ModelAttribute
	public Stat get(@RequestParam(required=false) String id) {
		Stat entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = statService.get(id);
		}
		if (entity == null){
			entity = new Stat();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:stat:view")
	@RequestMapping(value = {"list", ""})
	public String list(Stat stat, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Stat> page = statService.findPage(new Page<Stat>(request, response), stat); 
		model.addAttribute("page", page);
		return "modules/haibao/statList";
	}

	@RequiresPermissions("haibao:stat:view")
	@RequestMapping(value = "form")
	public String form(Stat stat, Model model) {
		model.addAttribute("stat", stat);
		return "modules/haibao/statForm";
	}

	@RequiresPermissions("haibao:stat:edit")
	@RequestMapping(value = "save")
	public String save(Stat stat, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, stat)){
			return form(stat, model);
		}
		statService.save(stat);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/stat/?repage";
	}
	
	@RequiresPermissions("haibao:stat:edit")
	@RequestMapping(value = "delete")
	public String delete(Stat stat, RedirectAttributes redirectAttributes) {
		statService.delete(stat);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/stat/?repage";
	}

}