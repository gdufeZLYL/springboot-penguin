package com.qexz.model;

import java.util.Date;

public class Contest {

    private int id;
    private String title;
    private int totalScore;
    private int subjectId;
    private Date createTime;
    private Date updateTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(int totalScore) {
        this.totalScore = totalScore;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "Contest{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", totalScore=" + totalScore +
                ", subjectId=" + subjectId +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
