export default function mostrarModal() {
  const btnCriar = document.querySelector('[data-btn="criar"]');
  const btnLogin = document.querySelector('[data-btn="login"]');
  const btnLoginRegistro = document.querySelector(
    '[data-btn="login-registro"]'
  );

  const containerLogin = document.querySelector('[data-container="login"]');
  const containerRegistro = document.querySelector(
    '[data-container="registro"]'
  );

  const containerModal = document.querySelector('[data-container="modal"]');
  const containerGeral = document.querySelector('[data-container="container"]');

  function mostrar(event) {
    containerLogin.classList.remove("sumir");
    containerRegistro.classList.remove("mostrarRegistro");
    containerModal.classList.add("mostrarForm");
  }
  function clicarFora(event) {
    if (event.target == this) {
      containerModal.classList.remove("mostrarForm");
    }
  }
  function criarConta(event) {
    event.preventDefault();
    containerLogin.classList.add("sumir");
    containerRegistro.classList.add("mostrarRegistro");
  }

  function fazerLogin(event) {
    event.preventDefault();
    containerRegistro.classList.remove("mostrarRegistro");
    containerLogin.classList.remove("sumir");
    containerLogin.classList.add("mostrarRegistro");
  }

  btnCriar.addEventListener("click", criarConta);
  btnLoginRegistro.addEventListener("click", fazerLogin);

  btnLogin.addEventListener("click", mostrar);

  containerModal.addEventListener("click", clicarFora);
}
