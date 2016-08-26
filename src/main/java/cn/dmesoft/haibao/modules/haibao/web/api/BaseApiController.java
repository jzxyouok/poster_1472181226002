package cn.dmesoft.haibao.modules.haibao.web.api;


import cn.dmesoft.haibao.common.mapper.JsonMapper;
import cn.dmesoft.haibao.common.persistence.BaseEntity;
import cn.dmesoft.haibao.common.persistence.DataEntity;
import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.utils.StringUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping(value = "${adminPath}/haibao/api")
public class BaseApiController extends cn.dmesoft.haibao.common.web.BaseController {

    public String failed(  int code, String message, Object obj, String map, List list, String extraJson){
        String json =   "{\"success\":false,\"code\":" + code + ",\"msg\":\"" + message + "\",\"obj\":" + ((obj != null)? obj : "null") +",\"map\":" +  ((map != null)? map : null)+ ",\"list\":";
        if(list == null)
            json += "null" ;
        else
            json += JsonMapper.nonDefaultMapper().toJson(list);

        if (!StringUtils.isEmpty(extraJson)){
            json += ", " + extraJson;
        }

        json += "}";
        return json;
    }

    public String success4(String message, BaseEntity obj, String map, List list, String extraJson) {
        String objText =  "";
        if(list == null)
            objText =   "null" ;
        else
            objText =   JsonMapper.nonDefaultMapper().toJson(obj);

        return success2(message,objText, map, list, extraJson);
    }


    public String success2(  String message, Object obj, String map, List list, String extraJson) {
        String listText =  "";
        if(list == null)
            listText =   "null" ;
        else
            listText =   JsonMapper.nonDefaultMapper().toJson(list);

        return success1(message,obj, map, listText, extraJson);
    }

    public String success3(String message, Object obj, String map, JSONArray list, String extraJson) {
        String listText =  "";
        if(list == null)
            listText =   "null" ;
        else
            listText =  list.toJSONString();

        return success1(message,obj, map, listText, extraJson);
    }



    public String success1(  String message, Object obj, String map, String listJson, String extraJson){
        String json =   "{\"success\":true,\"code\":200,\"msg\":\"" + message + "\",\"obj\":" + ((obj != null)? obj : "null") +",\"map\":" +  ((map != null)? map : null)+ ",\"list\":";
        json += listJson;

        json += "}";
        return json;
    }
//    public String success(  String message, Object obj, JSONObject map, List list, String extraJson) {
//        return success(message, obj, map, list, extraJson);
//    }

        public String success(  String message, Object obj, JSONObject map, List list){
            String mapText = null;
            if(map != null) mapText = map.toJSONString();
        return success2(message, obj, mapText, list, null);
    }

    public String success1(  String message, Object obj, String mapText, List list){
        return success2(message, obj, mapText, list, null);
    }


    public String success(  String message, Object obj,   Page list){
        JSONObject map = new JSONObject();
        map.put("count", list.getCount());
        map.put("pageNo", list.getPageNo());
        map.put("pageSize", list.getPageSize());

        return success(message, obj, map, list.getList());


    }


    protected String successJump(HttpServletRequest request, Model m,String message, String jumpUrl) {
        return  dispatchJump(request, m, message,1,jumpUrl);    }

    protected String errorJump(HttpServletRequest request, Model m,String message, String jumpUrl) {
        return  dispatchJump(request, m, message,0,jumpUrl);
    }

    private String dispatchJump(HttpServletRequest request, Model m, String message, Integer status, String jumpUrl){
        if(status == null) status =1 ;

        if(!StringUtils.isEmpty(jumpUrl)) m.addAttribute("jumpUrl", jumpUrl);
        m.addAttribute("msgTitle", status ==1 ? "成功" : "失败");
        //if($this->get('closeWin'))    $this->assign('jumpUrl','javascript:window.close();');
        //$this->assign('status',$status);   // 状态

        m.addAttribute("status", status);
        if(status == 1){
            m.addAttribute("message", message);
            m.addAttribute("waitSecond", 1);
            if(jumpUrl == null) m.addAttribute("jumpUrl",  request.getHeader("referer"));
            return "Tpl/dispatch_jump.tpl";
        }else{
            m.addAttribute("error", message);
            m.addAttribute("waitSecond", 3);
            if(jumpUrl == null) m.addAttribute("jumpUrl",  "javascript:history.back(-1);");
            return "Tpl/dispatch_jump.tpl";
        }


    }



}
