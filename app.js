

// app.js o server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Si tienes archivos estáticos (CSS, JS, etc.) en una carpeta llamada "public"

// Usar las rutas definidas
app.use(routes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
