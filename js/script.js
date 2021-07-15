
const body=document.querySelector('body');

const iconMenu = document.querySelector('.menu-icon');

if(iconMenu){
	const menuList = document.querySelector('.menu__list')
	iconMenu.addEventListener("click", function(e){
		body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuList.classList.toggle('_active');
	})
} 




// swiper slider===============

new Swiper('.row05__slayder', {
	//arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	centeredSlides: false,
	loop: true,
	slidesPerView: 2,

	breakpoints: {
		100:{
			slidesPerView: 1,
		},
		650:{
			slidesPerView: 2,
		}
	}
});


// swiper slider===============


//form validation===================

const form =document.getElementById('form');
const name =document.getElementById('name');
const tel =document.getElementById('tel');

let nameError = false;
let telError = false;

form.addEventListener('submit', (e) =>{
	e.preventDefault()
	//name check=======
	if(name.value === '' || name.value == null){
		nameError = true;
	}else{
		nameError = false;
	}
	if(nameError){
		name.style.borderColor = "red";
	}else{
		name.style.borderColor = "#BBBBBB";
	}
	//name check=======

	//tel check========
	if(tel.value === '' || tel.value == null ||isNaN(tel.value)){
		telError = true;
	}else{
		telError = false;
	}
	if(telError){
		tel.style.borderColor = "red";
	}else{
		tel.style.borderColor = "#BBBBBB";
	}
})


//form validation===================


//scroll animation

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(){
		for(let i=0; i < animItems.length; i++){
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 3;

			let animItemPoint = window.innerHeight - animItemHeight/animStart;
			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight/animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			}else{
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollleft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	
	animOnScroll();
}

