<?php
        $error;
        try{
            $conn= new PDO('mysql:host=localhost:3306;db_name=CashMonney;', 'root', '');
            $conn->setAttribute(PDO::ERRMODE_EXCEPTION, PDO::ATTR_ERRMODE);
        }
        catch(Exceptin $e){
            $error=$e->getMessage();
            echo $e->getMessage();
        }
?>