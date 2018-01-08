package com.qexz.dao;

import com.qexz.model.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface AccountMapper {

    int insertAccount(@Param("account") Account account);

    int updateAccountById(@Param("account") Account account);

    int updateAvatarImgUrlById(@Param("avatarImgUrl") String avatarImgUrl, @Param("id") int id);

    Account getAccountByUsername(@Param("username") String username);
}
