const https = require("https"); // Importa la librería HTTPS de Node.js

async function obtenerDatos() {
  // Crea la opción de la solicitud
  const opciones = {
    hostname: "127.0.0.1",
    path: "/datos",
    method: "GET"
  };

  // Realiza la solicitud HTTP y retorna una promesa
  const respuesta = await new Promise((resolve, reject) => {
    const req = https.request(opciones, res => {
      let data = "";
      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(data);
      });
    });
    req.on("error", error => {
      reject(error);
    });
    req.end();
  });

  // Devuelve la respuesta en formato JSON
  return JSON.parse(respuesta);
}

// Usa la función asíncrona
obtenerDatos().then(datos => {
  console.log(datos);
});
