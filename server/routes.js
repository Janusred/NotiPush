// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


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
  res.json('subcribe');
}); 
router.post('/push', (req, res) => {
  res.json('Key publico');
});