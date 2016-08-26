/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.entity.Tag;
import cn.dmesoft.haibao.modules.haibao.dao.TagDao;

/**
 * 单表生成Service
 * @author Dmesoft
 * @version 2016-08-08
 */
@Service
@Transactional(readOnly = true)
public class TagService extends CrudService<TagDao, Tag> {

	public Tag get(String id) {
		return super.get(id);
	}
	
	public List<Tag> findList(Tag tag) {
		return super.findList(tag);
	}
	
	public Page<Tag> findPage(Page<Tag> page, Tag tag) {
		return super.findPage(page, tag);
	}
	
	@Transactional(readOnly = false)
	public void save(Tag tag) {
		super.save(tag);
	}
	
	@Transactional(readOnly = false)
	public void delete(Tag tag) {
		super.delete(tag);
	}
	
}