package cn.dmesoft.haibao.modules.sys.web;

import cn.dmesoft.haibao.common.utils.FileUtils;
import cn.dmesoft.haibao.common.web.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;


/**
 * 区域Controller
 *
 * @author dmesoft
 * @version 2013-5-15
 */
@Controller
@RequestMapping(value = "/")
public class ApiController extends BaseController {

    @Autowired
    ServletContext servletContext;


    @RequestMapping(value = "/api/{id}")
    @ResponseBody
    public String get(@PathVariable("id") String id) throws IOException {
        File f = new File(servletContext.getRealPath("/WEB-INF/views/api/" + id));
        return FileUtils.readFileToString(f);

    }


    @RequestMapping(value = "/index.php")
    @ResponseBody
    public String get(HttpServletRequest request) throws IOException {
        String url = request.getQueryString();


        if (url.indexOf("&time=") != -1) {
            url = url.substring(0, url.indexOf("&time="));
        }
        if (url.indexOf("&date=") != -1) {
            url = url.substring(0, url.indexOf("&date="));
        }
        File f = new File(servletContext.getRealPath("/WEB-INF/views/api/index.php_" + url));
        return FileUtils.readFileToString(f);

    }


}