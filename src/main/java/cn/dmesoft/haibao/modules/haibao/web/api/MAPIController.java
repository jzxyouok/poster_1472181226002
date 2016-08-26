package cn.dmesoft.haibao.modules.haibao.web.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Controller
    @RequestMapping(value = "${adminPath}/m/scene/tpl")
    public class MAPIController extends cn.dmesoft.haibao.modules.haibao.web.api.BaseApiController {

    @ResponseBody
    @RequestMapping(value = "tags")//, method = RequestMethod.POST)
    public String tags(
            HttpServletRequest request, HttpServletResponse response) {

        return "{\"success\":true,\"code\":200,\"msg\":\"操作成功\",\"obj\":null,\"map\":null,\"list\":[{\"id\":42,\"name\":\"招聘\",\"bizType\":103,\"type\":2,\"lang\":null,\"groupId\":1,\"sort\":0},{\"id\":61,\"name\":\"简约\",\"bizType\":105,\"type\":2,\"lang\":null,\"groupId\":2,\"sort\":0}]}";
    }
    }
