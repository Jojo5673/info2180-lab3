document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board")
    let squares = board.getElementsByTagName("div")
    
    for (let square of squares) {
        square.className = "square"
        console.log(square.style)
    }
}
)