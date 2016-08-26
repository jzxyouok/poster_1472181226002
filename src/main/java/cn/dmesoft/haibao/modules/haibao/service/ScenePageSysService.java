/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.ScenePageSys;
import cn.dmesoft.haibao.modules.haibao.dao.ScenePageSysDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-05
 */
@Service
@Transactional(readOnly = true)
public class ScenePageSysService extends CrudService<ScenePageSysDao, ScenePageSys> {

	public ScenePageSys get(String id) {
		return super.get(id);
	}
	
	public List<ScenePageSys> findList(ScenePageSys scenePageSys) {
		return super.findList(scenePageSys);
	}
	
	public Page<ScenePageSys> findPage(Page<ScenePageSys> page, ScenePageSys scenePageSys) {
		return super.findPage(page, scenePageSys);
	}
	
	@Transactional(readOnly = false)
	public void save(ScenePageSys scenePageSys) {
		super.save(scenePageSys);
	}
	
	@Transactional(readOnly = false)
	public void delete(ScenePageSys scenePageSys) {
		super.delete(scenePageSys);
	}
	
}