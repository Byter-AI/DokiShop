// interaction.js

// Función para generar el código QR
function generateQRCode() {
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const age = document.getElementById('age').value;

    // Verificamos que los datos estén completos
    if (!name || !type || !age) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Datos de la mascota en formato JSON
    const petData = JSON.stringify({ name, type, age });

    // Generar la URL relativa que funcionará tanto en local como en producción
    const url = `redirection.html?data=${encodeURIComponent(petData)}`;

    // Generar el código QR usando la librería qrcode-generator
    const qr = qrcode(0, 'L');
    qr.addData(url);
    qr.make();

    // Mostrar el QR en la página
    document.getElementById('qrcode').innerHTML = qr.createImgTag();

    // Habilitar el botón "Ver sin Código QR" después de generar el QR
    document.getElementById('manualEntryButton').disabled = false;
}

// Función para redirigir sin usar el QR
function redirectWithoutQRCode() {
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const age = document.getElementById('age').value;

    // Verificamos que los datos estén completos
    if (!name || !type || !age) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Datos de la mascota en formato JSON
    const petData = JSON.stringify({ name, type, age });

    // Redirigir manualmente a la página aversifunciona.html con los datos de la mascota
    const url = `redirection.html?data=${encodeURIComponent(petData)}`;
    window.location.href = url;
}

// Función para cargar los datos de la mascota desde la URL
function getPetData() {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');

    if (data) {
        const petData = JSON.parse(decodeURIComponent(data));

        // Mostramos los datos de la mascota en la página
        document.getElementById('pet-info').innerHTML = `
            <p><strong>Nombre:</strong> ${petData.name}</p>
            <p><strong>Tipo:</strong> ${petData.type}</p>
            <p><strong>Edad:</strong> ${petData.age}</p>
        `;
    } else {
        document.getElementById('pet-info').innerHTML = `<p>No se encontraron datos de la mascota.</p>`;
    }
}

// Ejecutar al cargar la página para obtener los datos de la mascota
window.onload = function() {
    if (window.location.pathname.endsWith('redirection.html')) {
        getPetData();
    }
};
// Función para generar el QR de la página mascota.html
function generatePageQRCode() {
    const currentUrl = window.location.href;

    // Generar el código QR usando la librería qrcode-generator
    const qr = qrcode(0, 'L');
    qr.addData(currentUrl);
    qr.make();

    // Mostrar el QR en la página
    document.getElementById('qrcode').innerHTML = qr.createImgTag();
};


function toggleMenu() {
    const menu = document.getElementById('menu-items');
    menu.classList.toggle('active');
};


// Ejecutar al cargar la página para obtener los datos de la mascota
window.onload = function() {
    if (window.location.pathname.endsWith('redirection.html')) {
        getPetData();
    }
};

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow', 
    grabCursor: true,
    centeredSlides: true, 
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: 
    
});
