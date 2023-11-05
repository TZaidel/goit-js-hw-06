function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgBodyColor = document.querySelector('body')
const nameColor = document.querySelector('.color')
const changeBtn = document.querySelector('.change-color')


changeBtn.addEventListener('click', function () {
  const randomColor = getRandomHexColor()
  nameColor.textContent = randomColor
  bgBodyColor.style.backgroundColor = randomColor
})

//!------не розумію чому але не працює якщо додати до попереднього
const textBgColor = document.querySelector('.widget p')

changeBtn.addEventListener('click', function () {
  const randomColor = getRandomHexColor()
  textBgColor.style.color = randomColor
})
