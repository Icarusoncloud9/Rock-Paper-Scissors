class HTMLJSInterface {
    constructor() {
    }
    CreateNewPlayer(type, name) {
        return new PlayerClass(type, name);
    }
    // DYNAAMICALLY POPULATE NAMES IN HTML
    SetPlayerNames() {}
    // DYNAMICALLY POPULATE SCORES IN HTML
    SetPlayerScores() {}
    // DYNAMICALLY UPDATE AVAILABILITY BASED ON EVENTS
    SetPlayerAvailability() {}
    // REVEAL EACH PLAYER's CHOICE IN HTML
    RevealPlayerChoices() {}
    // HIDE CHOICES, RESET CHOICE MENU, 
    ResetGame() {}
    // ENABLES THE SET UP OF A SINGLE PLAYER GAME FOR ONE PLAYER
    SinglePlayer() {}
    // ENABLES THE SET UP OF A MULTI PLAYER GAME FOR TWO PLAYERS BASED ON A REQUEST
    MultiPlayer() {}
    // GO BACK TO THE LOBBY FROM EITHER SINGLE PLAYER OR MULTIPLAYER
    BackToLobby() {}
}