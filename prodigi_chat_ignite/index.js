'use strict';
let app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io').listen(app.listen(3000, () => {
            console.log(':3000');
        }));

    app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/index.html`);
    });


    io.on('connection', (socket) => {
        console.log('usuario conectado');

        socket.on('message', (msg) => {
            console.log(msg);
            io.emit('message', msg);
        });

    });
