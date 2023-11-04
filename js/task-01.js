//*1
// const list = document.querySelectorAll('h2')
// console.log(`Number of categories: ${list.length}`)
//*2
const list = document.querySelector('#categories')
const items = list.children
console.log(`Number of categories: ${items.length}`)


const item= document.querySelectorAll('.item')

item.forEach(el=>
{
    const elName = el.querySelector('h2').textContent
    const elAmount = el.querySelectorAll('li').length
    console.log(`Category: ${elName}`)
    console.log(`Elements: ${elAmount}`)
    })