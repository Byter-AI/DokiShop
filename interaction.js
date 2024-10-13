const catalogo = document.querySelector('.catalogo');
const images = document.querySelectorAll('.catalogo img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const imgWidth = 210; // Ancho de cada imagen + margen



// Función para rotar las imágenes hacia la izquierda
function moveNext() {
    currentIndex++;
    if (currentIndex === images.length) {
        catalogo.appendChild(catalogo.firstElementChild); // Mueve la primera imagen al final
        currentIndex--; // Reseteamos el índice
    }
     catalogo.style.transition = 'transform 0.5s ease-in-out';
     catalogo.style.transform = `translateX(${-imgWidth * currentIndex}px)`;
}


// Función para rotar las imágenes hacia la derecha
function movePrev() {
    if (currentIndex === 0) {
        catalogo.prepend(catalogo.lastElementChild); // Mueve la última imagen al principio
        currentIndex++; // Ajusta el índice
    }
    currentIndex--;
    catalogo.style.transition = 'transform 0.5s ease';
    catalogo.style.transform = `translateX(${-imgWidth * currentIndex}px)`;
}

function toggleMenu() {
    const menu = document.getElementById('menuItems');
    menu.classList.toggle('active');
};
