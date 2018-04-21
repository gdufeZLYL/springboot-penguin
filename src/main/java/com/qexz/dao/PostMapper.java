package com.qexz.dao;

import com.qexz.model.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
@Mapper
public interface PostMapper {

    int insertPost(@Param("post") Post post);

    int updatePostById(@Param("post") Post post);

    Post getPostById(@Param("id") int id);

    int deletePostById(@Param("id") int id);

    int getCount();

    List<Post> getPosts();

    int updateReplyNumById(@Param("id") int id, @Param("lastReplyTime") Date lastReplyTime);

    int getCountByAuthorId(@Param("authorId") int authorId);

    List<Post> getPostsByAuthorId(@Param("authorId") int authorId);
}
