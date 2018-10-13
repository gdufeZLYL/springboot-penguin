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

        //新增考试，弹出新增窗口
        $("#addContestBtn").click(function () {
            //输入框初始化数据
            manageContestBoardPage.initAddContestData();
            $("#addContestModal").modal({
                keyboard : false,
                show : true,
                backdrop : "static"
            });
        });

        //新增考试，取消考试增加
        $('#cancelAddContestBtn').click(function(){
            $("#addContestModal").modal('hide');
        });

        //新增考试，确定增加考试
        $('#confirmAddContestBtn').click(function(){
            manageContestBoardPage.addContestAction();
        });

        //编辑考试，取消考试编辑
        $('#cancelUpdateContestBtn').click(function(){
            $("#updateContestModal").modal('hide');
        });

        //编辑考试，确定保存考试
        $('#confirmUpdateContestBtn').click(function(){
            manageContestBoardPage.updateContestAction();
        });

        //日期时间控件
        $('.form_datetime').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        });
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
    initAddContestData: function () {
        //初始化数据
        $('#contestTitle').val("");
        $('#contestStartDatetimepicker').val("");
        $('#contestEndDatetimepicker').val("");
    },
    checkAddContestData: function (contestTitle, startTime, endTime) {
        if (contestTitle == null || contestTitle == ''
            || contestTitle.replace(/(^s*)|(s*$)/g, "").length == 0) {
            //TODO::信息校验
            $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'账号不能为空'+'</p>');
            $('#loginModalErrorMessage').removeClass('hidden');
            return false;
        }
        if (startTime == null || startTime == ''
            || startTime.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'密码不能为空'+'</p>');
            $('#loginModalErrorMessage').removeClass('hidden');
            return false;
        }
        return true;
    },
    addContestAction: function () {
        var contestTitle = $('#contestTitle').val();
        var subjectId = $('#contestSubjectId').val();
        var startTimeStr = $('#contestStartDatetimepicker').val();
        var endTimeStr = $('#contestEndDatetimepicker').val();
        var startTime = new Date($('#contestStartDatetimepicker').val());
        var endTime = new Date($('#contestEndDatetimepicker').val());

        if (manageContestBoardPage.checkAddContestData(contestTitle, startTimeStr, endTimeStr)) {
            $.ajax({
                url : app.URL.addContestUrl(),
                type : "POST",
                dataType: "json",
                contentType : "application/json;charset=UTF-8",
                <!-- 向后端传输的数据 -->
                data : JSON.stringify({
                    title: contestTitle,
                    subjectId: subjectId,
                    startTime: startTime,
                    endTime: endTime,
                }),
                success:function(result) {
                    if (result && result['success']) {
                        // 验证通过 刷新页面
                        window.location.reload();
                    } else {
                        $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                            '                <p>'+result.message+'</p>');
                        $('#loginModalErrorMessage').removeClass('hidden');
                    }
                },
                error:function(result){
                    $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                        '                <p>'+result.message+'</p>');
                    $('#loginModalErrorMessage').removeClass('hidden');
                }
            });
        }
    },
    //编辑考试模态框触发
    updateContestModalAction: function (index) {
        //编辑考试，弹出编辑窗口
        //console.log(index);
        //输入框初始化数据
        manageContestBoardPage.initUpdateContestData(index);
        $("#updateContestModal").modal({
            keyboard : false,
            show : true,
            backdrop : "static"
        });
    },
    initUpdateContestData: function (index) {
        //初始化数据
        $('#updateContestIndex').val(index);
        $('#updateContestTitle').val(contests[index].title);
        var selectSubjects = document.getElementById('updateContestSubjectId');
        for (var i = 0; i < selectSubjects.length; i++) {
            if (selectSubjects[i].value == contests[index].subjectId) {
                selectSubjects[i].selected = true;
            }
        }
        $('#updateContestStartDatetimepicker').val(app.formatTime(contests[index].startTime, "Y-M-D h:m:s"));
        $('#updateContestEndDatetimepicker').val(app.formatTime(contests[index].endTime, "Y-M-D h:m:s"));
    },
    checkUpdateContestData: function (contestTitle, startTime, endTime) {
        if (contestTitle == null || contestTitle == ''
            || contestTitle.replace(/(^s*)|(s*$)/g, "").length == 0) {
            //TODO::信息校验
            $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'账号不能为空'+'</p>');
            $('#loginModalErrorMessage').removeClass('hidden');
            return false;
        }
        if (startTime == null || startTime == ''
            || startTime.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'密码不能为空'+'</p>');
            $('#loginModalErrorMessage').removeClass('hidden');
            return false;
        }
        return true;
    },
    updateContestAction: function () {
        var index = $('#updateContestIndex').val();
        var contestTitle = $('#updateContestTitle').val();
        var subjectId = $('#updateContestSubjectId').val();
        var startTimeStr = $('#updateContestStartDatetimepicker').val();
        var endTimeStr = $('#updateContestEndDatetimepicker').val();
        var startTime = new Date($('#updateContestStartDatetimepicker').val());
        var endTime = new Date($('#updateContestEndDatetimepicker').val());

        if (manageContestBoardPage.checkUpdateContestData(contestTitle, startTimeStr, endTimeStr)) {
            $.ajax({
                url : app.URL.updateContestUrl(),
                type : "POST",
                dataType: "json",
                contentType : "application/json;charset=UTF-8",
                <!-- 向后端传输的数据 -->
                data : JSON.stringify({
                    id: contests[index].id,
                    title: contestTitle,
                    subjectId: subjectId,
                    startTime: startTime,
                    endTime: endTime,
                    totalScore: contests[index].totalScore,
                    state: contests[index].state,
                }),
                success:function(result) {
                    if (result && result['success']) {
                        // 验证通过 刷新页面
                        window.location.reload();
                    } else {
                        $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                            '                <p>'+result.message+'</p>');
                        $('#loginModalErrorMessage').removeClass('hidden');
                    }
                },
                error:function(result){
                    $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                        '                <p>'+result.message+'</p>');
                    $('#loginModalErrorMessage').removeClass('hidden');
                }
            });
        }
    },
    deleteContestAction: function (index) {
        $.ajax({
            url : app.URL.deleteContestUrl()+index,
            type : "DELETE",
            dataType: "json",
            contentType : "application/json;charset=UTF-8",
            success:function(result) {
                if (result && result['success']) {
                    // 验证通过 刷新页面
                    window.location.reload();
                } else {
                    $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                        '                <p>'+result.message+'</p>');
                    $('#loginModalErrorMessage').removeClass('hidden');
                }
            },
            error:function(result){
                $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                    '                <p>'+result.message+'</p>');
                $('#loginModalErrorMessage').removeClass('hidden');
            }
        });
    }


};