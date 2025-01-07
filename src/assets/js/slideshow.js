let slideIndex = 1;
let dots = document.querySelectorAll('.navigation-dot');
const previousArrow = document.querySelector('#prev');
const nextArrow = document.querySelector('#next');

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    let slides = document.querySelectorAll('.slides');
    let dots = document.querySelectorAll('.navigation-dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide, index) => {
        if (index === slideIndex - 1) {
            slide.classList.remove('hidden', 'fade-out');
            slide.classList.add('fade-in');
        } else {
            slide.classList.remove('fade-in');
            slide.classList.add('fade-out');
            requestAnimationFrame(() => slide.classList.add('hidden'));
        }
    });

    dots.forEach(dot => dot.setAttribute('data-active', 'false'));
    dots[slideIndex - 1].setAttribute('data-active', 'true');
};

showSlides(slideIndex);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        currentSlide(i + 1);
    })
}

previousArrow.addEventListener('click', () => {
    plusSlides(-1);
});

nextArrow.addEventListener('click', () => {
    plusSlides(1);
});