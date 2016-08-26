/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;


import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-22
 */
public class Stat extends DataEntity<Stat> {
	
	private static final long serialVersionUID = 1L;
	private Integer link;		// 访问次数
	private Integer shows;		// shows
	private Integer rn;		// 统计场景类型
	private Integer sceneId;		// 内容id
	private Integer statDate;		// 统计时间
	private Integer sMobile;		// 手机
	private Integer sWxGroup;		// s_wx_group
	private Integer sWxSingle;		// s_wx_single
	private Integer sWxTimeline;		// s_wx_timeline
	private Integer tel;		// tel
	private Integer data;		// data
	
	public Stat() {
		super();
	}

	public Stat(String id){
		super(id);
	}

	public Integer getLink() {
		return link;
	}

	public void setLink(Integer link) {
		this.link = link;
	}
	
	public Integer getShows() {
		return shows;
	}

	public void setShows(Integer shows) {
		this.shows = shows;
	}
	
	public Integer getRn() {
		return rn;
	}

	public void setRn(Integer rn) {
		this.rn = rn;
	}
	
	public Integer getSceneId() {
		return sceneId;
	}

	public void setSceneId(Integer sceneId) {
		this.sceneId = sceneId;
	}
	
	public Integer getStatDate() {
		return statDate;
	}

	public void setStatDate(Integer statDate) {
		this.statDate = statDate;
	}
	
	public Integer getSMobile() {
		return sMobile;
	}

	public void setSMobile(Integer sMobile) {
		this.sMobile = sMobile;
	}
	
	public Integer getSWxGroup() {
		return sWxGroup;
	}

	public void setSWxGroup(Integer sWxGroup) {
		this.sWxGroup = sWxGroup;
	}
	
	public Integer getSWxSingle() {
		return sWxSingle;
	}

	public void setSWxSingle(Integer sWxSingle) {
		this.sWxSingle = sWxSingle;
	}
	
	public Integer getSWxTimeline() {
		return sWxTimeline;
	}

	public void setSWxTimeline(Integer sWxTimeline) {
		this.sWxTimeline = sWxTimeline;
	}
	
	public Integer getTel() {
		return tel;
	}

	public void setTel(Integer tel) {
		this.tel = tel;
	}
	
	public Integer getData() {
		return data;
	}

	public void setData(Integer data) {
		this.data = data;
	}
	
}