// Este código es un servidor de Node.js que utiliza la librería Express. Express es un framework de aplicaciones web para Node.js que proporciona una serie de funcionalidades útiles para crear aplicaciones web y APIs.
// En este código, se hacen varias cosas:

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


// Se importa la librería Express y se crea una aplicación de Express llamada "app".
// Se importa el módulo "path" de Node.js y se crea una instancia de la clase Router de Express.
// Se habilitan los middlewares de Express para el manejo de datos JSON y datos codificados en el cuerpo de las solicitudes.
// Se crean varias rutas utilizando el método "get" del router. Cada ruta tiene una dirección URL diferente y envía un archivo HTML diferente al cliente cuando se accede a esa dirección.
// Se crea una ruta que utiliza el método "post" del router. Esta ruta recibe una solicitud POST y envía un mensaje de respuesta al cliente con los datos del cuerpo de la solicitud.
// Se asigna el router a la aplicación de Express y se especifica que la aplicación escuchará en el puerto 8080 (o en el puerto especificado en la variable de entorno "port").
// Se imprime un mensaje en la consola para indicar que el servidor está activo en el puerto 8080.

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + '/index.html'))
});
router.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/contacto.html'))
});
router.get("/perfil", (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/perfil.html'))
});

router.post("/", (req, res) => {
    res.send("El usuario " + req.body.first_name + " ha sido registrado.");
})
app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Activo en el puerto 8080");