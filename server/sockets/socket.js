const { io } = require('../server.js');

// Escuchar (on)
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Emitir cliente (client.emit)
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Escuchar el cliente (client.on)
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente (client.on)
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // Escucha (on arriba) y envia a todos los usuarios el mensaje obtenido
        //(broadcast) envia a todos los usuarios
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({ //callback disparado cuando se recibe la información correctamente
        //         resp: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!!!'
        //     });
        // }
    });
});