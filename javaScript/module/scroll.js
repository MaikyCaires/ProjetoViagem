export default function scrollHeader(){

}

const container  = document.querySelector('[data-container="container"]')
const img = document.querySelector('[data-conteudo="img"]')
const h2 = document.querySelector('[data-conteudo="h2"]')
const h3 = document.querySelector('[data-conteudo="h3"]')
const p = document.querySelector('[data-conteudo="p"]')
const span = document.querySelector('[data-conteudo="span"]')






console.log(img)

function mostrar(){
    img.classList.add("mostrar-direita")

    setTimeout(() =>{
        h2.classList.add("mostrar-baixo")
    }, 500)
    setTimeout(() =>{
        h3.classList.add("mostrar-baixo")
    }, 1000)
    setTimeout(() =>{
        p.classList.add("mostrar-baixo")
    },1500)
    setTimeout(() =>{
        span.classList.add("mostrar-baixo")
    }, 2000)

}
mostrar()

//window.addEventListener("scroll", mostrar)