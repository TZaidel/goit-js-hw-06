const decrBtn = document.querySelector('#counter button[data-action = "decrement"]')
const incrBtn = document.querySelector('button[data-action = "increment"]')

const spanValue = document.querySelector('#value')
let counterValue = 0


decrBtn.addEventListener("click", minusOne)
incrBtn.addEventListener("click", plusOne)

function plusOne() {
  counterValue += 1
spanValue.textContent = counterValue
}
function minusOne() {
  counterValue -= 1
  spanValue.textContent = counterValue
}

