const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//motor de views
app.set('view engine','ejs');

app.get('/inicio', (req, res) => {
    const productos = [
       { 
        nombre: 'Audifonos bluethooth',
        descripción: 'Sonido de alta calidad y cancelación de ruido',
        precio: 899.99,
        imagen: 'https://picsum.photos/200'
       }, 
       { 
        nombre: 'SmartWatch Pro',
        descripción: 'Controla tu salud y recibe notificaciones',
        precio: 1299.50,
        imagen: 'https://picsum.photos/200?2'
       },
       { 
        nombre: 'Camara 4K',
        descripción: 'Captura tus momentos con resolución Ultra HD',
        precio: 4999.00,
        imagen: 'https://picsum.photos/200?3'
       },
       { 
        nombre: 'Television Samsung',
        descripción: 'Pantalla de alta calidad y colores',
        precio: 900.50,
        imagen: 'https://picsum.photos/200?4'
       }, 
       { 
        nombre: 'Smartphone',
        descripción: 'Telefono Inteligente con gran almacenamiento',
        precio: 1000.00,
        imagen: 'https://picsum.photos/200?5'
       },
       { 
        nombre: 'Computadora Personal',
        descripción: 'Computadora con gran procesamiento',
        precio: 850.50,
        imagen: 'https://picsum.photos/200?6'
       }
    ];
    res.render('inicio',{ productos: productos });
});


app.listen(port, () => {
    console.log('Servidor inicializado en http://localhost:' + port);
});