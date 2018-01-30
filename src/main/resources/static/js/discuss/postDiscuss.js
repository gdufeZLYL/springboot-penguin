/**
 * 模块JavaScript
 */
var postDiscussPage = {
    data:{
        E: null,
        editor: null,
    },
    init: function () {
        /**
         TODO::代码规范,折叠菜单效果
         */
        $('.ui.accordion').accordion(
            {
                exclusive: true,/*不可打开多节*/
            }
        );
        /**
         TODO::代码规范,难度系数
         */
        $('.ui.star.rating')
            .rating({
                initialRating: 0,
                maxRating: 5,
                disable: true,
            })
        ;
        $('#postDiscussSubmitButton').click(function (e) {
            postDiscussPage.postDiscuss();
        });
        /**
         TODO::代码规范,文本编辑器
         */
        postDiscussPage.data.E = window.wangEditor;
        postDiscussPage.data.editor = new E('#editor') // 或者 var editor = new E( document.getElementById('editor') )
        postDiscussPage.data.editor.create();
    },
    postDiscuss: function () {
        var E = window.wangEditor;
        var editor = new E('#editor');
        alert(editor.txt.text());
    },
};