package com.qexz.exception;

public enum  QexzWebError {

    COMMON("接口调用出错", 3000);

    public final String errMsg;
    public final int code;

    QexzWebError(String errMsg, int code) {
        this.errMsg = errMsg;
        this.code = code;
    }
}
