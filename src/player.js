const PlayerType = {
    computer:"COMPUTER",
    human:"HUMAN"
};
const PlayerChoice = {
    rock:"ROCK",
    paper:"PAPER",
    scissor:"SCISSOR"
};
const PlayerStatus = {
    available:"AVAILABLE",
    busy:"BUSY"
};

class PlayerClass {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.choice = "";
        this.status = PlayerStatus.available;
        this.score = 0;
        this.request = "";
    }
    GetName() {
        return this.name
    }
    SetChoice(choice) {
        this.choice = choice;
    }
    ResetChoice() {
        this.choice = "";
    }
    SetStatus(status) {
        this.status = status
    }
    GetStatus() {
        return this.status
    }
    GetRequest(from) {
        this.request = from;
    }
    IncrementScore() {
        this.score++;
    }
    RandomChoice() {
        let choices = Object.values(PlayerChoice)
        this.choice = choices[Math.floor(Math.random() * choices.length)];
    }
}