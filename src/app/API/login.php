<?php
session_start();
    require('connect.php');
    require('headers.php');
    global $conn;

    $getUriData = file_get_contents('php://input');

    if(isset($getUriData) && !empty($getUriData)){

        $data = json_decode($getUriData);

    }else{
        return http_response_code(401);
    }
    $email = $data->email;
    $pass = $data->pass;

    $_SESSION['id'] = $email;

    $query = $conn->prepare('SELECT * FROM CashMonney.USERS WHERE email = :email AND mdp = :pwd');
    $query->execute([
        'email'=>$email,
        'pwd'=>$pass
    ]);
    $queryRow = $query->rowCount();
    $queryResult = $query->fetchAll();

    if($queryRow > 0){
        $response = json_encode($queryResult);
        echo $response;
        http_response_code(200);

    }else{
        $null = json_encode(array(
            'errors' => true 
        ));
        echo $null;
    }
?>