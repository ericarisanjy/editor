<?php 
	include("pdo.php");
	//insert into BD
    $path = 'uploads/';
    if(isset($_FILES['image'])){
        $img = $_FILES['image']['name'];
        $tmp = $_FILES['image']['tmp_name'];
        
        $final_image = rand(1000,1000000).$img;
        $path = $path.strtolower($final_image);
        if(move_uploaded_file($tmp,$path)){
            imagealphablending($image, true);
            imagesavealpha($image, true);
            $namesplit = explode(".", $img);
            $output = "uploads/".$namesplit[0].".webp";
            imagewebp($image, $output, 75);
            

            $insert = $bdd->query("INSERT INTO image (filename) VALUES ('".$output."')");
            $sql = "SELECT * FROM image";
            $result = $bdd->query($sql);
            echo json_encode($result->fetchAll());
        }
    }else{
        if(isset($_POST['imageUrl'])){
            $imageUrl = $_POST['imageUrl'];
            $insert = $bdd->query("INSERT INTO image (filename) VALUES ('$imageUrl')");
            $sql = "SELECT * FROM image";
            $result = $bdd->query($sql);
            echo json_encode($result->fetchAll());
        }else if(isset($_FILES['imageUpdate'])){
            $img = $_FILES['imageUpdate']['name'];
            $tmp = $_FILES['imageUpdate']['tmp_name'];
            $final_image = rand(1000,1000000).$img;
            $path = $path.strtolower($final_image); 
            if(move_uploaded_file($tmp,$path)){
                $image = imagecreatefromstring(file_get_contents($path));
                imagealphablending($image, true);
                imagesavealpha($image, true);
                $namesplit = explode(".", $img);
                $output = "uploads/".$namesplit[0].".webp";
                imagewebp($image, $output, 75);

                $imageId = $_POST['imageId'];
                $sql2="UPDATE `image` SET `filename`=:path WHERE `id`=:imageId";
                $query = $bdd->prepare($sql2);

                $query->bindValue(':path', $output, PDO::PARAM_STR);
                $query->bindValue(':imageId', $imageId, PDO::PARAM_INT);
                $query->execute();
                $sql = "SELECT * FROM image where id=$imageId ";
                $result = $bdd->query($sql);
                echo json_encode($result->fetchAll());
            }
        }else if(isset($_POST['imageUrlUpdate'])){
            $path = $_POST['imageUrlUpdate'];
            $imageId = $_POST['imageId'];
            $sql2="UPDATE `image` SET `filename`=:path WHERE `id`=:imageId";
            $query = $bdd->prepare($sql2);

            $query->bindValue(':path', $path, PDO::PARAM_STR);
            $query->bindValue(':imageId', $imageId, PDO::PARAM_INT);
            $query->execute();
            $sql = "SELECT * FROM image where id=$imageId ";
            $result = $bdd->query($sql);
            echo json_encode($result->fetchAll());
        }else{
            $imageId = $_POST['imageId'];
            $sql2="DELETE FROM image where id=$imageId";
		    $result2 =  $bdd->query($sql2);
            echo json_encode($result->fetchAll());
        }
        
    }

  
 ?>