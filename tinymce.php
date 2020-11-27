<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')</script>

  <!-- Import Trumbowyg -->
  <script src="trumbowyg/dist/trumbowyg.min.js"></script>
  <link rel="stylesheet" href="trumbowyg/dist/ui/trumbowyg.min.css">
  <link rel="stylesheet" type="text/css" href="css/index.css">
  <script type="text/javascript" src="js/index.js"></script>
  <script src='spectrum.js'></script>
  <link rel='stylesheet' href='spectrum.css' />
</head>
<body>
  <div class="container">
    <div class="container-editor">
      <div class="bloc-container not_on_modal">
        <p class="txt-select">Ajouter une section: </p>
        <div class="defaultSection" data-section="sectionOne">
          <div class="oneSection">  
          </div>
        </div>
        <div class="defaultSection" data-section="sectionTwo">
          <div class="oneSection">
            <div class="col-50 flex">
              
            </div>
            <div class="col-50 flex border-left">
              
            </div>
          </div>
        </div>
        <div class="defaultSection" data-section="sectionThree">
          <div class="oneSection">
            <div class="col-65 flex">
              
            </div>
            <div class="col-35 flex border-left">
              
            </div>
          </div>
        </div>
        <div class="defaultSection" data-section="sectionFour">
          <div class="oneSection">
            <div class="col-35 flex">
              
            </div>
            <div class="col-65 flex border-left">
              
            </div>
          </div>
        </div>
        <div class="defaultSection" data-section="sectionFive">
          <div class="oneSection">
            <div class="col-33 flex">
              
            </div>
            <div class="col-33 flex border-left">
              
            </div>
            <div class="col-33 flex border-left">
              
            </div>
          </div>
          <input type="number" name="" class="nbre_col is_hidden" placeholder="Nombre de colonne">
        </div>
        <button class="preview-link">Preview</button>
      </div>
      <div class="body-container">
        <div class="section sectionOne">
         <!--  <span class="erase-bloc">x</span> -->
          <div class="section-side">
            <div class="bloc-content">
              
            </div>
          </div>
        </div>
        <div id="trumbowyg-demo"><div class="section-body border-dashed column-direction min-height-150" contenteditable="true" data-section="1"></div></div>
        <script type="text/javascript">
          $('#trumbowyg-demo').trumbowyg();
        </script>
      </div>
      <div class="content-btn-register">
        <button class="btn-register">Enregistrer</button>
      </div>
    </div>
  </div>
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
  <!-- End Modal Section -->
  <input type='color' class='basic' value='#f594d0' />
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

   <div draggable="true">1st paragraph</div>


</body>
</html>