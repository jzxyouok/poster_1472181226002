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
import cn.dmesoft.haibao.modules.haibao.entity.Tag;
import cn.dmesoft.haibao.modules.haibao.service.TagService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-08
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/tag")
public class TemplateTagController extends BaseController {

	@Autowired
	private TagService tagService;
	
	@ModelAttribute
	public Tag get(@RequestParam(required=false) String id) {
		Tag entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = tagService.get(id);
		}
		if (entity == null){
			entity = new Tag();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:tag:view")
	@RequestMapping(value = {"list", ""})
	public String list(Tag tag, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Tag> page = tagService.findPage(new Page<Tag>(request, response), tag); 
		model.addAttribute("page", page);
		return "modules/haibao/tagList";
	}

	@RequiresPermissions("haibao:tag:view")
	@RequestMapping(value = "form")
	public String form(Tag tag, Model model) {
		model.addAttribute("tag", tag);
		return "modules/haibao/tagForm";
	}

	@RequiresPermissions("haibao:tag:edit")
	@RequestMapping(value = "save")
	public String save(Tag tag, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, tag)){
			return form(tag, model);
		}
		tagService.save(tag);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/tag/?repage";
	}
	
	@RequiresPermissions("haibao:tag:edit")
	@RequestMapping(value = "delete")
	public String delete(Tag tag, RedirectAttributes redirectAttributes) {
		tagService.delete(tag);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/tag/?repage";
	}

}