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
import cn.dmesoft.haibao.modules.haibao.entity.Cate;
import cn.dmesoft.haibao.modules.haibao.service.CateService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-04
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/cate")
public class CateController extends BaseController {

	@Autowired
	private CateService cateService;
	
	@ModelAttribute
	public Cate get(@RequestParam(required=false) String id) {
		Cate entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = cateService.get(id);
		}
		if (entity == null){
			entity = new Cate();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:cate:view")
	@RequestMapping(value = {"list", ""})
	public String list(Cate cate, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Cate> page = cateService.findPage(new Page<Cate>(request, response), cate); 
		model.addAttribute("page", page);
		return "modules/haibao/cateList";
	}

	@RequiresPermissions("haibao:cate:view")
	@RequestMapping(value = "form")
	public String form(Cate cate, Model model) {
		model.addAttribute("cate", cate);
		return "modules/haibao/cateForm";
	}

	@RequiresPermissions("haibao:cate:edit")
	@RequestMapping(value = "save")
	public String save(Cate cate, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, cate)){
			return form(cate, model);
		}
		cateService.save(cate);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/cate/?repage";
	}
	
	@RequiresPermissions("haibao:cate:edit")
	@RequestMapping(value = "delete")
	public String delete(Cate cate, RedirectAttributes redirectAttributes) {
		cateService.delete(cate);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/cate/?repage";
	}

}