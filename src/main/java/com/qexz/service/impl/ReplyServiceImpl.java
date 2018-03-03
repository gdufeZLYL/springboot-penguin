package com.qexz.service.impl;

import com.qexz.dao.ReplyMapper;
import com.qexz.model.Reply;
import com.qexz.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService {

    @Autowired
    private ReplyMapper replyMapper;

    @Override
    public int addReply(Reply reply) {
        return replyMapper.insertReply(reply);
    }

    @Override
    public List<Reply> getReliesByPostId(int postId) {
        return replyMapper.getReliesByPostId(postId);
    }
}
