package com.qexz.service.impl;

import com.qexz.common.QexzConst;
import com.qexz.dao.AccountMapper;
import com.qexz.model.Account;
import com.qexz.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
