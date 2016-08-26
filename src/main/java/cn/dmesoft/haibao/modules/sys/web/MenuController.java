/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.sys.web;

import cn.dmesoft.haibao.common.config.Global;
import cn.dmesoft.haibao.common.utils.StringUtils;
import cn.dmesoft.haibao.common.web.BaseController;
import cn.dmesoft.haibao.modules.sys.entity.Menu;
import cn.dmesoft.haibao.modules.sys.service.SystemService;
import cn.dmesoft.haibao.modules.sys.utils.UserUtils;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONObject;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

/**
 * 菜单Controller
 *
 * @author dmesoft
 * @version 2013-3-23
 */
@Controller
@RequestMapping(value = "${adminPath}/sys/menu")
public class MenuController extends BaseController {

    @Autowired
    private SystemService systemService;

    @ModelAttribute("menu")
    public Menu get(@RequestParam(required = false) String id) {
        if (StringUtils.isNotBlank(id)) {
            return systemService.getMenu(id);
        } else {
            return new Menu();
        }
    }


    @ResponseBody
    @RequestMapping(value = "for_current_user")
    public String getMenusForCurrentUser() {
        List<Menu> list = UserUtils.getMenuList();
        JSONArray ja = new JSONArray();
        for (Menu menu : list) {
            JSONObject jo = new JSONObject();
            jo.put("id", menu.getId());
            jo.put("name", menu.getName());
            jo.put("href", menu.getHref());
            jo.put("icon", menu.getIcon());
            jo.put("isShow", menu.getIsShow());
            jo.put("parent", menu.getParentId());
            ja.put(jo);
        }
        return ja.toString();
    }

//	/**
//	 * 读取详细数据
//	 * @param id
//	 * @return
//	 */
//	@RequestMapping(value = "detail-with-vars/{id}/{taskId}")
//	@ResponseBody
//	public String getLeaveWithVars(@PathVariable("id") String id, @PathVariable("taskId") String taskId) {
//		Leave leave = leaveService.get(id);
//		Map<String, Object> variables = taskService.getVariables(taskId);
//		leave.setVariables(variables);
//		return JsonMapper.getInstance().toJson(leave);
//	}

    @RequiresPermissions("sys:menu:view")
    @RequestMapping(value = {"list", ""})
    public String list(Model model) {
        List<Menu> list = Lists.newArrayList();
        List<Menu> sourcelist = systemService.findAllMenu();
        Menu.sortList(list, sourcelist, Menu.getRootId(), true);
        model.addAttribute("list", list);
        return "modules/sys/menu/list";
    }

    @RequiresPermissions("sys:menu:view")
    @RequestMapping(value = "form")
    public String form(Menu menu, Model model) {
        if (menu.getParent() == null || menu.getParent().getId() == null) {
            menu.setParent(new Menu(Menu.getRootId()));
        }
        menu.setParent(systemService.getMenu(menu.getParent().getId()));
        // 获取排序号，最末节点排序号+30
        if (StringUtils.isBlank(menu.getId())) {
            List<Menu> list = Lists.newArrayList();
            List<Menu> sourcelist = systemService.findAllMenu();
            Menu.sortList(list, sourcelist, menu.getParentId(), false);
            if (list.size() > 0) {
                menu.setSort(list.get(list.size() - 1).getSort() + 30);
            }
        }
        model.addAttribute("menu", menu);
        return "modules/sys/menu/form";
    }

    @RequiresPermissions("sys:menu:edit")
    @RequestMapping(value = "save")
    public String save(Menu menu, Model model, RedirectAttributes redirectAttributes) {
        if (!UserUtils.getUser().isAdmin()) {
            addMessage(redirectAttributes, "越权操作，只有超级管理员才能添加或修改数据！");
            return "redirect:" + adminPath + "/sys/role/?repage";
        }
        if (Global.isDemoMode()) {
            addMessage(redirectAttributes, "演示模式，不允许操作！");
            return "redirect:" + adminPath + "/sys/menu/";
        }
        if (!beanValidator(model, menu)) {
            return form(menu, model);
        }
        systemService.saveMenu(menu);
        addMessage(redirectAttributes, "保存菜单'" + menu.getName() + "'成功");
        return "redirect:" + adminPath + "/sys/menu/";
    }

    @RequiresPermissions("sys:menu:edit")
    @RequestMapping(value = "delete")
    public String delete(Menu menu, RedirectAttributes redirectAttributes) {
        if (Global.isDemoMode()) {
            addMessage(redirectAttributes, "演示模式，不允许操作！");
            return "redirect:" + adminPath + "/sys/menu/";
        }
//		if (Menu.isRoot(id)){
//			addMessage(redirectAttributes, "删除菜单失败, 不允许删除顶级菜单或编号为空");
//		}else{
        systemService.deleteMenu(menu);
        addMessage(redirectAttributes, "删除菜单成功");
//		}
        return "redirect:" + adminPath + "/sys/menu/";
    }

    @RequiresPermissions("user")
    @RequestMapping(value = "tree")
    public String tree() {
        return "modules/sys/menu/tree";
    }

    @RequiresPermissions("user")
    @RequestMapping(value = "treeselect")
    public String treeselect(String parentId, Model model) {
        model.addAttribute("parentId", parentId);
        return "modules/sys/menu/tree_select";
    }

    /**
     * 批量修改菜单排序
     */
    @RequiresPermissions("sys:menu:edit")
    @RequestMapping(value = "updateSort")
    public String updateSort(String[] ids, Integer[] sorts, RedirectAttributes redirectAttributes) {
        if (Global.isDemoMode()) {
            addMessage(redirectAttributes, "演示模式，不允许操作！");
            return "redirect:" + adminPath + "/sys/menu/";
        }
        for (int i = 0; i < ids.length; i++) {
            Menu menu = new Menu(ids[i]);
            menu.setSort(sorts[i]);
            systemService.updateMenuSort(menu);
        }
        addMessage(redirectAttributes, "保存菜单排序成功!");
        return "redirect:" + adminPath + "/sys/menu/";
    }

    /**
     * isShowHide是否显示隐藏菜单
     *
     * @param extId
     * @param isShowHidden
     * @param response
     * @return
     */
    @RequiresPermissions("user")
    @ResponseBody
    @RequestMapping(value = "treeData")
    public List<Map<String, Object>> treeData(@RequestParam(required = false) String extId, @RequestParam(required = false) String isShowHide, HttpServletResponse response) {
        List<Map<String, Object>> mapList = Lists.newArrayList();
        List<Menu> list = systemService.findAllMenu();
        for (int i = 0; i < list.size(); i++) {
            Menu e = list.get(i);
            if (StringUtils.isBlank(extId) || (extId != null && !extId.equals(e.getId()) && e.getParentIds().indexOf("," + extId + ",") == -1)) {
                if (isShowHide != null && isShowHide.equals("0") && e.getIsShow().equals("0")) {
                    continue;
                }
                Map<String, Object> map = Maps.newHashMap();
                map.put("id", e.getId());
                map.put("pId", e.getParentId());
                map.put("name", e.getName());
                mapList.add(map);
            }
        }
        return mapList;
    }
}
