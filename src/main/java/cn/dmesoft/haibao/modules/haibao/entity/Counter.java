/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;


import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-11
 */
public class Counter extends DataEntity<Counter> {
	
	private static final long serialVersionUID = 1L;
	private Long sceneId;		// scene_id
	private Long fieldId;		// field_id
	private Integer count;		// count
	private Integer ctime;		// ctime
	
	public Counter() {
		super();
	}

	public Counter(String id){
		super(id);
	}

	public Long getSceneId() {
		return sceneId;
	}

	public void setSceneId(Long sceneId) {
		this.sceneId = sceneId;
	}
	
	public Long getFieldId() {
		return fieldId;
	}

	public void setFieldId(Long fieldId) {
		this.fieldId = fieldId;
	}
	
	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}
	
	public Integer getCtime() {
		return ctime;
	}

	public void setCtime(Integer ctime) {
		this.ctime = ctime;
	}
	
}