/**
 * 模块JavaScript
 */
var problemListPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        problemsetId: 0,
        questions: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, problemsetId, questions) {
        problemListPage.data.pageNum = pageNum;
        problemListPage.data.pageSize = pageSize;
        problemListPage.data.totalPageNum = totalPageNum;
        problemListPage.data.totalPageSize = totalPageSize;
        problemListPage.data.problemsetId = problemsetId;
        problemListPage.data.questions = questions;
        //分页初始化
        problemListPage.subPageMenuInit();

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
    },
    firstPage: function () {
        var problemsetId = problemListPage.data.problemsetId;
        window.location.href = app.URL.problemListUrl(problemsetId) + '?page=1';
    },
    prevPage: function () {
        var problemsetId = problemListPage.data.problemsetId;
        window.location.href = app.URL.problemListUrl(problemsetId) + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        var problemsetId = problemListPage.data.problemsetId;
        window.location.href = app.URL.problemListUrl(problemsetId) + '?page=' + page;
    },
    nextPage: function () {
        var problemsetId = problemListPage.data.problemsetId;
        window.location.href = app.URL.problemListUrl(problemsetId) + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        var problemsetId = problemListPage.data.problemsetId;
        window.location.href = app.URL.problemListUrl(problemsetId) + '?page=' + problemListPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '';
        if (problemListPage.data.pageNum == 1) {
            subPageStr += '<a class="item disabled">首页</a>';
            subPageStr += '<a class="item disabled">上一页</a>';
        } else {
            subPageStr += '<a onclick="problemListPage.firstPage()" class="item">首页</a>';
            subPageStr += '<a onclick="problemListPage.prevPage()" class="item">上一页</a>';
        }
        var startPage = (problemListPage.data.pageNum-4 > 0 ? problemListPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > problemListPage.data.totalPageNum ? problemListPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + problemListPage.data.pageNum);
        console.log('totalPageNum = ' + problemListPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == problemListPage.data.pageNum) {
                subPageStr += '<a onclick="problemListPage.targetPage('+i+')" class="active item">'+i+'</a>';
            } else {
                subPageStr += '<a onclick="problemListPage.targetPage('+i+')" class="item">'+i+'</a>'
            }
        }
        if (problemListPage.data.pageNum == problemListPage.data.totalPageNum) {
            subPageStr += '<a class="item disabled">下一页</a>';
            subPageStr += '<a class="item disabled">末页</a>';
        } else {
            subPageStr += '<a onclick="problemListPage.nextPage()" class="item">下一页</a>';
            subPageStr += '<a onclick="problemListPage.lastPage()" class="item">末页</a>';
        }
        $('#subPageMenu').html(subPageStr);
    },
};