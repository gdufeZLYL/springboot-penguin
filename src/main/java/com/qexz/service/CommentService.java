package com.qexz.service;

import com.qexz.model.Comment;

import java.util.List;
import java.util.Map;

public interface CommentService {

    int addComment(Comment comment);

    List<Comment> getCommentsByPostId(int postId);

    Map<String, Object> getComments(int pageNum, int pageSize);

    boolean deleteCommentById(int id);
}
