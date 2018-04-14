//package com.qexz.service;
//
//import com.qexz.common.QexzConst;
//import com.qexz.model.Subject;
//import org.apache.commons.logging.Log;
//import org.apache.commons.logging.LogFactory;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@ActiveProfiles("dev")
//public class SubjectServiceTest {
//
//    private static Log LOG = LogFactory.getLog(SubjectServiceTest.class);
//
//    @Autowired
//    private SubjectService subjectService;
//
//    @Test
//    public void addSubject() throws Exception {
////        Subject subject = new Subject();
////        subject.setName("计算机组成原理");
////        int result = subjectService.addSubject(subject);
////        LOG.info("result = " + result);
//
//        Subject subject1 = new Subject();
//        subject1.setName("C语言程序设计");
//        subject1.setImgUrl("problemset_c.jpg");
//        int result = subjectService.addSubject(subject1);
//        LOG.info("result = " + result);
//
//        Subject subject2 = new Subject();
//        subject2.setName("Java语言程序设计");
//        subject2.setImgUrl("problemset_java.jpg");
//        result = subjectService.addSubject(subject2);
//        LOG.info("result = " + result);
//
//        Subject subject3 = new Subject();
//        subject3.setName("C++语言程序设计");
//        subject3.setImgUrl("problemset_c++.jpg");
//        result = subjectService.addSubject(subject3);
//        LOG.info("result = " + result);
//
//        Subject subject4 = new Subject();
//        subject4.setName("Python语言程序设计");
//        subject4.setImgUrl("problemset_python.jpg");
//        result = subjectService.addSubject(subject4);
//        LOG.info("result = " + result);
//
//        Subject subject5 = new Subject();
//        subject5.setName("数据结构与算法");
//        subject5.setImgUrl("problemset_datastructures.jpg");
//        result = subjectService.addSubject(subject5);
//        LOG.info("result = " + result);
//
//        Subject subject6 = new Subject();
//        subject6.setName("数据结构与算法");
//        subject6.setImgUrl("problemset_datastructures.jpg");
//        result = subjectService.addSubject(subject6);
//        LOG.info("result = " + result);
//
//        Subject subject7 = new Subject();
//        subject7.setName("数据库概论");
//        subject7.setImgUrl("problemset_database.jpg");
//        result = subjectService.addSubject(subject7);
//        LOG.info("result = " + result);
//    }
//
//    @Test
//    public void updateSubject() throws Exception {
//        Subject subject = subjectService.getSubjectById(7);
//        subject.setName("软件测试");
//        subject.setImgUrl("problemset_softwareTest.jpg");
//        boolean result = subjectService.updateSubject(subject);
//        LOG.info("result = " + result);
//    }
//
//    @Test
//    public void getSubjectById() throws Exception {
//        Subject subject = subjectService.getSubjectById(7);
//        LOG.info("subject = " + subject);
//    }
//
//    @Test
//    public void getSubjects() throws Exception {
//        Map<String, Object> data = subjectService.getSubjects(100, 1);
//        List<Subject> subjects = (List<Subject>) data.getOrDefault("subjects", new ArrayList<>());
//        for (Subject subject : subjects) {
//            LOG.info("subject = " + subject);
//        }
//    }
//
//}