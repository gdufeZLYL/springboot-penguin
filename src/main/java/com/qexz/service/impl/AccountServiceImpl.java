package com.qexz.service.impl;

import com.github.pagehelper.PageHelper;
import com.qexz.common.QexzConst;
import com.qexz.dao.AccountMapper;
import com.qexz.model.Account;
import com.qexz.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service("accountService")
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    @Override
    public int addAccount(Account account) {
        account.setAvatarImgUrl(QexzConst.DEFAULT_AVATAR_IMG_URL);
        return accountMapper.insertAccount(account);
    }

    @Override
    public boolean updateAccount(Account account) {
        return accountMapper.updateAccountById(account) > 0;
    }

    @Override
    public boolean updateAvatarImgUrlById(String avatarImgUrl, int id) {
        return accountMapper.updateAvatarImgUrlById(avatarImgUrl, id) > 0;
    }

    @Override
    public Account getAccountByUsername(String username) {
        return accountMapper.getAccountByUsername(username);
    }

    @Override
    public List<Account> getAccountsByStudentIds(List<Integer> studentIds) {
        return accountMapper.getAccountsByIds(studentIds);
    }

    @Override
    public Map<String, Object> getAccounts(int pageNum, int pageSize) {
        Map<String, Object> data = new HashMap<>();
        int count = accountMapper.getCount();
        if (count == 0) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", 1);
            data.put("totalPageSize", 0);
            data.put("accounts", new ArrayList<>());
            return data;
        }
        int totalPageNum = count % pageSize == 0 ? count / pageSize : count / pageSize + 1;
        if (pageNum > totalPageNum) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", totalPageNum);
            data.put("totalPageSize", 0);
            data.put("accounts", new ArrayList<>());
            return data;
        }
        PageHelper.startPage(pageNum, pageSize);
        List<Account> accounts = accountMapper.getAccounts();
        data.put("pageNum", pageNum);
        data.put("pageSize", pageSize);
        data.put("totalPageNum", totalPageNum);
        data.put("totalPageSize", count);
        data.put("accounts", accounts);
        return data;
    }

    @Override
    public boolean deleteAccount(int id) {
        return accountMapper.deleteAccount(id) > 0;
    }

    @Override
    public boolean disabledAccount(int id) {
        return accountMapper.updateState(id, 1) > 0;
    }

    @Override
    public boolean abledAccount(int id) {
        return accountMapper.updateState(id, 0) > 0;
    }

    @Override
    public List<Account> getAccountsByIds(Set<Integer> ids) {
        return accountMapper.getAccountsByIdSets(ids);
    }

    @Override
    public Account getAccountById(int id) {
        return accountMapper.getAccountById(id);
    }
}
