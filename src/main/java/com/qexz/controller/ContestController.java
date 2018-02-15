package com.qexz.controller;

import com.qexz.dto.AjaxResult;
import com.qexz.model.Contest;
import com.qexz.service.ContestService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/contest")
public class ContestController {

    private static Log LOG = LogFactory.getLog(ManageController.class);

    @Autowired
    private ContestService contestService;

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
    public AjaxResult updateStudent(@RequestBody Contest contest) {
        AjaxResult ajaxResult = new AjaxResult();
        boolean result = contestService.updateContest(contest);
        return new AjaxResult().setData(result);
    }

    //删除考试信息
//    @DeleteMapping("/api/delContest/{id}")
//    public AjaxResult deleteStudent(@PathVariable int id) {
//        AjaxResult ajaxResult = new AjaxResult();
//        int result = contestService.
//        return new AjaxResult().setData(result);
//    }


}
