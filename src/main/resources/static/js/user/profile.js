/**
 * 模块JavaScript
 */
var profilePage = {
    data:{

    },
    init: function () {
        /**
         * 点击上传图片效果
         */
        $('.card .dimmer')
            .dimmer({
                on: 'hover'
            })
        ;
        /**
         * toastr提示消息位置
         */
        toastr.options.positionClass = 'toast-top-center';
        /**
         * 更新个人信息保存按钮触发
         */
        $('#updateAccountButton').click(function (e) {
            profilePage.updateAccount();
        });
        /**
         * 更新个人信息错误提示消息可关闭
         */
        $('#updateAccountErrorMessage,.close').on('click', function() {
            $(this).closest('#updateAccountErrorMessage').transition('fade');
            //$('#updateAccountErrorMessage').addClass('hidden');
        });
    },
    /**
     * 检查个人信息输入是否合法
     */
    checkProfile: function (phone, qq, email, description, avatarImgUrl) {
        if (phone == null || phone == ''
            || phone.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#updateAccountErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'手机号码不能为空'+'</p>');
            $('#updateAccountErrorMessage').removeClass('hidden');
            return false;
        }
        if (qq == null || qq == ''
            || qq.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#updateAccountErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'QQ不能为空'+'</p>');
            $('#updateAccountErrorMessage').removeClass('hidden');
            return false;
        }
        if (email == null || email == ''
            || email.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#updateAccountErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'邮箱地址不能为空'+'</p>');
            $('#updateAccountErrorMessage').removeClass('hidden');
            return false;
        }
        if (description == null || description == ''
            || description.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#updateAccountErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'自我描述不能为空'+'</p>');
            $('#updateAccountErrorMessage').removeClass('hidden');
            toastr.error('自我描述不能为空');
            return false;
        }
        return true;
    },
    /**
     * 保存个人信息事件
     */
    updateAccount: function () {
        var phone = $('#myPhone').val();
        var qq = $('#myQq').val();
        var email = $('#myEmail').val();
        var description = $('#myDescription').val();
        var avatarImgUrl = $('#myAvatarImgUrl').val();
        if (avatarImgUrl == null || avatarImgUrl == ''
            || avatarImgUrl.replace(/(^s*)|(s*$)/g, "").length == 0) {
            avatarImgUrl = 'headimg_placeholder.png';
        }
        if (profilePage.checkProfile(phone, qq, email, description, avatarImgUrl)) {
            //调用后端API
            $.post(app.URL.updateAccountUrl(), {
                phone: phone,
                qq: qq,
                email: email,
                description: description,
                avatarImgUrl: avatarImgUrl
            }, function (result) {
                console.log(result);
                if (result && result['success']) {
                    toastr.success('更新成功');
                    setTimeout(function () {
                        //刷新页面
                        window.location.reload();
                    }, 2000);
                } else {
                    $('#updateAccountErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                        '                <p>'+result.message+'</p>');
                    $('#updateAccountErrorMessage').removeClass('hidden');
                }
            }, "json");
        }
    },
    /**
     * ajax上传头像
     */
    uploadAvatar: function (){
        var fileName = $('#myfile').val();　　　　　　　　　　　　　　　　　　//获得文件名称
        var fileType = fileName.substr(fileName.length-4,fileName.length);　　//截取文件类型,如(.xls)
        if(fileType=='.jpg' || fileType=='.png'){　　　　　//验证文件类型,此处验证也可使用正则
            var formData = new FormData();
            formData.append('file', $('#myfile')[0].files[0]);
            $.ajax({
                url: app.URL.uploadAvatarUrl(),　　　　　　　　　　//上传地址
                type: 'POST',
                cache: false,
                data: formData,　　　　　　　　　　　　　//表单数据
                processData: false,
                contentType: false,
                success:function(result){
                    // $('#myAvatarImgUrl').val(result.response.imgUrl);
                    // $('#avatarImgPreview').attr("src", '/upload/images/'+result.response.imgUrl);
                    if (result && result['success']) {
                        $('#myAvatarImgUrl').val(result.data);
                        $('#avatarImgPreview').attr("src", app.URL.uploadImageUrl()+result.data);
                    } else {
                        $('#updateAccountErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                            '                <p>'+result.message+'</p>');
                        $('#updateAccountErrorMessage').removeClass('hidden');
                    }

                }
            });
        }else{
            $('#updateAccountErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>*上传文件类型错误,支持类型: .jpg .png</p>');
            $('#updateAccountErrorMessage').removeClass('hidden');
        }
    },
    /**
     * bootstrap上传头像初始化
     */
    /*
    uploadAvatarInit: function () {
        $("#myfile").fileinput({
            uploadUrl:"/account/api/uploadAvatar",//上传的地址
            uploadAsync:true, //默认异步上传
            showUpload: false, //是否显示上传按钮,跟随文本框的那个
            showRemove : false, //显示移除按钮,跟随文本框的那个
            showCaption: true,//是否显示标题,就是那个文本框
            showPreview : true, //是否显示预览,不写默认为true
            dropZoneEnabled: true,//是否显示拖拽区域，默认不写为true，但是会占用很大区域
            //minImageWidth: 50, //图片的最小宽度
            //minImageHeight: 50,//图片的最小高度
            //maxImageWidth: 1000,//图片的最大宽度
            //maxImageHeight: 1000,//图片的最大高度
            //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
            //minFileCount: 0,
            maxFileCount: 3, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: '<i class="glyphicon glyphicon-king"></i>',
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
            allowedFileTypes: ['image'],//配置允许文件上传的类型
            allowedPreviewTypes : [ 'image' ],//配置所有的被预览文件类型
            allowedPreviewMimeTypes : [ 'jpg', 'png', 'gif' ],//控制被预览的所有mime类型
            language : 'zh'
        })
        //异步上传返回结果处理
        $('#myfile').on('fileerror', function(event, data, msg) {
            console.log("fileerror");
            console.log(data);
        });
        //异步上传返回结果处理
        $("#myfile").on("fileuploaded", function (event, data, previewId, index) {
            console.log("fileuploaded");
            // var ref=$(this).attr("data-ref");
            // $("input[name='"+ref+"']").val(data.response.imgUrl);
            $('#myAvatarImgUrl').val(data.response.imgUrl);
        });

        //同步上传错误处理
        $('#myfile').on('filebatchuploaderror', function(event, data, msg) {
            console.log("filebatchuploaderror");
            console.log(data);
        });

        //同步上传返回结果处理
        $("#myfile").on("filebatchuploadsuccess", function (event, data, previewId, index) {
            console.log("filebatchuploadsuccess");
            console.log(data);
        });

        //上传前
        $('#myfile').on('filepreupload', function(event, data, previewId, index) {
            console.log("filepreupload");
        });
    },
    */
};