const inputText = document.querySelector('#validation-input')
const dataLength = document.querySelector('input[data-length="6"]')
const requiredLength = dataLength.dataset.length

inputText.addEventListener("change", checkText)

function checkText(event) {
  event.preventDefault
  const valueLength = inputText.value.length
  console.log(valueLength)

  if (valueLength == requiredLength) {
    inputText.classList.add('valid')
    inputText.classList.remove('invalid')
  console.log('correct')
  } else {
    inputText.classList.add('invalid')
    inputText.classList.remove('valid')
  console.log('wrong')
}
}