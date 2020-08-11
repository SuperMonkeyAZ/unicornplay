let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let who_is_next = 1

console.log("test")

function change(id){
    console.log(id)
    if (who_is_next === 1) {
        who_is_next = 2
    }else if (who_is_next === 2){
        who_is_next = 1
    }
}