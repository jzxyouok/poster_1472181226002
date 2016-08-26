package cn.dmesoft.haibao.modules.haibao.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Config {

	private static final Properties properties = new Properties();

	static {
		String configDirPath = Config.class.getClassLoader().getResource("config").getPath();
		if (configDirPath != null) {
			File configFile = new File(configDirPath);
			resolvePropertiesFile(configFile);
		}
	}

	private static void resolvePropertiesFile(File configFile) {
		if (!configFile.exists()) {
			return;
		}
		if (configFile.isFile()) {
			loadPropertiesFile(configFile);
			return;
		}
		if (configFile.isDirectory()) {
			File[] files = configFile.listFiles();
			for (File file : files) {
				if (file.isFile()) {
					loadPropertiesFile(file);
				} else {
					resolvePropertiesFile(file);
				}
			}
		}
	}

	private static void loadPropertiesFile(File configFile) {
		String configFileName = configFile.getName();
		String[] names = configFileName.split("\\.");
		if (names.length == 1 || !"properties".equals(names[names.length - 1])) {
			return;
		}
		InputStream ins = null;
		try {
			ins = new FileInputStream(configFile);
			properties.load(ins);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (ins != null) {
				try {
					ins.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	public static String getString(String key) {
		return getString(key, null);
	}

	public static String getString(String key, String defaultValue) {
		return properties.getProperty(key, defaultValue);
	}

	public static Short getShort(String key) {
		return getShort(key, null);
	}

	public static Short getShort(String key, Short defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Short.valueOf(val);
	}

	public static Character getChar(String key) {
		return getChar(key, null);
	}

	public static Character getChar(String key, Character defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Character.valueOf(val.charAt(0));
	}

	public static Byte getByte(String key) {
		return getByte(key, null);
	}

	public static Byte getByte(String key, Byte defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Byte.valueOf(val);
	}

	public static Integer getInt(String key) {
		return getInt(key, null);
	}

	public static Integer getInt(String key, Integer defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Integer.valueOf(val);
	}

	public static Long getLong(String key) {
		return getLong(key, null);
	}

	public static Long getLong(String key, Long defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Long.valueOf(val);
	}

	public static Double getDouble(String key) {
		return getDouble(key, null);
	}

	public static Double getDouble(String key, Double defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Double.valueOf(val);
	}

	public static Float getFloat(String key) {
		return getFloat(key, null);
	}

	public static Float getFloat(String key, Float defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Float.valueOf(val);
	}

	public static Boolean getBoolean(String key) {
		return getBoolean(key, null);
	}

	public static Boolean getBoolean(String key, Boolean defaultValue) {
		String val = properties.getProperty(key);
		return val == null? defaultValue : Boolean.valueOf(val);
	}
}
