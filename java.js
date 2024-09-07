// app.js
function generateQRCode() {
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const age = document.getElementById('age').value;

    // Datos de la mascota en formato JSON
    const petData = JSON.stringify({ name: name, type: type, age: age });

    // Aquí generamos la URL que contendrá los datos de la mascota
    const url = `https://tusitio.com/redireccion.html?data=${encodeURIComponent(petData)}`;

    // Generar el código QR
    const qr = qrcode(0, 'L');
    qr.addData(url);
    qr.make();
    
    // Mostrar el QR en la página
    document.getElementById('qrcode').innerHTML = qr.createImgTag();

    // Mostrar el enlace para volver a la página principal
    document.getElementById('back-link').style.display = 'block';
}
