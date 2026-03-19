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
  

  const swiper = new Swiper('.testimonial-swiper', {

    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,

    loopAdditionalSlides: 12,
    loopedSlides: 12,

    freeMode: {
        enabled: true,
        momentum: false,
    },

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    speed: 5000,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    /*breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    }*/

});
});