/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.common.utils.Hashids;
import cn.dmesoft.haibao.common.utils.StringUtils;
import cn.dmesoft.haibao.modules.haibao.dao.SceneDao;
import cn.dmesoft.haibao.modules.haibao.entity.Scene;
import cn.dmesoft.haibao.modules.haibao.entity.Scenedata;
import cn.dmesoft.haibao.modules.haibao.entity.Scenedatasys;
import cn.dmesoft.haibao.modules.haibao.entity.Scenepage;
import cn.dmesoft.haibao.modules.haibao.utils.RandomUtil;
import cn.dmesoft.haibao.modules.sys.utils.UserUtils;
import org.apache.commons.lang3.RandomUtils;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

/**
 * 单表生成Service
 *
 * @author Dmesoft
 * @version 2016-08-05
 */
@Service
@Transactional(readOnly = true)
public class SceneService extends CrudService<SceneDao, Scene> {

    public Scene get(int id) {
        return super.get(id + "");
    }

    public List<Scene> findList(Scene scene) {
        return super.findList(scene);
    }

    public Page<Scene> findPage(Page<Scene> page, Scene scene) {
        return super.findPage(page, scene);
    }

    @Transactional(readOnly = false)
    public void save(Scene scene) {
        super.save(scene);
    }

    @Transactional(readOnly = false)
    public void delete(Scene scene) {
        super.delete(scene);
    }

    @Autowired
    ScenepageService scenepageService;

    public ScenepageService getScenepageService() {
        return scenepageService;
    }
//	@Transactional(readOnly = false)
//	public long saveSceneBySys(Long id, String name, int type, int pageMode, String ip) {
//		DateFormat dfm = new SimpleDateFormat("MM"); // Just the year, with 2 digits
//		String fmonth = dfm.format(Calendar.getInstance().getTime());
//		String sceneCode = "U" + (Calendar.getInstance().get(Calendar.YEAR) % 100 - 9) + fmonth + RandomUtil.randOrderNo(6, -1);
////
////		Scene sq = new Scene();
////		sq.setId(id.toString());
//		Scene sceneInfo = this.get(id.toString());
//
//
//		Scene scene = Scene.newDefault();
//		Scenepage scenePage = Scenepage.newDefault();
//		scene.setScenecodeVarchar(sceneCode);
//		scene.setScenenameVarchar(name);
//		scene.setMovietypeInt(sceneInfo.getMovietypeInt());
//		scene.setScenetypeInt(type);
//		scene.setIpVarchar(ip);
//		scene.setThumbnailVarchar(sceneInfo.getThumbnailVarchar());
//		scene.setMusicurlVarchar(sceneInfo.getMusicurlVarchar());
//		scene.setMusictypeInt(sceneInfo.getMusictypeInt());
//		scene.setSourceidInt(Integer.valueOf(sceneInfo.getId()));
//
//
//		//scene.setCurrentUser(UserUtils.getUser());
//		//scene.setCreatetimeTime(new Date());
//		scene.setIsPublic(1);
//
//		scene.setIsNewRecord(true);
//		save(scene);
//
//		scenePage.setIsNewRecord(true);
//		scenePage.setScenecodeVarchar(scene.getScenecodeVarchar());
//		scenePage.setSceneidBigint(scene.getSceneidBigint());
//		scenePage.setContentText("[]");
//		scenePage.setPropertiesText("null");
//		scenePage.setUseridInt(scene.getUseridInt());
//		scenepageService.save(scenePage);
//
//		return scenePage.getSceneidBigint();
//	}

    @Autowired
    private ScenedatasysService scenedatasysService;
    //id=1510229&type=101&pageMode=2&hbpdType=0&price=
    @Transactional(readOnly = false)
    public long addSceneBySys(Long id, String name, Integer type,  Integer pageMode, Integer hbpdType, String ip) {



        Scene sceneSysInfo = this.get(String.valueOf(id));
        String sceneCode = genSceneCode();
        Scene scene = Scene.newDefault();
        Scenepage scenePage = Scenepage.newDefault();
        scene.setScenecodeVarchar(sceneCode);
        scene.setScenenameVarchar("副本-系统-" + sceneSysInfo.getScenenameVarchar());
        scene.setMovietypeInt(sceneSysInfo.getMovietypeInt());
        scene.setScenetypeInt(type);
        scene.setIpVarchar(sceneSysInfo.getIpVarchar());
        scene.setThumbnailVarchar(sceneSysInfo.getThumbnailVarchar());
        scene.setMusicurlVarchar(sceneSysInfo.getMusicurlVarchar());
        scene.setMusictypeInt(sceneSysInfo.getMusictypeInt());
        scene.setFromsceneidBigint(sceneSysInfo.getSceneidBigint());
        scene.setCurrentUser(UserUtils.getUser());
        scene.setIsPublic(0);
        scene.setShenhe(0);
        scene.setIsNewRecord(true);

        this.save(scene);

        sceneSysInfo.setUsecountInt(sceneSysInfo.getUsecountInt() + 1);

        Scenepage scenepageQuery = new Scenepage();
        scenepageQuery.setSceneidBigint(id);
        List<Scenepage> syspageInfo = scenepageService.findList(scenepageQuery);
        for (Scenepage sysSp : syspageInfo) {
            Scenepage sp =   Scenepage.newDefault();
            sp.setIsNewRecord(true);
            sp.setScenecodeVarchar(scene.getScenecodeVarchar());
            sp.setSceneidBigint(scene.getSceneidBigint());
            sp.setContentText(sysSp.getContentText());
            sp.setPropertiesText("{}");
            sp.setPagecurrentnumInt(sysSp.getPagecurrentnumInt());
            sp.setCreateBy(UserUtils.getUser());

            scenepageService.save(sp);

            Scenedatasys scenedataQuery = new Scenedatasys();
            scenedataQuery.setIsNewRecord(true);
            scenedataQuery.setSceneidBigint(sysSp.getSceneidBigint());
            scenedataQuery.setPageidBigint(Long.valueOf(sysSp.getId()));
            List<Scenedatasys> scenedatas = scenedatasysService.findList(scenedataQuery);
            for (Scenedatasys sd : scenedatas) {
                Scenedata nsd = new Scenedata();
                nsd.setIsNewRecord(true);
                nsd.setSceneidBigint(Long.valueOf(scene.getId()));
                nsd.setPageidBigint(Long.valueOf(scenePage.getId()));
                nsd.setElementidInt(sd.getElementidInt());
                nsd.setElementtitleVarchar(sd.getElementtitleVarchar());
                nsd.setElementtypeInt(sd.getElementtypeInt());
                nsd.setCreateBy(UserUtils.getUser());

                scenedataService.save(nsd);
            }


        }


        return Long.parseLong(scene.getId());




    }
    @Transactional(readOnly = false)
    public long addSceneByCopy(Long id, String ip) {

        Scene sceneSysInfo = this.get(id + "");


        //DateFormat dfm = new SimpleDateFormat("MM"); // Just the year, with 2 digits
        //String fmonth = dfm.format(Calendar.getInstance().getTime());
        //String sceneCode = "U" + (Calendar.getInstance().get(Calendar.YEAR) % 100 - 9) + fmonth + RandomUtil.randOrderNo(6, -1);
        String sceneCode = genSceneCode();//new Hashids((Calendar.getInstance().get(Calendar.YEAR) % 100 - 9) + fmonth + RandomUtil.randOrderNo(6, -1), 8).getAlphabet();
        Scene scene = Scene.newDefault();
        Scenepage scenePage = Scenepage.newDefault();
        scene.setScenecodeVarchar(sceneCode);
        scene.setScenenameVarchar("副本-" + sceneSysInfo.getScenenameVarchar());
        scene.setMovietypeInt(sceneSysInfo.getMovietypeInt());
        scene.setScenetypeInt(sceneSysInfo.getScenetypeInt());
        scene.setIpVarchar(ip);
        scene.setThumbnailVarchar(sceneSysInfo.getThumbnailVarchar());
        scene.setMusicurlVarchar(sceneSysInfo.getMusicurlVarchar());
        scene.setMusictypeInt(sceneSysInfo.getMusictypeInt());
        scene.setFromsceneidBigint(sceneSysInfo.getSceneidBigint());
        scene.setCurrentUser(UserUtils.getUser());
        scene.setIsPublic(0);


        scene.setIsNewRecord(true);
        save(scene);

        Scenepage scenepageQuery = new Scenepage();
        scenepageQuery.setSceneidBigint(id);
        List<Scenepage> syspageInfo = scenepageService.findList(scenepageQuery);
        for (Scenepage sysSp : syspageInfo) {
            Scenepage sp = new Scenepage();
            sp.setIsNewRecord(true);
            sp.setScenecodeVarchar(scene.getScenecodeVarchar());
            sp.setSceneidBigint(scene.getSceneidBigint());
            sp.setContentText(sysSp.getContentText());
            sp.setPropertiesText("{}");
            sp.setPagecurrentnumInt(sysSp.getPagecurrentnumInt());
            sp.setCreateBy(UserUtils.getUser());
            scenepageService.save(scenePage);

            Scenedata scenedataQuery = new Scenedata();
            scenedataQuery.setSceneidBigint(sysSp.getSceneidBigint());
            scenedataQuery.setPageidBigint(Long.valueOf(sysSp.getId()));
            List<Scenedata> scenedatas = scenedataService.findList(scenedataQuery);
            for (Scenedata sd : scenedatas) {
                Scenedata nsd = new Scenedata();
                nsd.setIsNewRecord(true);
                nsd.setSceneidBigint(Long.valueOf(scene.getId()));
                nsd.setPageidBigint(Long.valueOf(scenePage.getId()));
                nsd.setElementidInt(sd.getElementidInt());
                nsd.setElementtitleVarchar(sd.getElementtitleVarchar());
                nsd.setElementtypeInt(sd.getElementtypeInt());
                nsd.setCreateBy(UserUtils.getUser());

                scenedataService.save(nsd);
            }


        }


        return Long.parseLong(scene.getId());
    }

    @Autowired
    private ScenedataService scenedataService;

    public Long savePage(long id, long sceneId, int num, JSONObject properties, JSONObject elements) {
        Scene sceneQuery = new Scene();
        Scenepage scenepageQuery = new Scenepage();
        Scenedata scenedataQuery = new Scenedata();

        scenepageQuery.setId(id + "");
        scenepageQuery.setSceneidBigint(sceneId);
        scenepageQuery.setCreateBy(UserUtils.getUser());

        Scenepage spage = scenepageService.findList(scenepageQuery).get(0);
        spage.setPagecurrentnumInt(num);
        spage.setPropertiesText(properties.toJSONString());


        scenedataQuery.setCurrentUser(UserUtils.getUser());
        scenedataQuery.setPageidBigint(Long.valueOf(spage.getId()));
        scenedataQuery.setSceneidBigint(spage.getSceneidBigint());

        Scenedata sdata = scenedataService.findList(scenedataQuery).get(0);
        scenedataService.delete(sdata);

        for (Object tk : elements.keySet()) {
            String key = (String) tk;
            JSONObject var = (JSONObject) elements.get(key);
            int varType = Integer.parseInt(var.get("type").toString());
            boolean isinput = varType == 5 || varType == 501 || varType == 502 || varType == 503 || varType == 1;
            if(isinput){// 501姓名、502手机 、503邮箱、5 文本
                Scenedata sdata1 =new Scenedata();
                sdata1.setIsNewRecord(true);
                sdata1.setSceneidBigint(sceneId);
                sdata1.setPageidBigint(id);
                sdata1.setElementidInt(Long.valueOf(var.get("id").toString()));
                sdata1.setElementtitleVarchar(String.valueOf(var.get("title")));
                sdata1.setElementtypeInt(Long.valueOf(var.get("type").toString()));
                sdata1.setCreateBy(UserUtils.getUser());
                sdata1.setOtherInfo(StringUtils.defaultString(var.get("choices") + "", ""));
            }else{
                //elements.get()
            }

        }

        return null;


    }

    public static String genSceneCode(){
        return new Hashids(RandomUtils.nextInt(0, 9999999) + "", 8).getAlphabet();
    }

    @Transactional(readOnly = false)
    public long addScene(String name, int type, int pageMode, String ip) {
        DateFormat dfm = new SimpleDateFormat("MM"); // Just the year, with 2 digits
        String fmonth = dfm.format(Calendar.getInstance().getTime());
        //String sceneCode = "U" + (Calendar.getInstance().get(Calendar.YEAR) % 100 - 9) + fmonth + RandomUtil.randOrderNo(6, -1);
        String sceneCode = genSceneCode();
        //String sceneCode = new Hashids((Calendar.getInstance().get(Calendar.YEAR) % 100 - 9) + fmonth + RandomUtil.randOrderNo(6, -1), 8).getAlphabet();
        Scene scene = Scene.newDefault();
        Scenepage scenePage = Scenepage.newDefault();
        scene.setScenecodeVarchar(sceneCode);
        scene.setScenenameVarchar(name);
        scene.setMovietypeInt(pageMode);
        scene.setScenetypeInt(type);
        scene.setIpVarchar(ip);
        scene.setThumbnailVarchar("default_thum.jpg");
        //scene.setCurrentUser(UserUtils.getUser());
        //scene.setCreatetimeTime(new Date());
        scene.setIsPublic(0);

        scene.setIsNewRecord(true);
        save(scene);

        scenePage.setIsNewRecord(true);
        scenePage.setScenecodeVarchar(scene.getScenecodeVarchar());
        scenePage.setSceneidBigint(scene.getSceneidBigint());
        scenePage.setContentText("[]");
        scenePage.setPropertiesText("[]");
        //scenePage(scene.getUseridInt());
        scenepageService.save(scenePage);

        return scenePage.getSceneidBigint();
    }
}