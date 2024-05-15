export default function mostrarServico() {
    const container = document.querySelector('[data-container="servicos"]');
    const card = document.querySelectorAll('[data-card]');
    let alturaDisplay = 0;
    
    function ajustarAltura() {
        if (window.innerWidth <= 800) { 
            alturaDisplay = window.innerHeight * 0.2; 
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
    
    mostrar();
    window.addEventListener("resize", ajustarAltura); // Atualiza alturaDisplay quando a janela é redimensionada
    window.addEventListener("scroll", mostrar);
    

  
  
}
