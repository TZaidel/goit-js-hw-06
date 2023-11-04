const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector('ul')
//*1
// const list = images.map(image => {
//   const listItem = `<li><img alt = ${image.alt} src = ${image.url} ></li>`
//   ul.insertAdjacentHTML('beforeend', listItem)
// })

//*2
images.forEach(image => {
  const listItem = document.createElement('li')
  const listImg = document.createElement('img')
  listImg.alt = image.alt
  listImg.src = image.url
  listImg.classList.add('list-img')

  listItem.appendChild(listImg)
  ul.appendChild(listItem)

})