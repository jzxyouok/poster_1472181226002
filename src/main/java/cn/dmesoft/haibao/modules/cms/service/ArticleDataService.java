/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.cms.service;

import cn.dmesoft.haibao.modules.cms.entity.ArticleData;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.cms.dao.ArticleDataDao;

/**
 * 站点Service
 * @author dmesoft
 * @version 2013-01-15
 */
@Service
@Transactional(readOnly = true)
public class ArticleDataService extends CrudService<ArticleDataDao, ArticleData> {

}
