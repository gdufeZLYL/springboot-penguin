package com.qexz.service;

import com.qexz.model.Reply;

import java.util.List;

public interface ReplyService {

    int addReply(Reply reply);

    List<Reply> getReliesByPostId(int postId);
}
