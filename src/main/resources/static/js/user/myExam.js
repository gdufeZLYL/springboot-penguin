/**
 * 模块JavaScript
 */
var myExamPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        grades: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, grades) {
        myExamPage.data.pageNum = pageNum;
        myExamPage.data.pageSize = pageSize;
        myExamPage.data.totalPageNum = totalPageNum;
        myExamPage.data.totalPageSize = totalPageSize;
        myExamPage.data.grades = grades;
        //分页初始化
        myExamPage.subPageMenuInit();
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
    },
    firstPage: function () {
        window.location.href = app.URL.myExamUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.myExamUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.myExamUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.myExamUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.myExamUrl() + '?page=' + myExamPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '';
        if (myExamPage.data.pageNum == 1) {
            subPageStr += '<a class="item disabled">首页</a>';
            subPageStr += '<a class="item disabled">上一页</a>';
        } else {
            subPageStr += '<a onclick="myExamPage.firstPage()" class="item">首页</a>';
            subPageStr += '<a onclick="myExamPage.prevPage()" class="item">上一页</a>';
        }
        var startPage = (myExamPage.data.pageNum-4 > 0 ? myExamPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > myExamPage.data.totalPageNum ? myExamPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + myExamPage.data.pageNum);
        console.log('totalPageNum = ' + myExamPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == myExamPage.data.pageNum) {
                subPageStr += '<a onclick="myExamPage.targetPage('+i+')" class="active item">'+i+'</a>';
            } else {
                subPageStr += '<a onclick="myExamPage.targetPage('+i+')" class="item">'+i+'</a>'
            }
        }
        if (myExamPage.data.pageNum == myExamPage.data.totalPageNum) {
            subPageStr += '<a class="item disabled">下一页</a>';
            subPageStr += '<a class="item disabled">末页</a>';
        } else {
            subPageStr += '<a onclick="myExamPage.nextPage()" class="item">下一页</a>';
            subPageStr += '<a onclick="myExamPage.lastPage()" class="item">末页</a>';
        }
        $('#subPageMenu').html(subPageStr);
    },
};