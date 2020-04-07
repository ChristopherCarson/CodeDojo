var mine_sweeper = (bombs, rows, cols) => {
    var row = new Array(cols).fill(0);
    var board = new Array();

    for (var i = 0; i < rows; i++) {
        board[i] = [...row];
    }

    for (const bomb in bombs) {
        board[bombs[bomb][0]][bombs[bomb][1]] = -1;
    }

    for (const x in board) {
        for (const y in row) {
            if (board[x][y] !== -1) {
                var count = 0;

                if (board[+x - 1] != undefined) {
                    if (board[+x - 1][+y - 1] === -1) count++;
                    if (board[+x - 1][y] === -1) count++;
                    if (board[+x - 1][+y + 1] === -1) count++;
                }

                if (board[x][+y - 1] === -1) count++;
                if (board[x][+y + 1] === -1) count++;

                if (board[+x + 1] != undefined) {
                    if (board[+x + 1][+y - 1] === -1) count++;
                    if (board[+x + 1][+y + 1] === -1) count++;
                    if (board[+x + 1][y] === -1) count++;
                }

                board[x][y] = count;
            }
        }
    }
    return board;
};

//Better Method - increment cells around the bombs only. Do not iterate thorugh all cells on board

console.log(
    mine_sweeper(
        [
            [1, 1],
            [1, 2],
            [2, 2],
            [4, 3]
        ],
        5,
        5
    )
);

console.log(
    mine_sweeper(
        [
            [0, 0],
            [0, 1],
            [1, 2]
        ],
        3,
        4
    )
);

console.log(
    mine_sweeper(
        [
            [0, 2],
            [2, 0]
        ],
        3,
        3
    )
);