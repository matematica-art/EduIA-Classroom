// =====================================
// LMS IA - Servidor Backend
// =====================================

const express = require("express");
const cors = require("cors");

// Importar conexión a base de datos
const conexion = require("./conexion");


// Crear aplicación
const app = express();

const PORT = 3000;


// Middlewares

app.use(cors());
app.use(express.json());


// =====================================
// Ruta principal
// =====================================

app.get("/", (req, res) => {

    res.json({
        mensaje: "Servidor LMS IA funcionando correctamente 🚀"
    });

});


// =====================================
// API Usuarios
// =====================================

app.get("/usuarios", (req, res) => {

    const sql = "SELECT * FROM usuarios";

    conexion.query(sql, (error, resultados) => {

        if (error) {

            res.status(500).json({
                error: "Error al consultar usuarios",
                detalle: error
            });

        } else {

            res.json(resultados);

        }

    });

});


// =====================================
// API Cursos
// =====================================

app.get("/cursos", (req, res) => {

    const sql = "SELECT * FROM cursos";

    conexion.query(sql, (error, resultados) => {

        if (error) {

            res.status(500).json({
                error: "Error al consultar cursos",
                detalle: error
            });

        } else {

            res.json(resultados);

        }

    });

});


// =====================================
// Encender servidor
// =====================================

app.listen(PORT, () => {

    console.log(`Servidor LMS IA ejecutándose en puerto ${PORT}`);

});
