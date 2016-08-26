/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Stat;
import cn.dmesoft.haibao.modules.haibao.dao.StatDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-22
 */
@Service
@Transactional(readOnly = true)
public class StatService extends CrudService<StatDao, Stat> {

	public Stat get(String id) {
		return super.get(id);
	}
	
	public List<Stat> findList(Stat stat) {
		return super.findList(stat);
	}
	
	public Page<Stat> findPage(Page<Stat> page, Stat stat) {
		return super.findPage(page, stat);
	}
	
	@Transactional(readOnly = false)
	public void save(Stat stat) {
		super.save(stat);
	}
	
	@Transactional(readOnly = false)
	public void delete(Stat stat) {
		super.delete(stat);
	}
	
}