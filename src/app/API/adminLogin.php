<?php
    require('connect.php');
    require('headers.php');

    global $conn;

    try{

        $getData = file_get_contents('php://input');

        if( isset($getData) && !empty($getData) ){
            $data = json_decode($getData);

            $name = (string) $data->pseudo;
            $mdp =(string) $data->mpass;
            
           $query = $conn->prepare("SELECT * FROM CashMonney.ADMIN WHERE ADMIN.email = :email AND ADMIN.mdp = :mdp");
           $query->execute([
            ':email'=> $name,
            ':mdp'=> $mdp
           ]); 
           $row = $query->rowCount();
           try{
               if($row > 0){
                 $response = json_encode(array(
                    'isAdmin' => true
                 ));
                 
                 echo $response;
                 http_response_code(200);
               } else{
                $response = json_encode([
                    'isAdmin' => false
                ]);

                echo $response;
                http_response_code(201);

               }
           }catch(Exception $e){
             echo $e->getMessage();
           }

        }else{

            http_response_code(401);
            return;
        }

    }catch(Exception $e){
       
        echo $e->getMessage();
    }
?>