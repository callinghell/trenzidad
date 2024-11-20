// hello?
let nextButton = document.getElementById ('next');
let prevButton = document.getElementById ('prev');

let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector ('.carousel .list');

nextButton.onclick = function(){
 showSlider('next');
 }
prevButton.onclick = function(){
 showSlider('prev');
 }
const showSlider = (type)  => {
	carousel.classList.remove('prev', 'next');//para quitar ese error de que se devuelve al inicio o al final cuando siguiente y anterior
	let items = document.querySelectorAll('.carousel .list .item');
	if(type === 'next'){
		listHTML.appendChild(items[0]);
		carousel.classList.add('next');
	}else{ 
		let positionLast = items.length -1;//una posicion anterior
		listHTML.prepend(items[positionLast]);
		carousel.classList.add('prev');
	}
}
