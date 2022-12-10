<?php

    require('connect.php');
    require('headers.php');

    global $conn;

    $getData = file_get_contents('php://input');

 try{

   /* if(isset($getData) && !empty($getData)){

        $data = json_decode($getData);
        
        //here insertion of api payement gateway 

        $id = $data->email;
        $amount = $data->montant;

        $query = $conn->prepare("UPDATE TABLE SAVING_ACCOUNT SET amount = :amount WHERE SAVING_ACCOUNT.fk_depossant = :email ");
        $query->execute([
            ':email'=> $id,
            ':amount'=> $amount
        ]);
        if($query){

            try{
                
               $response = json_encode(array(
                'succesReload '=> true
               ));

               echo $response;

            }catch(Exception $e) {
                echo $e->getMessage();
            }

        }else{
            try{
                
                $response = json_encode(array(
                 'succesReload '=> false
                ));
 
                echo $response;
 
             }catch(Exception $e) {
                 echo $e->getMessage();
             }
        }

    }else{

        http_response_code(401);
        return;
    }*/

    $id = 'franzdeussom111@gmail.com';
    $amount = 3500.50;
    $somme = 0;

    $queryOldAmount = $conn->prepare("SELECT * FROM CashMonney.SAVING_ACCOUNT WHERE SAVING_ACCOUNT.fk_depossant = :email ");
    $queryOldAmount->execute([
        ':email'=> $id
    ]);
    $result = $queryOldAmount->fetch();
    $oldAmount = $result['amount'];

    $somme = $oldAmount + $amount;

    $query = $conn->prepare("UPDATE CashMonney.SAVING_ACCOUNT SET amount = :amount WHERE SAVING_ACCOUNT.fk_depossant = :email ");
    $query->execute([
        ':email'=> $id,
        ':amount'=> $somme
    ]);
    if($query){

        try{
            
           $response = json_encode(array(
            'succesReload '=> true
           ));

           echo $response;

        }catch(Exception $e) {
            echo $e->getMessage();
        }

    }else{
        try{
            
            $response = json_encode(array(
             'succesReload '=> false
            ));

            echo $response;
        }catch(Exception $e) {
            echo $e->getMessage();
        }
   }
            
 }catch(Exception $e){
    echo $e->getMessage();

 }


?>
