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
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-05
 */
public class Scenepage extends DataEntity<Scenepage> {
	
	private static final long serialVersionUID = 1L;
	//private Long pageidBigint;		// pageid_bigint
	private Long sceneidBigint;		// sceneid_bigint
	private String scenecodeVarchar;		// scenecode_varchar
	private Integer pagecurrentnumInt;		// 当前页数
	private Date createtimeTime;		// createtime_time
	private String contentText;		// content_text
	private String pagenameVarchar;		// pagename_varchar
	//private Long useridInt;		// userid_int
	private String propertiesText;		// properties_text
	private Integer mytyplId ;		// mytypl_id
	private String thumbsrcVarchar;		// thumbsrc_varchar
	private Integer myTypeCate;		// my_type_cate

	public static Scenepage newDefault(){
		Scenepage s = new Scenepage();
		s.setMytyplId(0);
		s.setPagecurrentnumInt(1);
		return s;
	}
	public Scenepage() {
		super();
	}

	public Scenepage(String id){
		super(id);
	}


	@NotNull(message="sceneid_bigint不能为空")
	@JsonProperty("sceneId")
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
	@JsonIgnore
	public String getContentText() {
		return contentText;
	}

	@JsonProperty("elements")
	public JSONArray getContentJSON() throws ParseException {
		if(StringUtils.isEmpty(contentText)) return null;
		JSONParser jp = new JSONParser();
		return (JSONArray) jp.parse(contentText);
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
	

	//public Long getUseridInt() {
	//	return useridInt;
//	}

//	public void setUseridInt(Long useridInt) {
//		this.useridInt = useridInt;
//	}
	@JsonProperty("properties")
	public String getPropertiesText() {
		return propertiesText;
	}

	public void setPropertiesText(String propertiesText) {
		this.propertiesText = propertiesText;
	}
	
	@NotNull(message="mytypl_id不能为空")
	public Integer getMytyplId() {
		return mytyplId;
	}

	public void setMytyplId(Integer mytyplId) {
		this.mytyplId = mytyplId;
	}
	
	@Length(min=0, max=200, message="thumbsrc_varchar长度必须介于 0 和 200 之间")
	public String getThumbsrcVarchar() {
		return thumbsrcVarchar;
	}

	public void setThumbsrcVarchar(String thumbsrcVarchar) {
		this.thumbsrcVarchar = thumbsrcVarchar;
	}
	
	public Integer getMyTypeCate() {
		return myTypeCate;
	}

	public void setMyTypeCate(Integer myTypeCate) {
		this.myTypeCate = myTypeCate;
	}
	
}