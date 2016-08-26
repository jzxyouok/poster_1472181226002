/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;

import javax.validation.constraints.NotNull;

import cn.dmesoft.haibao.common.utils.StringUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-05
 */
public class Scene extends DataEntity<Scene> {
	
	private static final long serialVersionUID = 1L;
	//private Long sceneidBigint;		// sceneid_bigint
	private String scenecodeVarchar;		// scenecode_varchar
	private String scenenameVarchar;		// scenename_varchar
	private Integer scenetypeInt;		// scenetype_int
	//private Long useridInt;		// userid_int
	private Integer hitcountInt ;		// hitcount_int
	//private Date createtimeTime;		// createtime_time
	private String musicurlVarchar;		// musicurl_varchar
	private String videocodeVarchar;		// videocode_varchar
	private Integer showstatusInt;		// 显示状态1显示,2关闭
	private String thumbnailVarchar;		// 缩略图
	private Integer movietypeInt ;		// 翻页方式
	private String descVarchar;		// 场景描述
	private String ipVarchar;		// ip_varchar
	//private Integer deleteInt  ;		// 0未删,1已经删除
	private Integer shenhe ;		// shenhe
	private Integer tagidInt ;		// tagid_int
	private Integer sourceidInt ;		// sourceid_int
	private Integer biztypeInt ;		// biztype_int
	private Integer hbidInt;		// hbid_int
	private String hbcode;		// hbcode
	private Integer datacountInt ;		// datacount_int
	private Integer musictypeInt ;		// musictype_int
	private Integer usecountInt ;		// usecount_int
	private Long fromsceneidBigint ;		// fromsceneid_bigint
	private Integer publishtime;		// publishtime
	//private Integer updatetime ;		// updatetime
	private Long rank ;		// rank
	private Long lastpageid;		// lastpageid
	private Integer isTpl ;		// is_tpl
	private Integer isPublic ;		// is_public
	private String property;		// property
	private Integer applypromotion ;		// applypromotion
	//private String accesscode;		// accesscode
	private Integer applytemplate;		// applytemplate
	private Integer isShow ;		// is_show
	private Integer isPayloadlog ;		// is_payloadlog
	private Integer viCurrentTimes ;		// vi_current_times
	private Integer viBeyondTime ;		// vi_beyond_time
	private String viTimeout;		// vi_timeout
	private Integer viHittimesSet ;		// vi_hittimes_set
	private String viScenecode;		// vi_scenecode
	private String loadinglogo;		// loadinglogo
	private String accesscodeVarchar;		// accesscode_varchar
	private String loadinglogoVarchar;		// loadinglogo_varchar
	private Integer groupidInt ;		// groupid_int

	public static Scene newDefault(){
		Scene c = new Scene();
		c.setIsTpl(0);
		c.setIsPublic(1);
		c.setApplypromotion(0);
		c.setApplytemplate(0);
		c.setIsShow(0);
		c.setIsPayloadlog(0);
		c.setViBeyondTime(0);
		c.setViHittimesSet(0);
		c.setGroupidInt(0);

		c.setRank(0L);
		c.setPublishtime(0);
		c.setTagidInt(0);
		c.setSourceidInt(0);
		c.setBiztypeInt(1);
		c.setDatacountInt(0);
		c.setMusictypeInt(3);

		c.setHitcountInt(0);
		c.setShowstatusInt(1);
		c.setMovietypeInt(0);
		//c.setDeleteInt(0);
		c.setShenhe(1);
		c.setUsecountInt(0);
		c.setFromsceneidBigint(0L);
		//c.setUpdatetime(0);
		return c;
	}
	
	public Scene() {
		super();
	}

	public Scene(String id){
		super(id);
	}


	@JsonProperty("id")
	public Long getSceneidBigint() {
		String id = getId();
		if (id != null)
			return Long.valueOf(id);

		return null;
	}

	//public void setSceneidBigint(Long sceneidBigint) {
	//	this.sceneidBigint = sceneidBigint;
	//}
	
	@Length(min=1, max=50, message="scenecode_varchar长度必须介于 1 和 50 之间")
	@JsonProperty("code")
	public String getScenecodeVarchar() {
		return scenecodeVarchar;
	}

	public void setScenecodeVarchar(String scenecodeVarchar) {
		this.scenecodeVarchar = scenecodeVarchar;
	}
	
	@Length(min=0, max=50, message="scenename_varchar长度必须介于 0 和 50 之间")
	@JsonProperty("name")
	public String getScenenameVarchar() {
		return scenenameVarchar;
	}

	public void setScenenameVarchar(String scenenameVarchar) {
		this.scenenameVarchar = scenenameVarchar;
	}
	
	@NotNull(message="scenetype_int不能为空")
	@JsonProperty("type")
	public Integer getScenetypeInt() {
		return scenetypeInt;
	}

	public void setScenetypeInt(Integer scenetypeInt) {
		this.scenetypeInt = scenetypeInt;
	}
	
	@NotNull(message="userid_int不能为空")
	@JsonProperty("createUser")
	public Long getUseridInt() {
		if(this.getCreateBy() != null && !StringUtils.isEmpty(this.getCreateBy().getId()))
			return Long.valueOf(this.getCreateBy().getId());

		return null;
	}

	//public void setUseridInt(Long useridInt) {
	//	this.useridInt = useridInt;
	//}
	
	@NotNull(message="hitcount_int不能为空")
	@JsonProperty("showCount")
	public Integer getHitcountInt() {
		return hitcountInt;
	}

	public void setHitcountInt(Integer hitcountInt) {
		this.hitcountInt = hitcountInt;


	}
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonProperty("createTime")
	public Date getCreatetimeTime() {
		return getCreateDate();
	}

	//public void setCreatetimeTime(Date createtimeTime) {
	//	this.createtimeTime = createtimeTime;
	//}
	
	@Length(min=0, max=500, message="musicurl_varchar长度必须介于 0 和 500 之间")
	@JsonProperty("bgAudioUrl")
	public String getMusicurlVarchar() {
		return musicurlVarchar;
	}

	public void setMusicurlVarchar(String musicurlVarchar) {
		this.musicurlVarchar = musicurlVarchar;
	}
	
	@Length(min=0, max=2000, message="videocode_varchar长度必须介于 0 和 2000 之间")
	@JsonIgnore
	public String getVideocodeVarchar() {
		return videocodeVarchar;
	}

	public void setVideocodeVarchar(String videocodeVarchar) {
		this.videocodeVarchar = videocodeVarchar;
	}
	
	@NotNull(message="显示状态1显示,2关闭不能为空")
	@JsonProperty("status")
	public Integer getShowstatusInt() {
		return showstatusInt;
	}

	public void setShowstatusInt(Integer showstatusInt) {
		this.showstatusInt = showstatusInt;
	}
	
	@Length(min=0, max=200, message="缩略图长度必须介于 0 和 200 之间")
	@JsonProperty("cover")
	public String getThumbnailVarchar() {
		return thumbnailVarchar;
	}

	public void setThumbnailVarchar(String thumbnailVarchar) {
		this.thumbnailVarchar = thumbnailVarchar;
	}
	@JsonProperty("pageMode")
	public Integer getMovietypeInt() {
		return movietypeInt;
	}

	public void setMovietypeInt(Integer movietypeInt) {
		this.movietypeInt = movietypeInt;
	}
	
	@Length(min=0, max=500, message="场景描述长度必须介于 0 和 500 之间")
	@JsonProperty("description")
	public String getDescVarchar() {
		return descVarchar;
	}

	public void setDescVarchar(String descVarchar) {
		this.descVarchar = descVarchar;
	}
	
	@Length(min=0, max=50, message="ip_varchar长度必须介于 0 和 50 之间")
	@JsonIgnore
	public String getIpVarchar() {
		return ipVarchar;
	}

	public void setIpVarchar(String ipVarchar) {
		this.ipVarchar = ipVarchar;
	}
	
//	@NotNull(message="0未删,1已经删除不能为空")
//	@JsonIgnore
//	public Integer getDeleteInt() {
//		return deleteInt;
//	}
//
//	public void setDeleteInt(Integer deleteInt) {
//		this.deleteInt = deleteInt;
//	}

	@JsonIgnore
	public Integer getShenhe() {
		return shenhe;
	}

	public void setShenhe(Integer shenhe) {
		this.shenhe = shenhe;
	}
	
	@NotNull(message="tagid_int不能为空")
	@JsonIgnore
	public Integer getTagidInt() {
		return tagidInt;
	}

	public void setTagidInt(Integer tagidInt) {
		this.tagidInt = tagidInt;
	}
	
	@NotNull(message="sourceid_int不能为空")
	@JsonIgnore
	public Integer getSourceidInt() {
		return sourceidInt;
	}

	public void setSourceidInt(Integer sourceidInt) {
		this.sourceidInt = sourceidInt;
	}
	
	@NotNull(message="biztype_int不能为空")
	@JsonIgnore
	public Integer getBiztypeInt() {
		return biztypeInt;
	}

	public void setBiztypeInt(Integer biztypeInt) {
		this.biztypeInt = biztypeInt;
	}

	@JsonIgnore
	public Integer getHbidInt() {
		return hbidInt;
	}

	public void setHbidInt(Integer hbidInt) {
		this.hbidInt = hbidInt;
	}
	
	@Length(min=0, max=50, message="hbcode长度必须介于 0 和 50 之间")
	@JsonProperty("hbcode")
	public String getHbcode() {
		return hbcode;
	}

	public void setHbcode(String hbcode) {
		this.hbcode = hbcode;
	}
	
	@NotNull(message="datacount_int不能为空")
	@JsonProperty("dataCount")
	public Integer getDatacountInt() {
		return datacountInt;
	}

	public void setDatacountInt(Integer datacountInt) {
		this.datacountInt = datacountInt;
	}
	
	@NotNull(message="musictype_int不能为空")
	@JsonProperty("bgAudioType")
	public Integer getMusictypeInt() {
		return musictypeInt;
	}

	public void setMusictypeInt(Integer musictypeInt) {
		this.musictypeInt = musictypeInt;
	}
	
	@NotNull(message="usecount_int不能为空")
	@JsonProperty("useCount")
	public Integer getUsecountInt() {
		return usecountInt;
	}

	public void setUsecountInt(Integer usecountInt) {
		this.usecountInt = usecountInt;
	}
	
	@NotNull(message="fromsceneid_bigint不能为空")
	@JsonProperty("fromSceneId")
	public Long getFromsceneidBigint() {
		return fromsceneidBigint;
	}

	public void setFromsceneidBigint(Long fromsceneidBigint) {
		this.fromsceneidBigint = fromsceneidBigint;
	}
	
	@NotNull(message="publishtime不能为空")
	public Integer getPublishtime() {
		return publishtime;
	}

	public void setPublishtime(Integer publishtime) {
		this.publishtime = publishtime;
	}
	
	//@NotNull(message="updatetime不能为空")
	//@JsonIgnore
	//public Integer getUpdatetime() {
		//return updatetime;
	//}

	//public void setUpdatetime(Integer updatetime) {
	//	this.updatetime = updatetime;
	//}
	
	public Long getRank() {
		return rank;
	}

	public void setRank(Long rank) {
		this.rank = rank;
	}

	@JsonProperty("lastPageId")
	public Long getLastpageid() {
		return lastpageid;
	}

	public void setLastpageid(Long lastpageid) {
		this.lastpageid = lastpageid;
	}

	@JsonProperty("isTpl")
	public Integer getIsTpl() {
		return isTpl;
	}

	public void setIsTpl(Integer isTpl) {
		this.isTpl = isTpl;
	}
	@JsonProperty("isPublic")
	public Integer getIsPublic() {
		return isPublic;
	}

	public void setIsPublic(Integer isPublic) {
		this.isPublic = isPublic;
	}
	
	@Length(min=0, max=200, message="property长度必须介于 0 和 200 之间")
	@JsonProperty("property")
	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	@JsonProperty("applyPromotion")
	public Integer getApplypromotion() {
		return applypromotion;
	}

	public void setApplypromotion(Integer applypromotion) {
		this.applypromotion = applypromotion;
	}
	
//	@Length(min=0, max=10, message="accesscode长度必须介于 0 和 10 之间")
//	@JsonProperty("accessCode")
//	public String getAccesscode() {
//		return accesscode;
//	}
//
//	public void setAccesscode(String accesscode) {
//		this.accesscode = accesscode;
//	}

	@JsonProperty("applyTemplate")
	public Integer getApplytemplate() {
		return applytemplate;
	}

	public void setApplytemplate(Integer applytemplate) {
		this.applytemplate = applytemplate;
	}

	@JsonProperty("isShow")
	public Integer getIsShow() {
		return isShow;
	}

	public void setIsShow(Integer isShow) {
		this.isShow = isShow;
	}

	@JsonIgnore
	public Integer getIsPayloadlog() {
		return isPayloadlog;
	}

	public void setIsPayloadlog(Integer isPayloadlog) {
		this.isPayloadlog = isPayloadlog;
	}
	
	public Integer getViCurrentTimes() {
		return viCurrentTimes;
	}

	public void setViCurrentTimes(Integer viCurrentTimes) {
		this.viCurrentTimes = viCurrentTimes;
	}
	
	public Integer getViBeyondTime() {
		return viBeyondTime;
	}

	public void setViBeyondTime(Integer viBeyondTime) {
		this.viBeyondTime = viBeyondTime;
	}
	
	@Length(min=0, max=80, message="vi_timeout长度必须介于 0 和 80 之间")
	public String getViTimeout() {
		return viTimeout;
	}

	public void setViTimeout(String viTimeout) {
		this.viTimeout = viTimeout;
	}
	
	public Integer getViHittimesSet() {
		return viHittimesSet;
	}

	public void setViHittimesSet(Integer viHittimesSet) {
		this.viHittimesSet = viHittimesSet;
	}
	
	@Length(min=0, max=50, message="vi_scenecode长度必须介于 0 和 50 之间")
	public String getViScenecode() {
		return viScenecode;
	}

	public void setViScenecode(String viScenecode) {
		this.viScenecode = viScenecode;
	}
	
	@Length(min=0, max=200, message="loadinglogo长度必须介于 0 和 200 之间")
	public String getLoadinglogo() {
		return loadinglogo;
	}

	public void setLoadinglogo(String loadinglogo) {
		this.loadinglogo = loadinglogo;
	}
	
	@Length(min=0, max=11, message="accesscode_varchar长度必须介于 0 和 11 之间")
	public String getAccesscodeVarchar() {
		return accesscodeVarchar;
	}

	public void setAccesscodeVarchar(String accesscodeVarchar) {
		this.accesscodeVarchar = accesscodeVarchar;
	}
	
	@Length(min=0, max=255, message="loadinglogo_varchar长度必须介于 0 和 255 之间")
	@JsonProperty("loadingLogo")
	public String getLoadinglogoVarchar() {
		return loadinglogoVarchar;
	}

	public void setLoadinglogoVarchar(String loadinglogoVarchar) {
		this.loadinglogoVarchar = loadinglogoVarchar;
	}

	@JsonProperty("groupId")
	public Integer getGroupidInt() {
		return groupidInt;
	}

	public void setGroupidInt(Integer groupidInt) {
		this.groupidInt = groupidInt;
	}
	
}