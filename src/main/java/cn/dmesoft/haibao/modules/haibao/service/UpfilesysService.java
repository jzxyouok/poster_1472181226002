/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Upfilesys;
import cn.dmesoft.haibao.modules.haibao.dao.UpfilesysDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-10
 */
@Service
@Transactional(readOnly = true)
public class UpfilesysService extends CrudService<UpfilesysDao, Upfilesys> {

	public Upfilesys get(String id) {
		return super.get(id);
	}
	
	public List<Upfilesys> findList(Upfilesys upfilesys) {
		return super.findList(upfilesys);
	}
	
	public Page<Upfilesys> findPage(Page<Upfilesys> page, Upfilesys upfilesys) {
		return super.findPage(page, upfilesys);
	}
	
	@Transactional(readOnly = false)
	public void save(Upfilesys upfilesys) {
		super.save(upfilesys);
	}
	
	@Transactional(readOnly = false)
	public void delete(Upfilesys upfilesys) {
		super.delete(upfilesys);
	}
	
}