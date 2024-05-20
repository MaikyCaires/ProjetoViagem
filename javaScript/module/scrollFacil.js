export default function scrollFacil() {
  const container = document.querySelector('[data-container="easy"]');
  const itensEasy = document.querySelectorAll('[data-itens="easy"]');
  const img = document.querySelector('[data-img="easy"]');

  let alturaDisplay = 0;

  function ajustarAltura() {
    if (window.innerWidth <= 800) {
      alturaDisplay = window.innerHeight * 0.5;
    } else {
      alturaDisplay = window.innerHeight * 0.6;
    }
  }

  function mostrar() {
    ajustarAltura();
    let rect = container.getBoundingClientRect().top;
    if (rect <= alturaDisplay) {
      img.classList.add("mostrarEasyDireita");
      itensEasy.forEach((elemento, indice) => {
        setTimeout(() => {
          elemento.classList.add("mostrarEasy");
        }, indice * 500);
      });
    }
  }
  mostrar();

  window.addEventListener("resize", ajustarAltura);
  window.addEventListener("scroll", mostrar);
}
