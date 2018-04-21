/**
 * 模块化JavaScript
 **/
var managePostBoardPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        posts: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, posts) {
        managePostBoardPage.data.pageNum = pageNum;
        managePostBoardPage.data.pageSize = pageSize;
        managePostBoardPage.data.totalPageNum = totalPageNum;
        managePostBoardPage.data.totalPageSize = totalPageSize;
        managePostBoardPage.data.posts = posts;
        //分页初始化
        managePostBoardPage.subPageMenuInit();

        //编辑考试，取消考试编辑
        $('#cancelUpdateSubjectBtn').click(function(){
            $("#updateSubjectModal").modal('hide');
        });

        //编辑考试，确定保存考试
        $('#confirmUpdateSubjectBtn').click(function(){
            managePostBoardPage.updateSubjectAction();
        });
    },
    firstPage: function () {
        window.location.href = app.URL.managePostListUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.managePostListUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.managePostListUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.managePostListUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.managePostListUrl() + '?page=' + managePostBoardPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '<ul class="pagination">';
        if (managePostBoardPage.data.pageNum == 1) {
            subPageStr += '<li class="disabled"><a><span>首页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>上一页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="managePostBoardPage.firstPage()"><span>首页</span></a></li>';
            subPageStr += '<li><a onclick="managePostBoardPage.prevPage()"><span>上一页</span></a></li>';
        }
        var startPage = (managePostBoardPage.data.pageNum-4 > 0 ? managePostBoardPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > managePostBoardPage.data.totalPageNum ? managePostBoardPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + managePostBoardPage.data.pageNum);
        console.log('totalPageNum = ' + managePostBoardPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == managePostBoardPage.data.pageNum) {
                subPageStr += '<li class="active"><a onclick="managePostBoardPage.targetPage('+i+')">'+i+'</a></li>';
            } else {
                subPageStr += '<li><a onclick="managePostBoardPage.targetPage('+i+')">'+i+'</a></li>';
            }
        }
        if (managePostBoardPage.data.pageNum == managePostBoardPage.data.totalPageNum) {
            subPageStr += '<li class="disabled"><a><span>下一页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>末页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="managePostBoardPage.nextPage()"><span>下一页</span></a></li>';
            subPageStr += '<li><a onclick="managePostBoardPage.lastPage()"><span>末页</span></a></li>';
        }
        $('#subPageHead').html(subPageStr);
    },
    deletePostAction: function (index) {
        $.ajax({
            url : app.URL.deletePostUrl()+index,
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