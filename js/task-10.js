const box = document.getElementById('boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const selectedAmount = document.querySelector('input[type="number"]')

createBtn.addEventListener('click', function () {
  const amount = parseInt(selectedAmount.value)
  createBoxes(amount)
})

function createBoxes(amount) {
  let width = 30
  let height = 30

  for (let i = 0; i < amount; i++){
    const el = document.createElement('div')
    el.textContent = i + 1
    el.style.width = width +'px'
    el.style.height = height + 'px'
    el.style.backgroundColor = getRandomHexColor()

    box.appendChild(el)
    width += 10
    height+=10
  }
  console.log(box)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  box.remove()
}


