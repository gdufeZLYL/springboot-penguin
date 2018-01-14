package com.qexz.exception;

public enum  QexzWebError {

    COMMON("接口调用出错", 3000),
    WRONG_USERNAME_OR_PASSWORD("账号或密码错误", 3001),
    WRONG_USERNAME("该账号不存在", 3002),
    WRONG_PASSWORD("密码错误", 3003);

    public final String errMsg;
    public final int code;

    QexzWebError(String errMsg, int code) {
        this.errMsg = errMsg;
        this.code = code;
    }
}
