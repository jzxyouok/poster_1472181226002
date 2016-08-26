package cn.dmesoft.haibao.modules.haibao.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.dmesoft.haibao.common.service.CrudService;
import cn.dmesoft.haibao.modules.haibao.dao.PosterDao;
import cn.dmesoft.haibao.modules.haibao.entity.Poster;
import cn.dmesoft.haibao.modules.haibao.utils.Config;
import cn.dmesoft.haibao.modules.haibao.web.PosterController;

/**
 * 
 * @author hexuanneng
 *
 */
@Service
@Transactional(readOnly = false)
public class PosterService extends CrudService<PosterDao, Poster> {

	private static String SAVE_DIR_PATH = null;

	private static final String HTML_FRONT = Config.getString("html_front");
	private static final String HTML_BEHIND = Config.getString("html_behind");

	static {
		String dirPath = PosterController.class.getClassLoader().getResource("").getPath();
		File file = new File(dirPath);
		SAVE_DIR_PATH = file.getParentFile().getParentFile().getPath() + File.separator;
	}

	/**
	 * 保存海报
	 * @param poster
	 * @throws Exception
	 */
	public void savePoster(Poster poster) throws Exception {
		poster.setId(UUID.randomUUID().toString().replace("-", ""));
		writeHtmlToLocalFile(poster);
		dao.insert(poster);
	}

	/***
	 * 修改海报
	 * @param poster
	 * @return
	 * @throws Exception
	 */
	public Map<String, String> updatePoster(Poster poster) throws Exception {
		Map<String, String> fieldError = new HashMap<String, String>();
		Poster posterDB = dao.get(poster.getId());
		if (posterDB == null) {
			fieldError.put("id", "海报ID不存在");
			return fieldError;
		}
		String oldPath = posterDB.getPath();
		posterDB.setContent(poster.getContent());
		writeHtmlToLocalFile(posterDB);
		dao.update(posterDB);
		File file = new File(SAVE_DIR_PATH + oldPath);
		if (file.exists()) {
			file.delete();
		}
		poster.setContent(null);
		return fieldError;
	}

	public String getPosterUrl(String posterId) {
		Poster posterDB = dao.get(posterId);
		return posterDB == null? null : posterDB.getPath();
	}

	/**
	 * 将海报页面的html代码写到本地文件中
	 * @param poster
	 * @throws Exception
	 */
	private void writeHtmlToLocalFile(Poster poster) throws Exception {
		OutputStream outs = null;
		try {
			outs = getPosterStream(poster);
			outs.write((HTML_FRONT + poster.getContent() + HTML_BEHIND).getBytes());
			poster.setContent(null);
		} catch (Exception e) {
			throw e;
		} finally {
			if (outs != null) {
				outs.close();
			}
		}
	}

	/**
	 * 获取一个保存海报代码的流
	 * @param poster
	 * @return
	 * @throws IOException
	 */
	private OutputStream getPosterStream(Poster poster) throws IOException  {
		Calendar cal = Calendar.getInstance();
		StringBuilder path = new StringBuilder("poster_html");
		path.append(File.separator).append(cal.get(Calendar.YEAR)).append(File.separator)
			.append(cal.get(Calendar.MONTH) + 1).append(File.separator)
			.append(cal.get(Calendar.DAY_OF_MONTH)).append(File.separator)
			.append(poster.getId() + "." + System.currentTimeMillis()).append(".html");
		poster.setPath(path.toString());
		File file = new File(SAVE_DIR_PATH + poster.getPath());
		if (!file.getParentFile().exists()) {
			file.getParentFile().mkdirs();
		}
		file.createNewFile();
		return new FileOutputStream(file);
	}
}
