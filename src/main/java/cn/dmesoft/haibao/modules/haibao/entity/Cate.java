/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.activiti.engine.impl.util.json.JSONObject;
import org.hibernate.validator.constraints.Length;
import cn.dmesoft.haibao.modules.sys.entity.User;

import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-04
 */
public class Cate extends DataEntity<Cate> {
	
	private static final long serialVersionUID = 1L;
	private String title;		// title
	private String value;		// value
	private String  type ;		// type
	private Integer createTime;		// create_time
	private Integer sort ;		// sort
	private Integer rank;		// rank
	private User user;		// user_id

	public Cate() {
		super();
	}

	public static Cate newDefault(){
		Cate c = new Cate();

		c.setSort(99);
		c.setRank(0);
		return c;
	}

	public Cate(String id){
		super(id);
	}

	@Length(min=1, max=40, message="title长度必须介于 1 和 40 之间")
	@JsonProperty("name")
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	@Length(min=0, max=20, message="value长度必须介于 0 和 20 之间")
	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	//@Length(min=1, max=20, message="type长度必须介于 1 和 20 之间")
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	

	
	@Length(min=1, max=3, message="sort长度必须介于 1 和 3 之间")
	public Integer getSort() {
		return sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}
	
	//@Length(min=1, max=1, message="rank长度必须介于 1 和 1 之间")
	public Integer getRank() {
		return rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	@JsonIgnore
	public String getId(){
		return super.getId();
	}


	@JsonProperty("id")
	public Long getLid(){
		String id = getId();
		if (id != null)
			return Long.parseLong(id);

		return null;
	}


//	@Override
//	public String toJson(){
//		String remark = null;
//		JSONObject jo = new JSONObject();
//		jo.put("id", Long.parseLong(getId()));
//		jo.put("name", getTitle());
//		jo.put("type", getValue());
//		jo.put("sort", getSort());
//		jo.put("status", 1);
//		jo.put("remark", remark);
//
//		return jo.toString();
//
//		//return  "{\"id\":" + getId() + ",\"name\":\"'.$vo[\"title\"].'\",\"type\":\"'.$vo[\"value\"].'\",\"sort\":'.$sort.',\"status\":1,\"remark\":null}";
//
//	}
	
}