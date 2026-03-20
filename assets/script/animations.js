//Testimonial Swiper
document.addEventListener("DOMContentLoaded", function () {
          const testimonialSwiper = new Swiper('.testimonial-swiper', {
            loop: true,
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            autoplay: {
              delay: 5000, // miliseconds
              disableOnInteraction: false,
            },
            //slidesPerView: 1, // 1 at a time
            breakpoints: {
              300: {
                slidesPerView: 1,
              },
              640: {  // For screens >= 640px, show 2 slides
                slidesPerView: 2,
              },
              1024: {  // For screens >= 1024px, show 3 slides
                slidesPerView: 3,
              },
            },
          });
        });

        // Sliders
        document.addEventListener("DOMContentLoaded", function () {
      let currentSlide = 0;
      const slides = document.querySelectorAll(".testimonial-slide");
      const totalSlides = slides.length;

      document.querySelector(".next").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
      });

      document.querySelector(".prev").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
      });

      function updateSlidePosition() {
        const sliderContainer = document.querySelector(".slider-container");
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    });

      const swiper = new Swiper('.slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    
});
      document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const clones = slider.cloneNode(true);
    slider.appendChild(clones);
    slider.style.width = "200%"; // Adjust number of clonations
});