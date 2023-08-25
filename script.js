const container = document.querySelector('#container');



for (let i = 0; i < 16; i++) {
    const horizontal = document.createElement('div');
    horizontal.textContent = i;
    horizontal.classList.add("cell");
    container.appendChild(horizontal);


    for (let j = 0; j < 15; j++) {
        const vertical = document.createElement('div');
        vertical.textContent = j;
        vertical.classList.add("cell");
        horizontal.appendChild(vertical);
    }
}
    
const test = document.getElementsByClassName("#container");

test.addEventListener(
    "mouseenter",
    (event) => {
        event.target.style.color = "black";
    },
    false,
);