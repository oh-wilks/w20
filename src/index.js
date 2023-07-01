// primer paso, leer variables de entorno
require('dotenv').config();

const express = require("express");
const { dbConnection } = require ("./database/config") //importar cadena de conexion de base de datos
const app = express();

dbConnection();
//middle ware
app.use(express.json());

//ruta de bienvenida
// en postman http://localhost:4000/api
app.get("/api", (req, res) => {
    return res.json({
        msg: "Welcome to API"
    })
})

app.use("/api/users", require("./routes/users.routes"))
app.use("/api/products", require("./routes/products.routes"))

// iniciar applicacion 
app.listen(process.env.PORT, () => {
    console.log(`Server in port  ${process.env.PORT}`);
});

