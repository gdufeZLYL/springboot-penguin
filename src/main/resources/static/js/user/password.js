/**
 * 模块JavaScript
 */
var passwordPage = {
    data:{
        nowTime: null
    },
    init: function () {
        $.get(app.URL.now(), {}, function (result) {
            if (result && result['success']) {
                //console.log(result['data']);
                passwordPage.data.nowTime = app.toTimeStamp(result['data']);
                console.log("服务器当前的时间==========" + passwordPage.data.nowTime);
            } else {
                console.log('结果:' + result);
                console.log('result' + result);
            }
        });
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
         * 更新密码提交按钮触发
         */
        $('#updatePasswordButton').click(function (e) {
            passwordPage.updatePassword();
        });
        /**
         * 更新密码错误提示消息可关闭
         */
        $('#updatePasswordErrorMessage,.close').on('click', function() {
            $(this).closest('#updatePasswordErrorMessage').transition('fade');
            //$('#updateAccountErrorMessage').addClass('hidden');
        });
    },
    /**
     * 检查密码输入是否合法
     */
    checkPassword: function (oldPassword, newPassword, confirmNewPassword) {
        if (oldPassword == null || oldPassword == ''
            || oldPassword.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#updatePasswordErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'原密码不能为空'+'</p>');
            $('#updatePasswordErrorMessage').removeClass('hidden');
            return false;
        }
        if (newPassword == null || newPassword == ''
            || newPassword.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#updatePasswordErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'新密码不能为空'+'</p>');
            $('#updatePasswordErrorMessage').removeClass('hidden');
            return false;
        }
        if (confirmNewPassword == null || confirmNewPassword == ''
            || confirmNewPassword.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#updatePasswordErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'确认密码不能为空'+'</p>');
            $('#updatePasswordErrorMessage').removeClass('hidden');
            return false;
        }
        if (newPassword != confirmNewPassword) {
            $('#updatePasswordErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'新密码和确认密码不一致'+'</p>');
            $('#updatePasswordErrorMessage').removeClass('hidden');
            return false;
        }
        return true;
    },
    /**
     * 更新密码事件触发
     */
    updatePassword: function () {
        var oldPassword = $('#oldPassword').val();
        var newPassword = $('#newPassword').val();
        var confirmPassword = $('#confirmNewPassword').val();
        if (passwordPage.checkPassword(oldPassword, newPassword, confirmPassword)) {
            //调用后端API
            $.post(app.URL.updatePasswordUrl(), {
                oldPassword: oldPassword,
                newPassword: newPassword,
                confirmNewPassword: confirmPassword
            }, function (result) {
                console.log(result);
                if (result && result['success']) {
                    toastr.success('更新成功');
                    setTimeout(function () {
                        //刷新页面
                        window.location.reload();
                    }, 2000);
                } else {
                    $('#updatePasswordErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                        '                <p>'+result.message+'</p>');
                    $('#updatePasswordErrorMessage').removeClass('hidden');
                }
            }, "json");
        }
    },
};