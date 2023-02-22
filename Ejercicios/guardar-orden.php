<?php
// Obtener los datos de la orden de comida
$nombre = $_POST['nombre'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];

// Crear un objeto con los datos de la orden
$orden = array(
    'nombre' => $nombre,
    'direccion' => $direccion,
    'telefono' => $telefono
);

// Convertir el objeto en formato JSON
$orden_json = json_encode($orden);

// Escribir los datos en el archivo JSON
$file = 'orders.json';
file_put_contents($file, $orden_json . PHP_EOL, FILE_APPEND);

// Redirigir a la página principal
header('Location: index.html');
?>
<?php
// Obtener los datos de la orden de comida
$nombre = $_POST['nombre'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];

// Crear un objeto con los datos de la orden
$orden = array(
    'nombre' => $nombre,
    'direccion' => $direccion,
    'telefono' => $telefono
);

// Convertir el objeto en formato JSON
$orden_json = json_encode($orden);

// Escribir los datos en el archivo JSON
$file = 'orders.json';
file_put_contents($file, $orden_json . PHP_EOL, FILE_APPEND);

// Redirigir a la página principal
header('Location: index.html');
?>
