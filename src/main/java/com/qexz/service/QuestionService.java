package com.qexz.service;

import com.qexz.model.Question;

import java.util.List;

public interface QuestionService {

    int addQuestion(Question question);

    boolean updateQuestion(Question question);

    List<Question> getQuestionsByContestId(int contestId);

    boolean deleteQuestion(int id);
}
