let board = [0, 0, 0,
             0, 0, 0,
             0, 0, 0]
let who_is_next = 1;
let game_ended = false;
document.getElementById("demo").innerHTML = "Player 1\'s turn";
document.getElementById("demo").style.fontSize = "50px";

// Updates the variable board and the 3 by 3 square on the html page
// Input: element is <div> on the page
// Input: index is for the board array
// Return: Returns true if the board changed
function updateBoard(element, index){
    if (board[index] !== 0){
    return false;
    }
    if (who_is_next === 1) {
        document.getElementById("demo").innerHTML = "Player 2\'s turn";

        element.innerHTML = "<img src = \"circle.png\">";
        board[index] = 1;
        return true;
    }else if (who_is_next === 2){
        document.getElementById("demo").innerHTML = "Player 1\'s turn";
        element.innerHTML = "<img src = \"cross.png\">";
        board[index] = 2;
        return true;
    }
}
//updateTurn updates who goes next, which decides what image will pop up.
//Input: None
//Returns: None
function updateTurn(){
    if (who_is_next === 1){
        who_is_next = 2;
    }else if (who_is_next === 2){
        who_is_next = 1;
    }
}
//check if a player has won
// input: player
//return: true if a player has won
function checkWinPlayer(player) {
    return (board[0] === player && board[1] === player && board[2] === player)
        || (board[3] === player && board[4] === player && board[5] === player)
        || (board[6] === player && board[7] === player && board[8] === player)
        || (board[0] === player && board[3] === player && board[6] === player)
        || (board[1] === player && board[4] === player && board[7] === player)
        || (board[2] === player && board[5] === player && board[8] === player)
        || (board[0] === player && board[4] === player && board[8] === player)
        || (board[2] === player && board[4] === player && board[6] === player);
}
// returns true if game ended with tie
function checkIsBoardIsFull() {
    return (board[0] !== 0 && board[1] !== 0 && board[2] !== 0 && board[3] !== 0 && board[4] !== 0 && board[5] !== 0 && board[6] !== 0 && board[7] !== 0 && board[8] !== 0)

}
//checkWin checks if either of the players have won or not,  update the page and check if game ended
//Input: None
//Returns: true if game ended
function checkWin(){
    if (checkWinPlayer(1)){
        document.getElementById("demo").innerHTML = "Player 1 Won";
        return true;
    }else if (checkWinPlayer(2)){
        document.getElementById("demo").innerHTML = "Player 2 Won";
        return true;
    }else if (checkIsBoardIsFull()) {
        document.getElementById("demo").innerHTML = "The Game Ended In Tie";
        return true;
    }else {
        return false;
    }
}
function checkIfComputerIsNeeded() {
    return document.getElementById("Computer").checked
}
function computer() {
    let randomBox = Math.floor(Math.random() * 9)
    if (board[randomBox] === 0){
        //What would the element be?
        document.getElementById(randomBox).innerHTML = "<img src = \"cross.png\">";
        board[randomBox] = 2;
    }else{
        computer();
    }
}

function change(element, index) {
    if (game_ended) {
        return;
    }
    if (updateBoard(element, index)) {
        updateTurn();
        game_ended = checkWin();
        if (!game_ended) {
            if (checkIfComputerIsNeeded && who_is_next === 2) {
                computer();
                updateTurn();
                game_ended = checkWin();
            }
        }
    }
}