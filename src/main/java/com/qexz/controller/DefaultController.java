package com.qexz.controller;

import com.qexz.common.QexzConst;
import com.qexz.dto.AjaxResult;
import com.qexz.model.Account;
import com.qexz.model.Subject;
import com.qexz.service.AccountService;
import com.qexz.service.SubjectService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/")
public class DefaultController {

    private static Log LOG = LogFactory.getLog(DefaultController.class);

    @Autowired
    private AccountService accountService;
    @Autowired
    private SubjectService subjectService;

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
    public String contestIndex(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/contest/index";
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
    public String discuss(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
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
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
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
