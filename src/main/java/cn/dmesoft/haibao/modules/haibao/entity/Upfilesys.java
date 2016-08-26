/**
 * Copyright &copy; 2012-2016 <a href="http://dmesoft.cn">dmesoft</a> All rights reserved.
 */
package cn.dmesoft.haibao.modules.haibao.entity;

import org.hibernate.validator.constraints.Length;

import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 单表生成Entity
 * @author Dmesoft
 * @version 2016-08-10
 */
public class Upfilesys extends DataEntity<Upfilesys> {
	
	private static final long serialVersionUID = 1L;
	private Long filetypeInt;		// 0背景,2音乐,1图片
	private String filesrcVarchar;		// filesrc_varchar
	private Double sizekbInt;		// sizekb_int
	private String filethumbsrcVarchar;		// filethumbsrc_varchar
	private Long biztypeInt;		// biztype_int
	private String extVarchar;		// ext_varchar
	private String filenameVarchar;		// filename_varchar
	private String hbsrcVarchar;		// hbsrc_varchar
	private Long tagidInt;		// tagid_int
	private String hbsrcthumbVarchar;		// hbsrcthumb_varchar
	
	public Upfilesys() {
		super();
	}

	public Upfilesys(String id){
		super(id);
	}

	public Long getFiletypeInt() {
		return filetypeInt;
	}

	public void setFiletypeInt(Long filetypeInt) {
		this.filetypeInt = filetypeInt;
	}
	
	@Length(min=0, max=200, message="filesrc_varchar长度必须介于 0 和 200 之间")
	public String getFilesrcVarchar() {
		return filesrcVarchar;
	}

	public void setFilesrcVarchar(String filesrcVarchar) {
		this.filesrcVarchar = filesrcVarchar;
	}
	
	public Double getSizekbInt() {
		return sizekbInt;
	}

	public void setSizekbInt(Double sizekbInt) {
		this.sizekbInt = sizekbInt;
	}
	
	@Length(min=0, max=200, message="filethumbsrc_varchar长度必须介于 0 和 200 之间")
	public String getFilethumbsrcVarchar() {
		return filethumbsrcVarchar;
	}

	public void setFilethumbsrcVarchar(String filethumbsrcVarchar) {
		this.filethumbsrcVarchar = filethumbsrcVarchar;
	}
	
	public Long getBiztypeInt() {
		return biztypeInt;
	}

	public void setBiztypeInt(Long biztypeInt) {
		this.biztypeInt = biztypeInt;
	}
	
	@Length(min=0, max=50, message="ext_varchar长度必须介于 0 和 50 之间")
	public String getExtVarchar() {
		return extVarchar;
	}

	public void setExtVarchar(String extVarchar) {
		this.extVarchar = extVarchar;
	}
	
	@Length(min=0, max=100, message="filename_varchar长度必须介于 0 和 100 之间")
	public String getFilenameVarchar() {
		return filenameVarchar;
	}

	public void setFilenameVarchar(String filenameVarchar) {
		this.filenameVarchar = filenameVarchar;
	}
	
	@Length(min=0, max=200, message="hbsrc_varchar长度必须介于 0 和 200 之间")
	public String getHbsrcVarchar() {
		return hbsrcVarchar;
	}

	public void setHbsrcVarchar(String hbsrcVarchar) {
		this.hbsrcVarchar = hbsrcVarchar;
	}
	
	public Long getTagidInt() {
		return tagidInt;
	}

	public void setTagidInt(Long tagidInt) {
		this.tagidInt = tagidInt;
	}
	
	@Length(min=0, max=200, message="hbsrcthumb_varchar长度必须介于 0 和 200 之间")
	public String getHbsrcthumbVarchar() {
		return hbsrcthumbVarchar;
	}

	public void setHbsrcthumbVarchar(String hbsrcthumbVarchar) {
		this.hbsrcthumbVarchar = hbsrcthumbVarchar;
	}
	
}