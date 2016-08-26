package cn.dmesoft.haibao.modules.haibao.web;

import cn.dmesoft.haibao.common.web.BaseController;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "${adminPath}/haibao/design")
public class DesignController  extends BaseController {

    @RequiresPermissions("haibao:design:step1")
    @RequestMapping(value = "step1", method= RequestMethod.GET)
    public String step1(  HttpServletRequest request, HttpServletResponse response, Model model) {
        return "modules/haibao/design/step1";
    }






    @RequestMapping(value = "view/{id}", method= RequestMethod.GET)
    public String view(  @PathVariable("id") String id) {
        return "modules/haibao/design/view";
    }



}