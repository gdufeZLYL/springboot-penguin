package com.qexz.dao;

import com.qexz.model.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
@Mapper
public interface AccountMapper {

    int insertAccount(@Param("account") Account account);

    int updateAccountById(@Param("account") Account account);

    int updateAvatarImgUrlById(@Param("avatarImgUrl") String avatarImgUrl, @Param("id") int id);

    Account getAccountByUsername(@Param("username") String username);

    List<Account> getAccountsByIds(@Param("studentIds") List<Integer> studentIds);

    int getCount();

    List<Account> getAccounts();

    int deleteAccount(@Param("id") int id);

    int updateState(@Param("id") int id, @Param("state") int state);

    List<Account> getAccountsByIdSets(@Param("ids") Set<Integer> ids);

    Account getAccountById(@Param("id") int id);
}
