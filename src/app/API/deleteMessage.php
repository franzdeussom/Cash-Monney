<?php
      require('connect.php');
      require('headers.php');

      global $conn;

      $getData = file_get_contents('php://input');
try{

    if(isset($getData) && !empty($getData)){
        $data = json_decode($getData);

        $idmsg = (int) $data;

       $query = $conn->prepare("DELETE FROM CashMonney.MESSAGE WHERE id = '". $idmsg ."' ");
       $query->execute();

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

     }

}catch(Exception $e){
    echo $e->getMessage();
}
      
?>