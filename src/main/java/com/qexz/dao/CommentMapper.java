package com.qexz.dao;

import com.qexz.model.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface CommentMapper {

    int insertComment(@Param("comment") Comment comment);

    List<Comment> getCommentsByPostId(@Param("postId") int postId);
}
