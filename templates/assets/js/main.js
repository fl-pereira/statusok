document.addEventListener("DOMContentLoaded", () => {
  if (typeof TEMPLATE_CONFIG === "undefined") {
    console.error("TEMPLATE_CONFIG não carregado");
    return;
  }
  renderTemplate(TEMPLATE_CONFIG);
});

let currentIndex = 0;
const slides = document.querySelectorAll('.promo-item');
const totalSlides = slides.length;

function goToSlide(index) {
  const container = document.querySelector('.promo-container');
  container.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}

// Inicia o slide automático
setInterval(nextSlide, 3000);

// Você também pode implementar navegação manual, por exemplo:
document.querySelector('.next-button').addEventListener('click', nextSlide);

