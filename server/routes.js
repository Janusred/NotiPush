// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();


const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

router.post('/subscribe', (req, res) => {
  const suscripcion = req.body;
  push.addSubscription(suscripcion);
  res.json('subscribe');
});
router.get('/key', (req, res) => {
  const key = push.getKey();

  res.send(key);
}); 
router.post('/push', (req, res) => {
  res.json('Key publico');
});