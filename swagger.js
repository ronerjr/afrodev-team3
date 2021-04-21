const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './adapters/api/routes/ong.js',
  './adapters/api/routes/drug.js',
];

swaggerAutogen(outputFile, endpointsFiles);
