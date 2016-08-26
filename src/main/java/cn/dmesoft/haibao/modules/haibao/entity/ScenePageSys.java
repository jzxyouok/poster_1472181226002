/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;

import javax.validation.constraints.NotNull;

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
public class ScenePageSys extends DataEntity<ScenePageSys> {
	
	private static final long serialVersionUID = 1L;
	private Long pageidBigint;		// pageid_bigint
	private Long sceneidBigint;		// sceneid_bigint
	private String scenecodeVarchar;		// scenecode_varchar
	private Integer pagecurrentnumInt;		// 当前页数
	private Date createtimeTime;		// createtime_time
	private String contentText;		// content_text
	private String pagenameVarchar;		// pagename_varchar
	private Integer useridInt;		// userid_int
	private Integer biztypeInt;		// biztype_int
	private String tagidInt;		// tagid_int
	private String thumbsrcVarchar;		// thumbsrc_varchar
	private String hbsrcVarchar;		// hbsrc_varchar
	private Integer hbidInt;		// hbid_int
	private Integer usecountInt;		// usecount_int

	public static ScenePageSys newDefault(){
		ScenePageSys s = new ScenePageSys();
		s.setPagecurrentnumInt(1);
		s.setUsecountInt(0);
		return s;
	}
	public ScenePageSys() {
		super();
	}

	public ScenePageSys(String id){
		super(id);
	}

	@NotNull(message="pageid_bigint不能为空")
	@JsonProperty("id")
	public Long getPageidBigint() {
		return pageidBigint;
	}

	public void setPageidBigint(Long pageidBigint) {
		this.pageidBigint = pageidBigint;
	}
	
	@NotNull(message="sceneid_bigint不能为空")

	public Long getSceneidBigint() {
		return sceneidBigint;
	}

	public void setSceneidBigint(Long sceneidBigint) {
		this.sceneidBigint = sceneidBigint;
	}
	
	@Length(min=1, max=50, message="scenecode_varchar长度必须介于 1 和 50 之间")
	public String getScenecodeVarchar() {
		return scenecodeVarchar;
	}

	public void setScenecodeVarchar(String scenecodeVarchar) {
		this.scenecodeVarchar = scenecodeVarchar;
	}
	
	@NotNull(message="当前页数不能为空")
	@JsonProperty("num")
	public Integer getPagecurrentnumInt() {
		return pagecurrentnumInt;
	}

	public void setPagecurrentnumInt(Integer pagecurrentnumInt) {
		this.pagecurrentnumInt = pagecurrentnumInt;
	}
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	public Date getCreatetimeTime() {
		return createtimeTime;
	}

	public void setCreatetimeTime(Date createtimeTime) {
		this.createtimeTime = createtimeTime;
	}
	
	public String getContentText() {
		return contentText;
	}

	public void setContentText(String contentText) {
		this.contentText = contentText;
	}
	
	@Length(min=0, max=50, message="pagename_varchar长度必须介于 0 和 50 之间")
	@JsonProperty("name")
	public String getPagenameVarchar() {
		return pagenameVarchar;
	}

	public void setPagenameVarchar(String pagenameVarchar) {
		this.pagenameVarchar = pagenameVarchar;
	}
	
	@NotNull(message="userid_int不能为空")
	public Integer getUseridInt() {
		return useridInt;
	}

	public void setUseridInt(Integer useridInt) {
		this.useridInt = useridInt;
	}

	@JsonProperty("sceneId")
	public Integer getBiztypeInt() {
		return biztypeInt;
	}

	public void setBiztypeInt(Integer biztypeInt) {
		this.biztypeInt = biztypeInt;
	}
	
	@Length(min=0, max=255, message="tagid_int长度必须介于 0 和 255 之间")
	public String getTagidInt() {
		return tagidInt;
	}

	public void setTagidInt(String tagidInt) {
		this.tagidInt = tagidInt;
	}
	
	@Length(min=0, max=200, message="thumbsrc_varchar长度必须介于 0 和 200 之间")
	public String getThumbsrcVarchar() {
		return thumbsrcVarchar;
	}

	public void setThumbsrcVarchar(String thumbsrcVarchar) {
		this.thumbsrcVarchar = thumbsrcVarchar;
	}
	
	@Length(min=0, max=200, message="hbsrc_varchar长度必须介于 0 和 200 之间")
	public String getHbsrcVarchar() {
		return hbsrcVarchar;
	}

	public void setHbsrcVarchar(String hbsrcVarchar) {
		this.hbsrcVarchar = hbsrcVarchar;
	}
	
	public Integer getHbidInt() {
		return hbidInt;
	}

	public void setHbidInt(Integer hbidInt) {
		this.hbidInt = hbidInt;
	}
	
	@NotNull(message="usecount_int不能为空")
	public Integer getUsecountInt() {
		return usecountInt;
	}

	public void setUsecountInt(Integer usecountInt) {
		this.usecountInt = usecountInt;
	}
	
}