package com.qexz.dao;

import com.qexz.model.Grade;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface GradeMapper {

    int insertGrade(@Param("grade") Grade grade);

    int deleteGrade(@Param("id") int id);

    int updateGradeById(@Param("grade") Grade grade);

    Grade getGradeById(@Param("id") int id);

    int getCountByStudentId(@Param("studentId") int studentId);

    List<Grade> getGradesByStudentId(@Param("studentId") int studentId);

    List<Grade> getGradesByContestId(@Param("contestId") int contestId);
}
