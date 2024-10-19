// Validación del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.querySelector('input[name="name"]').value;
    const correo = document.querySelector('input[name="email"]').value;
    const mensaje = document.querySelector('textarea[name="message"]').value;

    // Genera un enlace de WhatsApp con el mensaje
    const telefono = '573123747146'; // Número de WhatsApp (con código de país)
    const texto = `Hola, mi nombre es ${nombre}. Mi correo es ${correo}. ${mensaje}`;
    const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    // Redirige a la página de WhatsApp
    window.open(enlaceWhatsApp, '_blank');
});
