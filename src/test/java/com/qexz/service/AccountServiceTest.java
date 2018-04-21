//package com.qexz.service;
//
//import com.qexz.common.QexzConst;
//import com.qexz.model.Account;
//import org.apache.commons.logging.Log;
//import org.apache.commons.logging.LogFactory;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@ActiveProfiles("dev")
//public class AccountServiceTest {
//
//    private static Log LOG = LogFactory.getLog(AccountServiceTest.class);
//
//    @Autowired
//    private AccountService accountService;
//
//    @Test
//    public void addAccount() throws Exception {
//        Account account = new Account();
//        account.setName("曾庆熙");
//        account.setUsername("14251104208");
//        account.setPassword("123456");
//        account.setQq("1394176783");
//        account.setPhone("15622110487");
//        account.setEmail("zzqnxx@foxmail.com");
//        account.setDescription("搬砖");
//        account.setLevel(0);
//        int result = accountService.addAccount(account);
//        LOG.info("result = " + result);
//    }
//
//    @Test
//    public void updateAccount() throws Exception {
//        Account account = new Account();
//        account.setId(1);
//        account.setPassword("123456");
//        account.setQq("1394176783");
//        account.setPhone("15622110487");
//        account.setEmail("zzqnxx@foxmail.com");
//        account.setDescription("搬砖");
//        boolean result = accountService.updateAccount(account);
//        LOG.info("result = " + result);
//    }
//
//    @Test
//    public void updateAvatarImgUrlById() throws Exception {
//        boolean result = accountService.updateAvatarImgUrlById(QexzConst.DEFAULT_AVATAR_IMG_URL+"1", 1);
//        LOG.info("result = " + result);
//    }
//
//    @Test
//    public void getAccountByUsername() throws Exception {
//        Account account = accountService.getAccountByUsername("14251104208");
//        LOG.info("account = " + account);
//    }
//
//}