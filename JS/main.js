const button = document.querySelector('.button')
console.log(button)

const menu = document.querySelector('.menu')
console.log(menu)

const button2 = document.querySelector('.B2')
const button3 = document.querySelector('.B3')
const menu2 = document.querySelector('.menu2')
const menu3 = document.querySelector('.menu3')



button.addEventListener('click', function (){
	console.log('button clicked')
// 	menu.classList.toggle('is-open')
// })

if (menu.classList.contains('is-open')){
	menu.classList.remove('is-open')
} else {
	menu.classList.add('is-open')
}
})


button2.addEventListener('click', function (){
	console.log('button clicked')
// 	menu.classList.toggle('is-open')
// })

if (menu2.classList.contains('is-open')){
	menu2.classList.remove('is-open')
} else {
	menu2.classList.add('is-open')
}
})


button3.addEventListener('click', function (){
	console.log('button clicked')
// 	menu.classList.toggle('is-open')
// })

if (menu3.classList.contains('is-open')){
	menu3.classList.remove('is-open')
} else {
	menu3.classList.add('is-open')
}
})