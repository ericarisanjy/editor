<?php 
  include("getFunction.php");
  include("getCssFunction.php");
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link rel="stylesheet" href="dad/jquery.dad.css"> -->
  <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')</script>
  <script src="dad/dist/jquery.dad.js"></script>
  <script src="ckeditor/ckeditor.js"></script>
  <script src="ckeditor/adapters/jquery.js"></script>

  <link rel="stylesheet" type="text/css" href="css/index.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <script type="text/javascript" src="js/global.js"></script>
  <script type="text/javascript" src="home.js"></script>
  <script type="text/javascript" src="js/section.js"></script>
  <script type="text/javascript" src="js/bloc.js"></script>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" type="text/css" href="https://cdn.tutorialjinni.com/toastr.js/2.1.4/toastr.min.css">
  <script type="text/javascript" src="https://cdn.tutorialjinni.com/toastr.js/2.1.4/toastr.min.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/codemirror.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/theme/material-ocean.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/show-hint.min.css">

  <link rel="stylesheet" href="codemirror/css/main.css">

    <!-- Code Mirror JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/codemirror.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/mode/xml/xml.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/mode/javascript/javascript.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/mode/css/css.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/mode/htmlmixed/htmlmixed.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/edit/matchbrackets.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/show-hint.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/javascript-hint.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/html-hint.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/xml-hint.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/css-hint.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/keymap/sublime.min.js"></script>

  <script src="codemirror/js/main.js"></script>


</head>
<body>
  <div class="container-page-list">
    <div class="page-list">
      <div class="page-list-header">
        <h2>Liste des pages</h2>
      </div>
      <div class="add-btn-on-header">
        <div class="content-btn-create-css">
          <button class="btn btn-create-css">Créer un code css</h2>
        </div>
        <div class="content-btn-create">
          <button class="btn btn-create">Ajouter</h2>
        </div>
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
  <div class="content-create-css flex column-direction is_hidden">
    <div class="add-css-code-header">
      <div class="add-css-code-header">
        <i class="fa fa-arrow-left btn-return"></i>
          <h2>Code CSS</h2>
      </div>
      <div class="list-css-added">
        <div class="content-dropdown-css">
          <input type="text" readOnly placeholder="Séléctionnez des fichiers" class="input-drop"/>
          <div class="drop-container is_hidden">
            <?php
            if($cssResult2){
              foreach($cssResult2->fetchAll() as $cssUnit){
            ?>
              <div class="item-content">
                <div class="check-item">
                  <input type="checkbox" class="input-check" value="<?php echo $cssUnit["id"] ?>"/>
                </div>
                <span class="check-text" data-id="<?php echo $cssUnit["id"] ?>"><?php echo $cssUnit["name"] ?></span>
              </div>
            <?php
              }
            }
            ?>
          </div>
        </div>
        <div class="content-btn-css">
          <button class="btn-primary btn-new-css-file">Nouveau</button>
          <button class="btn-primary btn-edit-css-file">Modifier</button>
          <button class="btn-primary btn-remove-css-file">Supprimer</button>
        </div>
      </div>
    </div>
    <div class="container-css content-css-name is_hidden">
      <div class="css-name">
        <span>Nom du fichier</span>
        <input type="text" class="input-css-name" placeholder="Saisir le nom du fichier"/>
      </div>
    </div>
    <div class="container-css content-css-editor is_hidden">
      <textarea id="editor">
      </textarea>
    </div>
    <button class="container-css btn-valid btn-valid-add-css is_hidden">Enregistrer</button>
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
    @include("modal/confirmDelete.php")
  ?>
  <?php 
    @include("modal/confirmDeleteCss.php")
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
    @include("modal/modal-edit-bloc.php")
  ?>
  <?php 
    @include("modal/editImg.php")
  ?>
  <!-- End Modal Section -->
  <script type="text/javascript">
//     $("#picker").spectrum({
//     color: "#ffffff",
//     flat: bool,
//     showInput: bool,
//     showInitial: bool,
//     showAlpha: bool,
//     disabled: bool,
//     localStorageKey: string,
//     showPalette: bool,
//     showPaletteOnly: bool,
//     showSelectionPalette: bool,
//     clickoutFiresChange: bool,
//     cancelText: string,
//     chooseText: string,
//     className: string,
//     preferredFormat: string,
//     maxSelectionSize: int,
//     palette: [[string]],
//     selectionPalette: [string]
// });
  </script>

</body>
</html>