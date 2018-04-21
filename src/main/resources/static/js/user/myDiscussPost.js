/**
 * 模块JavaScript
 */
var myDiscussPostPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        posts: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, posts) {
        myDiscussPostPage.data.pageNum = pageNum;
        myDiscussPostPage.data.pageSize = pageSize;
        myDiscussPostPage.data.totalPageNum = totalPageNum;
        myDiscussPostPage.data.totalPageSize = totalPageSize;
        myDiscussPostPage.data.posts = posts;
        //分页初始化
        myDiscussPostPage.subPageMenuInit();
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
        window.location.href = app.URL.myDiscussPostUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.myDiscussPostUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.myDiscussPostUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.myDiscussPostUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.myDiscussPostUrl() + '?page=' + myDiscussPostPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '';
        if (myDiscussPostPage.data.pageNum == 1) {
            subPageStr += '<a class="item disabled">首页</a>';
            subPageStr += '<a class="item disabled">上一页</a>';
        } else {
            subPageStr += '<a onclick="myDiscussPostPage.firstPage()" class="item">首页</a>';
            subPageStr += '<a onclick="myDiscussPostPage.prevPage()" class="item">上一页</a>';
        }
        var startPage = (myDiscussPostPage.data.pageNum-4 > 0 ? myDiscussPostPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > myDiscussPostPage.data.totalPageNum ? myDiscussPostPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + myDiscussPostPage.data.pageNum);
        console.log('totalPageNum = ' + myDiscussPostPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == myDiscussPostPage.data.pageNum) {
                subPageStr += '<a onclick="myDiscussPostPage.targetPage('+i+')" class="active item">'+i+'</a>';
            } else {
                subPageStr += '<a onclick="myDiscussPostPage.targetPage('+i+')" class="item">'+i+'</a>'
            }
        }
        if (myDiscussPostPage.data.pageNum == myDiscussPostPage.data.totalPageNum) {
            subPageStr += '<a class="item disabled">下一页</a>';
            subPageStr += '<a class="item disabled">末页</a>';
        } else {
            subPageStr += '<a onclick="myDiscussPostPage.nextPage()" class="item">下一页</a>';
            subPageStr += '<a onclick="myDiscussPostPage.lastPage()" class="item">末页</a>';
        }
        $('#subPageMenu').html(subPageStr);
    },
};