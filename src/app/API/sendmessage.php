<?php
session_start();

    require('headers.php');
    require('connect.php');

    global $conn;

    $dataUri = file_get_contents('php://input');

    if(!empty($dataUri) && isset($dataUri) ){
        $data = json_decode($dataUri);
    }else{
        return http_response_code(400);
    }
    try{
      $sender =  $_SESSION['id'];
      $msg = $data->message;
      
      $query = $conn->prepare("INSERT INTO CashMonney.MESSAGE(libele, fk_senders) VALUES(:messag, :senders)");
      $query->execute([
        'messag'=> $msg,
        'senders' => $sender
      ]);

      if($query){

        $response = json_encode(array(
            'sucess' => true
        ));
        http_response_code(200);
        echo $response;
      }else{
        $responseErrors = json_encode(array(
            'errors' => true
        )); 
        http_response_code(201);
        echo $response;
      }

    }catch(PDOException $e){
            echo $e->getMessage();
    }

?>