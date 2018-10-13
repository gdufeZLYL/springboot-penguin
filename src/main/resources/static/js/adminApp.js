/**
 * 模块JavaScript
 */
var app = {
    data:{
        nowTime: null
    },
    // 封装相关的ajax的url
    URL: {
        now: function () {
            return "/time/now";
        },
        checkLoginUrl: function () {
            return "/account/api/login";
        },
        logoutUrl: function () {
            return "/account/logout";
        },
        homeUrl: function () {
            return "/";
        },
        problemsetUrl: function () {
            return "/problemset/list";
        },
        updateAccountUrl: function () {
            return "/account/api/updateAccount";
        },
        updatePasswordUrl: function () {
            return "/account/api/updatePassword";
        },
    },
    /**
     * 全局初始化:服务器时间获取,登录功能,退出登录
     */
    init: function () {
        /**
         * 退出登录
         */
        $('#logout').click(function (e) {
            window.location.href = app.URL.logoutUrl();
        });
    },
    convertTime: function (localDateTime) {
        var year = localDateTime.year;
        var monthValue = localDateTime.monthValue;
        var dayOfMonth = localDateTime.dayOfMonth;
        var hour = localDateTime.hour;
        var minute = localDateTime.minute;
        var second = localDateTime.second;
        return year + "-" + monthValue + "-" + dayOfMonth + " " + hour + ":" + minute + ":" + second;
    },
    toTimeStamp: function (localDateTime) {
        var currTime = localDateTime.year + "-" + localDateTime.monthValue
            + "-" + localDateTime.dayOfMonth + " " + localDateTime.hour
            + ":" + localDateTime.minute + ":" + localDateTime.second;
        //console.log("currTime = " + currTime);
        //console.log("new Date(currTime).valueOf() = " + new Date(currTime).valueOf());
        return new Date(currTime).valueOf();
    },
    /**
     * 时间戳转化为年 月 日 时 分 秒
     * number: 传入时间戳
     * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
     */
    formatTime: function (number, format) {

        var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
        var returnArr = [];

        var date = new Date(number);
        returnArr.push(date.getFullYear());
        returnArr.push(app.formatNumber(date.getMonth() + 1));
        returnArr.push(app.formatNumber(date.getDate()));

        returnArr.push(app.formatNumber(date.getHours()));
        returnArr.push(app.formatNumber(date.getMinutes()));
        returnArr.push(app.formatNumber(date.getSeconds()));

        for (var i in returnArr) {
            format = format.replace(formateArr[i], returnArr[i]);
        }
        return format;
    },
    formatNumber: function (n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
    },
};