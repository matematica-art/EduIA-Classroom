# Modelo Entidad-Relación
# Sistema EduIA Classroom

## 1. Descripción

El modelo entidad-relación representa la estructura de datos necesaria para el funcionamiento de la plataforma educativa inteligente EduIA Classroom.

Permite gestionar usuarios, cursos, contenidos, actividades, evaluaciones y seguimiento académico.

---

# 2. Entidades Principales

## ENTIDAD: USUARIO

Representa a las personas que utilizan el sistema.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_usuario | INT | Identificador único del usuario | PK |
| nombre | VARCHAR(100) | Nombre completo | |
| correo | VARCHAR(100) | Correo electrónico | |
| contraseña | VARCHAR(255) | Contraseña cifrada | |
| rol | VARCHAR(20) | Tipo de usuario | |

Roles disponibles:

- Administrador
- Docente
- Estudiante

---

# ENTIDAD: CURSO

Representa los cursos disponibles en la plataforma.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_curso | INT | Identificador del curso | PK |
| nombre | VARCHAR(100) | Nombre del curso | |
| descripcion | TEXT | Información del curso | |
| fecha_creacion | DATE | Fecha de creación | |
| id_docente | INT | Docente responsable | FK |

Relación:

Un docente puede crear muchos cursos.

---

# ENTIDAD: INSCRIPCION

Registra los estudiantes inscritos en cursos.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_inscripcion | INT | Identificador | PK |
| id_usuario | INT | Estudiante inscrito | FK |
| id_curso | INT | Curso seleccionado | FK |
| fecha_inscripcion | DATE | Fecha de registro | |

Relación:

Un estudiante puede estar en varios cursos.

Un curso puede tener varios estudiantes.

---

# ENTIDAD: MODULO

Representa las unidades dentro de un curso.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_modulo | INT | Identificador | PK |
| nombre | VARCHAR(100) | Nombre del módulo | |
| descripcion | TEXT | Descripción | |
| id_curso | INT | Curso asociado | FK |

Relación:

Un curso contiene muchos módulos.

---

# ENTIDAD: CONTENIDO

Representa los materiales educativos.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_contenido | INT | Identificador | PK |
| titulo | VARCHAR(150) | Nombre del recurso | |
| tipo | VARCHAR(50) | Documento, video, enlace | |
| url | TEXT | Ubicación del recurso | |
| id_modulo | INT | Módulo relacionado | FK |

---

# ENTIDAD: ACTIVIDAD

Representa tareas y trabajos académicos.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_actividad | INT | Identificador | PK |
| titulo | VARCHAR(150) | Nombre de actividad | |
| descripcion | TEXT | Instrucciones | |
| fecha_entrega | DATE | Fecha límite | |
| id_curso | INT | Curso asociado | FK |

---

# ENTIDAD: ENTREGA

Registra las respuestas enviadas por estudiantes.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_entrega | INT | Identificador | PK |
| id_actividad | INT | Actividad entregada | FK |
| id_estudiante | INT | Usuario estudiante | FK |
| archivo | TEXT | Archivo enviado | |
| fecha_entrega | DATE | Fecha de envío | |
| retroalimentacion | TEXT | Comentarios docente | |

---

# ENTIDAD: EVALUACION

Representa pruebas y cuestionarios.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_evaluacion | INT | Identificador | PK |
| titulo | VARCHAR(150) | Nombre evaluación | |
| descripcion | TEXT | Información | |
| id_curso | INT | Curso relacionado | FK |

---

# ENTIDAD: PREGUNTA

Almacena preguntas de evaluaciones.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_pregunta | INT | Identificador | PK |
| pregunta | TEXT | Texto de pregunta | |
| respuesta_correcta | TEXT | Respuesta válida | |
| id_evaluacion | INT | Evaluación asociada | FK |

---

# ENTIDAD: CALIFICACION

Registra resultados académicos.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_calificacion | INT | Identificador | PK |
| id_usuario | INT | Estudiante | FK |
| id_evaluacion | INT | Evaluación | FK |
| nota | DECIMAL(5,2) | Resultado obtenido | |

---

# ENTIDAD: CHAT_IA

Registra interacción con el tutor inteligente.

| Campo | Tipo de dato | Descripción | Clave |
|---|---|---|---|
| id_chat | INT | Identificador | PK |
| id_usuario | INT | Usuario que consulta | FK |
| pregunta | TEXT | Consulta realizada | |
| respuesta | TEXT | Respuesta IA | |
| fecha | DATETIME | Fecha interacción | |

---

# 3. Relaciones Principales

