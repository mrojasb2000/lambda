'use strict';

module.exports.helloPOST = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  var timestamp = new Date().getTime();
  const body = JSON.parse(event.body);
  var fecha = timestamp;
  var nombre = body.nombre;
  var apellido = body.apellido;
  var numero = body.numero || null;

  if (numero === null || numero === undefined || numero === 0 || isNaN(numero) === true) {
    callback(null, {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        message: `Hay un error en el numero= ${numero}`
      })
    })
  } else {
    numero = numero * 100;
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Mensaje exitoso',
        data: {
          fecha,
          nombre,
          apellido,
          numero
        }
      }),
    });
  }
};
