package com.qexz.controller;

import com.qexz.dto.AjaxResult;
import com.qexz.service.AccountService;
import com.qexz.service.SubjectService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "/account")
public class SubjectController {

    private static Log LOG = LogFactory.getLog(DefaultController.class);

    @Autowired
    private SubjectService subjectService;

    /**
     * 分页获取所有课程列表
     */
    @RequestMapping(value = "/api/getSubjects", method = RequestMethod.POST)
    @ResponseBody
    public AjaxResult getSubjects(HttpServletRequest request, HttpServletResponse response) {
        AjaxResult ajaxResult = new AjaxResult();
//        try {
//            String username = request.getParameter("username");
//            String password = request.getParameter("password");
//            Account current_account = accountService.getAccountByUsername(username);
//            if(current_account != null) {
//                String pwd = MD5.md5(QexzConst.MD5_SALT+password);
//                if(pwd.equals(current_account.getPassword())) {
//                    request.getSession().setAttribute(QexzConst.CURRENT_ACCOUNT,current_account);
//                    ajaxResult.setData(current_account);
//                } else {
//                    return AjaxResult.fixedError(QexzWebError.WRONG_PASSWORD);
//                }
//            } else {
//                return AjaxResult.fixedError(QexzWebError.WRONG_USERNAME);
//            }
//        } catch (Exception e) {
//            LOG.error(e.getMessage(), e);
//            return AjaxResult.fixedError(QexzWebError.COMMON);
//        }
        return ajaxResult;
    }
}
