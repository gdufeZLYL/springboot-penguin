/**
 * 模块JavaScript
 */
var problemDetailPage = {
    data:{
        question: null,
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
        /**
         TODO::代码规范,代码高亮
         */
        hljs.initHighlightingOnLoad();
    },
};