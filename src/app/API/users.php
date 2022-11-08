<?php
    //definitions of header

    //bdConnect including
    require('connect.php');
    require('headers.php');

    global $conn;
    global $error;


    try{

$query = $conn->prepare("SELECT * FROM CashMonney.USERS");
$query->execute();
$getData = $query->fetchAll();

$jsEncodeUsers= json_encode($getData);

echo $jsEncodeUsers;
  }
  catch(Exception $e){
    echo $e->getMessage();
    $catch = json_encode(array(
      'Message' => $error
    ));
    echo $catch;
  }

?>
