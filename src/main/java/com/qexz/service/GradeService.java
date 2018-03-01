package com.qexz.service;

import com.qexz.model.Grade;

import java.util.List;
import java.util.Map;

public interface GradeService {

    int addGrade(Grade grade);

    boolean updateGrade(Grade grade);

    boolean deleteGrade(int id);

    Grade getGradeById(int id);

    Map<String, Object> getGradesByStudentId(int pageNum, int pageSize, int studentId);

    List<Grade> getGradesByContestId(int contestId);
}
