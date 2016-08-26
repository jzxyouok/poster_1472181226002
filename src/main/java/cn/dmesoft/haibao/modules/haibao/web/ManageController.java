package cn.dmesoft.haibao.modules.haibao.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "${adminPath}/haibao/manage")
public class ManageController {

    @RequiresPermissions("haibao:list")
    @RequestMapping(value = "list", method= RequestMethod.GET)
    public String list(HttpServletRequest request, HttpServletResponse response, Model model) {
        return "modules/haibao/manage/list";
    }


}
