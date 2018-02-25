package com.qexz.service;

import com.qexz.model.Account;

import java.util.List;

public interface AccountService {

    int addAccount(Account account);

    boolean updateAccount(Account account);

    boolean updateAvatarImgUrlById(String avatarImgUrl, int id);

    Account getAccountByUsername(String username);

    List<Account> getAccountsByStudentIds(List<Integer> studentIds);
}
