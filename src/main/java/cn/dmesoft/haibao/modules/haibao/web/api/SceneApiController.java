package cn.dmesoft.haibao.modules.haibao.web.api;

import cn.dmesoft.haibao.common.mapper.JsonMapper;
import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.utils.NetworkUtils;
import cn.dmesoft.haibao.common.utils.ObjectUtils;
import cn.dmesoft.haibao.common.utils.StringUtils;
import cn.dmesoft.haibao.modules.haibao.entity.*;
import cn.dmesoft.haibao.modules.haibao.service.*;
import cn.dmesoft.haibao.modules.sys.utils.UserUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;


@Controller
@RequestMapping(value = "${adminPath}/haibao/api/scene")
public class SceneApiController extends cn.dmesoft.haibao.modules.haibao.web.api.BaseApiController {


    @Autowired
    private ScenePageSysService scenePageSysService;
    @Autowired
    private CounterService counterService;

    @ResponseBody
    @RequestMapping(value = "my")//, method = RequestMethod.POST)
    public String my(
            HttpServletRequest request, HttpServletResponse response,
            @RequestParam(value = "type", required = false) Integer type,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "groupId", required = false) Integer groupId,
            @RequestParam(value = "pageNo", required = false) Integer pageNo,
            @RequestParam(value = "pageSize", required = false) Integer pageSize
    ) {
        Scene cq = new Scene();
        cq.setScenetypeInt(type);
        cq.setScenenameVarchar(name);
        cq.setGroupidInt(groupId);
        cq.setCreateBy(UserUtils.getUser());
        cq.setDelFlag("0");
        cq.getPage().setPageSize(pageSize);
        cq.getPage().setPageNo(pageNo);
        Page<Scene> sceneList = sceneService.findPage(new Page<Scene>(request, response), cq);
       // long sceneCount = sceneList.getCount();
       // JSONObject map = new JSONObject();
        return success("success", null, sceneList);

    }

    @ResponseBody
    @RequestMapping(value = "pv")//, method = RequestMethod.POST)
    public String pv(
            @RequestParam(value = "scene_id", required = false) Long scene_id
    ) {
        Scene s = sceneService.get(scene_id + "");
        return s.getHitcountInt() + "";
    }


    //    @ResponseBody
//    @RequestMapping(value = "createByCopy")
//    public String createByCopy(){
//        sceneService.addSceneByCopy()
//    }
    @ResponseBody
    @RequestMapping(value = "counterset")//, method = RequestMethod.POST)
    public String counterset(
            @RequestParam(value = "fieldId", required = false) Long fieldId,
            @RequestParam(value = "scene_id", required = false) Long scene_id

    ) {
        Counter cq = new Counter();
        cq.setSceneId(scene_id);
        cq.setFieldId(fieldId);

        List<Counter> cs = counterService.findList(cq);
        if (cs.size() > 0) {
            counterService.incrementCount(cs.get(0));
        } else {

            cq.setCount(1);
            cq.setCtime((int) new Date().getTime());
            cq.setIsNewRecord(true);
            counterService.save(cq);
        }

        return success1("操作成功", null, "{\"" + fieldId + "\":\"1\"}", null);
    }


    @ResponseBody
    @RequestMapping(value = "tagPageList")//, method = RequestMethod.POST)
    public String tagPageList() {
        return "{\"success\":true,\"code\":200,\"msg\":\"操作成功\",\"obj\":null,\"map\":null,\"list\":[{\"id\":1,\"name\":\"图文\",\"bizType\":1101,\"type\":1},{\"id\":18,\"name\":\"现代\",\"bizType\":1103,\"type\":1},{\"id\":120,\"name\":\"黄色\",\"bizType\":1103,\"type\":1}]}";
    }

    @ResponseBody
    @RequestMapping(value = "getPageTag")//, method = RequestMethod.POST)
    public String getPageTag() {
        return "{\"success\":true,\"code\":200,\"msg\":\"操作成功\",\"obj\":null,\"map\":null,\"list\":[{\"id\":1,\"name\":\"图文\",\"bizType\":1101,\"type\":1},{\"id\":2,\"name\":\"图集\",\"bizType\":1101,\"type\":1},{\"id\":4,\"name\":\"文字\",\"bizType\":1101,\"type\":1},{\"id\":5,\"name\":\"图表\",\"bizType\":1101,\"type\":1},{\"id\":6,\"name\":\"报名表\",\"bizType\":1102,\"type\":1},{\"id\":8,\"name\":\"留言\",\"bizType\":1102,\"type\":1},{\"id\":9,\"name\":\"联系\",\"bizType\":1102,\"type\":1},{\"id\":11,\"name\":\"清新\",\"bizType\":1103,\"type\":1},{\"id\":12,\"name\":\"蓝色\",\"bizType\":1103,\"type\":1},{\"id\":13,\"name\":\"中国风\",\"bizType\":1103,\"type\":1},{\"id\":14,\"name\":\"简洁\",\"bizType\":1103,\"type\":1},{\"id\":15,\"name\":\"黑白\",\"bizType\":1103,\"type\":1},{\"id\":16,\"name\":\"红色\",\"bizType\":1103,\"type\":1},{\"id\":17,\"name\":\"怀旧\",\"bizType\":1103,\"type\":1},{\"id\":18,\"name\":\"现代\",\"bizType\":1103,\"type\":1},{\"id\":19,\"name\":\"扁平化\",\"bizType\":1103,\"type\":1},{\"id\":120,\"name\":\"黄色\",\"bizType\":1103,\"type\":1},{\"id\":121,\"name\":\"绿色\",\"bizType\":1103,\"type\":1},{\"id\":122,\"name\":\"紫色\",\"bizType\":1103,\"type\":1},{\"id\":123,\"name\":\"黑色\",\"bizType\":1103,\"type\":1},{\"id\":124,\"name\":\"白色\",\"bizType\":1103,\"type\":1},{\"id\":125,\"name\":\"其他\",\"bizType\":1103,\"type\":1},{\"id\":260,\"name\":\"English\",\"bizType\":1103,\"type\":1},{\"id\":262,\"name\":\"Android\",\"bizType\":1103,\"type\":1}]}";
    }


    @ResponseBody
    @RequestMapping(value = "usePageTpl")//, method = RequestMethod.POST)
    public String usePageTpl(HttpServletRequest request, HttpServletResponse response,
                             @RequestParam(value = "id", required = false) Integer id) {
        String map = null;
        return success1("success", null, map, null);

    }

    @ResponseBody
    @RequestMapping(value = "getPageTpl")//, method = RequestMethod.POST)
    public String getPageTpl(HttpServletRequest request, HttpServletResponse response,
                             @RequestParam(value = "type", required = false) Integer type
    ) {
        Scenepage scenepageQuery = new Scenepage();
        scenepageQuery.setSceneidBigint(1311L);
        scenepageQuery.getPage().setOrderBy("pagecurrentnum_int asc");
        List<Scenepage> pageTplList = scenepageService.findList(scenepageQuery);
//        for(Scenepage sp : pageTplList){
//        }

        return success1("success", null, null, pageTplList);

    }

    @ResponseBody
    @RequestMapping(value = "getlastpagebg")//, method = RequestMethod.POST)
    public String getlastpagebg(HttpServletRequest request, HttpServletResponse response,
                                @RequestParam(value = "id", required = false) Long id
    ) {
        Upfilesys pageBg = new Upfilesys();
        pageBg.setId(id + "");
        Upfilesys us = upfilesysService.get(id + "");
        String json = "[{\"id\":183335727,\"pageId\":26143278,\"sceneId\":1301,\"type\":\"3\",\"css\":" +
                "{\"zIndex\":\"1\"},\"properties\":{\"imgSrc\":\"'.$_PageBgList[0][\"filesrc_varchar\"].'\"}}," +
                "{\"id\":183335728,\"pageId\":26143278,\"sceneId\":1301,\"type\":\"4\",\"css\":" +
                "{\"height\":\"16\",\"zIndex\":\"2\",\"width\":\"280\",\"left\":\"21px\",\"top\":\"122px\"}," +
                "\"properties\":{\"height\":\"100px\",\"imgStyle\":{\"width\":280,\"height\":73,\"marginTop\":\"-24px\"," +
                "\"marginLeft\":\"0px\"},\"width\":\"100px\",\"src\":\"line.png\"}},{\"id\":183335732,\"pageId\":26143278,\"sceneId\":" +
                "1301,\"type\":\"4\",\"css\":{\"zIndex\":\"3\",\"height\":\"257\",\"width\":\"257\",\"left\":\"84px\",\"top\":\"170px\"}," +
                "\"properties\":{\"height\":\"100px\",\"imgStyle\":{\"width\":158,\"height\":158,\"marginTop\":\"-43.5px\",\"marginLeft\":\"0px\"}," +
                "\"width\":\"100px\",\"src\":\"shadow.jpg\"}},{\"id\":183335731,\"pageId\":26143278,\"sceneId\":1301,\"type\":\"4\",\"css\":" +
                "{\"borderRadius\":\"0px\",\"borderStyle\":\"solid\",\"zIndex\":\"4\",\"borderColor\":\"rgba(0,0,0,1)\",\"paddingTop\":\"0px\"," +
                "\"height\":\"158\",\"backgroundColor\":\"\",\"color\":\"\",\"boxShadow\":\"0px 0px 0px rgba(200,200,200,0.6)\",\"borderWidth\":" +
                "\"0px\",\"width\":\"158\",\"left\":\"84px\",\"paddingBottom\":\"0px\",\"top\":\"170px\"},\"properties\":{\"height\":\"100px\",\"imgStyle\":" +
                "{\"width\":158,\"height\":245,\"marginTop\":\"-43.5px\",\"marginLeft\":\"0px\"},\"width\":\"100px\",\"src\":\"lastbg.jpg\"}},{\"content\":" +
                "\"<div style=\\\"text-align: center;\\\"><br></div>\",\"css\":{\"top\":\"425px\",\"left\":\"72px\",\"zIndex\":\"5\",\"backgroundColor\":" +
                "\"rgba(0,0,0,0.5)\",\"opacity\":1,\"color\":\"#676767\",\"borderWidth\":0,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(0,0,0,1)\"," +
                "\"paddingBottom\":0,\"paddingTop\":0,\"lineHeight\":1,\"borderRadius\":\"22px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":100,\"boxShadow\":" +
                "\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"width\":177,\"height\":25,\"borderBottomRightRadius\":\"22px\"," +
                "\"borderBottomLeftRadius\":\"22px\",\"borderTopRightRadius\":\"22px\",\"borderTopLeftRadius\":\"22px\"},\"id\":26,\"num\":1,\"pageId\":26143278," +
                "\"properties\":{\"width\":177,\"height\":25,\"anim\":{\"type\":0,\"direction\":0,\"duration\":1,\"delay\":0,\"countNum\":1}},\"sceneId\":1301," +
                "\"type\":2},{\"id\":183335729,\"pageId\":26143278,\"sceneId\":1301,\"type\":\"2\",\"content\":\"" +
                "<div style=\\\"text-align: center;\\\"><span style=\\\"font-size: small; line-height: 1; background-color: initial;\\\">" +
                "<a href=\\\"http://xxxxxxxxx\\\" target=\\\"_blank\\\"><font color=\\\"#ffffff\\\">创建一个场景→</font><font color=\\\"#fdea02\\\">XXXXXXXX</font></a>" +
                "</span></div>\",\"css\":{\"borderRadius\":\"0px\",\"borderStyle\":\"solid\",\"height\":\"42\",\"paddingTop\":\"0px\",\"borderColor\":\"rgba(222,220,227,1)\"," +
                "\"zIndex\":\"6\",\"boxShadow\":\"0px 0px 0px rgba(200,200,200,0.6)\",\"color\":\"\",\"backgroundColor\":\"rgba(255,255,255,0)\",\"borderWidth\":\"0px\"," +
                "\"width\":\"320\",\"left\":\"0px\",\"paddingBottom\":\"20px\",\"top\":\"413px\"},\"properties\":" +
                "{\"anim\":{\"type\":0,\"direction\":3,\"duration\":1,\"delay\":0.6,\"countNum\":1}}}]";

        return "{\"success\":true,\"code\":200,\"msg\":\"操作成功\",\"obj\":{\"id\":" + us.getId() + ",\"sceneId\":1301," +
                "\"num\":4,\"name\":null,\"properties\":{\"thumbSrc\":\"" + us.getFilesrcVarchar() + "\"}," +
                "\"elements\":" + json + ",\"scene\":null},\"map\":null,\"list\":null}";
    }

    @Autowired
    private UpfilesysService upfilesysService;

    @ResponseBody
    @RequestMapping(value = "design")//, method = RequestMethod.POST)
    public String design(HttpServletRequest request, HttpServletResponse response,
                         @RequestParam(value = "id", required = false) Integer id
    ) throws ParseException {
        if (id == null) id = 0;

        Scenepage spQuery = new Scenepage();
        spQuery.setId(id + "");
        spQuery.setCreateBy(UserUtils.getUser());
        List<Scenepage> pages = scenepageService.findList(spQuery);
        Scenepage spf = pages.get(0);


        Scene sQuery = new Scene();
        sQuery.setCreateBy(UserUtils.getUser());
        sQuery.setDelFlag("0");
        sQuery.setId(String.valueOf(spf.getSceneidBigint()));
        List<Scene> scenes = sceneService.findList(sQuery);
        Scene sf = scenes.get(0);
        int isTpl = sf.getIsTpl().intValue() > 0 ? sf.getIsTpl().intValue() : 0;
        JSONParser parser = new JSONParser();
        JSONArray ja = (JSONArray) parser.parse(spf.getContentText());
        for (Object k : ja) {
            JSONObject tj = (JSONObject) k;
            tj.put("sceneId", spf.getSceneidBigint());
            tj.put("pageId", id);
        }

        //String contentText = ja.toJSONString();

        JSONObject obj = new JSONObject();
        obj.put("id", spf.getId());
        obj.put("sceneId", spf.getSceneidBigint());
        obj.put("num", spf.getPagecurrentnumInt());
        obj.put("name", null);
        obj.put("properties", spf.getPropertiesText());
        obj.put("elements", ja);
        obj.put("scene", parser.parse(JsonMapper.nonDefaultMapper().toJson(sf)));
        obj.put("isTpl", isTpl);
        obj.put("isPromotion", 0);
        obj.put("status", 1);
        obj.put("openLimit", 0);
        obj.put("submitLimit", 0);
        obj.put("startDate", null);
        obj.put("endDate", null);
        obj.put("accessCode", null);
        obj.put("thirdCode", null);
        obj.put("updateTime", sf.getUpdateDate().getTime());
        obj.put("publishTime", sf.getPublishtime());
        obj.put("applyTemplate", 0);
        obj.put("applyPromotion", 0);
        obj.put("sourceId", null);
        //obj.put("code", sf.getScenecodeVarchar());
        //obj.put("cover", sf.getThumbnailVarchar());
        //obj.put("description", sf.getDescVarchar().replaceAll("\r", "").replaceAll("\n", ""));
        obj.put("sort", 0);
        obj.put("pageCount", 0);
        obj.put("dataCount", 0);


        return success1("success", obj.toJSONString(), null, null);
        //obj.put("showCount", sf.getHitcountInt());

//        JSONObject bgAudiotcc = null;
//        if(!StringUtils.isEmpty(sf.getMusicurlVarchar()))
//        {
//            bgAudiotcc = new JSONObject();
//            bgAudiotcc.put("url", sf.getMusicurlVarchar());
//            bgAudiotcc.put("type", sf.getMusicurlVarchar());
//            obj.put("bgAudio", bgAudiotcc);
//
//        }


//        obj.put("")
//
//       {"id": '.$_scene_list[0]['pageid_bigint'].',"sceneId": '.$_scene_list[0]['sceneid_bigint'].',"num": '.$_scene_list[0]['pagecurrentnum_int'].',"name": null,
//               "properties": '.$_scene_list[0]["properties_text"].',"elements": '.$replaceArray.','.
//        '"scene": {"id": '.$_scene_list2[0]['sceneid_bigint'].',"name": '.json_encode($_scene_list2[0]['scenename_varchar']).'
//               ,"createUser": "'.$_scene_list2[0]['userid_int'].'","createTime": 1425998747000,"type": '.$_scene_list2[0]['scenetype_int'].',
//               "pageMode": '.$_scene_list2[0]['movietype_int'].',"image": {"imgSrc": "'.$_scene_list2[0]['thumbnail_varchar'].'","isAdvancedUser": false';
//        if($_scene_list2[0]['musicurl_varchar']!=''){
//            $jsonstr = $jsonstr.',"bgAudio": {"url": "'.$_scene_list2[0]["musicurl_varchar"].'","type": "'.$_scene_list2[0]["musictype_int"].'"}';
//        }
//        $bgAudiotcc='';
//        if($_scene_list2[0]['musicurl_varchar']!=''){
//            $bgAudiotcc='"bgAudio" :"{\"url\":\"'.$_scene_list2[0]['musicurl_varchar'].'\",\"type\":\"'.$_scene_list2[0]['musictype_int'].'\"}",';
//        }
//
//        $jsonstr = $jsonstr.'},"isTpl": '.$isTpl.',"isPromotion": 0,"status": 1,"openLimit": 0,	"submitLimit": 0,	"startDate": null,	"endDate": null,
//           "accessCode": null,	"thirdCode": null,	"updateTime": 1426038857000,	"publishTime": 1426038857000,	"applyTemplate": 0,	"applyPromotion": 0,
//                   "sourceId": null,	"code": "'.$_scene_list2[0]['scenecode_varchar'].'",
//        "cover": "'.$_scene_list2[0]['thumbnail_varchar'].'",
//                "description": "'.
//        str_replace(array("\r","\n"),array("\\r","\\n"),$_scene_list[0]['desc_varchar']).'",	"sort": 0,"pageCount": 0,	"dataCount": 0,
//           "showCount": '.$_scene_list2[0]['hitcount_int'].', '.$bgAudiotcc.'	"userLoginName": null,"userName": null,"promIds":null}},	"map": null,"list": null}';
//        echo $jsonstr;
//
//
//
//        return "\n" +
//                "{\"success\": true,\"code\": 200,\"msg\": \"success\",\"obj\": {\"id\": 24729,\"sceneId\": 8831324,\"num\": 1,\"name\": null,\"properties\": null,\"elements\": [{\"content\":\"\",\"css\":{\"top\":-19,\"left\":-232.59375,\"zIndex\":\"1\",\"width\":787,\"height\":524,\"backgroundColor\":\"\",\"opacity\":1,\"color\":\"#676767\",\"borderWidth\":0,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(0,0,0,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"lineHeight\":1,\"borderRadius\":\"0px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":0,\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"borderBottomRightRadius\":\"0px\",\"borderBottomLeftRadius\":\"0px\",\"borderTopRightRadius\":\"0px\",\"borderTopLeftRadius\":\"0px\"},\"id\":5755598918,\"num\":1,\"pageId\":\"24729\",\"properties\":{\"width\":787,\"height\":524,\"src\":\"syspic\\/page\\/yq0KXVZNWHmAD3UAAAA4xP2ljkY389.jpg\",\"id\":123436312,\"imgStyle\":{\"width\":786,\"height\":524,\"marginTop\":\"0px\",\"marginLeft\":\"0px\"}},\"sceneId\":\"8831324\",\"type\":4},{\"content\":\"\",\"css\":{\"top\":165,\"left\":54,\"zIndex\":\"2\",\"color\":\"rgba(85,85,85,0)\",\"width\":211,\"height\":211,\"backgroundColor\":\"\",\"opacity\":1,\"borderWidth\":2,\"borderStyle\":\"dashed\",\"borderColor\":\"rgba(255,255,255,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"lineHeight\":1,\"borderRadius\":\"115px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":67,\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"borderBottomRightRadius\":\"115px\",\"borderBottomLeftRadius\":\"115px\",\"borderTopRightRadius\":\"115px\",\"borderTopLeftRadius\":\"115px\"},\"id\":922125,\"pageId\":\"24729\",\"properties\":{\"type\":\"circle\",\"viewBox\":\"0 0 64 64\",\"width\":211,\"height\":211,\"anim\":[{\"type\":4,\"direction\":0,\"duration\":1,\"delay\":0.4,\"countNum\":1},{\"type\":7,\"direction\":0,\"duration\":8,\"delay\":0,\"countNum\":1,\"count\":true,\"linear\":\"1\"}]},\"sceneId\":\"8831324\",\"type\":\"h\"},{\"content\":\"\",\"css\":{\"top\":382,\"left\":-233,\"zIndex\":\"3\",\"width\":786,\"height\":202,\"backgroundColor\":\"\",\"opacity\":1,\"color\":\"#676767\",\"borderWidth\":0,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(0,0,0,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"lineHeight\":1,\"borderRadius\":\"0px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":0,\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"borderBottomRightRadius\":\"0px\",\"borderBottomLeftRadius\":\"0px\",\"borderTopRightRadius\":\"0px\",\"borderTopLeftRadius\":\"0px\"},\"id\":1362612756,\"num\":1,\"pageId\":\"24729\",\"properties\":{\"width\":786,\"height\":202,\"src\":\"syspic\\/page\\/yq0KXlZNW--AV5WqAAbkwcmQWtE136.png\",\"id\":123446784,\"imgStyle\":{\"width\":789,\"height\":202,\"marginTop\":\"0px\",\"marginLeft\":\"-1.5px\"},\"anim\":[{\"type\":4,\"direction\":3,\"duration\":2,\"delay\":0,\"countNum\":1}]},\"sceneId\":\"8831324\",\"type\":4},{\"content\":\"\",\"css\":{\"top\":173,\"left\":63,\"zIndex\":\"4\",\"color\":\"rgba(85,85,85,0)\",\"width\":195,\"height\":195,\"backgroundColor\":\"\",\"opacity\":1,\"borderWidth\":1,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(255,255,255,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"lineHeight\":1,\"borderRadius\":\"107px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":61,\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"borderBottomRightRadius\":\"107px\",\"borderBottomLeftRadius\":\"107px\",\"borderTopRightRadius\":\"107px\",\"borderTopLeftRadius\":\"107px\"},\"id\":8499475487,\"pageId\":\"24729\",\"properties\":{\"type\":\"circle\",\"viewBox\":\"0 0 64 64\",\"anim\":[{\"type\":4,\"direction\":0,\"duration\":1,\"delay\":0.6,\"countNum\":1}],\"width\":195,\"height\":195},\"sceneId\":\"8831324\",\"type\":\"h\"},{\"content\":\"\",\"css\":{\"top\":43,\"left\":79,\"zIndex\":\"5\",\"width\":162,\"height\":92,\"backgroundColor\":\"\",\"opacity\":1,\"color\":\"#676767\",\"borderWidth\":0,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(0,0,0,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"lineHeight\":1,\"borderRadius\":\"0px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":0,\"borderBottomRightRadius\":\"0px\",\"borderBottomLeftRadius\":\"0px\",\"borderTopRightRadius\":\"0px\",\"borderTopLeftRadius\":\"0px\",\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0},\"id\":1673297287,\"num\":1,\"pageId\":\"24729\",\"properties\":{\"width\":162,\"height\":92,\"src\":\"syspic\\/page\\/yq0KXVZNX_yAK-1DAAAjsDS6bcw917.svg\",\"id\":123461083,\"imgStyle\":{\"width\":162,\"height\":92,\"marginTop\":\"0px\",\"marginLeft\":\"0px\"},\"anim\":[{\"type\":1,\"direction\":1,\"duration\":1,\"delay\":0.4,\"countNum\":1}]},\"sceneId\":\"8831324\",\"type\":4},{\"content\":\"<div style=\\\"text-align: center;\\\"><span style=\\\"font-size: 18px; line-height: 21.6px;\\\">2016\\u4e92\\u8054\\u7f51\\u5927\\u4f1a<\\/span><\\/div><div style=\\\"text-align: center;\\\"><span style=\\\"color: inherit; line-height: inherit; font-size: 13px; background-color: initial;\\\">2015.11.24 \\u4e0b\\u5348 | \\u5317\\u4eac&nbsp;<\\/span><\\/div>\",\"css\":{\"top\":270,\"left\":0.328125,\"zIndex\":\"6\",\"width\":320,\"height\":70,\"lineHeight\":\"1.2\",\"backgroundColor\":\"\",\"opacity\":1,\"color\":\"rgba(255,255,255,1)\",\"borderWidth\":0,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(0,0,0,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"borderRadius\":\"0px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":0,\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"borderBottomRightRadius\":\"0px\",\"borderBottomLeftRadius\":\"0px\",\"borderTopRightRadius\":\"0px\",\"borderTopLeftRadius\":\"0px\"},\"id\":2791335462,\"num\":1,\"pageId\":\"24729\",\"properties\":{\"width\":320,\"height\":44,\"anim\":[{\"type\":4,\"direction\":0,\"duration\":2,\"delay\":0.8,\"countNum\":1}]},\"sceneId\":\"8831324\",\"type\":\"2\"},{\"content\":\"\",\"css\":{\"top\":270,\"left\":63,\"zIndex\":\"7\",\"color\":\"rgba(255,255,255,1)\",\"width\":195,\"height\":1,\"backgroundColor\":\"\",\"opacity\":1,\"borderWidth\":0,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(0,0,0,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"lineHeight\":1,\"borderRadius\":\"0px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":0,\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"borderBottomRightRadius\":\"0px\",\"borderBottomLeftRadius\":\"0px\",\"borderTopRightRadius\":\"0px\",\"borderTopLeftRadius\":\"0px\"},\"id\":5945381369,\"pageId\":\"24729\",\"properties\":{\"type\":\"rect\",\"viewBox\":\"0 0 64 64\",\"anim\":[{\"type\":4,\"direction\":0,\"duration\":1,\"delay\":1.2,\"countNum\":1}],\"width\":195,\"height\":1},\"sceneId\":\"8831324\",\"type\":\"h\"},{\"content\":\"<div style=\\\"text-align: center;\\\"><span style=\\\"color: inherit; line-height: inherit; font-size: 48px; background-color: initial;\\\">\\u65b0\\u65f6\\u4ee3<\\/span><\\/div>\",\"css\":{\"top\":201,\"left\":0,\"zIndex\":\"8\",\"width\":320,\"height\":62,\"lineHeight\":1,\"backgroundColor\":\"\",\"opacity\":1,\"color\":\"rgba(255,255,255,1)\",\"borderWidth\":0,\"borderStyle\":\"solid\",\"borderColor\":\"rgba(0,0,0,1)\",\"paddingBottom\":0,\"paddingTop\":0,\"borderRadius\":\"0px\",\"transform\":\"rotateZ(0deg)\",\"borderRadiusPerc\":0,\"boxShadow\":\"0px 0px 0px rgba(0,0,0,0.5)\",\"boxShadowDirection\":0,\"boxShadowSize\":0,\"borderBottomRightRadius\":\"0px\",\"borderBottomLeftRadius\":\"0px\",\"borderTopRightRadius\":\"0px\",\"borderTopLeftRadius\":\"0px\"},\"id\":2418527313,\"num\":1,\"pageId\":\"24729\",\"properties\":{\"anim\":[{\"type\":4,\"direction\":0,\"duration\":2,\"delay\":0.6,\"countNum\":1}]},\"sceneId\":\"8831324\",\"type\":\"2\"}],\"scene\": {\"id\": 8831324,\"name\": \"test\",\"createUser\": \"1\",\"createTime\": 1425998747000,\"type\": 101,\"pageMode\": 0,\"image\": {\"imgSrc\": \"default_thum.jpg\",\"isAdvancedUser\": false},\"isTpl\": 0,\"isPromotion\": 0,\"status\": 1,\"openLimit\": 0,\t\"submitLimit\": 0,\t\"startDate\": null,\t\"endDate\": null,\t\"accessCode\": null,\t\"thirdCode\": null,\t\"updateTime\": 1426038857000,\t\"publishTime\": 1426038857000,\t\"applyTemplate\": 0,\t\"applyPromotion\": 0,\t\"sourceId\": null,\t\"code\": \"U707787E47\", \n" +
//                "\t\t\t\"cover\": \"default_thum.jpg\",\n" +
//                "\t\t\t\"description\": \"\",\t\"sort\": 0,\"pageCount\": 0,\t\"dataCount\": 0,\t\"showCount\": 2, \t\"userLoginName\": null,\"userName\": null,\"promIds\":null}},\t\"map\": null,\"list\": null}\n";
//    }
    }


    @RequestMapping(value = "saveSettings", headers = "Content-Type=application/json")//, method = RequestMethod.POST)
    @ResponseBody
    public String saveSettings(@RequestBody String postData) throws ParseException {
        JSONParser parse = new JSONParser();
        JSONObject datas = (JSONObject) parse.parse(postData);
        Scene data = sceneService.get(datas.get("id").toString());

         if(datas.get("property") != null){
        data.setProperty(datas.get("property").toString());
         }else{
             data.setProperty("null");
         }

         data.setLoadinglogo( (String)ObjectUtils.defaultIfNull(datas.get("loadinglogo") , null));
        data.setScenenameVarchar(datas.get("name").toString());
        data.setScenetypeInt((Integer.parseInt(datas.get("type").toString())));
        data.setMovietypeInt( Integer.parseInt( datas.get("pageMode").toString()));
       // JSONObject img = (JSONObject) datas.get("image");
        data.setThumbnailVarchar(datas.get("cover").toString());
        data.setDescVarchar((String)datas.get("description"));
        data.setHbcode((String) datas.get("hbcode"));
        if(datas.get("lastPageId") != null  )
            data.setLastpageid(Long.valueOf(datas.get("lastPageId").toString()));

        data.setApplypromotion(Integer.valueOf(datas.get("applyPromotion").toString()));
        data.setAccesscodeVarchar((String) datas.get("accessCode"));
        data.setApplytemplate(Integer.valueOf(datas.get("applyTemplate").toString()));
        data.setIsShow(Integer.valueOf(datas.get("isShow").toString()));
        data.setMusicurlVarchar((String)datas.get("bgAudioUrl"));
        if(datas.get("tagId") != null)
         data.setTagidInt(Integer.valueOf(datas.get("tagId").toString()));

        sceneService.save(data);


//        json_encode(array("success" => true,
//                "code"=> 200,
//                "msg" => $m_scene."success".$datainfo['scenename_varchar'].'音乐:'.$music['url'],
//                "obj"=> $result1,
//                "map"=> null,
//                "list"=> null
//        )
//        );
return success1("success" + data.getScenenameVarchar() + "音乐:" + data.getMusicurlVarchar(), null, null, null);
//
//        $datainfo['applyPromotion'] = $datas['applyPromotion'];
//        $datainfo['accessCode'] = $datas['accessCode'];
//        $datainfo['applyTemplate'] = $datas['applyTemplate'];
//        $datainfo['price'] = $datas['price'];
//        $datainfo['is_show'] = $datas['isShow'];
//        $music = json_decode($datas['bgAudio'],true);
//
//
//
//        $datainfo['musicurl_varchar'] = $music['url'];
//
//
//        $datainfo['tagid_int'] = $datas['tagId'] ? intval($datas['tagId']) :0;
//
//        $where['userid_int'] = session('userid');



    }



    @ResponseBody
    @RequestMapping(value = "sysPageInfo")//, method = RequestMethod.POST)
    public String sysPageInfo(HttpServletRequest request, HttpServletResponse response,
                       @RequestParam(value = "id", required = false) Integer id){
        ScenePageSys sps = scenePageSysService.get(String.valueOf(id));

        return success4("success", sps, null, null, null);

//        $this->unlogin();
//        $_scene = M('scenepagesys');
//        $scenetype = intval(I('get.id',0));
//        $where['pageid_bigint']  = $scenetype;
//        $_scene_list=$_scene->where($where)->select();
//        $jsonstr = '{"success":true,"code":200,"msg":"success","obj":{"id":'.$_scene_list[0]['pageid_bigint'].',"sceneId":1,
//        "num":1,"name":"sys","properties":{"thumbSrc":"'.$_scene_list[0]['thumbsrc_varchar'].'"},
//        "elements":'.$_scene_list[0]['content_text'].',"scene":null},"map":null,"list":null}';
//        echo $jsonstr;
    }

//    @ResponseBody
//    @RequestMapping(value = "sysPageTpl")//, method = RequestMethod.POST)
//    public String sysPageTpl(HttpServletRequest request, HttpServletResponse response,
//                              @RequestParam(value = "tagId", required = false) Integer tagId){
//
//        ScenePageSys sps = new ScenePageSys();
//
//    }
//    public function syspagetpl(){
//        $this->unlogin();
//        $_scene = M('scenepagesys');
//        $scenetype = I('post.tagId',0);
//        $name = I('post.name',0);
//        $scenetype = explode(',', $scenetype);
//        $c = count($scenetype);
//        if($name != null){
//            $where['pagename_varchar'] = array('like','%'.$name.'%');
//        }
//        if($c == 1){
//            $where['tagid_int'] = array('like','%'.$scenetype[0].'%');
//        }else if($c == 2){
//            $where['tagid_int'] = array('like',array('%'.$scenetype[0].'%','%'.$scenetype[1].'%'),'AND');
//        }else if($c == 3){
//            $where['tagid_int'] = array('like',array('%'.$scenetype[0].'%','%'.$scenetype[1].'%','%'.$scenetype[2].'%'),'AND');
//        }
//        $count = $_scene->where($where)->order('eqid_int desc')->count();
//        $_scene_list=$_scene->where($where)->order('eqid_int desc')->page(I('post.pageNo',1),I('post.pageSize',21))->select();
//        //
//        $jsonstr = '{"success":true,"code":200,"msg":"success","obj":null,"map":{"count":'.$count.',"pageNo":'.I('post.pageNo',1).',"pageSize":'.I('post.pageSize',21).'},"list": [';
//        $jsonstrtemp = '';
//        foreach($_scene_list as $vo){
//            $jsonstrtemp = $jsonstrtemp .'{"id":'.$vo["pageid_bigint"].',"sceneId":1,"num":1,"name":"'.$vo["pagename_varchar"].'","properties":{"thumbSrc":"'.$vo["thumbsrc_varchar"].'"},"elements":null,"scene":null},';
//        }
//        $jsonstr = $jsonstr.rtrim($jsonstrtemp,',').']}';
//        echo $jsonstr;
//    }


    @ResponseBody
    @RequestMapping(value = "view")//, method = RequestMethod.POST)
    public String view(HttpServletRequest request, HttpServletResponse response,
                       @RequestParam(value = "priview", required = false) Integer preview,
                       @RequestParam(value = "id", required = false) String id,
                       @RequestParam(value = "password", required = false) String password,
                       @RequestParam(value = "fromht", required = false) Long fromht
    ) {

        Scene sceneQuery = new Scene();
        if (preview == null) preview = 0;
        if (id == null) id = "0";

        try {
            long sid = Long.parseLong(id);
            sceneQuery.setId(sid + "");
        } catch (Exception ex) {
            sceneQuery.setScenecodeVarchar(id);
        }

        sceneQuery.setDelFlag("0");
        Scene scene = sceneService.findList(sceneQuery).get(0);

        password = StringUtils.defaultString(password, "");
        if (!StringUtils.isEmpty(scene.getAccesscodeVarchar())) {
            if (!password.equals(scene.getAccesscodeVarchar())) {
                return failed(1004, "服务器异常", null, null, null, null);
            }
        }

        Scenepage pageQuery = new Scenepage();
        pageQuery.setSceneidBigint(scene.getSceneidBigint());
        pageQuery.setCreateBy(scene.getCreateBy());
        pageQuery.getPage().setOrderBy("pagecurrentnum_int asc");
        List<Scenepage> pages = scenepageService.findList(pageQuery);
        scene.setLastpageid(scene.getLastpageid() != null ? scene.getLastpageid() : 0);
        //String accessCode = StringUtils.isEmpty(scene.getAccesscode()) ? "\"accessCode\": null," :
        // "\"accessCode\": \"'.$_scene_list2[0]['accesscode'].'\",";

        return success4("success", scene, null, pages, null);


    }

    @ResponseBody
    @RequestMapping(value = "createPage")//, method = RequestMethod.POST)
    public String createPage(HttpServletRequest request, HttpServletResponse response,
                             @RequestParam(value = "id", required = false) Long id,
                             @RequestParam(value = "longPage", required = false) Integer longPage,
                             @RequestParam(value = "copy", required = false) Boolean copy
    ) {
        Scenepage scenePageQuery = new Scenepage();
        Scene scene = new Scene();
        Scenepage scenePage = Scenepage.newDefault();
        if (longPage == null) longPage = 0;

        scenePageQuery.setId(String.valueOf(id));
        List<Scenepage> sps = scenepageService.findList(scenePageQuery);

        Scenepage fs = sps.get(0);

        int pageNumY = sps.get(0).getPagecurrentnumInt();

        scenePage.setScenecodeVarchar(fs.getScenecodeVarchar());
        scenePage.setSceneidBigint(fs.getSceneidBigint());
        scenePage.setPagecurrentnumInt(pageNumY + 1);
        scenePage.setCreateBy(UserUtils.getUser());

        if (copy != null && copy) {
            scenePage.setContentText(fs.getContentText());
            scenePage.setPropertiesText(fs.getPropertiesText());
            scenePage.setPagenameVarchar(!StringUtils.isEmpty(fs.getPagenameVarchar()) ? "副本-" + fs.getPagenameVarchar() : "副本-第" + pageNumY + "页");

        } else {
            scenePage.setContentText("[]");
            scenePage.setPropertiesText("{}");
            if (longPage != null && longPage.intValue() > 0) {
                scenePage.setPropertiesText("{\"longPage\":" + longPage + "}");
            }
        }
        scenePage.setIsNewRecord(true);
        scenepageService.save(scenePage);

        scenePageQuery = new Scenepage();
        scenePageQuery.setSceneidBigint(fs.getSceneidBigint());
        scenePageQuery.setCreateBy(UserUtils.getUser());
        List<Scenepage> photoList = scenepageService.query1(scenePageQuery);
        for (Scenepage st : photoList) {
            int sort = st.getPagecurrentnumInt() + 1;
            Scenepage sp = scenepageService.get(st.getId());
            sp.setPagecurrentnumInt(sort);
            scenepageService.save(sp);

        }

        Scene sceneQuery = new Scene();
        scenePageQuery.setId(fs.getSceneidBigint() + "");
        scenePageQuery.setCreateBy(UserUtils.getUser());
        List<Scene> list2 = sceneService.findList(sceneQuery);

        Scene s = list2.get(0);


        String obj = "{\n" +
                "\"id\": " + scenePage.getId() + ",\n" +
                "\"sceneId\": " + fs.getSceneidBigint() + ",\n" +
                "\"num\": " + (fs.getPagecurrentnumInt() + 1) + ",\n" +
                "\"name\": null,\n" +
                "\"properties\": " + fs.getPropertiesText() + ",\n" +
                "\"elements\": null,\n" +
                "\"scene\": " + JsonMapper.nonDefaultMapper().toJson(s) + ",\n" +
                "\"isTpl\": 0,\n" +
                "\"isPromotion\": 0,\n" +
                "\"status\": " + s.getShowstatusInt() + ",\n" +
                "\"openLimit\": 0,\n" +
                "\"submitLimit\": 0,\n" +
                "\"startDate\": null,\n" +
                "\"endDate\": null,\n" +
                "\"accessCode\": null,\n" +
                "\"thirdCode\": null,\n" +
                //"\"updateTime\": 1426039827000,\n" +
                //"\"publishTime\": 1426039827000,\n" +
                "\"applyTemplate\": 0,\n" +
                "\"applyPromotion\": 0,\n" +
                "\"sourceId\": null,\n" +
                "\"code\": \"" + s.getScenecodeVarchar() + "\",\n" +
                "\"description\": \"\",\n" +
                "\"sort\": 0,\n" +
                "\"pageCount\": 0,\n" +
                "\"dataCount\": 0,\n" +
                "\"showCount\": 0, \n" +
                "\"userLoginName\": null,\n" +
                "\"userName\": null\n" +
                "}\n";


        return success1("success", obj, null, null, "\"iscopy\":\"" + copy + "-----" + id + "\"");


    }

    @ResponseBody
    @RequestMapping(value = "pageList")//, method = RequestMethod.POST)
    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
    public String pageList(HttpServletRequest request, HttpServletResponse response,
                           @RequestParam(value = "id", required = false) Integer id) {
        int sceneId = id.intValue();

        if (sceneId == 1100 || sceneId == 1101 || sceneId == 1102 || sceneId == 1103) {
            ScenePageSys sps = new ScenePageSys();
            sps.setSceneidBigint(Long.valueOf(sceneId));

            sps.getPage().setOrderBy("pagecurrentnum_int asc");
            List<ScenePageSys> list = scenePageSysService.findList(sps);

            return success("success", null, null, list);

        } else {
            Scenepage sp = new Scenepage();
            sp.setSceneidBigint(Long.valueOf(id));
            sp.setMytyplId(0);
            //sp.setC(Long.valueOf(UserUtils.getUser().getId()));
            sp.getPage().setOrderBy("pagecurrentnum_int asc");
            List<Scenepage> list = scenepageService.findList(sp);

            return success1("success", null, null, list);

        }

        // return "{\"success\":true,\"code\":200,\"msg\":\"success\",\"obj\":null,\"map\":null,\"list\":[{\"id\":24729,\"sceneId\":8831324,\"num\":1,\"name\":\"\",\"properties\":null,\"elements\":null,\"scene\":null}]}\n}";
    }


    @Autowired
    SceneService sceneService;

    @Autowired
    ScenepageService scenepageService;


    @ResponseBody
    @RequestMapping(value = "createByCopy")//, method = RequestMethod.POST)
    public String createByCopy(HttpServletRequest request, HttpServletResponse response,
                               @RequestParam(value = "id", required = false) Long id) {
        String ip = NetworkUtils.getClientIpAddr(request);
        return success("操作成功", sceneService.addSceneByCopy(id, ip), null);
    }

    @ResponseBody
    @RequestMapping(value = "on")//, method = RequestMethod.POST)
    public String on(
            @RequestParam(value = "id", required = false) Long id
    ) {

        Scene scene = new Scene();
        scene.setId(id + "");

        scene.setCreateBy(UserUtils.getUser());

        Scene s = sceneService.findList(scene).get(0);
        s.setShowstatusInt(1);
        sceneService.save(s);
        return success("success", id, null);
    }

    @ResponseBody
    @RequestMapping(value = "off")//, method = RequestMethod.POST)
    public String off(
            @RequestParam(value = "id", required = false) Long id
    ) {

        Scene scene = new Scene();
        scene.setId(id + "");

        scene.setCreateBy(UserUtils.getUser());

        Scene s = sceneService.findList(scene).get(0);
        s.setShowstatusInt(0);
        sceneService.save(s);
        return success("success", id, null);
    }


    @ResponseBody
    @RequestMapping(value = "publish")//, method = RequestMethod.POST)
    public String publish(
            @RequestParam(value = "id", required = false) Long id
    ) {

        Scene scene = new Scene();
        scene.setId(id + "");

        scene.setCreateBy(UserUtils.getUser());

        Scene s = sceneService.findList(scene).get(0);

        s.setPublishtime((int) new Date().getTime());
        sceneService.save(s);
        return success("success", id, null);
    }


    @ResponseBody
    @RequestMapping(value = "savePage")//, method = RequestMethod.POST)
    public String savePage(
            @RequestParam(value = "id", required = false) Long id
    ) {
        return null;
    }


    //id=1510229&type=101&pageMode=2&expdType=0&price=
    @ResponseBody
    @RequestMapping(value = "createBySys")//, method = RequestMethod.POST)
    public String createBySys(HttpServletRequest request, HttpServletResponse response,
                         @RequestParam(value = "id", required = false) Long id,
                              @RequestParam(value = "name", required = false) String name,
                         @RequestParam(value = "type", required = false) Integer type,
                         @RequestParam(value = "pageMode", required = false) Integer pageMode,
                              @RequestParam(value = "hbpdType", required = false) Integer hbpdType
                              ) {
        String ip = NetworkUtils.getClientIpAddr(request);

        long sid = sceneService.addSceneBySys(id, name, type, pageMode, hbpdType, ip);


        return success1("success", sid, null, null);
    }


    @ResponseBody
    @RequestMapping(value = "create")//, method = RequestMethod.POST)
    public String create(HttpServletRequest request, HttpServletResponse response,
                         @RequestParam(value = "name", required = false) String name,
                         @RequestParam(value = "type", required = false) Integer type,
                         @RequestParam(value = "pageMode", required = false) Integer pageMode) {


        String ip = NetworkUtils.getClientIpAddr(request);

        long sid = sceneService.addScene(name, type, pageMode, ip);


        return success1("success", sid, null, null);
    }


    @ResponseBody
    @RequestMapping(value = "detail")//, method = RequestMethod.POST)
    public String sysList(HttpServletRequest request, HttpServletResponse response,
                          @RequestParam(value = "id", required = false) Integer id) {
        Scene s = sceneService.get(id);

        return success("success", JsonMapper.nonDefaultMapper().toJson(s), null, null);
//        return "{\n" +
//                "\"success\": true,\n" +
//                "\"code\": 200,\n" +
//                "\"msg\": \"success\",\n" +
//                "\"obj\": {\n" +
//                "\"id\": " + s.getId() +",\n" +
//                "\"name\": \"" + s.getScenenameVarchar() +"\",\n" +
//                "\"createUser\": \"" + s.get +"\",\n" +
//                "\"createTime\": \"1469621922000\",\n" +
//                "\"type\": 101,\n" +
//                "\"pageMode\": 0,\n" +
//                "\"eqcode\": \"\",\n" +
//                "\"cover\": \"default_thum.jpg\",\n" +
//                "\"property\":\"{\\\"triggerLoop\\\":true,\\\"slideNumber\\\":true,\\\"autoFlipTime\\\":3,\\\"shareDes\\\":\\\"\\\",\\\"eqAdType\\\":1,\\\"hideEqAd\\\":false}\",\n" +
//                "\n" +
//                "\"image\": {\n" +
//                "\"imgSrc\": \"default_thum.jpg\",\n" +
//                "\"isAdvancedUser\": 0,\n" +
//                "                    \"lastPageId\":0,\n" +
//                "                    \"hideEqAd\":0},\n" +
//                "\"isTpl\": 0,\n" +
//                "\"isPromotion\": 0,\n" +
//                "\"isShow\": 0,\n" +
//                "\"status\": 1,\n" +
//                "\"tagId\"   : 0,\n" +
//                "\"openLimit\": 0,\n" +
//                "\"submitLimit\": 0,\n" +
//                "\"startDate\": null,\n" +
//                "\"endDate\": null,\n" +
//                "\"accessCode\": null, \n" +
//                "\"loadingLogo\": null,\n" +
//                "\"thirdCode\": null,\n" +
//                "\"updateTime\": \"2016-07-28 15:07\",\n" +
//                "\"publishTime\": 1469690169,\n" +
//                "\"price\": 0,\n" +
//                "\"applyTemplate\": 0,\n" +
//                "\"applyPromotion\": 0,\n" +
//                "\"sourceId\": null,\n" +
//                "\"code\": \"U707787E47\",\n" +
//                "\"description\":\"\",\n" +
//                "\"sort\": 0,\n" +
//                "\"bgAudio\": {\n" +
//                "\"url\": \"\",\n" +
//                "\"type\": \"3\"\n" +
//                "},\n" +
//                "\"pageCount\": 0,\n" +
//                "\"dataCount\": 0,\n" +
//                "\"showCount\": 2,\n" +
//                "\"userLoginName\": null,\n" +
//                "\"userName\": null\n" +
//                "},\n" +
//                "\"map\": null,\n" +
//                "\"list\": null\n" +
//                "}\n";
    }

//    @ResponseBody
//    @RequestMapping(value = "detail")//, method = RequestMethod.POST)
//    public String sysList(HttpServletRequest request, HttpServletResponse response,
//                          @RequestParam(value = "id", required = false) Integer id){
//
//        Scene s = new Scene();
//        s.setDelFlag("0");
//        s.setId(id.toString());
//        s = sceneService.findList(s).get(0);
//       if(s.getLastpageid() < 0) s.setLastpageid(0L);
//        Date updateTime = s.getCreateDate();
//        if(s.getUpdateDate() != null)
//            updateTime = s.getUpdateDate();
//
//        Integer publishTime = s.getPublishtime();
//
//
//        String jsonstr_property= "";
//        if(s.getProperty() != null){
//            String property= s.getProperty().replace("\"", "\\");
//            jsonstr_property ="\"property\":\"" + property +"\",";
//        }
//
//
//
//    }

    //
    @ResponseBody
    @RequestMapping(value = "sysList")//, method = RequestMethod.POST)
    public String sysList(HttpServletRequest request, HttpServletResponse response,
                          @RequestParam(value = "tplType", required = false) Integer tplType,
                          @RequestParam(value = "bizType", required = false) Integer bizType,
                          @RequestParam(value = "tagId", required = false) Integer tagId,
                          @RequestParam(value = "order", required = false) Integer order,
                          @RequestParam(value = "freeTplSetting", required = false) Integer freeTplSetting,
                          @RequestParam(value = "name", required = false) String name,
                          @RequestParam(value = "createUser", required = false) String createUser,
                          @RequestParam(value = "pageNo", required = false) Integer pageNo,
                          @RequestParam(value = "pageSize", required = false) Integer pageSize
    ) {


        Scene scene = new Scene();
        int sceneType = 0;
        if (tagId != null) sceneType = tagId;
        if (sceneType > 0) scene.setTagidInt(sceneType);

        scene.setScenenameVarchar(name);
        scene.setIsTpl(1);
        scene.setDelFlag("0");
        scene.getPage().setOrderBy("rank desc, updateTime desc, sceneid_bigint desc");
        if (order != null) {
            scene.getPage().setOrderBy(("hot".equals(order)) ? "usecount_int DESC " : "sceneid_bigint desc");
        }
//        scene.getPage().setPageNo(pageNo);
//        scene.getPage().setPageSize(pageSize);

        Page<Scene> sceneList = sceneService.findPage(new Page<Scene>(request, response), scene);

        return success("success", null, sceneList);


//            return "\n" +
//                    "{\"success\":true,\"code\":200,\"msg\":\"success\",\"obj\":null,\"map\": {\"count\": 262,\"pageNo\": " + pageNo + ",\"pageSize\": " + pageSize +"},\"list\": [{\n" +
//                    "            \"id\": 8831291,\n" +
//                    "            \"name\": \"\\u6691\\u671f\\u56fd\\u5185\\u51fa\\u5883\\u65c5\\u6e38\\u7ebf\\u8def\\u63a8\\u8350\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/scene/!508x508a94a0\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/c2542f8e7f194f399f2fba22026feac5.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/scene/!508x508a94a0\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 0,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"S7073EPT4N\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4715294,\n" +
//                    "            \"name\": \"\\u518d\\u89c1\\u9ec4\\u5bb6\\u9a79\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1U5okeAP0h0AABVbvK4o2k266.png\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1U5oheAY-9hACxE-P1yTgg082.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1U5okeAP0h0AABVbvK4o2k266.png\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 0,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"q50D2iDa\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 11,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4707597,\n" +
//                    "            \"name\": \"4.19\\uff0c\\u7559\\u592b\\u9e2d\\u6ee1\\u8db3\\u4f60\\u5bf9\\u9e2d\\u7684\\u6700\\u7ec8\\u5e7b\\u60f3\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1UzUeyAZ-csAAHrraZjNDQ921.png\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1UzfO-AUsjrABzPo4F-nqM757.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1UzUeyAZ-csAAHrraZjNDQ921.png\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"aW2oj593\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 1,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4702404,\n" +
//                    "            \"name\": \"\\u6052\\u8fd0\\u6e14\\u6751\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 1,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1UVAOOAXEnzAACjfnf0TBQ890.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1RHT4yALBHkAAu6cgPwKSM835.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1UVAOOAXEnzAACjfnf0TBQ890.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"IQSes5Kc\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4674058,\n" +
//                    "            \"name\": \"\\u62c9\\u65af\\u7ef4\\u52a0\\u65af\\u7ec8\\u6781\\u6d6a\\u6f2b\\u5a5a\\u793c\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 1,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1UTW0KATlMPAAKP3giFJ-k453.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1UZGm6AVGoJAAsWYDhjMpo542.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1UTW0KATlMPAAKP3giFJ-k453.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"Ph5fUpSj\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4671176,\n" +
//                    "            \"name\": \"\\u4e2d\\u8bad\\u4f18+\\u7f8e\\u672f\\u753b\\u5ba4king\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1UaTViAZ_6bAALXQpC9B0w204.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1UaTViAZ_6bAALXQpC9B0w204.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"TfXTOF8e\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4670953,\n" +
//                    "            \"name\": \"\\u6280\\u80fd\\u57f9\\u8bad\\u4e13\\u4e1a-\\u4e2d\\u8bad\\u804c\\u4e1a\\u5b66\\u6821\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 1,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1U3W0OAMgUlAAOwKO5IV1g288.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1U3W0OAMgUlAAOwKO5IV1g288.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"zC8q78Sa\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4664811,\n" +
//                    "            \"name\": \"\\u666f\\u81f4\\u5bb6<\\u5bfb\\u627e\\u5408\\u4f19\\u4eba>\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1U2GGqAPHajAACScwf2Xec686.png\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KBFU0xpSADJu_ACPQXuNFNVU737.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1U2GGqAPHajAACScwf2Xec686.png\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"utpLbq1N\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4661846,\n" +
//                    "            \"name\": \"\\u6590\\u8baf\\u5b66\\u9662\\u5b63\\u520a-2015.4\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1ULvzSARLEQAADYl8TJs-w695.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1Uc5JuAa8oiACvVbfQNFSI799.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1ULvzSARLEQAADYl8TJs-w695.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"KHRVNp7G\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4661771,\n" +
//                    "            \"name\": \"\\u591f\\u89c6\\u89c9\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1Uvd8WARxW9AAFbN0MIly8156.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1UvhWqAC544ABEr8pVWWl8643.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1Uvd8WARxW9AAFbN0MIly8156.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"8hM06IzY\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4661620,\n" +
//                    "            \"name\": \"\\u6c89\\u6e4e\\u4f5b\\u5149\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1UGVHWAdtj_AAWoJ9uSU_8209.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1UEAzSANsg2ACfUFyjNQxg287.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1UGVHWAdtj_AAWoJ9uSU_8209.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"jtiGHLi3\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        },{\n" +
//                    "            \"id\": 4655365,\n" +
//                    "            \"name\": \"\\u5343\\u5e74\\u53e4\\u6811\\u5c0f\\u9f99\\u73e0\",\n" +
//                    "            \"createUser\": \"0\",\n" +
//                    "            \"createTime\": 1423645519000,\n" +
//                    "            \"type\": 101,\n" +
//                    "            \"pageMode\": 0,\n" +
//                    "\"price\":0,\n" +
//                    "\"cover\": \"syspic/pageimg/yq0KA1U3GM6Ae_t5AAK3cf5qvxs664.jpg\",\n" +
//                    "            \"image\": {\n" +
//                    "                \"bgAudio\": {\n" +
//                    "                    \"url\": \"syspic/mp3/yq0KA1UzwxSAU7AKAC8DQVoar28168.mp3\",\n" +
//                    "                    \"type\": \"3\"\n" +
//                    "                },\n" +
//                    "                \"imgSrc\": \"syspic/pageimg/yq0KA1U3GM6Ae_t5AAK3cf5qvxs664.jpg\",\n" +
//                    "                \"hideEqAd\": false,\n" +
//                    "                \"isAdvancedUser\": false\n" +
//                    "            },\n" +
//                    "            \"isTpl\": 1,\n" +
//                    "            \"isPromotion\": 0,\n" +
//                    "            \"status\": 1,\n" +
//                    "            \"openLimit\": 0,\n" +
//                    "            \"submitLimit\": 0,\n" +
//                    "            \"startDate\": null,\n" +
//                    "            \"endDate\": null,\n" +
//                    "            \"accessCode\": null,\n" +
//                    "            \"thirdCode\": null,\n" +
//                    "            \"updateTime\": 1423645519000,\n" +
//                    "            \"publishTime\": 1423645519000,\n" +
//                    "            \"applyTemplate\": 0,\n" +
//                    "            \"applyPromotion\": 0,\n" +
//                    "            \"sourceId\": 1225273,\n" +
//                    "            \"code\": \"GT4UX7oS\",\n" +
//                    "            \"description\": \"\",\n" +
//                    "            \"sort\": 0,\n" +
//                    "            \"pageCount\": 0,\n" +
//                    "            \"dataCount\": 0,\n" +
//                    "            \"showCount\": 0,\n" +
//                    " \"scene_role\": 2,\n" +
//                    "            \"userLoginName\": null,\n" +
//                    "            \"userName\": null\n" +
//                    "        }]}";
    }


}