package com.qexz.service.impl;

import com.qexz.dao.CommentMapper;
import com.qexz.model.Comment;
import com.qexz.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("commentService")
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentMapper commentMapper;

    @Override
    public int addComment(Comment comment) {
        return commentMapper.insertComment(comment);
    }

    @Override
    public List<Comment> getCommentsByPostId(int postId) {
        return commentMapper.getCommentsByPostId(postId);
    }
}
