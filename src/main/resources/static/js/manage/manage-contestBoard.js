/**
 * 模块化JavaScript
 **/
var manageContestBoardPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        contests: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, contests) {
        manageContestBoardPage.data.pageNum = pageNum;
        manageContestBoardPage.data.pageSize = pageSize;
        manageContestBoardPage.data.totalPageNum = totalPageNum;
        manageContestBoardPage.data.totalPageSize = totalPageSize;
        manageContestBoardPage.data.contests = contests;
        //分页初始化
        manageContestBoardPage.subPageMenuInit();
    },
    firstPage: function () {
        window.location.href = app.URL.manageContestListUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.manageContestListUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.manageContestListUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.manageContestListUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.manageContestListUrl() + '?page=' + manageContestBoardPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '<ul class="pagination">';
        if (manageContestBoardPage.data.pageNum == 1) {
            subPageStr += '<li class="disabled"><a><span>首页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>上一页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="manageContestBoardPage.firstPage()"><span>首页</span></a></li>';
            subPageStr += '<li><a onclick="manageContestBoardPage.prevPage()"><span>上一页</span></a></li>';
        }
        var startPage = (manageContestBoardPage.data.pageNum-4 > 0 ? manageContestBoardPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > manageContestBoardPage.data.totalPageNum ? manageContestBoardPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + manageContestBoardPage.data.pageNum);
        console.log('totalPageNum = ' + manageContestBoardPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == manageContestBoardPage.data.pageNum) {
                subPageStr += '<li class="active"><a onclick="manageContestBoardPage.targetPage('+i+')">'+i+'</a></li>';
            } else {
                subPageStr += '<li><a onclick="manageContestBoardPage.targetPage('+i+')">'+i+'</a></li>';
            }
        }
        if (manageContestBoardPage.data.pageNum == manageContestBoardPage.data.totalPageNum) {
            subPageStr += '<li class="disabled"><a><span>下一页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>末页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="manageContestBoardPage.nextPage()"><span>下一页</span></a></li>';
            subPageStr += '<li><a onclick="manageContestBoardPage.lastPage()"><span>末页</span></a></li>';
        }
        $('#subPageHead').html(subPageStr);
    },
};