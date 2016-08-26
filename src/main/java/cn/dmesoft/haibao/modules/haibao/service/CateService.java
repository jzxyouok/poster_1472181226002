/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Cate;
import cn.dmesoft.haibao.modules.haibao.dao.CateDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-04
 */
@Service
@Transactional(readOnly = true)
public class CateService extends CrudService<CateDao, Cate> {

	public Cate get(String id) {
		return super.get(id);
	}

	public List<Cate> findListByType(String type){
		Cate c = new Cate();
		c.setType(type);
		c.getPage().setOrderBy("sort asc,id asc");
		return findList(c);
	}

	public List<Cate> findList(Cate cate) {
		return super.findList(cate);
	}
	
	public Page<Cate> findPage(Page<Cate> page, Cate cate) {
		return super.findPage(page, cate);
	}
	
	@Transactional(readOnly = false)
	public void save(Cate cate) {
		super.save(cate);
	}
	
	@Transactional(readOnly = false)
	public void delete(Cate cate) {
		super.delete(cate);
	}
	
}