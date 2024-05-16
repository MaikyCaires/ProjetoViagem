export default function slide(){

}

const card = document.querySelectorAll('[data-destinations="card"]')
const botao = document.querySelector(".botao")
let contador = 0

card[contador].classList.add("on")

function remover(){
    card.forEach(element =>{
        element.classList.remove("on")
    })
}

function slideMostrar(){
    remover()
    if(contador == card.length - 1){
        contador = 0
    }else{
        contador ++
    }
    
    card[contador].classList.add("on")
}

botao.addEventListener("click", slideMostrar)
card.forEach(element =>{
    element.addEventListener("click", slideMostrar)
})