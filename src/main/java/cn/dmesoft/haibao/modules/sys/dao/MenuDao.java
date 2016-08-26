/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.sys.dao;

import cn.dmesoft.haibao.common.persistence.CrudDao;
import cn.dmesoft.haibao.common.persistence.annotation.MyBatisDao;
import cn.dmesoft.haibao.modules.sys.entity.Menu;

import java.util.List;

/**
 * 菜单DAO接口
 *
 * @author dmesoft
 * @version 2014-05-16
 */
@MyBatisDao
public interface MenuDao extends CrudDao<Menu> {

    public List<Menu> findByParentIdsLike(Menu menu);

    public List<Menu> findByUserId(Menu menu);

    public int updateParentIds(Menu menu);

    public int updateSort(Menu menu);

}
