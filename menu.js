/* Menu desplegable */

const button = document.querySelector('#menu__button');
const nav = document.querySelector('.menu__header__nav');

button.addEventListener('click',()=>{
    button.classList.toggle('bx-x');
    nav.classList.toggle('activo');
})

/*Remueve en scroll */

window.onscroll = ()=>{
    button.classList.remove('bx-x');
    nav.classList.remove('activo');
}