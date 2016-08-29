package cn.dmesoft.haibao.modules.oa.enums;

/**
 * 响应码枚举
 * @author hexuanneng
 *
 */
public enum BaseResCodeEnum {

	OK(0, "success"),
	PARAMETER_FAIL(1, "参数错误"),
	ERROR(999999, "error");

	private int code;

	private String desc;

	private BaseResCodeEnum(int code, String desc) {
		this.code = code;
		this.desc = desc;
	}

	public int getCode() {
		return code;
	}

	public String getDesc() {
		return desc;
	}
}
