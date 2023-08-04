const express = require('express'); // import express
const app = express(); // initialize express
const port = 3000; // port to run server on
const routerApi = require('./Routes'); // import router
const cors = require('cors'); // import cors
// middleware de errores--------------------
const {
  errorHandler,
  boomErrorHandler,
  sequelizeErrorHandler
} = require('./Middlewares/error.handler');

// middleware para parseo de json--------------------
app.use(express.json());
// uso de cors para acceso de otros dominios--------------------
const whitelist = ['http://localhost:8080', 'https://dominioDePrueba.com', 'http://localhost:3000', 'http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));
// -----------------------------------------------------------
// ruta por defecto--------------------
app.get('/', (req, res) => {
    res.send('Hello World!'); // send response
});

// llamado de los routes--------------------
routerApi(app);

// llamado de los middelwares de errores--------------------
app.use(sequelizeErrorHandler);
app.use(boomErrorHandler); //el orden es importante
app.use(errorHandler);
// ----------------------------------------------
// escuchamos el puerto--------------------
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
