package com.qexz.controller;

import com.qexz.common.QexzConst;
import com.qexz.dto.AjaxResult;
import com.qexz.model.Account;
import com.qexz.service.AccountService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@Controller
@RequestMapping(value = "/")
public class DefaultController {

    private static Log LOG = LogFactory.getLog(DefaultController.class);

    @Autowired
    private AccountService accountService;

    /**
     * 首页
     */
    @RequestMapping(value="/", method= RequestMethod.GET)
    public String home(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("currentAccount = " + currentAccount);
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
    public String problemSet(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/problem/problemset";
    }

    /**
     * 题目列表页
     */
    @RequestMapping(value="/problemset/{problemsetId}/problems", method= RequestMethod.GET)
    public String problemlist(HttpServletRequest request, @PathVariable("problemsetId") Integer problemsetId, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        LOG.info("problemsetId = " + problemsetId);
        LOG.info("currentAccount = " + currentAccount);
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/problem/problemlist";
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
