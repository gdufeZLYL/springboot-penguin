/**
 * 模块JavaScript
 */
var discussPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        posts: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, posts) {
        discussPage.data.pageNum = pageNum;
        discussPage.data.pageSize = pageSize;
        discussPage.data.totalPageNum = totalPageNum;
        discussPage.data.totalPageSize = totalPageSize;
        discussPage.data.posts = posts;
        //分页初始化
        discussPage.subPageMenuInit();
    },
    firstPage: function () {
        window.location.href = app.URL.discussUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.discussUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.discussUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.discussUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.discussUrl() + '?page=' + discussPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '';
        if (discussPage.data.pageNum == 1) {
            subPageStr += '<a class="item disabled">首页</a>';
            subPageStr += '<a class="item disabled">上一页</a>';
        } else {
            subPageStr += '<a onclick="discussPage.firstPage()" class="item">首页</a>';
            subPageStr += '<a onclick="discussPage.prevPage()" class="item">上一页</a>';
        }
        var startPage = (discussPage.data.pageNum-4 > 0 ? discussPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > discussPage.data.totalPageNum ? discussPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + discussPage.data.pageNum);
        console.log('totalPageNum = ' + discussPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == discussPage.data.pageNum) {
                subPageStr += '<a onclick="discussPage.targetPage('+i+')" class="active item">'+i+'</a>';
            } else {
                subPageStr += '<a onclick="discussPage.targetPage('+i+')" class="item">'+i+'</a>'
            }
        }
        if (discussPage.data.pageNum == discussPage.data.totalPageNum) {
            subPageStr += '<a class="item disabled">下一页</a>';
            subPageStr += '<a class="item disabled">末页</a>';
        } else {
            subPageStr += '<a onclick="discussPage.nextPage()" class="item">下一页</a>';
            subPageStr += '<a onclick="discussPage.lastPage()" class="item">末页</a>';
        }
        $('#subPageMenu').html(subPageStr);
    },
};