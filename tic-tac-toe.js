let turn = 0
let game_over = false

document.addEventListener("DOMContentLoaded", () => {
	const boardElement = document.getElementById("board");
	const squares = boardElement.getElementsByTagName("div");
    const statusElement = document.getElementById("status");
    const reloadButton = document.getElementsByClassName("btn")[0]
    let moves = Array(9).fill(null);

	Array.from(squares).forEach((square, index) => {``
		square.className = "square";
		square.addEventListener("click", () => {
            if (moves[index] === null && !game_over) {
                letter = turn==1?'O':'X'
    			square.textContent=letter
                square.classList.add(letter);
                turn = (turn+1)%2
                moves[index] = letter;
                if (letter === checkWinner(moves)) {
                    statusElement.textContent = `Congratulations! ${letter} is the Winner!`
                    game_over = true
                }
            }
		});
        square.addEventListener("mouseenter", ()=>{
            square.classList.add("hover")
        })
        square.addEventListener("mouseleave", ()=>{
            square.classList.remove("hover")
        })
	});
    reloadButton.addEventListener("click", () => {
        game_over = false
        moves = Array(9).fill(null);
        Array.from(squares).forEach((square, index) => {
            square.textContent = ''
            square.className = "square";
        })
        statusElement.textContent = "Move your mouse over a square and click to play an X or an O."
    })
});

function checkWinner(board) {
  // all possible win combinations (indices)
  const winPatterns = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
  ];

  for (const [a, b, c] of winPatterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 'X' or 'O'
    }
  }

  return null; // no winner yet
}
