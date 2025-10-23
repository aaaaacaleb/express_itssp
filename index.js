const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//motor de views
app.set('view engine','ejs');

//express
const admin = require('firebase-admin');
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended:true }));

//credenciales
const serviceAccount = require('./firebase_key.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();// Rutas de la API de productos

app.get("/productos", async (req, res) => {
    try{
        const items = await db.collection("productos").get();
        const productos = items.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                nombre: data.nombre,
                precio: data.precio,
                imagen: data.imagen
            };
        });
        res.render('inicio', {productos});
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
});


app.listen(port, () => {
    console.log('Servidor inicializado en http://localhost:' + port);
});