/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;

import org.hibernate.validator.constraints.Length;

import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-18
 */
public class Scenedatasys extends DataEntity<Scenedatasys> {
	
	private static final long serialVersionUID = 1L;
	private Long sceneidBigint;		// sceneid_bigint
	private Long pageidBigint;		// pageid_bigint
	private Long elementidInt;		// elementid_int
	private String elementtitleVarchar;		// elementtitle_varchar
	private Long elementtypeInt;		// elementtype_int
	private Long useridInt;		// userid_int
	
	public Scenedatasys() {
		super();
	}

	public Scenedatasys(String id){
		super(id);
	}

	public Long getSceneidBigint() {
		return sceneidBigint;
	}

	public void setSceneidBigint(Long sceneidBigint) {
		this.sceneidBigint = sceneidBigint;
	}
	
	public Long getPageidBigint() {
		return pageidBigint;
	}

	public void setPageidBigint(Long pageidBigint) {
		this.pageidBigint = pageidBigint;
	}
	
	public Long getElementidInt() {
		return elementidInt;
	}

	public void setElementidInt(Long elementidInt) {
		this.elementidInt = elementidInt;
	}
	
	@Length(min=0, max=50, message="elementtitle_varchar长度必须介于 0 和 50 之间")
	public String getElementtitleVarchar() {
		return elementtitleVarchar;
	}

	public void setElementtitleVarchar(String elementtitleVarchar) {
		this.elementtitleVarchar = elementtitleVarchar;
	}
	
	public Long getElementtypeInt() {
		return elementtypeInt;
	}

	public void setElementtypeInt(Long elementtypeInt) {
		this.elementtypeInt = elementtypeInt;
	}
	
	public Long getUseridInt() {
		return useridInt;
	}

	public void setUseridInt(Long useridInt) {
		this.useridInt = useridInt;
	}
	
}