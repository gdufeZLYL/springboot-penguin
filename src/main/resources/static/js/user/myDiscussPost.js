/**
 TODO::代码规范,点击上传图片效果
 */
$(document)
    .ready(function() {
        $('.card .dimmer')
            .dimmer({
                on: 'hover'
            })
        ;
    })
;
$(function(){
    myDiscussPostPage.init();
    window.setInterval("myDiscussPostPage.run();", 1000);
});

/**
 * 模块JavaScript
 */
var myDiscussPostPage = {
    data:{
        nowTime: null
    },
    init: function () {
        $.get(app.URL.now(), {}, function (result) {
            if (result && result['success']) {
                //console.log(result['data']);
                myDiscussPostPage.data.nowTime = app.toTimeStamp(result['data']);
                console.log("服务器当前的时间==========" + myDiscussPostPage.data.nowTime);
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