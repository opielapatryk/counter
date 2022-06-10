let decrase = document.getElementById("decrease")
let reset = document.getElementById("reset")
let increase = document.getElementById("increase")
let span = document.querySelector("span")
let number = 0

decrase.addEventListener("click", () => {
    number -= 1
    span.innerHTML = `${number}`
    if (number < 0) {
        span.style.color = "red";
    }
})

reset.addEventListener("click", () => {
    number = 0
    span.innerHTML = `${number}`
    if (number == 0) {
        span.style.color = "#181419";
    }
})

increase.addEventListener("click", () => {
    number += 1
    span.innerHTML = `${number}`
    if (number > 0) {
        span.style.color = "green"
    }
})