// =====================================
// Conexión Base de Datos LMS IA
// =====================================

const mysql = require("mysql2");
const dotenv = require("dotenv");


// Cargar variables de entorno

dotenv.config();


// Crear conexión

const conexion = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT

});


// Probar conexión

conexion.connect((error) => {

    if (error) {

        console.log("Error conectando a la base de datos:", error);

    } else {

        console.log("Base de datos LMS IA conectada correctamente ✅");

    }

});


module.exports = conexion;
