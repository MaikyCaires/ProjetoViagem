export default function mostrarServico() {
  const container = document.querySelector('[data-container="servicos"]');

  const card = document.querySelectorAll('[data-card]');


  let alturaDisplay = window.innerHeight * 0.6;
  console.log(alturaDisplay);

  function mostrar(event) {
    let rect = container.getBoundingClientRect().top;
    if (rect <= alturaDisplay) {
      card.forEach((elemento, indice) =>{
        setTimeout(() =>{
            elemento.classList.add("mostrarServico")
        }, indice * 500)
      })
    }
  }
  mostrar();

  window.addEventListener("scroll", mostrar);
}
