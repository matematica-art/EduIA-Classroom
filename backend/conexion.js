// =====================================
// Conexión Base de Datos LMS IA
// =====================================

const mysql = require("mysql2");


// Configuración de conexión

const conexion = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "lms_ia",
    port: 3306

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
