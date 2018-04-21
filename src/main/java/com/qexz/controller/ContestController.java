package com.qexz.controller;

import com.qexz.dto.AjaxResult;
import com.qexz.model.Contest;
import com.qexz.service.ContestService;
import com.qexz.service.QuestionService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/contest")
public class ContestController {

    private static Log LOG = LogFactory.getLog(ContestController.class);

    @Autowired
    private ContestService contestService;
    @Autowired
    private QuestionService questionService;

    //添加考试
    @RequestMapping(value="/api/addContest", method= RequestMethod.POST)
    @ResponseBody
    public AjaxResult addContest(@RequestBody Contest contest) {
        AjaxResult ajaxResult = new AjaxResult();
        int contestId = contestService.addContest(contest);
        return new AjaxResult().setData(contestId);
    }

    //更新考试信息
    @RequestMapping(value="/api/updateContest", method= RequestMethod.POST)
    @ResponseBody
    public AjaxResult updateContest(@RequestBody Contest contest) {
        AjaxResult ajaxResult = new AjaxResult();
        boolean result = contestService.updateContest(contest);
        return new AjaxResult().setData(result);
    }

    //删除考试信息
    @DeleteMapping("/api/deleteContest/{id}")
    public AjaxResult deleteContest(@PathVariable int id) {
        AjaxResult ajaxResult = new AjaxResult();
        boolean result = contestService.deleteContest(id);
        return new AjaxResult().setData(result);
    }

    //完成考试批改
    @RequestMapping(value="/api/finishContest/{id}", method= RequestMethod.POST)
    @ResponseBody
    public AjaxResult finishContest(@PathVariable int id) {
        AjaxResult ajaxResult = new AjaxResult();
        Contest contest = contestService.getContestById(id);
        contest.setState(3);
        questionService.updateQuestionsStateByContestId(id, 1);
        boolean result = contestService.updateContest(contest);
        return new AjaxResult().setData(result);
    }




}
