export default function scrollDestinos() {
  const container = document.querySelector('[data-container="destinations"]');
  const card = document.querySelectorAll('[data-destinations="card"]');

  let alturaDisplay = window.innerHeight * 0.6;

  function mostrar(event) {
    let rect = container.getBoundingClientRect().top;
    if (rect <= alturaDisplay) {
      card.forEach((elemento, indice) => {
        setTimeout(() => {
          elemento.classList.add("mostrarDestinations");
        }, indice * 500);
      });
    }
  }

  function ajustarLargura() {
    if (window.innerWidth <= 800) {
      window.removeEventListener("scroll", mostrar)
      card.forEach(elemento =>{
        elemento.classList.remove("mostrarDestinations")
      })
    }
  }
  window.addEventListener("resize", ajustarLargura);
  window.addEventListener("scroll", mostrar)
}
