// script.js
// Función que se ejecutará cuando se envíe el formulario
function guardarDatos() {
    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
  
    // Crear un objeto con los datos del formulario
    const datos = {
      nombre: nombre,
      edad: edad,
      email: email
    };
  
    // Convertir el objeto a una cadena de texto en formato JSON
    const datosJSON = JSON.stringify(datos);
  
    // Guardar la cadena de texto en un arch
}