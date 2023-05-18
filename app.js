const firstButton = document.querySelector(".first-btn");
const secondButton = document.querySelector(".second-btn");
const para = document.querySelector(".para");

firstButton.addEventListener("click", () => {
    para.innerText = "Clicked first button."
})

secondButton.addEventListener("click", () => {
    para.innerText = "Clicked second button."
})


