/**
 * 模块JavaScript
 */
var problemSetPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        subjects: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, subjects) {
        problemSetPage.data.pageNum = pageNum;
        problemSetPage.data.pageSize = pageSize;
        problemSetPage.data.totalPageNum = totalPageNum;
        problemSetPage.data.totalPageSize = totalPageSize;
        problemSetPage.data.subjects = subjects;
        //分页初始化
        problemSetPage.subPageMenuInit();
    },
    firstPage: function () {
        window.location.href = app.URL.problemsetUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.problemsetUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.problemsetUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.problemsetUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.problemsetUrl() + '?page=' + problemSetPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '';
        if (problemSetPage.data.pageNum == 1) {
            subPageStr += '<a class="item disabled">首页</a>';
            subPageStr += '<a class="item disabled">上一页</a>';
        } else {
            subPageStr += '<a onclick="problemSetPage.firstPage()" class="item">首页</a>';
            subPageStr += '<a onclick="problemSetPage.prevPage()" class="item">上一页</a>';
        }
        var startPage = (problemSetPage.data.pageNum-4 > 0 ? problemSetPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > problemSetPage.data.totalPageNum ? problemSetPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + problemSetPage.data.pageNum);
        console.log('totalPageNum = ' + problemSetPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == problemSetPage.data.pageNum) {
                subPageStr += '<a onclick="problemSetPage.targetPage('+i+')" class="active item">'+i+'</a>';
            } else {
                subPageStr += '<a onclick="problemSetPage.targetPage('+i+')" class="item">'+i+'</a>'
            }
        }
        if (problemSetPage.data.pageNum == problemSetPage.data.totalPageNum) {
            subPageStr += '<a class="item disabled">下一页</a>';
            subPageStr += '<a class="item disabled">末页</a>';
        } else {
            subPageStr += '<a onclick="problemSetPage.nextPage()" class="item">下一页</a>';
            subPageStr += '<a onclick="problemSetPage.lastPage()" class="item">末页</a>';
        }
        $('#subPageMenu').html(subPageStr);
    },

};