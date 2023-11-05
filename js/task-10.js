const box = document.getElementById('boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const selectedAmount = document.querySelector('input[type="number"]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', function () {
  const amount = parseInt(selectedAmount.value)
  createBoxes(amount)
})

function createBoxes(amount) {
box.innerHTML = ''
  let width = 30
  let height = 30

  for (let i = 0; i < amount; i++){
    const el = document.createElement('div')
    el.textContent = i + 1
    el.style.width = width +'px'
    el.style.height = height + 'px'
    el.style.backgroundColor = getRandomHexColor()
      box.append(el)

    width += 10
    height+=10
  }

}

destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  box.innerHTML=''
}


