const board = document.querySelector(".canvas");

board.style.gridTemplateRows = "repeat(16, 1fr)";
board.style.gridTemplateColumns = "repeat(16, 1fr)";

for (let i = 0; i < 17; i++) {
    const cell = document.createElement("div");
    cell.style.backgroundColor = "blue";
    cell.addEventListener("mousemove", () => cell.style.backgroundColor = "black");


    board.insertAdjacentElement("beforeend", cell);


}

function changeColor() {

}

function changeSize() {
    let x = prompt("Insert size:", placeholder="2-100")
}