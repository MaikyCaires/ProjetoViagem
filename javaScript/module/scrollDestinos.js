export default function scrollDestinos() {}

const container = document.querySelector('[data-container="destinations"]');
const card = document.querySelectorAll('[data-destinations="card"]');

let alturaDisplay = window.innerHeight * 0.6;

function mostrar(event) {
  ajustarAltura(); // Atualiza a altura de exibição antes de verificar a visibilidade do contêiner
  let rect = container.getBoundingClientRect().top;
  if (rect <= alturaDisplay) {
    card.forEach((elemento, indice) => {
      setTimeout(() => {
        elemento.classList.add("mostrarDestinations");
      }, indice * 500);
    });
  }
}

function ajustarAltura() {
  if (window.innerWidth > 800) {
    window.addEventListener("resize", ajustarAltura); // Atualiza alturaDisplay quando a janela é redimensionada
    window.addEventListener("scroll", () => {
      mostrar();
    });
  }
}
