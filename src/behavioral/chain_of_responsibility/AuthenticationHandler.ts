import Handler from "./Handler";

export default class AuthenticationHandler extends Handler {
    constructor() {
        super();
    }
    public handlerRequest(req: string) {
        console.log("Authentication:", req);
        if (req === "Request 2") return false;
        return true;
    }
}
