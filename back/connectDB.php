<?php

// Singleton to connect db.
class ConnectDb {
  // Hold the class instance.
  private static $instance = null;
  private $conn;
  
  private $host = 'localhost';
  private $user = 'root';
  private $pass = '';
  private $database = 'stock';
   
  // The db connection is established in the private constructor.
  private function __construct()
  {
    $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->database);
    if($this->conn->connect_errno) {
     die("Error al conectarse a MySQL: (" . $this->conn->connect_errno . ") " . $this->conn->connect_error);
    }
  }

  public static function getInstance()
  {
    if(!self::$instance)
    {
      self::$instance = new ConnectDb();
    }
   
    return self::$instance;
  }
  
  public function getConnection()
  {
    return $this->conn;
  }

  public function ExecuteQuery($sql)
  {
    $result = $this->conn->query($sql);
    return $result;
  } 

}