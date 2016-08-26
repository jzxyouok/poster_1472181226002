/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import javax.validation.constraints.NotNull;

import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-08
 */
public class Tag extends DataEntity<Tag> {
	
	private static final long serialVersionUID = 1L;
	//private String tagidInt;		// tagid_int
	private Integer useridInt ;		// userid_int
	private String nameVarchar;		// name_varchar
	private Integer typeInt;		// 背景还是图片0背景,1图片,2音乐,88样例,99用户
	private Integer biztypeInt;		// biztype_int

	private Integer sort = 99;		// sort
	private Integer groupidInt;		// groupid_int
	
	public Tag() {
		super();
	}

	public static Tag newDefault(){
		Tag t= new Tag();
		t.setUseridInt(0);
		t.setSort(99);
		t.setGroupidInt(1);
		return t;
	}

	public Tag(String id){
		super(id);
	}

	 
	@JsonProperty("id")
	public String getTagidInt() {
		return this.getId();
	}

//	public void setTagidInt(String tagidInt) {
//		this.tagidInt = tagidInt;
//	}
	
	@Length(min=1, max=11, message="userid_int长度必须介于 1 和 11 之间")
	@JsonIgnore
	public Integer getUseridInt() {
		return useridInt;
	}

	public void setUseridInt(Integer useridInt) {
		this.useridInt = useridInt;
	}
	
	@Length(min=0, max=50, message="name_varchar长度必须介于 0 和 50 之间")
	@JsonProperty("name")
	public String getNameVarchar() {
		return nameVarchar;
	}

	public void setNameVarchar(String nameVarchar) {
		this.nameVarchar = nameVarchar;
	}

	@JsonProperty("type")
	public Integer getTypeInt() {
		return typeInt;
	}

	public void setTypeInt(Integer typeInt) {
		this.typeInt = typeInt;
	}

	@JsonProperty("bizType")
	public Integer getBiztypeInt() {
		return biztypeInt;
	}

	public void setBiztypeInt(Integer biztypeInt) {
		this.biztypeInt = biztypeInt;
	}
	



	@JsonIgnore
	public Integer getSort() {
		return sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}
	
	@NotNull(message="groupid_int不能为空")
	@JsonProperty("groupId")
	public Integer getGroupidInt() {
		return groupidInt;
	}

	public void setGroupidInt(Integer groupidInt) {
		this.groupidInt = groupidInt;
	}
	
}