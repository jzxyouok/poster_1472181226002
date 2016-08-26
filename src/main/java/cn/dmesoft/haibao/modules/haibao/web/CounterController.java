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
import cn.dmesoft.haibao.modules.haibao.entity.Counter;
import cn.dmesoft.haibao.modules.haibao.service.CounterService;

/**
 * 单表生成Controller
 * @author Dmesoft
 * @version 2016-08-11
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao/counter")
public class CounterController extends BaseController {

	@Autowired
	private CounterService counterService;
	
	@ModelAttribute
	public Counter get(@RequestParam(required=false) String id) {
		Counter entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = counterService.get(id);
		}
		if (entity == null){
			entity = new Counter();
		}
		return entity;
	}
	
	@RequiresPermissions("haibao:counter:view")
	@RequestMapping(value = {"list", ""})
	public String list(Counter counter, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Counter> page = counterService.findPage(new Page<Counter>(request, response), counter); 
		model.addAttribute("page", page);
		return "modules/haibao/counterList";
	}

	@RequiresPermissions("haibao:counter:view")
	@RequestMapping(value = "form")
	public String form(Counter counter, Model model) {
		model.addAttribute("counter", counter);
		return "modules/haibao/counterForm";
	}

	@RequiresPermissions("haibao:counter:edit")
	@RequestMapping(value = "save")
	public String save(Counter counter, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, counter)){
			return form(counter, model);
		}
		counterService.save(counter);
		addMessage(redirectAttributes, "保存单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/counter/?repage";
	}
	
	@RequiresPermissions("haibao:counter:edit")
	@RequestMapping(value = "delete")
	public String delete(Counter counter, RedirectAttributes redirectAttributes) {
		counterService.delete(counter);
		addMessage(redirectAttributes, "删除单表成功");
		return "redirect:"+Global.getAdminPath()+"/haibao/counter/?repage";
	}

}