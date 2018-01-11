
$(function(){
    contestIndexPage.init();
    window.setInterval("contestIndexPage.run();", 1000);
    /*TODO::时间处理*/
    var killTime = new Date();
    killTime.setDate(killTime.getDate()+5);
    $("#contest-time-countdown").countdown(killTime, function (event) {
        // 事件格式
        var format = event.strftime("考试倒计时: %D天 %H时 %M分 %S秒");
        console.log(format);
        $("#contest-time-countdown").html(format);
    });
});

/**
 * 模块JavaScript
 */
var contestIndexPage = {
    data:{
        nowTime: null
    },
    init: function () {
        $.get(app.URL.now(), {}, function (result) {
            if (result && result['success']) {
                //console.log(result['data']);
                contestIndexPage.data.nowTime = app.toTimeStamp(result['data']);
                console.log("服务器当前的时间==========" + contestIndexPage.data.nowTime);
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