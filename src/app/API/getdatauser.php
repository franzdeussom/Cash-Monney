<?php
session_start();

        require('connect.php');
        require('headers.php');

        global $conn;

    
    try{
        $email= $_SESSION['id'];
        echo $email;

        $query = $conn->prepare("SELECT USERS.email, USERS.nom, USERS.prenom, USERS.phone, USERS.mdp, SAVING_ACCOUNT.amount FROM CashMonney.USERS, CashMonney.SAVING_ACCOUNT WHERE USERS.email = '$email'");
        $query->execute();
        $dataUser = $query->fetchAll(PDO::FETCH_ASSOC);

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