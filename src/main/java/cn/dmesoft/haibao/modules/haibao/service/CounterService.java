/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Counter;
import cn.dmesoft.haibao.modules.haibao.dao.CounterDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-11
 */
@Service
@Transactional(readOnly = true)
public class CounterService extends CrudService<CounterDao, Counter> {

	public Counter get(String id) {
		return super.get(id);
	}
	
	public List<Counter> findList(Counter counter) {
		return super.findList(counter);
	}
	
	public Page<Counter> findPage(Page<Counter> page, Counter counter) {
		return super.findPage(page, counter);
	}
	
	@Transactional(readOnly = false)
	public void save(Counter counter) {
		super.save(counter);
	}
	
	@Transactional(readOnly = false)
	public void delete(Counter counter) {
		super.delete(counter);
	}

	@Transactional(readOnly = false)
	public void incrementCount(Counter c){
		c.setCount(c.getCount() + 1);
		save(c);

	}
	
}