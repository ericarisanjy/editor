<?php 
	include("pdo.php");
	//insert into BD
	if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST["content"]) && isset($_POST["pageUrl"])){
		$title = $_POST['title'];
		$description = $_POST['description'];
		$content = $_POST['content'];
		$pageUrl = $_POST["pageUrl"];
		$cssArrayId = $_POST['cssFileArray'];
		if(isset($_POST['idPage']) && $_POST['idPage'] != ""){
			$pageId = $_POST['idPage'];
			//Update Commune
			$sql2="UPDATE `pages` SET `title`=:title, `description`=:description, `content`=:content, `url`=:pageUrl, `cssContent`=:cssContent WHERE `id`=:pageId";

			$query = $bdd->prepare($sql2);

			$query->bindValue(':title', $title, PDO::PARAM_STR);
			$query->bindValue(':description', $description, PDO::PARAM_STR);
			$query->bindValue(':content', $content, PDO::PARAM_STR);
			$query->bindValue(':pageUrl', $pageUrl, PDO::PARAM_STR);
			$query->bindValue(':cssContent', $cssArrayId, PDO::PARAM_STR);
			$query->bindValue(':pageId', $pageId, PDO::PARAM_INT);

			$query->execute();


		}else{
			//Create Commmune
			$sql2="INSERT INTO pages(title, description, content, url, cssContent) VALUES ('$title', '$description', '$content', '$pageUrl', '$cssArrayId')";
			$result2 =  $bdd->query($sql2);
		}
	}
	//Delete Commune
	if(isset($_POST['pageId']) && $_POST['pageId'] != ""){
		$pageId = $_POST['pageId'];
		$sql2="DELETE FROM pages where id=$pageId";
		$result2 =  $bdd->query($sql2);
	}
	@include('getFunction.php');
	echo json_encode($result->fetchAll());
 ?>