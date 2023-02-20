<?php

$order = json_decode(file_get_contents("php://input"), true);

$filename = "orden-" . uniqid() . ".json";
file_put_contents($filename, json_encode($order));

http_response_code(200);
?>
