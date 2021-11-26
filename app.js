const buttonStart = document.querySelector(".btn-start");
const buttonNextRound = document.querySelector(".next-round");
const p1winner = document.querySelector(".p1winner");
const p2winner = document.querySelector(".p2winner");
const gameEnded = document.querySelector(".game-ended");

const player1 = {
    profile: "p1",
    health: 100,
    gameWin: 0,
    button: document.querySelector(".player1-button")
}
const player2 = {
    profile: "p2",
    health: 100,
    gameWin: 0,
    button: document.querySelector(".player2-button")
}

//start match
let isMatchStart = false;
let isGameStart = false;

// start game /next round
function startGame() {
    isGameStart = true;
    player1.health = 100;
    player2.health = 100;
    if (isMatchStart == true) {
        player1.button.innerHTML = "P1 100"
        player2.button.innerHTML = "P2 100"
    }
}

buttonNextRound.addEventListener("click", () => startGame());

//start match
function startMatch() {
    isMatchStart = true;
    player1.gameWin = 0;
    player2.gameWin = 0;
    p1winner.innerHTML = `Player 2 - win : 0`;
    p2winner.innerHTML = `Player 2 - win : 0`;
    gameEnded.innerHTML = "";
    startGame();
    player2.button.innerHTML = "P2"
    player2.button.innerHTML = "P2"
    console.log(isMatchStart);
    console.log(player1.gameWin);
    console.log(player2.gameWin);
}

buttonStart.addEventListener("click", () => {
    startMatch();
})


//players shooting each other
function shoot(player, opponent) {
    if (opponent.health > 0 && isMatchStart == true && isGameStart == true) {
        opponent.health -= Math.floor(Math.random() * 5) + 1;
        opponent.button.innerHTML = `${opponent.profile} ${opponent.health}`
        // console.log(player.health)

        console.log(opponent.health);
    } else if (opponent.health <= 0 && isGameStart == true) {
        isGameStart = false;
        player.gameWin++;
        player.health = 100;
        // console.log(player.gameWin)
        gameWinner();
        matchWinner();
    }
}

player1.button.addEventListener("click", () => shoot(player1, player2));
player2.button.addEventListener("click", () => shoot(player2, player1));

//game winner - if health reaches 0 = loser, other player = game winner
function gameWinner() {
    if (player1.health <= 0) {
        p2winner.innerHTML = `Player 2 - win : ${player2.gameWin}`;
        player1.profile.innerHTML = "P1 100"
        player2.profile.innerHTML = "P2 100"
        // console.log(player1.gameWin);
    } else if (player2.health <= 0) {
        p1winner.innerHTML = `Player 1 - win : ${player1.gameWin}`;
        player1.profile.innerHTML = "P1 100"
        player2.profile.innerHTML = "P2 100"
        // console.log(player2.gameWin);
    }
}

// //match winner - if wins 3 games out of 5 = winner
function matchWinner() {
    if (player1.gameWin >= 3) {
        isMatchStart = false;
        gameEnded.innerHTML = `Player 1 is Winner!`;
        // console.log(`player 1 is winner`);
    } else if (player2.gameWin >= 3) {
        isMatchStart = false;
        gameEnded.innerHTML = `Player 2 is Winner!`;
        console.log(`player 2 is winner`);
        // player2 wins match
    }
}
