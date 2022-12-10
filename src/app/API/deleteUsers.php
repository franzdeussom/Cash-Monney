<?php
    require('connect.php');
    require('headers.php');

    global $conn;

    $getDataUri = file_get_contents('php://input');

    if(isset($getDataUri) && !empty($getDataUri)){
        
        $data = json_decode($getDataUri);

    }else{
        return http_response_code(401);
    }

try{
    $email = $data;

    $query = $conn->prepare("DELETE FROM CashMonney.USERS WHERE USERS.email = '$email' ");
    $query->execute();

    if($query){
        $response = json_encode(array(
            'confirm'=>true,
            'success' =>true
        ));
        echo $response;

        http_response_code(200);
    }else{
        
        $responseErrors = json_encode(array(
            'errors'=>true
        ));

        echo $responseErrors;
    }
}catch(Exception $e){
    echo $e->getMessage();
}
   
?>