export default function menuMobile() {
  const btn = document.querySelector('[data-mobile="menu"]');
  const menu = document.querySelector('[data-menu="main"]');
  const container = document.querySelector('[data-container="container"]');

  function mostrar(event) {
    menu.classList.toggle("mostrar-menu");
    if (menu.classList.contains("mostrar-menu")) {
      container.addEventListener("click", clicarFora);
    } else {
      container.removeEventListener("click", clicarFora);
    }
  }

  function clicarFora(event) {
    if (event.target != btn) {
      menu.classList.remove("mostrar-menu");
    }
  }

  btn.addEventListener("click", mostrar);
}
