<?php
session_start();

        require('connect.php');
        require('headers.php');

        global $conn;

    
    try{
        $email= $_SESSION['id'];
    
        $query = $conn->prepare("SELECT USERS.email, USERS.nom, USERS.prenom, USERS.tel, USERS.mdp, SAVING_ACCOUNT.id_account ,SAVING_ACCOUNT.amount  FROM CashMonney.USERS join CashMonney.SAVING_ACCOUNT WHERE SAVING_ACCOUNT.fk_depossant = '$email' AND USERS.email = '$email'");
        $query->execute();
        $dataUser = $query->fetchAll();

        if($query){

            $response = json_encode($dataUser);

            echo $response;
            http_response_code(200);
    
        }else{
            $errors = json_encode(array(
                'confirm'=> true
            ));
            echo $errors;
        }

    }catch(PDOException $e){
            echo $e->getMessage();
    }
?>