import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".data");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});



/* Menu desplegable */

const button = document.querySelector('#menu__button');
const nav = document.querySelector('.menu__header__nav');

button.addEventListener('click',()=>{
    button.classList.toggle('fa-xmark');
    nav.classList.toggle('activo');
})

/*Remueve en scroll */

window.onscroll = ()=>{
    button.classList.remove('fa-xmark');
    nav.classList.remove('activo');
}