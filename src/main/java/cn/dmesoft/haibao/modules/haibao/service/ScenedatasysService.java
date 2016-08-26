/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Scenedatasys;
import cn.dmesoft.haibao.modules.haibao.dao.ScenedatasysDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-18
 */
@Service
@Transactional(readOnly = true)
public class ScenedatasysService extends CrudService<ScenedatasysDao, Scenedatasys> {

	public Scenedatasys get(String id) {
		return super.get(id);
	}
	
	public List<Scenedatasys> findList(Scenedatasys scenedatasys) {
		return super.findList(scenedatasys);
	}
	
	public Page<Scenedatasys> findPage(Page<Scenedatasys> page, Scenedatasys scenedatasys) {
		return super.findPage(page, scenedatasys);
	}
	
	@Transactional(readOnly = false)
	public void save(Scenedatasys scenedatasys) {
		super.save(scenedatasys);
	}
	
	@Transactional(readOnly = false)
	public void delete(Scenedatasys scenedatasys) {
		super.delete(scenedatasys);
	}
	
}