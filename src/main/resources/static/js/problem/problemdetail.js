
$(function(){
    problemDetailPage.init();
    window.setInterval("problemDetailPage.run();", 1000);
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
});

/**
 * 模块JavaScript
 */
var problemDetailPage = {
    data:{
        nowTime: null
    },
    init: function () {
        $.get(app.URL.now(), {}, function (result) {
            if (result && result['success']) {
                //console.log(result['data']);
                problemDetailPage.data.nowTime = app.toTimeStamp(result['data']);
                console.log("服务器当前的时间==========" + problemDetailPage.data.nowTime);
            } else {
                console.log('结果:' + result);
                console.log('result' + result);
            }
        });
    },
    run: function () {
        this.data.nowTime = this.data.nowTime + 1000;
        //console.log("this.data.nowTime = " + this.data.nowTime);
        document.getElementById("current_server_timer").innerHTML =
            app.formatTime(this.data.nowTime, "Y-M-D h:m:s");
    }
};