<?php
    require('connect.php');
    require('headers.php');
    global $conn;

    $getIdUsers = file_get_contents('php://input');
    
    if(isset($getIdUsers) && !empty($getIdUsers)){

        $data = json_decode($getIdUsers);
    
    }else{

        return http_response_code(400);
    }
    try{
    $idUsers = $data;

    $query = $conn->prepare("SELECT idSavingAccout, Amount FROM CashMonney.SAVING_ACCOUNT WHERE SAVING_ACCOUNT.fk_idDepossant = '$idUsers' ");
    $query->execute();
    $dataArray=$query->fetchAll(PDO::FETCH_ASSOC);
   
     
    if($query){
        
        $response = json_encode($dataArray);
        echo $response;

     }else{
        $errors = json_encode(array(
            'errors' => true
        ));
     }

   }catch(PDOException $e){

   }

?>