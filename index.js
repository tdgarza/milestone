const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get("/", (req, res) =>{
    res,sendFile(path.join(__dirname + 'templates/index.html'))
});

app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Activo en el puerto 8080");