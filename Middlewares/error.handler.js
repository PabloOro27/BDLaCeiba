// error de sequelize
const { ValidationError } = require("sequelize");
// importamos boom
const boom = require("@hapi/boom");
// error handler- es un middleware que se encarga de manejar los errores
function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}
// el mas importantes es el manejador de errores con boom
// boom - es un paquete para manejar errores
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}
// error de ORM sequelize
function sequelizeErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      // type: 'ValidationError',
      message: err.name,
      errors: err.errors,
    });
  }
  next(err);
}

// exportamos los middlewares
module.exports = { errorHandler, boomErrorHandler, sequelizeErrorHandler };
