let turn = 0

document.addEventListener("DOMContentLoaded", () => {
	const board = document.getElementById("board");
	let squares = board.getElementsByTagName("div");

	for (let square of squares) {
		square.className = "square";
		square.addEventListener("click", () => {
            letter = turn==1?'O':'X'
			square.textContent=letter
            square.classList.add(letter);
            turn = (turn+1)%2
		});
        square.addEventListener("mouseenter", ()=>{
            square.classList.add("hover")
        })
        square.addEventListener("mouseleave", ()=>{
            square.classList.remove("hover")
        })
		console.log(square.style);
	}
});
