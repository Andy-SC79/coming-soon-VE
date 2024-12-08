//unknown source
function toggleMenu() {
    const navLinks = document.querySelector('.encabezado__navegacion--lista');
    navLinks.classList.toggle('active');

}
'use strict'
  
    document.getElementById('button').addEventListener('click', toggleError)
    const errMessages = document.querySelectorAll('#error')
  
    function toggleError() {
      // Show error message
      errMessages.forEach((el) => {
        el.classList.toggle('hidden')
      })
  
      // Highlight input and label with red
      const allBorders = document.querySelectorAll('.border-gray-200')
      const allTexts = document.querySelectorAll('.text-gray-500')
      allBorders.forEach((el) => {
        el.classList.toggle('border-red-600')
      })
      allTexts.forEach((el) => {
        el.classList.toggle('text-red-600')
      })
    }

    //Cards animation
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".slider .card");
  let currentIndex = 0;

  function nextSlide() {
      // Remover clase activa de la card actual
      cards[currentIndex].classList.remove("active");

      // Avanzar al siguiente índice
      currentIndex = (currentIndex + 1) % cards.length;

      // Agregar clase activa a la nueva card
      cards[currentIndex].classList.add("active");

      // Mover el slider
      const offset = -currentIndex * 320; // Ancho de la card más el gap
      document.querySelector(".slider").style.transform = `translateX(${offset}px)`;
  }

  // Iniciar el slider en loop
  setInterval(nextSlide, 4000); // Cambia cada 2 segundos
});