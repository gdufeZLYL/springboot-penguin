/**
 * 模块化JavaScript
 **/
var manageCommentBoardPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        comments: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, comments) {
        manageCommentBoardPage.data.pageNum = pageNum;
        manageCommentBoardPage.data.pageSize = pageSize;
        manageCommentBoardPage.data.totalPageNum = totalPageNum;
        manageCommentBoardPage.data.totalPageSize = totalPageSize;
        manageCommentBoardPage.data.comments = comments;
        //分页初始化
        manageCommentBoardPage.subPageMenuInit();
    },
    firstPage: function () {
        window.location.href = app.URL.manageCommentListUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.manageCommentListUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.manageCommentListUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.manageCommentListUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.manageCommentListUrl() + '?page=' + manageCommentBoardPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '<ul class="pagination">';
        if (manageCommentBoardPage.data.pageNum == 1) {
            subPageStr += '<li class="disabled"><a><span>首页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>上一页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="manageCommentBoardPage.firstPage()"><span>首页</span></a></li>';
            subPageStr += '<li><a onclick="manageCommentBoardPage.prevPage()"><span>上一页</span></a></li>';
        }
        var startPage = (manageCommentBoardPage.data.pageNum-4 > 0 ? manageCommentBoardPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > manageCommentBoardPage.data.totalPageNum ? manageCommentBoardPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + manageCommentBoardPage.data.pageNum);
        console.log('totalPageNum = ' + manageCommentBoardPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == manageCommentBoardPage.data.pageNum) {
                subPageStr += '<li class="active"><a onclick="manageCommentBoardPage.targetPage('+i+')">'+i+'</a></li>';
            } else {
                subPageStr += '<li><a onclick="manageCommentBoardPage.targetPage('+i+')">'+i+'</a></li>';
            }
        }
        if (manageCommentBoardPage.data.pageNum == manageCommentBoardPage.data.totalPageNum) {
            subPageStr += '<li class="disabled"><a><span>下一页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>末页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="manageCommentBoardPage.nextPage()"><span>下一页</span></a></li>';
            subPageStr += '<li><a onclick="manageCommentBoardPage.lastPage()"><span>末页</span></a></li>';
        }
        $('#subPageHead').html(subPageStr);
    },
    deleteCommentAction: function (index) {
        $.ajax({
            url : app.URL.deleteCommentUrl()+index,
            type : "DELETE",
            dataType: "json",
            contentType : "application/json;charset=UTF-8",
            success:function(result) {
                if (result && result['success']) {
                    // 验证通过 刷新页面
                    window.location.reload();
                } else {
                    console.log(result.message);
                }
            },
            error:function(result){
                console.log(result.message);
            }
        });
    }


};