/**
 * 模块JavaScript
 */
var contestIndexPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        contests: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, contests) {
        contestIndexPage.data.pageNum = pageNum;
        contestIndexPage.data.pageSize = pageSize;
        contestIndexPage.data.totalPageNum = totalPageNum;
        contestIndexPage.data.totalPageSize = totalPageSize;
        contestIndexPage.data.contests = contests;
        //分页初始化
        contestIndexPage.subPageMenuInit();

        //考试倒计时
        var killTime = new Date();
        //killTime.setDate(killTime.getDate()+5);
        for (var i = 0; i < contests.length; i++) {
            if (contests[i].state == 0) {
                killTime = new Date(contests[i].startTime);
            } else {
                break;
            }
        }
        $("#contest-time-countdown").countdown(killTime, function (event) {
            // 事件格式
            var format = event.strftime("考试倒计时: %D天 %H时 %M分 %S秒");
            console.log(format);
            $("#contest-time-countdown").html(format);
        }).on('finish.countdown', function () {
            // 事件完成后回调事件，获取秒杀地址，控制业务逻辑
            window.location.reload();
        });
    },
    firstPage: function () {
        window.location.href = app.URL.contestIndexUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.contestIndexUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.contestIndexUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.contestIndexUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.contestIndexUrl() + '?page=' + contestIndexPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '';
        if (contestIndexPage.data.pageNum == 1) {
            subPageStr += '<a class="item disabled">首页</a>';
            subPageStr += '<a class="item disabled">上一页</a>';
        } else {
            subPageStr += '<a onclick="contestIndexPage.firstPage()" class="item">首页</a>';
            subPageStr += '<a onclick="contestIndexPage.prevPage()" class="item">上一页</a>';
        }
        var startPage = (contestIndexPage.data.pageNum-4 > 0 ? contestIndexPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > contestIndexPage.data.totalPageNum ? contestIndexPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + contestIndexPage.data.pageNum);
        console.log('totalPageNum = ' + contestIndexPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == contestIndexPage.data.pageNum) {
                subPageStr += '<a onclick="contestIndexPage.targetPage('+i+')" class="active item">'+i+'</a>';
            } else {
                subPageStr += '<a onclick="contestIndexPage.targetPage('+i+')" class="item">'+i+'</a>'
            }
        }
        if (contestIndexPage.data.pageNum == contestIndexPage.data.totalPageNum) {
            subPageStr += '<a class="item disabled">下一页</a>';
            subPageStr += '<a class="item disabled">末页</a>';
        } else {
            subPageStr += '<a onclick="contestIndexPage.nextPage()" class="item">下一页</a>';
            subPageStr += '<a onclick="contestIndexPage.lastPage()" class="item">末页</a>';
        }
        $('#subPageMenu').html(subPageStr);
    },
    startToContestAction: function (contestId) {
        window.location.href = app.URL.contestDetailUrl()+contestId;
    },
};