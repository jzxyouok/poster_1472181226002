/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Scenedata;
import cn.dmesoft.haibao.modules.haibao.dao.ScenedataDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-18
 */
@Service
@Transactional(readOnly = true)
public class ScenedataService extends CrudService<ScenedataDao, Scenedata> {

	public Scenedata get(String id) {
		return super.get(id);
	}
	
	public List<Scenedata> findList(Scenedata scenedata) {
		return super.findList(scenedata);
	}
	
	public Page<Scenedata> findPage(Page<Scenedata> page, Scenedata scenedata) {
		return super.findPage(page, scenedata);
	}
	
	@Transactional(readOnly = false)
	public void save(Scenedata scenedata) {
		super.save(scenedata);
	}
	
	@Transactional(readOnly = false)
	public void delete(Scenedata scenedata) {
		super.delete(scenedata);
	}
	
}