ALTER TABLE cj_scenedata
 ADD COLUMN `create_by` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '创建者',
 ADD COLUMN `create_date` datetime NOT NULL COMMENT '创建时间',
 ADD COLUMN `update_by` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '更新者',
 ADD COLUMN `update_date` datetime NOT NULL COMMENT '更新时间',
 ADD COLUMN `remarks` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '备注信息',
 ADD COLUMN `del_flag` char(1) COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '删除标记';