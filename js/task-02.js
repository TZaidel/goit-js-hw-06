const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('ul')
console.log(ulEl)

for (const ingredient of ingredients) {
  const liEl = document.createElement('li')
  liEl.textContent = ingredient
  liEl.classList.add('item')
  ulEl.appendChild(liEl)
  
}
document.body.prepend(ulEl)

// //!!!!
// const listContent = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')
//or
// const listContent = ingredients.reduce((acc, ingredient)=> acc +  `<li>${ingredient}</li>` ,'')


// console.log(listContent)
// // ? document.body.insertAdjacentHTML('afterbegin', listContent)
// console.log(document.body)
