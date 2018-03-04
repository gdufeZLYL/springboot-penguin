package com.qexz.controller;

import com.qexz.common.QexzConst;
import com.qexz.dto.AjaxResult;
import com.qexz.model.Subject;
import com.qexz.service.AccountService;
import com.qexz.service.SubjectService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/subject")
public class SubjectController {

    private static Log LOG = LogFactory.getLog(SubjectController.class);

    @Autowired
    private SubjectService subjectService;

    //添加课程
    @RequestMapping(value="/api/addSubject", method= RequestMethod.POST)
    @ResponseBody
    public AjaxResult addSubject(@RequestBody Subject subject) {
        AjaxResult ajaxResult = new AjaxResult();
        subject.setImgUrl(QexzConst.DEFAULT_SUBJECT_IMG_URL);
        subject.setQuestionNum(0);
        int subjectId = subjectService.addSubject(subject);
        return new AjaxResult().setData(subjectId);
    }

    //更新课程
    @RequestMapping(value="/api/updateSubject", method= RequestMethod.POST)
    @ResponseBody
    public AjaxResult updateSubject(@RequestBody Subject subject) {
        AjaxResult ajaxResult = new AjaxResult();
        boolean result = subjectService.updateSubject(subject);
        return new AjaxResult().setData(result);
    }

    //删除课程
    @DeleteMapping("/api/deleteSubject/{id}")
    public AjaxResult deleteSubject(@PathVariable int id) {
        AjaxResult ajaxResult = new AjaxResult();
        boolean result = subjectService.deleteSubjectById(id);
        return new AjaxResult().setData(result);
    }

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
