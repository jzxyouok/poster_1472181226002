package cn.dmesoft.haibao.modules.oa.aspectj;

import java.util.HashMap;
import java.util.Map;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import cn.dmesoft.haibao.modules.oa.entity.BaseRes;
import cn.dmesoft.haibao.modules.oa.enums.BaseResCodeEnum;

/**
 * 请求拦截切面
 * @author hexuanneng
 *
 */
@Aspect
@Component
public class RequestAspectj {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Around("execution(public cn.dmesoft.haibao.modules.oa.entity.BaseRes cn.dmesoft.haibao..web.*Controller.*(..))")
	public Object surroundProcess(ProceedingJoinPoint joinPoint) {
		Object res = null;
		Object[] args = joinPoint.getArgs();
		try {
			res = valid(args);
			if (res != null) {
				return res;
			}
			res = joinPoint.proceed();
		} catch (Throwable e) {
			logger.error(e.getMessage(), e);
			res = new BaseRes<Object>(BaseResCodeEnum.ERROR);
		}
		return res;
	}

	private BaseRes<?> valid(Object[] args) {
		if (args == null || args.length == 0) {
			return null;
		}
		BindingResult result = null;
		for (Object arg : args) {
			if (arg instanceof BindingResult) {
				result = (BindingResult) arg;
				break;
			}
		}
		if (result == null || !result.hasErrors()) {
			return null;
		}
		BaseRes<Object> res = new BaseRes<Object>(BaseResCodeEnum.PARAMETER_FAIL);
		Map<String, String> fieldError = new HashMap<String, String>();
		for (FieldError error : result.getFieldErrors()) {
			fieldError.put(error.getField(), error.getDefaultMessage());
		}
		res.setFieldError(fieldError);
		return res;
	}
}
