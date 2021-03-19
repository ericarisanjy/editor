<?php 
	include("pdo.php");
    if(isset($_GET['pageId'])){
        $pageId = $_GET['pageId'];
        $sql = "SELECT * FROM page where id='$pageId'";
        $resultFilter = $bdd->query($sql);
        echo json_encode($resultFilter->fetchAll());
    }else{
        $sql = "SELECT * FROM page";
        $result = $bdd->query($sql);
    }
 ?>