/**
 * 模块JavaScript
 */
var adminLoginPage = {
    /**
     * 初始化
     */
    init: function () {
        toastr.options.positionClass = 'toast-top-center';
        var username = $.cookie('penguinUsername');
        var password = $.cookie('penguinPassword');
        $('#username').val(username);
        $('#password').val(password);
    },
    /**
     * 验证用户名和密码是否合法
     */
    checkUsernameAndPassword: function (username, password) {
        if (username == null || username == ''
            || username.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'账号不能为空'+'</p>');
            $('#loginModalErrorMessage').removeClass('hidden');
            return false;
        }
        if (password == null || password == ''
            || password.replace(/(^s*)|(s*$)/g, "").length == 0) {
            $('#loginModalErrorMessage').html('<i class="close icon"></i><div class="header">错误提示</div>\n' +
                '                <p>'+'密码不能为空'+'</p>');
            $('#loginModalErrorMessage').removeClass('hidden');
            return false;
        }
        return true;
    },
    /**
     * 验证登录
     */
    checkLogin: function () {
        var username = $('#username').val();
        var password = $('#password').val();
        if (adminLoginPage.checkUsernameAndPassword(username, password)) {
            //调用后端API
            $.post(app.URL.checkLoginUrl(), {
                username: username,
                password: password
            }, function (result) {
                if (result && result['success']) {
                    if ($('#rememberMe').is(":checked")) {
                        // 把账号信息记入cookie
                        $.cookie('penguinUsername', username, {expires: 7, path: '/'});
                        $.cookie('penguinPassword', password, {expires: 7, path: '/'});
                    }
                    // 验证通过 刷新页面
                    window.location.reload();
                } else {
                    toastr.error(result.message);
                }
            }, "json");
        }
    },
};