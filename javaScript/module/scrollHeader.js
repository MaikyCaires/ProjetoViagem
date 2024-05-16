export default function scrollHeader() {
  const container = document.querySelector('[data-container="container"]');
  const img = document.querySelector('[data-conteudo="img"]');
  const elementosIntro = document.querySelectorAll('[data-conteudo]');

  function mostrar() {
    let rect = container.getBoundingClientRect().top;


    if (rect == 0 || rect < 0) {
      img.classList.add("mostrar-direita");
      elementosIntro.forEach((elemento, indice) =>{
        if(elemento != img){
           setTimeout(() =>{
          elemento.classList.add("mostrar-baixo")
        }, indice * 500)
        }
       
      }) 
    }
  }
  mostrar();

}
