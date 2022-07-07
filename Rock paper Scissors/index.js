const buttons = document.querySelectorAll(".playerSelect");
const sPlayer = document.querySelector(".sPlayer");
const sCom = document.querySelector(".sCom");
let pScore = 0,
    cScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(`pScore ${pScore} and cScore ${cScore}`);
        const score = game(button.classList[0]);

        if (score[0]) {
            pScore++;
            cScore++;
            alert(`Player: ${pScore} \nComputer: ${cScore} \n\nYou picked: ${button.classList[0]} \nComputer picked: ${score[2]}`);
        }
        if (score[1]) {
            pScore++;
            alert(`Player: ${pScore} \nComputer: ${cScore} \n\nYou picked: ${button.classList[0]} \nComputer picked: ${score[2]}`);
        }
        if (!score[1] && !score[0]) {
            cScore++;
            alert(`Player: ${pScore} \nComputer: ${cScore} \n\nYou picked: ${button.classList[0]} \nComputer picked: ${score[2]}`);
        }
        if (pScore == 5) {
            pScore = 0;
            cScore = 0;
            alert("You win!");
        } else if (cScore == 5) {
            pScore = 0;
            cScore = 0;
            alert("Computer wins!");
        }
    });
});

function computerPick() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function game(playerInput) {
    let win = false,
        tie = false;
    const cPick = computerPick();
    console.log(`Player: ${playerInput} Computer: ${cPick}`);
    if (cPick == playerInput) {
        tie = true;
        console.log("Tie");
        return [tie, win, cPick];
    } else if (
        (cPick == "Rock" && playerInput == "Paper") ||
        (cPick == "Paper" && playerInput == "Scissors") ||
        (cPick == "Scissors" && playerInput == "Rock")
    ) {
        win = true;
        console.log("You win");
        return [tie, win, cPick];
    } else {
        win = false;
        console.log("You lose");
        return [tie, win, cPick];
    }
}
