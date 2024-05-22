export default function scrollDepoimentos(){

}

const itens = document.querySelectorAll('[data-item="depoimentos"]')
const container = document.querySelector('[data-container="depoimentos"]')

let alturaDisplay = 0;

  function ajustarAltura() {
    if (window.innerWidth <= 800) {
      alturaDisplay = window.innerHeight * 0.5;
    } else {
      alturaDisplay = window.innerHeight * 0.6;
    }
  }

function mostrar(){
    ajustarAltura()
    let rect = container.getBoundingClientRect().top
    if(rect <= alturaDisplay){
        itens.forEach((elemento, indice) =>{
        setTimeout(() =>{
            elemento.classList.add("mostrarDepoimento")
        }, indice * 500)
    })
    }
}

window.addEventListener("resize", ajustarAltura)
window.addEventListener("scroll", mostrar)