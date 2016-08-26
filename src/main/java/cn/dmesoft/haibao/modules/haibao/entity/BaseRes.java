package cn.dmesoft.haibao.modules.haibao.entity;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import cn.dmesoft.haibao.modules.haibao.enums.BaseResCodeEnum;

/**
 * 响应对象
 * @author hexuanneng
 *
 * @param <T>
 */
public class BaseRes<T> implements Serializable {

	private static final long serialVersionUID = 8548774945707723091L;

	/** 错误码 */
	private int code;

	/** 错误描述 */
	private String desc;

	/** 当code=BaseResCodeEnum.PARAMETER_FAIL(参数错误)的时候该响应字段存在, 为字段错误描述 */
	private Map<String, String> fieldError;

	/** 接口返回数据 */
	private T data;

	public BaseRes() {
		this(BaseResCodeEnum.OK);
	}

	public BaseRes(BaseResCodeEnum baseResCodeEnum) {
		this.code = baseResCodeEnum.getCode();
		this.desc = baseResCodeEnum.getDesc();
	}

	public BaseRes(BaseResCodeEnum baseResCodeEnum, T data) {
		this(baseResCodeEnum.getCode(), baseResCodeEnum.getDesc(), data);
	}

	public BaseRes(int code, String desc, T data) {
		super();
		this.code = code;
		this.desc = desc;
		this.data = data;
	}

	public void putFieldError(String field, String errorDesc) {
		if (fieldError == null) {
			fieldError = new HashMap<String, String>();
		}
		fieldError.put(field, errorDesc);
	}

	public void putAllFieldError(Map<String, String> fieldErrorMap) {
		if (fieldError == null) {
			fieldError = new HashMap<String, String>();
		}
		fieldError.putAll(fieldErrorMap);
	}

	public String getFieldError(String field) {
		return fieldError.get(field);
	}

	public void setRequestEnum(BaseResCodeEnum baseResCodeEnum) {
		this.code = baseResCodeEnum.getCode();
		this.desc = baseResCodeEnum.getDesc();
	}

	public void setRequestEnumCode(BaseResCodeEnum baseResCodeEnum) {
		this.desc = baseResCodeEnum.getDesc();
	}

	public void setRequestEnumDesc(BaseResCodeEnum baseResCodeEnum) {
		this.desc = baseResCodeEnum.getDesc();
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Map<String, String> getFieldError() {
		return fieldError;
	}

	public void setFieldError(Map<String, String> fieldError) {
		this.fieldError = fieldError;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "BaseRes [code=" + code + ", desc=" + desc + ", fieldError=" + fieldError + ", data=" + data + "]";
	}
}
