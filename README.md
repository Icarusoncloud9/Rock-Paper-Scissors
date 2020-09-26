# ROCK-PAPER-SCISSORS THE GAME
Exercising good coding practices by creating a rock, paper, scissors game.

## REQUIREMENTS
**MUST**
- [ ] Must have testing set up for Vanilla JS.
- [ ] Must have a landing page.
- [ ] Must have a lobby that shows who's available to play against.
- [ ] Must consolidate code in a clean and organized way.
- [ ] Must have single and multiplayer options.
- [ ] Must show player names', scores', and game choices before processing a round.

**SHOULD**
- [ ] Should have a total of 8 players able to join at one time.
- [ ] Should allow people to create their own profile.
- [ ] Should have a lobby for players to request a game with other players.
- [ ] Should have dynamically created pages for single and multiplayers. (_Although I could cheat by making a set number of html pages._)
- [ ] Should store user information and progress using cookies temporarily for up to a month. 
- [ ] Should have predetermined CSS classes and only create elements via Javascript that adhere to those classes for styling.

**COULD**
- [ ] Could have backend written in typescript.
- [ ] Could have the documented UX workflow for the website.
- [ ] Could use coding patterns for the majority of the code.
- [ ] Could make use of sockets for real time interaction.
- [ ] Could be refactored into a create-react-app.

**WILL NOT**
- [ ] Will not have a database.
- [ ] Will not have an authentication system.
- [ ] Will not permanently store user information as this is a proof of concept.

## APPLICATION UX FLOW
![APP UX FLOW](docs/app-ux-workflow.png)
```mermaid
journey
    title App UX Flow
    section Reminder
        Wants to play RPS: 2: User
        Goes to RPS website: 2: User
        Creates an account if they don't have one: 2: User
        Account is created and cookie is stored locally: 3: User
        User is prompted to play single-player or multi-player: 4: User
    section Routine
        Selects single-player and plays against the computer: 5: User, Computer
        OR Selects multi-player and joins a lobby to request a game with other players: 4: User
        Selects a player to play against via an in lobby game request: 3: User
        Opponent accepts the game request: 3: Opponent
        Both players are then set to play each other in their own private page: 4: User, Opponent
    section Reward
        The winner of each game is awarded a single point that they display under their name for everyone to see: 5: User, Computer, Opponent
```

## CLASS DIAGRAMS
### PLAYER CLASS DIAGRAM
![Player Class Diagram](docs/player-class-diagram.png)
```mermaid
classDiagram
class PlayerType {
    <<enumeration>>
    "HUMAN"
    "COMPUTER"
}
class PlayerChoice {
    <<enumeration>>
    "ROCK"
    "PAPER"
    "SCISSOR"
}
class PlayerStatus {
    <<enumeration>>
    "AVAILABLE"
    "BUSY"
}
class Player {
    <<interface>>

    +String name
    +Enum type
    +Enum choice
    +Enum status
    -Int score
    -String requestFrom

    GetName()
    SetChoice(choice)
    ResetChoice()
    SetStatus(status)
    GetStatus()
    GetRequest(from)
    IncrementScore()
    ---
    RandomChoice()
}
Player ..> PlayerType
Player ..> PlayerChoice
Player ..> PlayerStatus
```

### LOBBY CLASS DIAGRAM
![Lobby Class Diagram](docs/lobby-class-diagram.png)
```mermaid
classDiagram
class Lobby {
    <<interface>>

    +Array onlinePlayers
    +Array availablePlayers
    +Array busyPlayers

    UpdateLobby()
}
```

### REQUEST CLASS DIAGRAM
![Request Class Diagram](docs/request-class-diagram.png)
```mermaid
classDiagram
class Request {
    <<interface>>

    +String from
    +String to
    +Enum status

    SendTo(player)
    AcceptRequest()
    DenyRequest()
}
class RequestStatus {
    <<enumeration>>
    "PENDING"
    "ACCEPTED"
    "DENIED"
}
Request ..> RequestStatus
```

### GAME CLASS DIAGRAM
![Game Class Diagram](docs/game-class-diagram.png)
```mermaid
classDiagram
class Game {
    <<service>>
    
    InitiateGame()
    RevealChoices()
    AwardPoint(player)
    CheckWinner()
    Rematch()
    Quit()
}
```

### USER INTERFACE CLASS DIAGRAM
![User Interface Class Diagram](docs/user-interface-class-diagram.png)
```mermaid
classDiagram
class UserInterface {
    <<service>>

    CreateNewPlayer()
    SetPlayerNames()
    SetPlayerScores()
    SetPlayerAvailability()
    RevealPlayerChoices()
    ResetGame()
    SinglePlayer()
    MultiPlayer()
    BackToLobby()
}
```