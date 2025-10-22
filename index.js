const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//motor de views
app.set('view engine','ejs');

app.get('/inicio', (req, res) => {
    res.render('inicio',{
        titulo: 'Pagina de inicio',
        mensaje: 'Bienvenido a nuestra tienda en linea'
    });
});




app.listen(port, () => {
    console.log('Servidor inicializado en http://localhost:' + port);
});