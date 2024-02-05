/* Seleccionar el modal,de los buttones */
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
/*
element.classList.add(nombreClase)
element.classList.remove(nombreClase)
*/
/* Función para abrir el modal */
const openModal = function () {
/* Eliminar la clase 'hidden' del modal*/
modal.classList.remove('hidden')
/* Eliminar la clase 'hidden' del overlay*/
overlay.classList.remove('hidden')
}
/*Función para cerrar el modal */
const closeModal = function () {
/*Agregar la clase 'hidden' al modal */
modal.classList.add('hidden')
/*Agregar la clase 'hidden' al overlay */
overlay.classList.add('hidden')
}
/* Agregar event listeners de click a todos los botones que abren el modal
*/
for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal)
/* Agregan event listener de click al botón de cerrar para cerrar el modal
*/
btnCloseModal.addEventListener('click', closeModal)
/* Agregar event listener de click al overlay para cerrar el modal */overlay.addEventListener('click', closeModal)
/* Agregar event listener keydown al documento para cerrar el modal cuando
apreta 'Escape' */
document.addEventListener('keydown', function (e) {
// console.log(e, e.key);
/* Verificar que la tecla presionada es 'Escape' y el modal no está oculto
*/
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
closeModal()
}
})