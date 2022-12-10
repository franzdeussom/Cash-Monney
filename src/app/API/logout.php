<?php
session_destroy();
require('headers.php');
$response = json_encode(array(
    'success'=> true
));
echo $response;
?>