package com.qexz.service;

import com.qexz.model.Account;

public interface AccountService {

    int addAccount(Account account);

    boolean updateAccount(Account account);

    boolean updateAvatarImgUrlById(String avatarImgUrl, int id);

    Account getAccountByUsername(String username);
}
