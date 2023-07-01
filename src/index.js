// primer paso, leer variables de entorno
require('dotenv').config();

const express = require("express");
const app = express();

//middle ware
app.use(express.json());

//ruta de bienvenida
// en postman http://localhost:4000/api
app.get("/api", (req, res) => {
    return res.json({
        msg: "Welcome to API"
    })
})

// iniciar applicacion 
app.listen(process.env.PORT, () => {
    console.log(`Server in port  ${process.env.PORT}`);
});

