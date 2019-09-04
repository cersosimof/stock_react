<?php

require "articulos.php";
//require 'ConnectDb.php';

$categoria = $_GET["cat"];
$marca = $_GET["marca"];

if($categoria == ''){

$articuloCreado = new Articulo();
$result = $articuloCreado->mostrarAlgo();
}
else if($categoria != '' && $marca == ''){
    require 'ConnectDb.php';
    $instance = ConnectDb::getInstance();
    $sql = "SELECT id_articulo, marca FROM articulos WHERE categoria = '$categoria'";
    $conn = $instance->ExecuteQuery($sql);

    $arr_mar=[];
    $i=0;

    while ($fila = mysqli_fetch_assoc($conn)) {
        $arr_mar[$i]=[
            "id"=>$fila["id_articulo"],
            "marca"=>$fila["marca"]
        ];
        $i++;
    }

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin:*');
    echo json_encode($arr_mar);
}
else 
{
    require 'ConnectDb.php';
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

}

