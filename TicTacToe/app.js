let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let who_is_next = 1
document.getElementById("demo").innerHTML = "Player 1\'s turn";




function change(element, index) {
    if (board[index] !== 0){
        return;
    }
    board[index] = who_is_next
    if (who_is_next === 1) {
        who_is_next = 2
        document.getElementById("demo").innerHTML = "Player 2\'s turn";
        element.innerHTML = "<img src = \"circle.png\">"
    }else if (who_is_next === 2){
        who_is_next = 1
        document.getElementById("demo").innerHTML = "Player 1\'s turn";
        element.innerHTML = "<img src = \"cross.png\">"
    }
}
