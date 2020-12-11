/* querySelectorAll selecciona todos los valores en este caso queremos obtener todas las imagenes de la clase gallery__img*/
let imagenes = document.querySelectorAll('.gallery__img');
let modal= document.querySelector('#modal');
let img= document.querySelector(' #modal__img ');
let boton= document.querySelector('#modal__boton');

/* cada que de click abrirá o cerrara el modal */
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', function(e) {
    modal.classList.toggle("modal--open");
/* con target sé a que elemento le da click y a ese elemento se le obtiene el atributo src la ruta se la pasamos en la variable src */
    let src = e.target.src;
    img.setAttribute("src", src);
  })
}

boton.addEventListener('click', function(){
    modal.classList.toggle("modal--open");
})
