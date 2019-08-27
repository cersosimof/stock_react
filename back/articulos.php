<?php

class Articulo {

    // PROPIEDADES
    private $id_articulo;
    private $categoria;
    private $marca;
    private $modelo;
    private $notas;
    private $stockInicial;
    private $alerta;
    private $cantidad;

    public function __construct(){
        // $this->categoria=$_POST["categoria"];
        // $this->marca=$_POST["marca"];
        // $this->modelo=$_POST["modelo"];
        // $this->notas=$_POST["notas"];
        // $this->stockInicial=$_POST["stockInicial"];
        // $this->alerta=$_POST["alerta"];
    }

    function altaArticulo($categoria, $marca, $modelo, $notas, $stockInicial, $alerta){
        require 'ConnectDb.php';
        $sql = "INSERT INTO articulos (id_articulo, categoria, marca, modelo, notas, stockInicial, alerta) VALUES (NULL, '$categoria', '$marca', '$modelo', '$notas', '$stockInicial', '$alerta')";
        $instance = ConnectDb::getInstance();
        $conn = $instance->ExecuteQuery($sql);
            if($conn == 1) {
                return 1;
            }
    }

    // METODOS
    function aumentarCantidad($id_articulo, $cantidad) {
        require 'ConnectDb.php';
        $instance = ConnectDb::getInstance();

        $sql = "SELECT stockInicial FROM articulos WHERE id_articulo = '$id_articulo' ";
        $conn = $instance->ExecuteQuery($sql);

        $row = $conn->fetch_assoc();
        $nuevoStock = $row['stockInicial'] + $cantidad;

        $sql2 = "UPDATE articulos SET stockInicial = '$nuevoStock' WHERE id_articulo = '$id_articulo'";
        $conn2 = $instance->ExecuteQuery($sql2);
        
        if($conn2 == 1) {
            return $nuevoStock;
        }

    }

    function reducirCantidad($id_articulo, $cantidad) 
    {
        require 'ConnectDb.php';
        $instance = ConnectDb::getInstance();

        // CALCULA EL STOCK INICIAL DEL ARTICULO Y LO GUARDA EN LA FUNCION $nuevoStock
        $sql = "SELECT stockInicial FROM articulos WHERE id_articulo = '$id_articulo' ";
        $conn = $instance->ExecuteQuery($sql);
        $row = $conn->fetch_assoc();
        $stockActual = $row['stockInicial'];

        //SI LA CANTIDAD QUE SE QUIERE SACAR ES MAYOR QUE LA QUE TIENE EN STOCK ENVIA MENSAJE 
        if($stockActual < $cantidad) 
        {
            return "supera";
        } 
        else 
        {
            //SINO RESTA LA CANTIDAD AL STOCK QUE TIENE Y ACTUALIZA EL MISMO
            $stockActual = $row['stockInicial'] - $cantidad;
            $sql2 = "UPDATE articulos SET stockInicial = '$stockActual' WHERE id_articulo = '$id_articulo'";
            $conn2 = $instance->ExecuteQuery($sql2);
            if($conn2 == 1) 
            {
                return $stockActual;
            }
        }
    }

    function mostrarAlgo() {

        require 'ConnectDb.php';
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin:*');

        $instance = ConnectDb::getInstance();
        $sql = "SELECT id_articulo, categoria FROM articulos";
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
}