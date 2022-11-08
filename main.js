'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    if(window.scrollY >navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {  
    const target = event.target;
    const link = target.dataset.link;
    if(link == null ){
        return;
    }
    scrollIntoView(link);
    
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

//Make home slowly fade to transparent as the window scrolls down
const about = document.querySelector('.about__textBox');
const aboutHeight = about.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    about.style.opacity = 1-scrollY/aboutHeight;
})


//slide format
const slides = document.querySelector('.contents__slide');
const slideImg = document.querySelectorAll('.contents__slide div');
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 300;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * 400 + 'px';
    currentIdx = num;
}

prev.addEventListener('click', () => {
    if(currentIdx !==0) {
        moveSlide(currentIdx-1);
    }
});

next.addEventListener('click', () => {
    if(currentIdx !== slideCount -1) {
        moveSlide(currentIdx +1);
    }
})