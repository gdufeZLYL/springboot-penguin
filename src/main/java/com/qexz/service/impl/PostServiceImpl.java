package com.qexz.service.impl;

import com.github.pagehelper.PageHelper;
import com.qexz.dao.PostMapper;
import com.qexz.model.Post;
import com.qexz.service.PostService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("postService")
public class PostServiceImpl implements PostService {

    private static Log LOG = LogFactory.getLog(PostServiceImpl.class);

    @Autowired
    private PostMapper postMapper;

    @Override
    public int addPost(Post post) {
        return postMapper.insertPost(post);
    }

    @Override
    public boolean updatePostById(Post post) {
        return postMapper.updatePostById(post) > 0;
    }

    @Override
    public boolean deletePostById(int id) {
        return postMapper.deletePostById(id) > 0;
    }

    @Override
    public Map<String, Object> getPosts(int pageNum, int pageSize) {
        Map<String, Object> data = new HashMap<>();
        int count = postMapper.getCount();
        if (count == 0) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", 1);
            data.put("totalPageSize", 0);
            data.put("posts", new ArrayList<>());
            return data;
        }
        int totalPageNum = count % pageSize == 0 ? count / pageSize : count / pageSize + 1;
        if (pageNum > totalPageNum) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", totalPageNum);
            data.put("totalPageSize", 0);
            data.put("posts", new ArrayList<>());
            return data;
        }
        PageHelper.startPage(pageNum, pageSize);
        List<Post> posts = postMapper.getPosts();
        data.put("pageNum", pageNum);
        data.put("pageSize", pageSize);
        data.put("totalPageNum", totalPageNum);
        data.put("totalPageSize", count);
        data.put("posts", posts);
        return data;
    }

    @Override
    public Post getPostById(int id) {
        return postMapper.getPostById(id);
    }

    @Override
    public boolean updateReplyNumById(int id) {
        return postMapper.updateReplyNumById(id, new Date()) > 0;
    }

    @Override
    public Map<String, Object> getPostsByAuthorId(int pageNum, int pageSize, int authorId) {
        Map<String, Object> data = new HashMap<>();
        int count = postMapper.getCountByAuthorId(authorId);
        if (count == 0) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", 1);
            data.put("totalPageSize", 0);
            data.put("posts", new ArrayList<>());
            return data;
        }
        int totalPageNum = count % pageSize == 0 ? count / pageSize : count / pageSize + 1;
        if (pageNum > totalPageNum) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", totalPageNum);
            data.put("totalPageSize", 0);
            data.put("posts", new ArrayList<>());
            return data;
        }
        PageHelper.startPage(pageNum, pageSize);
        List<Post> posts = postMapper.getPostsByAuthorId(authorId);
        data.put("pageNum", pageNum);
        data.put("pageSize", pageSize);
        data.put("totalPageNum", totalPageNum);
        data.put("totalPageSize", count);
        data.put("posts", posts);
        return data;
    }
}
