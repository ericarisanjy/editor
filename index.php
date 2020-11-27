<!DOCTYPE html>
<html>
<head>
	<title>Editeur</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<!-- <script type="text/javascript" src="js/jquery-simple-resize.js"></script> -->
	<script type="text/javascript" src="js/index.js"></script>
</head>
<body>
	<div class="container">
		<div class="container-editor">
			<div class="bloc-container">
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
				</div>
			</div>
			<!-- Start Section -->
			<?php 
				@include("section/sectionOne.php")
			?>
			<!-- End Section -->
		</div>
	</div>
	<!-- Start Modal Section -->
	<?php 
		@include("modal/uploadFile.php")
	?>
	<!-- End Modal Section -->
</body>
</html>