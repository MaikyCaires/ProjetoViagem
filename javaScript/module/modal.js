export default function mostrarModal(){
    
}

const btnLogin = document.querySelector('[data-btn="login"]')
const containerModal = document.querySelector('[data-container="modal"]')
const containerGeral = document.querySelector('[data-container="container"]');

function mostrar(){
    containerModal.classList.add("mostrarForm")
}

function clicarFora(event){
    if(event.target == this){
        containerModal.classList.remove("mostrarForm")
    }
}



btnLogin.addEventListener("click", mostrar)


containerModal.addEventListener("click", clicarFora)