<?php 
	include("pdo.php");
	//insert into BD
	if(isset($_POST['name']) && isset($_POST['content'])){
		$name = $_POST['name'];
		$content = $_POST['content'];
		if(isset($_POST['cssFileId']) && $_POST['cssFileId'] != ""){
			$cssFileId = $_POST['cssFileId'];
			//Update Commune
			$sql2="UPDATE `cssstyle` SET `name`=:name, `content`=:content WHERE `id`=:cssFileId";

			$query = $bdd->prepare($sql2);

			$query->bindValue(':name', $name, PDO::PARAM_STR);
			$query->bindValue(':content', $content, PDO::PARAM_STR);
			$query->bindValue(':cssFileId', $cssFileId, PDO::PARAM_INT);

			$query->execute();


		}else{
			//Create Commmune
			$sql2="INSERT INTO cssstyle(name, content) VALUES ('$name', '$content')";
			$result2 =  $bdd->query($sql2);
		}
	}
	//Delete Commune
	if(isset($_POST['cssFileIdToDeleted']) && $_POST['cssFileIdToDeleted'] != ""){
		$cssFileIdToDeleted = $_POST['cssFileIdToDeleted'];
		$sql2="DELETE FROM cssstyle where id=$cssFileIdToDeleted";
		$result2 =  $bdd->query($sql2);
	}
	@include('getCssFunction.php');
	echo json_encode($cssResult->fetchAll());
 ?>