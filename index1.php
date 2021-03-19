<!DOCTYPE html>
<html>
<head>
	<title>Editeur</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<!-- <script type="text/javascript" src="js/jquery-simple-resize.js"></script> -->
	<script type="text/javascript" src="js/index.js"></script>
	<script type="text/javascript" src="ckeditor/ckeditor/ckeditor.js"></script>
	<script type="text/javascript" src="ckeditor/ckeditor/adapters/jquery.js"></script>
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
        <textarea class="ckeditor" name="editor1">
			<div class="section-body border-dashed min-height-150">
	            <div class="colonne col-100 border-dashed min-height-150" contenteditable="true" data-section="1" data-bloc="1">
	              
	            </div>
	         </div>
		</textarea>
        <script type="text/javascript">
          $('#trumbowyg-demo').trumbowyg();
        </script>
      </div>
      <div class="content-btn-register">
        <button class="btn-register">Enregistrer</button>
      </div>
    </div>
  </div>
	
	<script type="text/javascript">
	</script>
	<!-- Start Modal Section -->
	<?php 
		@include("modal/uploadFile.php")
	?>
	<!-- End Modal Section -->
</body>
</html>