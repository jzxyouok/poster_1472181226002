/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import cn.dmesoft.haibao.modules.haibao.entity.Scene;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Scenepage;
import cn.dmesoft.haibao.modules.haibao.dao.ScenepageDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-05
 */
@Service
@Transactional(readOnly = true)
public class ScenepageService extends CrudService<ScenepageDao, Scenepage> {

	public Scenepage get(String id) {
		return super.get(id);
	}

	public List<Scenepage> query1(Scenepage scenepage){
		return dao.query1(scenepage);
	}
	
	public List<Scenepage> findList(Scenepage scenepage) {
		return super.findList(scenepage);
	}
	
	public Page<Scenepage> findPage(Page<Scenepage> page, Scenepage scenepage) {
		return super.findPage(page, scenepage);
	}
	
	@Transactional(readOnly = false)
	public void save(Scenepage scenepage) {
		super.save(scenepage);
	}
	
	@Transactional(readOnly = false)
	public void delete(Scenepage scenepage) {
		super.delete(scenepage);
	}

	
}