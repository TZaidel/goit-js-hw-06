const nameOutput = document.querySelector("#name-output")
const nameInput = document.querySelector("#name-input")

nameInput.addEventListener("input", changeSpan)

function changeSpan() {
    event.preventDefault() 
    if (nameInput.value.trim() !== "") {
 nameOutput.textContent= nameInput.value
    } else {
        nameOutput.textContent='Anonymous'
    }
}
