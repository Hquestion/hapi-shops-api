class ResponseData {
    constructor(data = null, message = '操作成功', code = '0000') {
        this.data = data;
        this.message = message;
        this.code = code;
    }
}

module.exports = ResponseData;
