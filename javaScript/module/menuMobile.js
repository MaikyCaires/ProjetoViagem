export default function menuMobile(){

}

const btn = document.querySelector('[data-mobile="menu"]')
const menu = document.querySelector('[data-menu="main"]')


function mostrar(event){
    menu.classList.toggle("mostrar-menu")
}


btn.addEventListener("click", mostrar)