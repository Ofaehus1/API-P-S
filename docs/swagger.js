const swaggerJsdoc = require('swagger-jsdoc');

/*
 * Opciones
 */

const options = {
  apis: ['./routes/*.js'],
};

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;
