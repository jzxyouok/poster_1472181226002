package cn.dmesoft.haibao.modules.haibao.web.api;


import cn.dmesoft.haibao.modules.haibao.entity.Cate;
import cn.dmesoft.haibao.modules.haibao.entity.Tag;
import cn.dmesoft.haibao.modules.haibao.service.CateService;
import cn.dmesoft.haibao.modules.haibao.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;


@Controller
@RequestMapping(value = "${adminPath}/haibao/api/statics")
public class StaticsApiController extends BaseApiController {

    @Autowired
    private CateService cateService;

//    @RequiresPermissions("cms:link:view")
//    @ResponseBody
//    @RequestMapping(value = "findByIds")
//    public String findByIds(String ids) {
//        List<Object[]> list = linkService.findByIds(ids);
//        return JsonMapper.nonDefaultMapper().toJson(list);
//
//
//    }

    @Autowired
    TagService tagService;



    @ResponseBody
    @RequestMapping(value = "historySave", produces = "text/json;charset=UTF-8")//, method = RequestMethod.POST)
    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
    public String historySave() {

        return success1("操作成功", null, null, null);
    }
    @ResponseBody
    @RequestMapping(value = "getCateB", produces = "text/json;charset=UTF-8")//, method = RequestMethod.POST)
    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
    public String getCateB(@RequestParam(value = "fileType", required = false) Integer fileType,
                           @RequestParam(value = "type", required = false) Integer type) {

        String typeJs;
        if(fileType != null){
            type = fileType;
            typeJs = "musType";
        }else{
            typeJs = (type.intValue() == 1) ? "tpType" : "bgType";

        }

        Cate cq = new Cate();
        cq.setType(typeJs);

       return success("操作成功", null, null, cateService.findList(cq));

    }

//    @ResponseBody
//    @RequestMapping(value = "getCate", produces = "text/json;charset=UTF-8")//, method = RequestMethod.POST)
//    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
//    public String getCate(@RequestParam(value = "fileType", required = false) Integer fileType,
//                           @RequestParam(value = "type", required = false) Integer type) {
//
//        String typeJs;
//        if(fileType != null){
//            type = fileType;
//            typeJs = "musType";
//        }else{
//            typeJs = (type.intValue() == 1) ? "tpType" : "bgType";
//
//        }
//
//        Cate cq = new Cate();
//        cq.setType(typeJs);
//        return success("操作成功", null, null, cateService.findList(cq));
//
//    }


        @ResponseBody
    @RequestMapping(value = "tagList", produces = "text/json;charset=UTF-8")//, method = RequestMethod.POST)
    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
    public String tagList(@RequestParam(value = "bizType", required = false) Integer bizType) {

        Tag t = new Tag();
        if(bizType == null)bizType = 0;
        t.setBiztypeInt(bizType);
        List<Tag> tags = tagService.findList(t);
        for(Tag t1 : tags){
            t1.setGroupidInt(10);
        }


        return success(  "操作成功", null, null, tags);
//
    }
    @ResponseBody
    @RequestMapping(value = "typeList", produces = "text/json;charset=UTF-8")//, method = RequestMethod.POST)
    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
    public String typeList(HttpServletRequest request, HttpServletResponse response
                           ) {


        return success1(  "操作成功", null, null, cateService.findListByType("scene_type"));
//        cateService.findByType("scene_type");
//
//        where("type='scene_type'")->order('sort asc,id asc')->select();


        //return "{\"success\":true,\"code\":200,\"msg\":\"操作成功\",\"obj\":null,\"map\":null,\"list\":[{\"id\":13,\"name\":\"促销\",\"type\":\"101\",\"sort\":1,\"status\":1,\"remark\":null},{\"id\":14,\"name\":\"宣传\",\"type\":\"103\",\"sort\":2,\"status\":1,\"remark\":null},{\"id\":15,\"name\":\"活动\",\"type\":\"105\",\"sort\":3,\"status\":1,\"remark\":null},{\"id\":16,\"name\":\"政策\",\"type\":\"102\",\"sort\":4,\"status\":1,\"remark\":null},{\"id\":17,\"name\":\"节日\",\"type\":\"104\",\"sort\":5,\"status\":1,\"remark\":null}]}";
    }

    @ResponseBody
    @RequestMapping(value = "typeListb", produces = "text/json;charset=UTF-8")
    public String typelistb() {

        return success1(  "操作成功", null, null, cateService.findListByType("scene_type"));
        //return "{\"success\":true,\"code\":200,\"msg\":\"操作成功\",\"obj\":null,\"map\":null,\"list\":[{\"id\":13,\"name\":\"促销\",\"value\":\"101\",\"type\":\"scene_type\",\"sort\":1,\"status\":1,\"remark\":null},{\"id\":14,\"name\":\"宣传\",\"value\":\"103\",\"type\":\"scene_type\",\"sort\":2,\"status\":1,\"remark\":null},{\"id\":15,\"name\":\"活动\",\"value\":\"105\",\"type\":\"scene_type\",\"sort\":3,\"status\":1,\"remark\":null},{\"id\":16,\"name\":\"政策\",\"value\":\"102\",\"type\":\"scene_type\",\"sort\":4,\"status\":1,\"remark\":null},{\"id\":17,\"name\":\"节日\",\"value\":\"104\",\"type\":\"scene_type\",\"sort\":5,\"status\":1,\"remark\":null}]}";
    }
}