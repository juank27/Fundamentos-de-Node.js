require('dotenv').config(); //Carga variables de entorno
let nombre = process.env.NOMBRE || 'Sin nombre'; // Si no existe NOMBRE, usa 'Sin nombre'
console.log('Hola '+ nombre); //-> Hola Juan