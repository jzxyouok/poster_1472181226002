/**
 * Copyright &copy; 2012-2013 <a href="httparamMap://github.cn/dmesoft/haibao">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.sys.service;

import cn.dmesoft.haibao.common.persistence.Page;
import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.common.utils.DateUtils;
import cn.dmesoft.haibao.modules.sys.dao.LogDao;
import cn.dmesoft.haibao.modules.sys.entity.Log;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 日志Service
 *
 * @author dmesoft
 * @version 2014-05-16
 */
@Service
@Transactional(readOnly = true)
public class LogService extends CrudService<LogDao, Log> {

    public Page<Log> findPage(Page<Log> page, Log log) {

        // 设置默认时间范围，默认当前月
        if (log.getBeginDate() == null) {
            log.setBeginDate(DateUtils.setDays(DateUtils.parseDate(DateUtils.getDate()), 1));
        }
        if (log.getEndDate() == null) {
            log.setEndDate(DateUtils.addMonths(log.getBeginDate(), 1));
        }

        return super.findPage(page, log);

    }

}
