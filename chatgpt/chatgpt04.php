<?php
// Leer el contenido del archivo data.json
$datos = file_get_contents("chatgpt04.json");

// Convertir el contenido del archivo en un objeto de PHP
$objeto = json_decode($datos);

// Añadir los datos del formulario al objeto
$objeto[] = array(
  "nombre" => $_POST["nombre"],
  "apellido" => $_POST["apellido"],
  "correo" => $_POST["correo"]
);

// Convertir el objeto de PHP en una cadena de texto en formato JSON
$json = json_encode($objeto, JSON_PRETTY_PRINT);

// Escribir la cadena de texto en el archivo data.json
file_put_contents("data.json", $json);

// Mostrar un mensaje de éxito al usuario
echo "¡Los datos se han guardado correctamente!";
?>
