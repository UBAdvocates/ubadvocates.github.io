let currentIndex = 0;
let slides = document.querySelector('.slides');
let totalSlides = document.querySelectorAll('.slides img').length;
let slideInterval;

function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide function
function startSlideShow() {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

// Stop auto-slide when clicking buttons
function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Next and previous slide functions
function nextSlide() {
    showSlide(currentIndex + 1);
    resetSlideShow();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetSlideShow();
}

// Start the slideshow initially
startSlideShow();
