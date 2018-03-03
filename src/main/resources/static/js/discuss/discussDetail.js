/**
 * 模块JavaScript
 */
var discussDetailPage = {
    data:{
        post: null,
    },
    init: function (post) {
        discussDetailPage.data.post = post;

        $('#postContent').html(post.htmlContent);
    },
};