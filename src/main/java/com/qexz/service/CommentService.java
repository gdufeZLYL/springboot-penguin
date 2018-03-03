package com.qexz.service;

import com.qexz.model.Comment;

import java.util.List;

public interface CommentService {

    int addComment(Comment comment);

    List<Comment> getCommentsByPostId(int postId);
}
