/**
 * 模块JavaScript
 */
var discussDetailPage = {
    data:{
        post: null,
        comments: [],
        userId: 0,
    },
    init: function (post, comments, userId) {
        discussDetailPage.data.post = post;
        discussDetailPage.data.comments = comments;
        discussDetailPage.data.userId = userId;

        $('#postContent').html(post.htmlContent);

        /**
         * 回复模态框关闭按钮触发
         */
        $('#cancelReplyBtn').click(function (e) {
            $('#replyModal').modal('hide');
        });
        /**
         * 回复模态框登录按钮触发
         */
        $('#confirmReplyBtn').click(function (e) {
            discussDetailPage.addReplyAction();
        });
    },
    addCommentsAction: function () {
        var userId = discussDetailPage.data.userId;
        var post = discussDetailPage.data.post;
        var content = $('#commentContent').val();

        $.ajax({
            url : app.URL.addCommentUrl(),
            type : "POST",
            dataType: "json",
            contentType : "application/json;charset=UTF-8",
            <!-- 向后端传输的数据 -->
            data : JSON.stringify({
                userId: userId,
                postId: post.id,
                content: content,
            }),
            success:function(result) {
                if (result && result['success']) {
                    // 验证通过 刷新页面
                    window.location.reload();
                } else {
                    console.log(result.message);
                }
            },
            error:function(result){
                console.log(result.message);
            }
        });
    },
    /**
     * 回复模态框显示
     */
    showReplyModal: function(index, atuserId) {
        var comments = discussDetailPage.data.comments;
        $('#replyCommentId').val(comments[index].id);
        $('#replyAtuserId').val(atuserId);
        $('#replyModal').modal('show');
    },
    addReplyAction: function () {
        var userId = discussDetailPage.data.userId;
        var post = discussDetailPage.data.post;
        var commentId = $('#replyCommentId').val();
        var atuserId = $('#replyAtuserId').val();
        var content = $('#replyContent').val();

        $.ajax({
            url : app.URL.addReplyUrl(),
            type : "POST",
            dataType: "json",
            contentType : "application/json;charset=UTF-8",
            <!-- 向后端传输的数据 -->
            data : JSON.stringify({
                userId: userId,
                atuserId: atuserId,
                postId: post.id,
                commentId: commentId,
                content: content,
            }),
            success:function(result) {
                if (result && result['success']) {
                    // 验证通过 刷新页面
                    window.location.reload();
                } else {
                    console.log(result.message);
                }
            },
            error:function(result){
                console.log(result.message);
            }
        });
    },
};