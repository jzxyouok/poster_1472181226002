/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Upfile;
import cn.dmesoft.haibao.modules.haibao.dao.UpfileDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-10
 */
@Service
@Transactional(readOnly = true)
public class UpfileService extends CrudService<UpfileDao, Upfile> {

	public Upfile get(String id) {
		return super.get(id);
	}
	
	public List<Upfile> findList(Upfile upfile) {
		return super.findList(upfile);
	}
	
	public Page<Upfile> findPage(Page<Upfile> page, Upfile upfile) {
		return super.findPage(page, upfile);
	}
	
	@Transactional(readOnly = false)
	public void save(Upfile upfile) {
		super.save(upfile);
	}
	
	@Transactional(readOnly = false)
	public void delete(Upfile upfile) {
		super.delete(upfile);
	}
	
}