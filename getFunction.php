<?php 
	include("pdo.php");
    if(isset($_GET['pageId'])){
        $pageId = $_GET['pageId'];
        $sql = "SELECT * FROM pages where id='$pageId'";
        $resultFilter = $bdd->query($sql);
        echo json_encode($resultFilter->fetchAll());
    }else if(isset($_POST['getImage'])){
        $sql = "SELECT * FROM image";
        $result = $bdd->query($sql);
        echo json_encode($result->fetchAll());
    }else{
        $sql = "SELECT * FROM pages";
        $result = $bdd->query($sql);
    }
 ?>