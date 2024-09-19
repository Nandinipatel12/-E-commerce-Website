let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides[currentSlide].classList.add('active');

    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelectorAll('.slide')[0].classList.add('active');

