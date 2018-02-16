package com.qexz.service;

import com.qexz.model.Contest;

import java.util.Map;

public interface ContestService {

    int addContest(Contest contest);

    boolean updateContest(Contest contest);

    Contest getContestById(int id);

    Map<String, Object> getContests(int pageNum, int pageSize);

    boolean deleteContest(int id);
}
