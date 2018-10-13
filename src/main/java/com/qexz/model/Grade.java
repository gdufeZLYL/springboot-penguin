package com.qexz.model;

import java.util.Date;
import java.util.List;

public class Grade {

    private int id;
    private int studentId;
    private int contestId;
    private int result;
    private int autoResult;
    private int manulResult;
    private String answerJson;
    private Date createTime;
    private Date finishTime;
    private int state;

    private Account student;
    private Contest contest;
    private List<Question> questions;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getContestId() {
        return contestId;
    }

    public void setContestId(int contestId) {
        this.contestId = contestId;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }

    public int getAutoResult() {
        return autoResult;
    }

    public void setAutoResult(int autoResult) {
        this.autoResult = autoResult;
    }

    public int getManulResult() {
        return manulResult;
    }

    public void setManulResult(int manulResult) {
        this.manulResult = manulResult;
    }

    public String getAnswerJson() {
        return answerJson;
    }

    public void setAnswerJson(String answerJson) {
        this.answerJson = answerJson;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(Date finishTime) {
        this.finishTime = finishTime;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public Account getStudent() {
        return student;
    }

    public void setStudent(Account student) {
        this.student = student;
    }

    public Contest getContest() {
        return contest;
    }

    public void setContest(Contest contest) {
        this.contest = contest;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    @Override
    public String toString() {
        return "Grade{" +
                "id=" + id +
                ", studentId=" + studentId +
                ", contestId=" + contestId +
                ", result=" + result +
                ", autoResult=" + autoResult +
                ", manulResult=" + manulResult +
                ", answerJson='" + answerJson + '\'' +
                ", createTime=" + createTime +
                ", finishTime=" + finishTime +
                ", state=" + state +
                ", student=" + student +
                ", contest=" + contest +
                ", questions=" + questions +
                '}';
    }
}
