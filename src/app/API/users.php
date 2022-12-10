<?php
    //definitions of header

    //bdConnect including
    require('connect.php');
    require('headers.php');

    global $conn;
    global $error;


    try{

$query = $conn->prepare("SELECT USERS.email, USERS.nom, USERS.prenom, USERS.tel, USERS.mdp, SAVING_ACCOUNT.amount FROM CashMonney.USERS join CashMonney.SAVING_ACCOUNT WHERE email = fk_depossant");
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
