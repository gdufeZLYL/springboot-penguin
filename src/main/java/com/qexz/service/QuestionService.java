package com.qexz.service;

import com.qexz.model.Question;

import java.util.List;
import java.util.Map;

public interface QuestionService {

    int addQuestion(Question question);

    boolean updateQuestion(Question question);

    List<Question> getQuestionsByContestId(int contestId);

    Map<String, Object> getQuestionsByContent(int pageNum, int pageSize, String content);

    boolean deleteQuestion(int id);
}
