// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad de los botones de compra
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto añadido al carrito');
        });
    });

    // Funcionalidad del carrusel
    const carouselInner = document.querySelector('.carousel__inner');
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    const items = document.querySelectorAll('.carousel__item');
    const totalItems = items.length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});