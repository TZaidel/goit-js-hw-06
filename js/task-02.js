const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector('ul')

//*1
// ingredients.forEach(ingr => {
//   const el = document.createElement('li')
//   el.textContent = ingr
//   el.classList.add('item')
//   ul.append(el)
// }) 
//? можна коментар, як тут краще додати все разом в HTML?

//*2
const el = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')
ul.insertAdjacentHTML('beforeend', el)

//*3
// const el = ingredients.reduce((acc, el)=> acc + `<li>${el}</li>`,'')
// ul.insertAdjacentHTML('afterbegin', el)