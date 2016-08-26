/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.test.dao;

import cn.dmesoft.haibao.common.persistence.CrudDao;
import cn.dmesoft.haibao.common.persistence.annotation.MyBatisDao;
import cn.dmesoft.haibao.test.entity.TestDataChild;

/**
 * 主子表生成DAO接口
 * @author dmesoft
 * @version 2015-04-06
 */
@MyBatisDao
public interface TestDataChildDao extends CrudDao<TestDataChild> {
	
}