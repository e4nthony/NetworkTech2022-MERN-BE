class Request_cls {
    body = {};
    userId = null;

    constructor(body, userId) {
        this.body = body
        this.userId = userId
    }

    //constructor
    static fromRestRequest(req) {
        return new Request_cls(req.body, req.user._id)
    }
}

module.exports = Request_cls