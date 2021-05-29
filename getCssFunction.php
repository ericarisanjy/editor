<?php 
	include("pdo.php");
    if(isset($_GET['cssFileId'])){
        $cssFileId = $_GET['cssFileId'];
        $sql = "SELECT * FROM cssstyle where id='$cssFileId'";
        $resultFilter = $bdd->query($sql);
        echo json_encode($resultFilter->fetchAll());
    }else if(isset($_POST['getImage'])){
        $sql = "SELECT * FROM image";
        $result = $bdd->query($sql);
        echo json_encode($result->fetchAll());
    }else{
        $sqlCss = "SELECT * FROM cssstyle";
        $cssResult = $bdd->query($sqlCss);
        $cssResult2 = $bdd->query($sqlCss);
        $cssResult3 = $bdd->query($sqlCss);
    }
 ?>