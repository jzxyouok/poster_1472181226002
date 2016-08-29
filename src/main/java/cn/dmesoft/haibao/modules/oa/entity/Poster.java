package cn.dmesoft.haibao.modules.haibao.entity;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import cn.dmesoft.haibao.common.persistence.DataEntity;

/**
 * 海报对象
 * @author hexuanneng
 *
 */
public class Poster extends DataEntity<Poster> {

	private static final long serialVersionUID = 304104892728413797L;

	private String name;

	private String content;

	private String path;

	public Poster() {
		super();
	}

//	@Length(min=1, max=50, message="海报名字长度必须介于 1 和 50 之间")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@NotBlank(message = "海报内容不许为空")
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
}
