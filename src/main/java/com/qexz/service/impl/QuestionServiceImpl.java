package com.qexz.service.impl;

import com.qexz.dao.ContestMapper;
import com.qexz.dao.QuestionMapper;
import com.qexz.model.Contest;
import com.qexz.model.Question;
import com.qexz.service.QuestionService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    private static Log LOG = LogFactory.getLog(QuestionServiceImpl.class);

    @Autowired
    private QuestionMapper questionMapper;
    @Autowired
    private ContestMapper contestMapper;

    @Override
    public int addQuestion(Question question) {
        if (question.getContestId() == 0) {
            question.setState(1);
        } else {
            question.setState(0);
            Contest contest = contestMapper.getContestById(question.getContestId());
            contest.setTotalScore(contest.getTotalScore()+question.getScore());
            contestMapper.updateContestById(contest);
        }
        return questionMapper.insertQuestion(question);
    }

    @Override
    public boolean updateQuestion(Question question) {
        if (question.getContestId() != 0) {
            Contest contest = contestMapper.getContestById(question.getContestId());
            Question sourceQuestion = questionMapper.getQuestionById(question.getId());
            contest.setTotalScore(contest.getTotalScore()-sourceQuestion.getScore()
                    +question.getScore());
            contestMapper.updateContestById(contest);
        }
        return questionMapper.updateQuestionById(question) > 0;
    }

    @Override
    public List<Question> getQuestionsByContestId(int contestId) {
        return questionMapper.getQuestionByContestId(contestId);
    }

    @Override
    public boolean deleteQuestion(int id) {
        return questionMapper.deleteQuestion(id) > 0;
    }
}
