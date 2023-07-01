// importart la libreria de mongoose
const mongoose = require("mongoose")

// conexion a base de datos
const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log("database connection successful")
    } catch (error) {
        console.log(error)
        throw new Error("Database Connection Error")
    }
};

module.exports = {
    dbConnection,
};
