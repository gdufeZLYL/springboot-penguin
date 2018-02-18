package com.qexz.controller;

import com.qexz.common.QexzConst;
import com.qexz.model.Account;
import com.qexz.model.Contest;
import com.qexz.model.Question;
import com.qexz.model.Subject;
import com.qexz.service.AccountService;
import com.qexz.service.ContestService;
import com.qexz.service.QuestionService;
import com.qexz.service.SubjectService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/manage")
public class ManageController {

    private static Log LOG = LogFactory.getLog(ManageController.class);

    @Autowired
    private AccountService accountService;
    @Autowired
    private SubjectService subjectService;
    @Autowired
    private ContestService contestService;
    @Autowired
    private QuestionService questionService;

    /**
     * 管理员登录页
     */
    @RequestMapping(value="/login", method= RequestMethod.GET)
    public String login(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        //currentAccount = accountService.getAccountByUsername("manage");
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);

        if (currentAccount == null) {
            return "/manage/manage-login";
        } else {
            return "redirect:/manage/contest/list";
        }
    }

    /**
     * 考试管理
     */
    @RequestMapping(value="/contest/list", method= RequestMethod.GET)
    public String contestList(HttpServletRequest request,
                              @RequestParam(value = "page", defaultValue = "1") int page,
                              Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("admin");
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        if (currentAccount == null) {
            return "redirect:/";
        } else {
            Map<String, Object> data = contestService.getContests(page, QexzConst.contestPageSize);
            List<Subject> subjects = subjectService.getSubjects();
            data.put("subjects", subjects);
            model.addAttribute(QexzConst.DATA, data);
            return "/manage/manage-contestBoard";
        }
    }

    /**
     * 考试管理-查看试题
     */
    @RequestMapping(value="/contest/{contestId}/problems", method= RequestMethod.GET)
    public String contestProblemList(HttpServletRequest request,
                                     @PathVariable("contestId") Integer contestId, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("admin");
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        if (currentAccount == null) {
            return "redirect:/";
        } else {
            Map<String, Object> data = new HashMap<>();
            List<Question> questions = questionService.getQuestionsByContestId(contestId);
            Contest contest = contestService.getContestById(contestId);
            data.put("questionsSize", questions.size());
            data.put("questions", questions);
            data.put("contest", contest);
            model.addAttribute(QexzConst.DATA, data);
            return "/manage/manage-editContestProblem";
        }
    }
}
