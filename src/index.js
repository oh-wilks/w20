// primer paso, leer variables de entorno
require('dotenv').config

const express = require("express");
const app = express();

//middle ware

app.use(express.json());

//ruta de bienvenida
app.get("/api", (req, res) => {
    return res.json({
        msg: "Welcome to API"
    })
})

// iniciar applicacion 
app.listen(process.env.PORT, () => {
    console.log(`Servivor en puerto ${process.env.PORT}`);
});