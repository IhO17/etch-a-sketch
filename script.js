

function drawBoard(size) {
    const board = document.querySelector(".canvas");
    const cells = board.querySelectorAll("div");
    cells.forEach(div => div.remove());

    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        const cell = document.createElement("div");

        cell.style.backgroundColor = "white";
        cell.addEventListener("mousemove", () => cell.style.backgroundColor = "black");
        board.insertAdjacentElement("beforeend", cell);
    }

}


function reset() {
    const board = document.querySelector(".canvas");
    const cells = board.querySelectorAll("div");
    cells.forEach(div => div.style.backgroundColor = "white");
}

function changeSize() {
    let x = prompt("Insert size:", placeholder="value between 2-100");
    
    while (x < 2 || x > 100) {
        x = prompt("Value out of range, retry:", placeholder="value between 2-100");
    }
    drawBoard(x);
}

drawBoard(16);