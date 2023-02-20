<?php
// Obtener los valores del formulario
$name = $_POST['name'];
$tableNumber = $_POST['table-number'];
$food = $_POST['food'];
$drink = $_POST['drink'];
$notes = $_POST['notes'];

// Crear un array asociativo con los valores
$order = array(
  'name' => $name,
  'tableNumber' => $tableNumber,
  'food' => $food,
  'drink' => $drink,
  'notes' => $notes
);

// Convertir el array en una cadena JSON
$orderJSON = json_encode($order);

// Guardar la cadena JSON en un archivo
file_put_contents('orden.json', $orderJSON);

// Redirigir al usuario a la página de confirmación
header('Location: confirmacion.php');
?>
