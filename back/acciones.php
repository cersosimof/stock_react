<?php

require "articulos.php";

$codigo = $_GET["codigo"];
$cantidad = $_GET["cantidad"];
$accion = $_GET["accion"];

if($accion == 'ingresar'){
    $articuloCreado = new Articulo();
    $result = $articuloCreado->aumentarCantidad($codigo, $cantidad);    
}
else if($accion == 'entregar'){
    $articuloCreado = new Articulo();
    $result = $articuloCreado->reducirCantidad($codigo, $cantidad);    
}
