const op = ["rock", "paper", "scissors"];
const PLAYER = document.getElementById("playermove");
const COMPUTER = document.getElementById("compmove");
const pscore = document.getElementById("playerscore");
const cscore = document.getElementById("compscore");
const result = document.getElementById("result");
let ps = 0;
let cs = 0;

function check(string) {
    let cplay = op[Math.floor(Math.random() * 3)];
    PLAYER.textContent = `PLAYER: ${string}`;
    COMPUTER.textContent = `COMPUTER: ${cplay}`;

    if (cplay === string) {
        result.textContent = "IT'S A TIE !!!";
    } 
    else if (
        (string === "rock" && cplay === "scissors") ||
        (string === "paper" && cplay === "rock") ||
        (string === "scissors" && cplay === "paper")
    ) {
        ps += 1;
        pscore.innerHTML = `Player Score: <span class="score-number-player">${ps}</span>`;
        result.textContent = "YOU ARE A 🗿";
    } 
    else {
        cs += 1;
        cscore.innerHTML = `Computer Score: <span class="score-number-computer">${cs}</span>`;
        result.textContent = "SUCH A 🤡 HAHA";
    }
}
