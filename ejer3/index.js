// Importamos el módulo logplease para mostrar mensajes con distintos niveles de log
const Logger = require('logplease');

// Creamos una instancia del logger con el nombre 'Ejercicio3'
const logger = Logger.create('Ejercicio3');

// Importamos la función esPar que creamos en numeros.js
const esPar = require('./numeros');

// Creamos un array con los números que vamos a evaluar
const numeros = [2, 3, 101, 201, 202, 100];

// Recorremos cada número del array
numeros.forEach(num => {
  
  // Llamamos a la función esPar para saber si el número es par
  if (esPar(num)) {
    logger.info(`El número ${num} es par`);
  } else {
    logger.error(`El número ${num} no es par`);
  }
});
