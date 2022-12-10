<?php
    require('connect.php');
    require('headers.php');

    global $conn;
try{

    $query = $conn->prepare("SELECT * FROM CashMonney.MESSAGE");
    $query->execute();
    $result = $query->fetchAll();
    
    $jsonData = json_encode($result);

    echo $jsonData;

}catch(Exception $e){

    echo $e->getMessage();

}
?>