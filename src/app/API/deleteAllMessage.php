<?php
      require('connect.php');
      require('headers.php');

      global $conn;

try{

       $query = $conn->prepare("DELETE MESSAGE.id, MESSAGE.libele, MESSAGE.fk_senders FROM CashMonney.MESSAGE");

       if($query){
           $response = json_encode(array(
               'succes'=> true
           ));
           echo $response;
           http_response_code(200);
       }else{
           $response = json_encode(array(
               'succes'=> false
           ));
           echo $response;
           http_response_code(400);
       }


}catch(Exception $e){
    echo $e->getMessage();
}
      
?>