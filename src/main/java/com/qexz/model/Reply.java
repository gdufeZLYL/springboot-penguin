package com.qexz.model;

import java.util.Date;

public class Reply {

    private int id;
    private int userId;
    private int atuserId;
    private int postId;
    private int commentId;
    private String content;
    private Date createTime;

    private Account user;
    private Account atuser;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getAtuserId() {
        return atuserId;
    }

    public void setAtuserId(int atuserId) {
        this.atuserId = atuserId;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Account getUser() {
        return user;
    }

    public void setUser(Account user) {
        this.user = user;
    }

    public Account getAtuser() {
        return atuser;
    }

    public void setAtuser(Account atuser) {
        this.atuser = atuser;
    }
}
