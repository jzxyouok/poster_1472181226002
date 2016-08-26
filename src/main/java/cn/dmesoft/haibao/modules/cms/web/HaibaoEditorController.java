package cn.dmesoft.haibao.modules.cms.web;

import cn.dmesoft.haibao.modules.cms.entity.Guestbook;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 海报控制器
 */
@Controller
@RequestMapping(value = "${adminPath}/haibao_editor")
public class HaibaoEditorController {

    @RequiresPermissions("haibao_editor:create")
    @RequestMapping(value = {"list", ""})
    public String list(Guestbook guestbook, HttpServletRequest request, HttpServletResponse response, Model model) {
//        Page<Guestbook> page = guestbookService.findPage(new Page<Guestbook>(request, response), guestbook);
//        model.addAttribute("page", page);
        return "modules/haibao_editor/list";
    }




}
