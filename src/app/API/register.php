<?php

    require('connect.php');
    require('headers.php');
    


  global $conn;

   $getUriData = file_get_contents('php://input');
   
   if(isset($getUriData) && !empty($getUriData)){
    
    $data = json_decode($getUriData);

   }else{
    return http_response_code(400);
   }
   $statusQuery = false;

   $email= $data->email;
   $nom = $data->name;
   $prenom = $data->surname;
   $phone = (int)$data->tel;
   $mdp= $data->pwd;
   
try{
    $fquery = $conn->prepare('SELECT * FROM CashMonney.USERS WHERE email = :email  ');
    $fquery->execute([
        'email' => $email
    ]);
    $verif = $fquery->fetch();

    if($verif < 1){

        $query = $conn->prepare('INSERT INTO CashMonney.USERS(email, nom, prenom, phone, mdp ) VALUES(
            :email, :nom, :prenom, :phone, :mdp) ');
            $query->execute([
                'email'=> $email,
                'nom'=> $nom,
                'prenom' => $prenom,
                'phone' => $phone,
                'mdp' => $mdp
            ]);

            $defaultAmount = 0.00;
            $deposatn = $email;
            
            $sql = $conn->prepare("INSERT INTO CashMonney.SAVING_ACCOUNT(amount, fk_idDepossant) VALUES(:amount, :fk_deposant) ");
            $sql->execute([
                  'amount'=> $defaultAmount,
                  'fk_deposant'=> $email
            ]);
        
            if($query && $sql){

              $statusQuery = true;
              $statut = json_encode(array(
                    'Message' => 'success_post',
                    'confirm' => true
              ));
            
              echo $statut;
              http_response_code(200);
            
            } else{
               $statut = json_encode(array(
                    'confirm' => false
                ));
                echo $statut;
            }  
    
    }else{
        $errors = json_encode([
            
            'already_users' => true

        ]);
        echo $errors;
    }
 
}
catch(Exception $e) {
   echo $e->getMessage();
}
?>