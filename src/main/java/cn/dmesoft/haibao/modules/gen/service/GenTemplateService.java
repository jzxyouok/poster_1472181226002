/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.gen.service;

import cn.dmesoft.haibao.common.utils.StringUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.BaseService;
import cn.dmesoft.haibao.modules.gen.entity.GenTemplate;
import cn.dmesoft.haibao.modules.gen.dao.GenTemplateDao;

/**
 * 代码模板Service
 * @author dmesoft
 * @version 2013-10-15
 */
@Service
@Transactional(readOnly = true)
public class GenTemplateService extends BaseService {

	@Autowired
	private GenTemplateDao genTemplateDao;
	
	public GenTemplate get(String id) {
		return genTemplateDao.get(id);
	}
	
	public Page<GenTemplate> find(Page<GenTemplate> page, GenTemplate genTemplate) {
		genTemplate.setPage(page);
		page.setList(genTemplateDao.findList(genTemplate));
		return page;
	}
	
	@Transactional(readOnly = false)
	public void save(GenTemplate genTemplate) {
		if (genTemplate.getContent()!=null){
			genTemplate.setContent(StringEscapeUtils.unescapeHtml4(genTemplate.getContent()));
		}
		if (StringUtils.isBlank(genTemplate.getId())){
			genTemplate.preInsert();
			genTemplateDao.insert(genTemplate);
		}else{
			genTemplate.preUpdate();
			genTemplateDao.update(genTemplate);
		}
	}
	
	@Transactional(readOnly = false)
	public void delete(GenTemplate genTemplate) {
		genTemplateDao.delete(genTemplate);
	}
	
}
