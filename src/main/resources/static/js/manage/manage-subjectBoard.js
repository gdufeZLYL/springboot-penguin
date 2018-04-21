/**
 * 模块化JavaScript
 **/
var manageSubjectBoardPage = {
    data:{
        pageNum: 0,
        pageSize: 0,
        totalPageNum: 0,
        totalPageSize: 0,
        subjects: [],
    },
    init: function (pageNum, pageSize, totalPageNum, totalPageSize, subjects) {
        manageSubjectBoardPage.data.pageNum = pageNum;
        manageSubjectBoardPage.data.pageSize = pageSize;
        manageSubjectBoardPage.data.totalPageNum = totalPageNum;
        manageSubjectBoardPage.data.totalPageSize = totalPageSize;
        manageSubjectBoardPage.data.subjects = subjects;
        //分页初始化
        manageSubjectBoardPage.subPageMenuInit();

        //新增考试，弹出新增窗口
        $("#addSubjectBtn").click(function () {
            //输入框初始化数据
            manageSubjectBoardPage.initAddSubjectData();
            $("#addSubjectModal").modal({
                keyboard : false,
                show : true,
                backdrop : "static"
            });
        });

        //新增考试，取消考试增加
        $('#cancelAddSubjectBtn').click(function(){
            $("#addSubjectModal").modal('hide');
        });

        //新增考试，确定增加考试
        $('#confirmAddSubjectBtn').click(function(){
            manageSubjectBoardPage.addSubjectAction();
        });

        //编辑考试，取消考试编辑
        $('#cancelUpdateSubjectBtn').click(function(){
            $("#updateSubjectModal").modal('hide');
        });

        //编辑考试，确定保存考试
        $('#confirmUpdateSubjectBtn').click(function(){
            manageSubjectBoardPage.updateSubjectAction();
        });
    },
    firstPage: function () {
        window.location.href = app.URL.manageSubjectListUrl() + '?page=1';
    },
    prevPage: function () {
        window.location.href = app.URL.manageSubjectListUrl() + '?page=' + (pageNum-1);
    },
    targetPage: function (page) {
        window.location.href = app.URL.manageSubjectListUrl() + '?page=' + page;
    },
    nextPage: function () {
        window.location.href = app.URL.manageSubjectListUrl() + '?page=' + (pageNum+1);
    },
    lastPage: function () {
        window.location.href = app.URL.manageSubjectListUrl() + '?page=' + manageSubjectBoardPage.data.totalPageNum;
    },
    subPageMenuInit: function(){
        var subPageStr = '<ul class="pagination">';
        if (manageSubjectBoardPage.data.pageNum == 1) {
            subPageStr += '<li class="disabled"><a><span>首页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>上一页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="manageSubjectBoardPage.firstPage()"><span>首页</span></a></li>';
            subPageStr += '<li><a onclick="manageSubjectBoardPage.prevPage()"><span>上一页</span></a></li>';
        }
        var startPage = (manageSubjectBoardPage.data.pageNum-4 > 0 ? manageSubjectBoardPage.data.pageNum-4 : 1);
        var endPage = (startPage+7 > manageSubjectBoardPage.data.totalPageNum ? manageSubjectBoardPage.data.totalPageNum : startPage+7);
        console.log('startPage = ' + startPage);
        console.log('endPage = ' + endPage);
        console.log('pageNum = ' + manageSubjectBoardPage.data.pageNum);
        console.log('totalPageNum = ' + manageSubjectBoardPage.data.totalPageNum);
        for (var i = startPage; i <= endPage; i++) {
            if (i == manageSubjectBoardPage.data.pageNum) {
                subPageStr += '<li class="active"><a onclick="manageSubjectBoardPage.targetPage('+i+')">'+i+'</a></li>';
            } else {
                subPageStr += '<li><a onclick="manageSubjectBoardPage.targetPage('+i+')">'+i+'</a></li>';
            }
        }
        if (manageSubjectBoardPage.data.pageNum == manageSubjectBoardPage.data.totalPageNum) {
            subPageStr += '<li class="disabled"><a><span>下一页</span></a></li>';
            subPageStr += '<li class="disabled"><a><span>末页</span></a></li>';
        } else {
            subPageStr += '<li><a onclick="manageSubjectBoardPage.nextPage()"><span>下一页</span></a></li>';
            subPageStr += '<li><a onclick="manageSubjectBoardPage.lastPage()"><span>末页</span></a></li>';
        }
        $('#subPageHead').html(subPageStr);
    },
    initAddSubjectData: function () {
        //初始化数据
        $('#subjectName').val("");
    },
    checkAddSubjectData: function (subjectName) {
        return true;
    },
    addSubjectAction: function () {
        var subjectName = $('#subjectName').val();

        if (manageSubjectBoardPage.checkAddSubjectData(subjectName)) {
            $.ajax({
                url : app.URL.addSubjectUrl(),
                type : "POST",
                dataType: "json",
                contentType : "application/json;charset=UTF-8",
                <!-- 向后端传输的数据 -->
                data : JSON.stringify({
                    name: subjectName,
                }),
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
    },
    //编辑考试模态框触发
    updateSubjectModalAction: function (index) {
        //编辑考试，弹出编辑窗口
        //console.log(index);
        //输入框初始化数据
        manageSubjectBoardPage.initUpdateSubjectData(index);
        $("#updateSubjectModal").modal({
            keyboard : false,
            show : true,
            backdrop : "static"
        });
    },
    initUpdateSubjectData: function (index) {
        //初始化数据
        var subjects = manageSubjectBoardPage.data.subjects;
        $('#updateSubjectIndex').val(index);
        $('#updateSubjectName').val(subjects[index].name);
    },
    checkUpdateSubjectData: function (subjectName) {
        return true;
    },
    updateSubjectAction: function () {
        var subjects = manageSubjectBoardPage.data.subjects;
        var index = $('#updateSubjectIndex').val();
        var subjejctName = $('#updateSubjectName').val();

        if (manageSubjectBoardPage.checkUpdateSubjectData(subjectName)) {
            $.ajax({
                url : app.URL.updateSubjectUrl(),
                type : "POST",
                dataType: "json",
                contentType : "application/json;charset=UTF-8",
                <!-- 向后端传输的数据 -->
                data : JSON.stringify({
                    id: subjects[index].id,
                    name: subjejctName,
                    questionNum: subjects[index].questionNum,
                    imgUrl: subjects[index].imgUrl,

                }),
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
    },
    deleteSubjectAction: function (index) {
        $.ajax({
            url : app.URL.deleteSubjectUrl()+index,
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