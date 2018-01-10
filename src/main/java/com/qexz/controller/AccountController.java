package com.qexz.controller;

import com.qexz.common.QexzConst;
import com.qexz.model.Account;
import com.qexz.service.AccountService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value = "/account")
public class AccountController {

    private static Log LOG = LogFactory.getLog(DefaultController.class);

    @Autowired
    private AccountService accountService;

    /**
     * 个人信息
     */
    @RequestMapping(value="/profile", method= RequestMethod.GET)
    public String profile(HttpServletRequest request, Model model) {
        Account currentAccount = (Account) request.getSession().getAttribute(QexzConst.CURRENT_ACCOUNT);
        //TODO::处理
        currentAccount = accountService.getAccountByUsername("14251104208");
        model.addAttribute(QexzConst.CURRENT_ACCOUNT, currentAccount);
        return "/user/profile";
    }



}
