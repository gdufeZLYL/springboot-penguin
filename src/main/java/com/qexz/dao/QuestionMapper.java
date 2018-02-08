package com.qexz.dao;

import com.qexz.model.Question;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface QuestionMapper {

    int insertQuestion(Question question);

    int updateQuestionById(Question question);

    Question getQuestionById(@Param("id") int id);

    int getCountByContentAndDifficulty(@Param("content") String content, @Param("difficulty") int difficulty);

    List<Question> getQuestionsByContentAndDifficulty(@Param("content") String content, @Param("difficulty") int difficulty);
}
