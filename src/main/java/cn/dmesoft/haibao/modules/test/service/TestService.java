/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.test.service;

import cn.dmesoft.haibao.modules.test.dao.TestDao;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.test.entity.Test;

/**
 * 测试Service
 * @author dmesoft
 * @version 2013-10-17
 */
@Service
@Transactional(readOnly = true)
public class TestService extends CrudService<TestDao, Test> {

}
