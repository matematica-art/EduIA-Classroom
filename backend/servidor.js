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
// Login Usuarios
// =====================================

app.post("/login", (req, res) => {

    const { correo, password } = req.body;


    const sql = `
        SELECT * FROM usuarios
        WHERE correo = ? 
        AND password = ?
    `;


    conexion.query(
        sql,
        [correo, password],
        (error, resultados) => {


            if (error) {

                res.status(500).json({
                    error: "Error en el servidor",
                    detalle: error
                });


            } else if (resultados.length === 0) {

                res.status(401).json({
                    mensaje: "Correo o contraseña incorrectos"
                });


            } else {

                res.json({
                    mensaje: "Inicio de sesión correcto",
                    usuario: resultados[0]
                });

            }


        }
    );


});
// =====================================
// Registrar Usuario
// =====================================

app.post("/usuarios", (req, res) => {

    const { nombre, correo, password, rol } = req.body;


    const sql = `
        INSERT INTO usuarios 
        (nombre, correo, password, rol)
        VALUES (?, ?, ?, ?)
    `;


    conexion.query(
        sql,
        [nombre, correo, password, rol],
        (error, resultado) => {

            if (error) {

                res.status(500).json({
                    error: "No se pudo registrar el usuario",
                    detalle: error
                });

            } else {

                res.json({
                    mensaje: "Usuario registrado correctamente",
                    id: resultado.insertId
                });

            }

        }
    );

});
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
// Crear Curso
// =====================================

app.post("/cursos", (req, res) => {

    const { id_curso, nombre, descripcion } = req.body;


    const sql = `
        INSERT INTO cursos
        (id_curso, nombre, descripcion)
        VALUES (?, ?, ?)
    `;


    conexion.query(
        sql,
        [id_curso, nombre, descripcion],
        (error, resultado) => {

            if (error) {

                res.status(500).json({
                    error: "No se pudo crear el curso",
                    detalle: error
                });

            } else {

                res.json({
                    mensaje: "Curso creado correctamente",
                    id: resultado.insertId
                });

            }

        }
    );

});
// =====================================
// Encender servidor
// =====================================

app.listen(PORT, () => {

    console.log(`Servidor LMS IA ejecutándose en puerto ${PORT}`);

});
