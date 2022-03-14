function Checker(board){

    for(let i = 0; i< 3; i++){
        if((board[i][0] === board[i][1]) && (board[i][1] === board[i][2])){
            if(board[i][0] === 1){
                return 1;
            } else return 2;
        }

        if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i])){
            if(board[0][i] === 1){
                return 1;
            } else return 2;
        }

        for(let u = 0; u < 3; u++){
            if (board[i][u] === 0){
                return -1;
            }
        }
    }

    if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2])){
        if(board[0][0] === 1){
            return 1;
        } else return 2;
    }

    if((board[2][0] === board[1][1]) && (board[1][1] === board[0][2])){
        if(board[2][0] === 1){
            return 1;
        } else return 2;
    }

    return 0;
}

let board = [[1, 2, 1],
[2, 1, 2],
[2, 1, 2]]

console.log(Checker(board));