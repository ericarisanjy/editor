<?php 
  include("outputFunction.php");
  $resultat = $resultFilter->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>
        <?php 
            echo $resultat[0]['title'];
        ?>
    </title>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="description" content="<?php 
            echo $resultat[0]['description'];
        ?>"/>
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>

  <link rel="stylesheet" type="text/css" href="css/index.css">
  <!-- <script type="text/javascript" src="js/index.js"></script> -->
  <script type="text/javascript" src="js/output.js"></script>
</head>
<body>
    <div class="body-container">
        <div class="page-container">
            <?php 
                echo $resultat[0]['content'];
            ?>
        </div>
    </div>
</body>
</html>