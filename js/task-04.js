/*Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>



Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.*/


/*<button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close*/

const decrBtn = document.querySelector('#counter button [data-action="decrement"]')
console.log(decrBtn.dataset.action)





































// let counterValue = 0

// const spanValue = document.querySelector('#value')

// const btnEl = document.querySelector('#counter')
// console.log(btnEl)
// // btnEl[0].classList.add('decrement')
// // btnEl[1].classList.add('increment')

// // const btnDecrement = document.querySelector('.decrement')
// // const btnIncrement = document.querySelector('.increment')
// // console.log(btnDecrement, btnIncrement)

// const btnDec = btnEl.firstElementChild
// console.log(btnDec)
// const btnInc = btnEl.lastElementChild
// console.log(btnInc)

// btnDec.addEventListener('click', () => {
//   counterValue-=1
//   spanValue.textContent = counterValue
// })

// btnInc.addEventListener('click', () => {
//   counterValue += 1
//   spanValue.textContent = counterValue

// })


