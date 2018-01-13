
$(function(){
    discussDetailPage.init();
    window.setInterval("discussDetailPage.run();", 1000);
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
});

/**
 * 模块JavaScript
 */
var discussDetailPage = {
    data:{
        nowTime: null
    },
    init: function () {
        $.get(app.URL.now(), {}, function (result) {
            if (result && result['success']) {
                //console.log(result['data']);
                discussDetailPage.data.nowTime = app.toTimeStamp(result['data']);
                console.log("服务器当前的时间==========" + discussDetailPage.data.nowTime);
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