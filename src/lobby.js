const PlayerStatus = {
    available:"AVAILABLE",
    busy:"BUSY"
};
const PlayerType = {
    computer:"COMPUTER",
    human:"HUMAN"
};

class LobbyClass {
    constructor() {
        this.onlinePlayers = [];
        this.availablePlayers = [];
        this.busyPlayers = [];
    }
    UpdateLobby() {
        let currentOnlinePlayers = this.onlinePlayers;
        this.onlinePlayers = [];
        this.availablePlayers = [];
        this.busyPlayers = [];

        currentOnlinePlayers.forEach(player => {
            if(player.type === PlayerType.human){
                this.onlinePlayers.push(player);
                if(player.GetStatus === PlayerStatus.available) {
                    this.availablePlayers.push(player);
                } else {
                    this.busyPlayers.push(player);
                }
            }
        });
    }
}