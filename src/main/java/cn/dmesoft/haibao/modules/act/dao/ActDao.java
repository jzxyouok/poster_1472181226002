/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.act.dao;

import cn.dmesoft.haibao.common.persistence.CrudDao;
import cn.dmesoft.haibao.modules.act.entity.Act;
import cn.dmesoft.haibao.common.persistence.annotation.MyBatisDao;

/**
 * 审批DAO接口
 * @author dmesoft
 * @version 2014-05-16
 */
@MyBatisDao
public interface ActDao extends CrudDao<Act> {

	public int updateProcInsIdByBusinessId(Act act);
	
}
