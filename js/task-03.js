/*Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

<ul class="gallery"></ul>

Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.*/

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = []
images.forEach(image => { console.log(image) })
imagesList.push(image)
console.log(imagesList)



const ulEl = document.querySelector('ul')
console.log(ulEl)

const listEl = document.createElement('li')


//??
// const objEl = image.reduce((acc,  image) => acc + `<li>${image}</li>`, '')

// for (const ingredient of ingredients) {
//   const liEl = document.createElement('li')
//   liEl.textContent = ingredient
//   ulEl.appendChild(liEl)
  
// }
// document.body.prepend(ulEl)

//??
// const listContent = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')
//or
// const listContent = ingredients.reduce((acc, ingredient)=> acc +  `<li>${ingredient}</li>` ,'')

