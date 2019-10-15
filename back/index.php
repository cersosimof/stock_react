<?php

require "articulos.php";
// require 'connectDB.php';

$categoria = $_GET["cat"];
$marca = $_GET["marca"];
$modelo = $_GET["modelo"];

//SI NO TIENE NADA CARGADO
if($categoria == '' && $categoria == '' && $modelo == ''){

    require 'connectDB.php';
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin:*');

    $instance = ConnectDb::getInstance();
    $sql = "SELECT id_articulo, categoria FROM articulos GROUP BY categoria";
    $conn = $instance->ExecuteQuery($sql);

    $arr=[];
    $i=0;

    while ($fila = mysqli_fetch_assoc($conn)) {
        $arr[$i]=[
            "id"=>$fila["id_articulo"],
            "categoria"=>$fila["categoria"]
        ];
       $i++;
    }

    echo json_encode($arr);
    }
//SI TIENE CARGADO CATEGORIA
else if($categoria != '' && $marca == '' && $modelo == ''){
    require 'connectDB.php';

    $instance = ConnectDb::getInstance();
    $sql = "SELECT id_articulo, marca FROM articulos WHERE categoria = '$categoria' GROUP BY marca";
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
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');

    echo json_encode($arr_mar);
}
//SI TIENE CATEGORIA Y MARCA
else if($categoria != '' && $marca != '' && $modelo == '')
{
    require 'connectDB.php';
    $instance = ConnectDb::getInstance();
    $sql = "SELECT id_articulo, modelo FROM articulos WHERE categoria = '$categoria' AND marca = '$marca'";
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
//SI TIENE LOS 3
else
{
    require 'connectDB.php';
    $instance = ConnectDb::getInstance();
    $sql = "SELECT id_articulo, categoria, marca, modelo, stockInicial FROM articulos WHERE categoria = '$categoria' AND marca = '$marca' AND modelo = '$modelo'";
    $conn = $instance->ExecuteQuery($sql);

    $arr_mar=[];
    $i=0;

    while ($fila = mysqli_fetch_assoc($conn)) {
        $arr_mar[$i]=[
            "id"=>$fila["id_articulo"],
            "categoria"=>$fila["categoria"],
            "marca"=>$fila["marca"],
            "modelo"=>$fila["modelo"],
            "stock"=>$fila["stockInicial"]
        ];
        $i++;
    }

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin:*');
    echo json_encode($arr_mar);
    
}





