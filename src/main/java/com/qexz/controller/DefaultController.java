package com.qexz.controller;

import com.qexz.common.QexzConst;
import com.qexz.dto.AjaxResult;
import com.qexz.model.*;
import com.qexz.service.*;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping(value = "/")
public class DefaultController {

    private static Log LOG = LogFactory.getLog(DefaultController.class);

    @Autowired
    private AccountService accountService;
    @Autowired
    private SubjectService subjectService;
    @Autowired
    private ContestService contestService;
    @Autowired
    private QuestionService questionService;
    @Autowired
    private PostService postService;

    /**
     * 首页
     */
    @RequestMapping(value="/", method= RequestMethod.GET)
    public String home(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/home";
    }

    /**
     * 在线考试列表页
     */
    @RequestMapping(value="/contest/index", method= RequestMethod.GET)
    public String contestIndex(HttpServletRequest request,
                               @RequestParam(value = "page", defaultValue = "1") int page,
                               Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        Map<String, Object> data = contestService.getContests(page, QexzConst.contestPageSize);
        model.addAttribute(QexzConst.DATA, data);
        return "/contest/index";
    }

    /**
     * 在线考试页
     */
    @RequestMapping(value="/contest/{contestId}", method= RequestMethod.GET)
    public String contestDetail(HttpServletRequest request,
                               @PathVariable("contestId") int contestId,
                               Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        Contest contest = contestService.getContestById(contestId);
        if (currentAccount == null || contest.getStartTime().getTime() > System.currentTimeMillis()
                || contest.getEndTime().getTime() < System.currentTimeMillis()) {
            return "redirect:/contest/index";
        }
        List<Question> questions = questionService.getQuestionsByContestId(contestId);
        for (Question question : questions) {
            question.setAnswer("");
        }
        Map<String, Object> data = new HashMap<>();
        data.put("contest", contest);
        data.put("questions", questions);
        model.addAttribute(QexzConst.DATA, data);
        return "/contest/detail";
    }

    /**
     * 题库中心页
     */
    @RequestMapping(value="/problemset/list", method= RequestMethod.GET)
    public String problemSet(HttpServletRequest request, @RequestParam(value = "page", defaultValue = "1") int page, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        Map<String, Object> data = subjectService.getSubjects(page, QexzConst.subjectPageSize);
        //TODO::处理
//        currentAccount = accountService.getAccountByUsername("14251104208");
//        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        model.addAttribute(QexzConst.DATA, data);
        return "/problem/problemset";
    }

    /**
     * 题目列表页
     */
    @RequestMapping(value="/problemset/{problemsetId}/problems", method= RequestMethod.GET)
    public String problemList(HttpServletRequest request, @PathVariable("problemsetId") Integer problemsetId, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("problemsetId = " + problemsetId);
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/problem/problemlist";
    }

    /**
     * 题目详情页
     */
    @RequestMapping(value="/problemset/{problemsetId}/problem/{problemId}", method= RequestMethod.GET)
    public String problemDetail(HttpServletRequest request, @PathVariable("problemsetId") Integer problemsetId, @PathVariable("problemId") Integer problemId, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("problemsetId = " + problemsetId);
        LOG.info("problemId = " + problemId);
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/problem/problemdetail";
    }

    /**
     * 讨论区首页
     */
    @RequestMapping(value="/discuss", method= RequestMethod.GET)
    public String discuss(HttpServletRequest request, @RequestParam(value = "page", defaultValue = "1") int page, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("currentAccount = " + currentAccount);
        Map<String, Object> data = postService.getPosts(page, QexzConst.postPageSize);
        List<Post> posts = (List<Post>) data.get("posts");
        Set<Integer> authorIds = posts.stream().map(Post::getAuthorId).collect(Collectors.toCollection(HashSet::new));
        List<Account> authors = accountService.getAccountsByIds(authorIds);
        Map<Integer, Account> id2author = authors.stream().
                collect(Collectors.toMap(Account::getId, account -> account));
        for (Post post : posts) {
            post.setAuthor(id2author.get(post.getAuthorId()));
        }
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        model.addAttribute(QexzConst.DATA, data);
        return "/discuss/discuss";
    }

    /**
     * 帖子详情页
     */
    @RequestMapping(value="/discuss/{discussId}", method= RequestMethod.GET)
    public String discussDetail(HttpServletRequest request, @PathVariable("discussId") Integer discussId, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("discussId = " + discussId);
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/discuss/discussDetail";
    }

    /**
     * 发布帖子页
     */
    @RequestMapping(value="/discuss/post", method= RequestMethod.GET)
    public String postDiscuss(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        Map<String, Object> data = new HashMap<>();
        data.put("authorId", currentAccount.getId());
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        model.addAttribute(QexzConst.DATA, data);
        return "/discuss/postDiscuss";
    }

    /**
     * 获取服务器端时间,防止用户篡改客户端时间提前参与考试
     *
     * @return 时间的json数据
     */
    @RequestMapping(value = "/time/now", method = RequestMethod.GET)
    @ResponseBody
    public AjaxResult time() {
        LocalDateTime localDateTime = LocalDateTime.now();
        return new AjaxResult().setData(localDateTime);
    }
}
