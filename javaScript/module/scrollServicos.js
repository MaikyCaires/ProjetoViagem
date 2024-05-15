export default function mostrarServico() {
    const container = document.querySelector('[data-container="servicos"]');
    const card = document.querySelectorAll('[data-card]');
    const card1 = document.querySelector('[data-card]');
    let alturaDisplay = 0;
    
    function ajustarAltura() {
        if (window.innerWidth <= 800) { 
            alturaDisplay = window.innerHeight * 0.3    ; 
        } else {
            alturaDisplay = window.innerHeight * 0.6; 
        }
    }
    
    function mostrar(event) {
        ajustarAltura(); // Atualiza a altura de exibição antes de verificar a visibilidade do contêiner
        let rect = container.getBoundingClientRect().top;
        if (rect <= alturaDisplay) {
            card.forEach((elemento, indice) => {
                setTimeout(() => {
                    elemento.classList.add("mostrarServico")
                }, indice * 500)
            })
        }
    }

    function hover(event){
        let alturaMobile = window.innerHeight * 0.5 ;
        card.forEach(cardElemento =>{
            let rectCard = cardElemento.getBoundingClientRect().top

            if(rectCard <= alturaMobile){
                cardElemento.classList.add("ativoService")
            }else{
                cardElemento.classList.remove("ativoService")
            }
        })
        
        
       
        
       
    }
    


    mostrar();
    window.addEventListener("resize", ajustarAltura); // Atualiza alturaDisplay quando a janela é redimensionada
    window.addEventListener("scroll", () =>{
        mostrar()
        hover()
    });
    

  
  
}
