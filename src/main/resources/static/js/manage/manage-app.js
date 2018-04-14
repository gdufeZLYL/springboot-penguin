/**
 * 模块JavaScript
 */
var app = {
    data:{
        nowTime: null,
        contextPath: null,
    },
    // 封装相关的ajax的url
    URL: {
        now: function () {
            return app.data.contextPath+"/time/now";
        },
        checkLoginUrl: function () {
            return app.data.contextPath+"/account/api/login";
        },
        logoutUrl: function () {
            return app.data.contextPath+"/account/logout";
        },
        homeUrl: function () {
            return app.data.contextPath+"/";
        },
        problemsetUrl: function () {
            return app.data.contextPath+"/problemset/list";
        },
        updateAccountUrl: function () {
            return app.data.contextPath+"/account/api/updateAccount";
        },
        updatePasswordUrl: function () {
            return app.data.contextPath+"/account/api/updatePassword";
        },
        manageContestListUrl: function () {
            return app.data.contextPath+"/manage/contest/list";
        },
        addContestUrl: function () {
            return app.data.contextPath+"/contest/api/addContest"
        },
        updateContestUrl: function () {
            return app.data.contextPath+"/contest/api/updateContest"
        },
        deleteContestUrl: function () {
            return app.data.contextPath+"/contest/api/deleteContest/";
        },
        finishContestUrl: function () {
            return app.data.contextPath+"/contest/api/finishContest/";
        },
        addQuestionUrl: function () {
            return app.data.contextPath+"/question/api/addQuestion";
        },
        updateQuestionUrl: function () {
            return app.data.contextPath+"/question/api/updateQuestion"
        },
        deleteQuestionUrl: function () {
            return app.data.contextPath+"/question/api/deleteQuestion/";
        },
        manageQuestionUrl: function () {
            return app.data.contextPath+"/manage/question/list"
        },
        manageResultContestListUrl: function () {
            return app.data.contextPath+"/manage/result/contest/list";
        },
        manageResultStudentListUrl: function (contestId) {
            return app.data.contextPath+"/manage/result/contest/"+contestId+"/list";
        },
        finishGradeUrl: function () {
            return app.data.contextPath+"/grade/api/finishGrade"
        },
        manageAccountListUrl: function () {
            return app.data.contextPath+"/manage/account/list";
        },
        addAccountUrl: function () {
            return app.data.contextPath+"/account/api/addAccount";
        },
        updateAccountUrl: function () {
            return app.data.contextPath+"/account/api/updateManegeAccount";
        },
        deleteAccountUrl: function () {
            return app.data.contextPath+"/account/api/deleteAccount/";
        },
        abledAccountUrl: function () {
            return app.data.contextPath+"/account/api/abledAccount/";
        },
        disabledAccountUrl: function () {
            return app.data.contextPath+"/account/api/disabledAccount/";
        },
        manageSubjectListUrl: function () {
            return app.data.contextPath+"/manage/subject/list"
        },
        addSubjectUrl: function () {
            return app.data.contextPath+"/subject/api/addSubject";
        },
        updateSubjectUrl: function () {
            return app.data.contextPath+"/subject/api/updateSubject"
        },
        deleteSubjectUrl: function () {
            return app.data.contextPath+"/subject/api/deleteSubject/";
        },
        managePostListUrl: function () {
            return app.data.contextPath+"/manage/post/list"
        },
        updatePostUrl: function () {
            return app.data.contextPath+"/post/api/updatePost"
        },
        deletePostUrl: function () {
            return app.data.contextPath+"/post/api/deletePost/";
        },
        manageCommentListUrl: function () {
            return app.data.contextPath+"/manage/comment/list"
        },
        deleteCommentUrl: function () {
            return app.data.contextPath+"/comment/api/deleteComment/";
        },

    },
    /**
     * 全局初始化:服务器时间获取,登录功能,退出登录
     */
    init: function (contextPath) {
        app.data.contextPath = contextPath;
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