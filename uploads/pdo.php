<?php
  try
    {
      $bdd = new PDO('mysql:host=localhost;dbname=editor;charset=utf8', 'arisanjy', 'sr9r5!8W');
    }
  catch (Exception $e)
    {
      die('Erreur : ' . $e->getMessage());
    }
?>