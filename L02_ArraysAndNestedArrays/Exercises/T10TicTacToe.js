function solve(input) {

    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let hasFreeFields = (matrix) => matrix.some((arr) => arr.some(value => value === false))
    let win = false;
    let player = 'X';

    for (let i = 0; i < input.length && hasFreeFields(board); i++) {
        let [row, col] = input[i].split(' ').map(num => Number(num));

        if (!board[row][col]) {
            board[row][col] = player;

            if (checkForWinner(board, player)) {
                win = true;
                break;
            }

            player = player === 'X' ? 'O' : 'X';
        } else {
            console.log("This place is already taken. Please choose another!");
        }
    }

    if (win) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log("The game ended! Nobody wins :(");
    }

    board.forEach(line => {
        console.log(line.join('\t'));
    });

    function checkForWinner(currentBoard, sign) {
        let isWinner = false;

        for (let i = 0; i < 3; i++) {
            if (currentBoard[i][0] === sign && currentBoard[i][1] === sign && currentBoard[i][2] === sign) {
                isWinner = true;
                break;
            }
            if (currentBoard[0][i] === sign && currentBoard[1][i] === sign && currentBoard[2][i] === sign) {
                isWinner = true;
                break;
            }
        }

        if (!isWinner) {
            if ((currentBoard[0][0] === sign && currentBoard[1][1] === sign && currentBoard[2][2] === sign) ||
                (currentBoard[2][0] === sign && currentBoard[1][1] === sign && currentBoard[0][2] === sign)) {
                isWinner = true;
            }
        }
        return isWinner;
    }
}