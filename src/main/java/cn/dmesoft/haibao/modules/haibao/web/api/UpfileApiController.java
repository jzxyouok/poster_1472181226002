package cn.dmesoft.haibao.modules.haibao.web.api;

import cn.dmesoft.haibao.modules.haibao.entity.Tag;
import cn.dmesoft.haibao.modules.haibao.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping(value = "${adminPath}/haibao/api/upfile")
public class UpfileApiController extends cn.dmesoft.haibao.modules.haibao.web.api.BaseApiController {

//    @ResponseBody
//    @RequestMapping(value = "sysTag")//, method = RequestMethod.POST)
//    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
//    public String sysTag(@RequestParam(value = "type", required = true) int type, @RequestParam(value = "bizType", required = true) int bizType ){
//        return "{\"success\":true,\"code\":200,\"msg\":\"success\",\"obj\":null,\"map\":null,\"list\":[{\"id\":7501,\"name\":\"\\u9910\\u996e\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":14160,\"name\":\"\\u65c5\\u884c\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":14219,\"name\":\"\\u5efa\\u7b51\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":14606,\"name\":\"\\u4ea4\\u901a\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":16241,\"name\":\"IT\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":28135,\"name\":\"\\u519c\\u4e1a\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":28140,\"name\":\"\\u6e38\\u620f\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":28155,\"name\":\"\\u73af\\u4fdd\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1},{\"id\":28162,\"name\":\"\\u97f3\\u4e50\",\"createUser\":\"0\",\"createTime\":1423122412000,\"bizType\":101,\"groupId\":1}]}\n";
//    }

    @Autowired
    TagService tagService;

    @ResponseBody
    @RequestMapping(value = "sysTag")//, method = RequestMethod.POST)
    //http://localhost/index.php?c=upfile&a=systag&type=2&bizType=111
    public String sysTag(@RequestParam(value = "type", required = true) Integer type,
                         @RequestParam(value = "bizType", required = true) Integer bizType ) {

        Tag tq = new Tag();
        int intType = 0;
        if (type != null) intType = type.intValue();
        tq.setTypeInt(intType);

        if(bizType != null)
            tq.setBiztypeInt(bizType);

        int pageShowSize = 30;
        List list = tagService.findList(tq);

        return success("success", null, null, list);

    }

//    @au
//
//        public function systag(){
//
//        //header('Content-type: text/json');
//        $m_upfile = M('tag');
//        $where['userid_int']  = 0;
//        if(I('get.type',0)==1){
//            $where['type_int']=1;
//        }
//        if(I('get.type',0)==2){
//            $where['type_int']=2;
//        }
//        if(I('get.type',0)==88){
//            $where['type_int']=88;
//        }
//        if(I('get.bizType',0)!=''){
//
//            $where['biztype_int']  = I('get.bizType',0);
//        }
//        $pageshowsize = 30;
//
//        $m_upfilelist=$m_upfile->where($where)->order('groupid_int asc,sort asc, tagid_int asc')->select();
//
//        $jsonstr = '{"success":true,"code":200,"msg":"success","obj":null,"map":null,"list":[';
//        $jsonstrtemp = '';
//        foreach($m_upfilelist as $vo)
//        {
//
//            $vo["biztype_int"]=$vo["biztype_int"]?intval($vo["biztype_int"]):0;
//            $jsonstrtemp = $jsonstrtemp .'{"id":'.$vo["tagid_int"].',"name":'.json_encode($vo["name_varchar"]).',"createUser":"0","createTime":1423122412000,"bizType":'.$vo["biztype_int"].',"groupId":'.$vo["groupid_int"].'},';
//
//        }
//        $jsonstr = $jsonstr.rtrim($jsonstrtemp,',').'';
//        $jsonstr = $jsonstr.']}';
//
//        echo $jsonstr;




}