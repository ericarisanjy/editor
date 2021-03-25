<?php 
  include("getFunction.php");
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="dad/jquery.dad.css">
  <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')</script>
  <script src="dnd/jquery.drag-drop.plugin.js"></script>
  <script src="dad/dist/jquery.dad.js"></script>
  <script src="ckeditor/ckeditor.js"></script>
  <script src="ckeditor/adapters/jquery.js"></script>

  <link rel="stylesheet" type="text/css" href="css/index.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <!-- <script type="text/javascript" src="js/index.js"></script> -->
  <script type="text/javascript" src="home.js"></script>
  <script type="text/javascript" src="js/section.js"></script>
  <script type="text/javascript" src="js/bloc.js"></script>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" type="text/css" href="https://cdn.tutorialjinni.com/toastr.js/2.1.4/toastr.min.css">
  <script type="text/javascript" src="https://cdn.tutorialjinni.com/toastr.js/2.1.4/toastr.min.js"></script>
</head>
<body>
  <div class="container-page-list">
    <div class="page-list">
      <div class="page-list-header">
        <h2>Liste des pages</h2>
      </div>
      <div class="content-btn-create">
        <button class="btn-create">Ajouter</h2>
      </div>
      <div class="page-list-content">
        <table border="1" cellspacing="0">
          <thead>
            <tr>
              <td>
                N°
              </td>
              <td class="td-title">
                Nom du Page
              </td>
              <td>
                Decription
              </td>
              <td>
                URL
              </td>
              <td class="td-action">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            <?php
              if($result){
                foreach($result->fetchAll() as $unit){
            ?>
              <tr>
                <td>
                <?php
                  echo $unit['id']
                ?>
                </td>
                <td class="td-title">
                <?php
                  echo $unit['title']
                ?>
                </td>
                <td>
                  <?php
                    echo $unit["description"]
                  ?>
                </td>
                <td>
                  <a href="<?php echo $unit["url"] ?>" target='_blank'>
                    <?php
                      echo $unit["url"]
                    ?>
                  </a>
                </td>
                <td class="td-action">
                  <button class="btn-valid" data-pageid="<?php echo $unit['id'] ?>">Edit</button>
                  <button class="btn-delete" data-pageid="<?php echo $unit['id'] ?>">Supprimer</button>
                </td>
              </tr>
            <?php
              }
            }
            ?>
          </tbody>
        </table>
      </div>
    </div>
  </div> 
  <?php 
    @include("pages/create.php")
  ?>
  <?php 
    @include("pages/update.php")
  ?>
  <div class="close-preview is_hidden">
      Retourner à l'éditeur
  </div>
  <div class="preview-page flex column-direction">
    
  </div>
  <!-- Start Modal Section -->
  <?php 
    @include("modal/updateBloc.php")
  ?>
  <?php 
    @include("modal/uploadFile.php")
  ?>
  <?php 
    @include("modal/uploadFileTwo.php")
  ?>
  <?php 
    @include("modal/insertTable.php")
  ?>
  <?php 
    @include("modal/addMarge.php")
  ?>
  <?php 
    @include("modal/addText.php")
  ?>
  <?php 
    @include("modal/border.php")
  ?>
  <?php 
    @include("modal/classAndId.php")
  ?>
  <?php 
    @include("modal/editBloc.php")
  ?>
  <?php 
    @include("modal/editSection.php")
  ?>
  <?php 
    @include("modal/modal-add-bloc.php")
  ?>
  <?php 
    @include("modal/editImg.php")
  ?>
  <!-- End Modal Section -->
  <script type="text/javascript">
    $("#picker").spectrum({
    color: tinycolor,
    flat: bool,
    showInput: bool,
    showInitial: bool,
    showAlpha: bool,
    disabled: bool,
    localStorageKey: string,
    showPalette: bool,
    showPaletteOnly: bool,
    showSelectionPalette: bool,
    clickoutFiresChange: bool,
    cancelText: string,
    chooseText: string,
    className: string,
    preferredFormat: string,
    maxSelectionSize: int,
    palette: [[string]],
    selectionPalette: [string]
});
  </script>

</body>
</html>