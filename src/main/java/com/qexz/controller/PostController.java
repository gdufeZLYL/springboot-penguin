package com.qexz.controller;

import com.qexz.dto.AjaxResult;
import com.qexz.model.Post;
import com.qexz.service.PostService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/post")
public class PostController {

    private static Log LOG = LogFactory.getLog(PostController.class);

    @Autowired
    private PostService postService;

    //添加帖子
    @RequestMapping(value="/api/addPost", method= RequestMethod.POST)
    @ResponseBody
    public AjaxResult addPost(@RequestBody Post post) {
        AjaxResult ajaxResult = new AjaxResult();
        int postId = postService.addPost(post);
        return new AjaxResult().setData(postId);
    }

    //更新帖子
    @RequestMapping(value="/api/updatePost", method= RequestMethod.POST)
    @ResponseBody
    public AjaxResult updatePost(@RequestBody Post post) {
        AjaxResult ajaxResult = new AjaxResult();
        boolean result = postService.updatePostById(post);
        return new AjaxResult().setData(result);
    }

    //删除帖子
    @DeleteMapping("/api/deletePost/{id}")
    public AjaxResult deletePost(@PathVariable int id) {
        AjaxResult ajaxResult = new AjaxResult();
        boolean result = postService.deletePostById(id);
        return new AjaxResult().setData(result);
    }
}
