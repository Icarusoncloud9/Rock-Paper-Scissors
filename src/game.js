const PlayerChoice = {
    rock:"ROCK",
    paper:"PAPER",
    scissor:"SCISSOR"
};

class GameClass {
    constructor() {

    }
    AwardPoint(player) {
        player.IncrementScore();
    }
    // NOT SURE IF THIS IS ACTUALLY JUST UNNECCESARY
    InitiateGame() {

    }
    // SHOW IF IT'S A DRAW, WIN, OR LOSS
    GetResult() {

    }
    CheckWinner(player1, player2) {
        let winner;
        let { rock, paper, scissor } = PlayerChoice;

        if(player1.GetChoice() === player2.GetChoice()) {
            winner = null;
        } else if(
            player1.GetChoice() === rock && player2.GetChoice() === scissor ||
            player1.GetChoice() === paper && player2.GetChoice() === rock ||
            player1.GetChoice() === scissor && player2.GetChoice() === paper
            ) {
                winner = player1;
        } else if(
            player2.GetChoice() === rock && player1.GetChoice() === scissor ||
            player2.GetChoice() === paper && player1.GetChoice() === rock ||
            player2.GetChoice() === scissor && player1.GetChoice() === paper
            ) {
                winner = player2;
        }
        this.AwardPoint(winner)
    }
    // I HAVE TO THINK ON THIS A BIT
    Rematch() {}
    // I HAVE TO THINK ON THIS AS WELL... IT SHOULD REDIRECT PLAYERS BACK TO THE LOBBY
    Quit() {}
}