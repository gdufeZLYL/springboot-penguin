/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3306
 Source Schema         : db_qexz_penguin

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 01/10/2018 17:54:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_penguin_account
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_account`;
CREATE TABLE `t_penguin_account`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(63) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '姓名',
  `username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '账号,一般为学号或者教工号',
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '密码',
  `qq` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'QQ',
  `phone` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '邮箱',
  `description` varchar(63) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '个人描述',
  `avatar_img_url` varchar(63) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '头像',
  `state` int(8) NULL DEFAULT 0 COMMENT '当前账号状态,0表示正常,1表示禁用',
  `level` int(8) NULL DEFAULT 0 COMMENT '0表示学生,1表示教师,2表示管理员',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_penguin_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_comment`;
CREATE TABLE `t_penguin_comment`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `user_id` int(8) NULL DEFAULT NULL COMMENT '用户ID',
  `post_id` int(8) NULL DEFAULT NULL COMMENT '帖子id',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '内容',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_penguin_contest
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_contest`;
CREATE TABLE `t_penguin_contest`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `total_score` int(8) NULL DEFAULT NULL COMMENT '考试总分',
  `subject_id` int(8) NULL DEFAULT NULL COMMENT '学科ID',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `start_time` timestamp(0) NULL DEFAULT NULL COMMENT '考试开始时间',
  `end_time` timestamp(0) NULL DEFAULT NULL COMMENT '考试结束时间',
  `state` int(8) NULL DEFAULT 0 COMMENT '进行状态:0表示未开始,1表示进行中,2表示考试已经结束,3表示该考试已经完成批卷',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_penguin_grade
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_grade`;
CREATE TABLE `t_penguin_grade`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `student_id` int(8) NULL DEFAULT NULL COMMENT '考生主键ID',
  `contest_id` int(8) NULL DEFAULT NULL COMMENT '考试主键ID',
  `result` int(8) NULL DEFAULT 0 COMMENT '最终分数',
  `auto_result` int(8) NULL DEFAULT 0 COMMENT '电脑自动评判选择题分数',
  `manul_result` int(8) NULL DEFAULT NULL COMMENT '人工手动评判分数',
  `answer_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '考试作答答案json',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '考试交卷时间',
  `finish_time` timestamp(0) NULL DEFAULT NULL COMMENT '改卷完成时间',
  `state` int(8) NULL DEFAULT 0 COMMENT '0表示已交卷但是未评卷,1表示已交卷已评卷',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_penguin_post
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_post`;
CREATE TABLE `t_penguin_post`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `author_id` int(8) NULL DEFAULT NULL COMMENT '作者ID',
  `html_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT 'html源代码',
  `text_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '文本内容',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发帖时间',
  `update_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '帖子最后编辑时间',
  `last_reply_time` timestamp(0) NULL DEFAULT NULL COMMENT '最后一次回复时间',
  `reply_num` int(8) NULL DEFAULT 0 COMMENT '回复数',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_penguin_question
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_question`;
CREATE TABLE `t_penguin_question`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '题目标题',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '题目内容',
  `question_type` int(8) NULL DEFAULT NULL COMMENT '题目类型,0表示单项选择题,1表示多项选择题,2表示问答题,3表示编程题',
  `option_a` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '选项A',
  `option_b` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '选项B',
  `option_c` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '选项C',
  `option_d` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '选项D',
  `answer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '答案',
  `parse` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '答案解析',
  `subject_id` int(8) NULL DEFAULT NULL COMMENT '学科ID',
  `contest_id` int(8) NULL DEFAULT NULL COMMENT '试卷ID',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `score` int(8) NULL DEFAULT NULL COMMENT '题目分值',
  `difficulty` int(8) NULL DEFAULT 1 COMMENT '题目难度',
  `state` int(8) NULL DEFAULT 1 COMMENT '0表示未考试题目,1表示已考试题目',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_penguin_reply
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_reply`;
CREATE TABLE `t_penguin_reply`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `user_id` int(8) NULL DEFAULT NULL COMMENT '用户id',
  `atuser_id` int(8) NULL DEFAULT NULL COMMENT '被回复用户id',
  `post_id` int(8) NULL DEFAULT NULL COMMENT '帖子id',
  `comment_id` int(8) NULL DEFAULT NULL COMMENT '评论id',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '内容',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_penguin_subject
-- ----------------------------
DROP TABLE IF EXISTS `t_penguin_subject`;
CREATE TABLE `t_penguin_subject`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '学科名称',
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `question_num` int(11) NULL DEFAULT 0 COMMENT '题目数量',
  `img_url` varchar(63) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '图片url',
  `state` int(4) NULL DEFAULT 0 COMMENT '课程状态,0表示正常,1表示弃用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
