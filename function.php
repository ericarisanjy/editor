<?php 
	include("pdo.php");
	//insert into BD
	if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST["content"])){
		$title = $_POST['title'];
		$description = $_POST['description'];
		$content = html_entity_decode($_POST['content']);
		if(isset($_POST['idPage']) && $_POST['idPage'] != ""){
			$pageId = $_POST['idPage'];
			//Update Commune
			$sql2="UPDATE `page` SET `title`=:title, `description`=:description, `content`=:content WHERE `id`=:pageId";

			$query = $bdd->prepare($sql2);

			$query->bindValue(':title', $title, PDO::PARAM_STR);
			$query->bindValue(':description', $description, PDO::PARAM_STR);
			$query->bindValue(':content', $content, PDO::PARAM_STR);
			$query->bindValue(':pageId', $pageId, PDO::PARAM_INT);

			$query->execute();


		}else{
			//Create Commmune
			$sql2="INSERT INTO page(title, description, content) VALUES ('$title', '$description', '$content')";
			$result2 =  $bdd->query($sql2);
		}
	}
	//Delete Commune
	if(isset($_POST['pageId']) && $_POST['pageId'] != ""){
		$pageId = $_POST['pageId'];
		$sql2="DELETE FROM page where id=$pageId";
		$result2 =  $bdd->query($sql2);
	}
	@include('getFunction.php');
	echo json_encode($result->fetchAll());
 ?>