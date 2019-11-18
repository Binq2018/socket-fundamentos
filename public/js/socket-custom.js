var socket = io();

// Escuchar (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar (on)
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('respuesta server: ', res);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});