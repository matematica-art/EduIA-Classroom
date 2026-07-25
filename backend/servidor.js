// =====================================
// LMS IA - Servidor Backend
// =====================================

// Importar librerías
const express = require("express");
const cors = require("cors");

// Crear aplicación
const app = express();

// Puerto del servidor
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());


// =====================================
// Ruta de prueba
// =====================================

app.get("/", (req, res) => {
    res.json({
        mensaje: "Servidor LMS IA funcionando correctamente 🚀"
    });
});


// =====================================
// API Usuarios (base inicial)
// =====================================

app.get("/usuarios", (req, res) => {

    res.json({
        mensaje: "Aquí estarán los usuarios del LMS"
    });

});


// =====================================
// API Cursos (base inicial)
// =====================================

app.get("/cursos", (req, res) => {

    res.json({
        mensaje: "Aquí estarán los cursos del LMS"
    });

});


// =====================================
// Encender servidor
// =====================================

app.listen(PORT, () => {

    console.log(`Servidor LMS IA ejecutándose en puerto ${PORT}`);

});
