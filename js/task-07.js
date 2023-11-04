const range = document.getElementById('font-size-control')
const text = document.getElementById('text')

range.addEventListener('input', changeText)

function changeText() {
    text.style.fontSize = `${range.value}px`
}