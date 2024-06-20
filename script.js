// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad de los botones de compra
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto añadido al carrito');
        });
    });

});