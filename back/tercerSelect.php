<?php
require 'ConnectDb.php';
    
    $categoria = $_GET["cat"];
    $marca = $_GET["marca"];
    
    $instance = ConnectDb::getInstance();
    $sql = "SELECT id_articulo, modelo FROM articulos WHERE categoria = '$categoria' AND marca = '$marca' GROUP BY marca";
    $conn = $instance->ExecuteQuery($sql);

    $arr_mar=[];
    $i=0;

    while ($fila = mysqli_fetch_assoc($conn)) {
        $arr_mar[$i]=[
            "id"=>$fila["id_articulo"],
            "modelo"=>$fila["modelo"]
        ];
        $i++;
    }

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin:*');
    echo json_encode($arr_mar);
