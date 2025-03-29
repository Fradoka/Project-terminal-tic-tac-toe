/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
// export function printBoard(board) {
// }

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
// export function checkIfNoMovesLeft(board) {
// }


let board = [
    ['X', '_', '_'],
    ['_', 'X', '_'],
    ['O', 'O', 'X']
];


// Function to print the board
export function printBoard(board) {
    // Iterate through the rows of the board and print them in the desired format
    board.forEach((row, index) => {
        console.log(row.join('  |  '));  // Join elements of the row with a separator
        if (index < board.length - 1) {
            console.log("~~~~~~~~~~~~~~");  // Print separator between rows
        }
    });
}

// Function to check if there are no moves left
export function checkIfNoMovesLeft(board) {
    // Iterate through each row and check if there is an empty space ('_')
    for (let row of board) {
        if (row.includes('_')) {
            return false;  // There are still empty spaces, so moves are left
        }
    }
    return true;  // No empty spaces left, so no moves are left
}

