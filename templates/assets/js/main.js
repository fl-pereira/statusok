document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     TEMPLATE (se existir)
  ========================= */
  if (typeof TEMPLATE_CONFIG !== "undefined") {
    renderTemplate(TEMPLATE_CONFIG);
  }

  /* =========================
     GALERIA - OVERLAY
  ========================= */
  const overlay = document.querySelector('.gallery-overlay');
  const overlayImg = overlay?.querySelector('img');

  document.querySelectorAll('.gallery-track img').forEach(img => {
    img.addEventListener('click', () => {
      if (!overlay || !overlayImg) return;

      overlayImg.src = img.src;
      overlay.hidden = false;
    });
  });

  overlay?.addEventListener('click', () => {
    overlay.hidden = true;
    overlayImg.src = '';
  });

  /* =========================
     BANNER PROMOCIONAL (se existir)
  ========================= */
  const slides = document.querySelectorAll('.promo-item');
  const container = document.querySelector('.promo-container');

  if (slides.length && container) {
    let currentIndex = 0;

    function goToSlide(index) {
      container.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);

    const nextBtn = document.querySelector('.next-button');
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }
  }

  /* =========================
   GALERIA - BOTÕES
  ========================= */

  const galleryTrack = document.querySelector('.gallery-track');
  const btnPrev = document.querySelector('.gallery-btn.prev');
  const btnNext = document.querySelector('.gallery-btn.next');

  if (galleryTrack && btnPrev && btnNext) {
    const scrollAmount = 180; // px por clique

    btnNext.addEventListener('click', () => {
      galleryTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
      galleryTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

});