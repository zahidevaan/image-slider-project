document.addEventListener('DOMContentLoaded', function (){

    const sliders = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 3000;
    let slideInterval;

    function showSlide(index) {
        sliders.style.transform = `translateX(${-index * 100}%)`
    };

    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    };

    // Previous button javascript here
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    };

    // next button event litsener javascript here
    nextButton.addEventListener('click', (e) => {
        nextSlide();
        resetInterval();
    });

    // previous button event listener javascript here  here
    prevButton.addEventListener('click', (e) => {
        prevSlide();
        resetInterval();
    });

    // Auto play function here
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    // resetInterval function here
    function resetInterval() {
        clearInterval(slideInterval);
        startAutoPlay();
    };

    startAutoPlay();

});