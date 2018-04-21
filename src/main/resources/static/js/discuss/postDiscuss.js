/**
 * 模块JavaScript
 */
var postDiscussPage = {
    data:{
        authorId: 0,
        E: null,
        editor: null,
    },
    init: function (authorId) {
        postDiscussPage.data.authorId = authorId;

        $('#postDiscussSubmitButton').click(function (e) {
            postDiscussPage.postDiscuss();
        });
        /**
         TODO::代码规范,文本编辑器
         */
        postDiscussPage.data.E = window.wangEditor;
        postDiscussPage.data.editor = new postDiscussPage.data.E('#editor'); // 或者 var editor = new E( document.getElementById('editor') )
        postDiscussPage.data.editor.create();
    },
    postDiscuss: function () {
        var authorId = postDiscussPage.data.authorId;
        var editor = postDiscussPage.data.editor;
        var title = $('#postTitle').val();
        //alert(editor.txt.text());
        $.ajax({
            url : app.URL.addPostUrl(),
            type : "POST",
            dataType: "json",
            contentType : "application/json;charset=UTF-8",
            <!-- 向后端传输的数据 -->
            data : JSON.stringify({
                authorId: authorId,
                title: title,
                htmlContent: editor.txt.html(),
                textContent: editor.txt.text(),
            }),
            success:function(result) {
                if (result && result['success']) {
                    // 验证通过 刷新页面
                    //window.location.reload();
                    window.location.href = app.URL.discussUrl();
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