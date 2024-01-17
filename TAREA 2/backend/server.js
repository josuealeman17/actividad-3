const express = require("express");
const path = require("path");

const app = express();
const puerto = process.env.PORT || 4000;

// Configuración del middleware para servir archivos estáticos desde la carpeta "frontend"
app.use(express.static(path.join(__dirname, "frontend")));

// Configuración del middleware para servir archivos estáticos desde la carpeta "model"
app.use("/model", express.static(path.join(__dirname, "model")));

// Ruta principal que sirve tu archivo HTML
app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/eljos/Documents/ESPE 23-24/ADVANCED WEB/P2/Actividad 3/TAREA 2/frontend/view/index.html"
  );
});

// Ruta para el controlador (view.js)
// Ruta para el controlador (view.js)
app.get("/controller/view.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "frontend", "controller", "view.js"));
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
