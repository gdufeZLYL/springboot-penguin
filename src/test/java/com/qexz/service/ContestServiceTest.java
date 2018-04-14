//package com.qexz.service;
//
//import com.qexz.model.Contest;
//import org.apache.commons.logging.Log;
//import org.apache.commons.logging.LogFactory;
//import org.apache.commons.logging.impl.SLF4JLocationAwareLog;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.List;
//import java.util.Map;
//
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@ActiveProfiles("dev")
//public class ContestServiceTest {
//
//    private static Log LOG = LogFactory.getLog(ContestServiceTest.class);
//
//    @Autowired
//    private ContestService contestService;
//
//    @Test
//    public void addContest() throws Exception {
//        Contest contest = new Contest();
//        contest.setTitle("广东财经大学2017年数据库原理与应用考试试题A卷");
//        contest.setSubjectId(8);
//
//        //获得2010年9月13日22点36分01秒 的Date对象
//        DateFormat startTimeDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date startTime = startTimeDateFormat.parse("2018-03-16 09:00:00");
//        contest.setStartTime(startTime);
//
//        DateFormat endTimeDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date endTime = endTimeDateFormat.parse("2018-03-16 11:00:00");
//        contest.setEndTime(endTime);
//
//        int result = contestService.addContest(contest);
//        LOG.info("result = " + result);
//    }
//
//    @Test
//    public void updateContest() throws Exception {
//        Contest contest = contestService.getContestById(1);
//        contest.setTitle("广东财经大学2017年数据库原理与应用考试试题B卷");
//        boolean result = contestService.updateContest(contest);
//        LOG.info("result = " + result);
//    }
//
//    @Test
//    public void getContestById() throws Exception {
//        Contest contest = contestService.getContestById(1);
//        LOG.info("contest = " + contest);
//    }
//
//    @Test
//    public void getContests() throws Exception {
//        Map<String, Object> data = contestService.getContests(1, 10);
//        List<Contest> contests = (List<Contest>) data.get("contests");
//        for (Contest contest : contests) {
//            LOG.info("contest = " + contest);
//        }
//    }
//
//}