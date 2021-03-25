<?php 
	include("pdo.php");
    $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $sql = "SELECT * FROM page where url='$actual_link'";
    $resultFilter = $bdd->query($sql);
    //echo json_encode($resultFilter->fetchAll());
 ?>