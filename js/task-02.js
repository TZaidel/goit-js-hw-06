const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];


const ul = document.querySelector('ul')
const list = []

ingredients.forEach(ingr => {
  const el = document.createElement('li')
  el.textContent = ingr
  el.classList.add('item')
  list.push(el)
}) 

  ul.append(...list)















  
//---------
// const el = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')
// ul.insertAdjacentHTML('beforeend', el)
//----------
// const el = ingredients.reduce((acc, el)=> acc + `<li>${el}</li>`,'')
// ul.insertAdjacentHTML('afterbegin', el)