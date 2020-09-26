const RequestStatus = {
    pending: "PENDING",
    accepted: "ACCEPTED",
    denied: "DENIED"
};

class RequestClass {
    constructor(from) {
        this.from = from
        this.to = ""
        this.status = RequestStatus.pending;
    }
    SendTo(player) {
        this.to = player.GetName;
    }
    AcceptRequest() {
        this.status = RequestStatus.accepted;
    }
    DenyRequest() {
        this.status = RequestStatus.denied;
    }
}