<div class="modal modal-edit-img is_hidden">
	<form class="modal-content" method="POST" enctype="multipart/form-data">
		<div class="modal-head">
			<span class="txt-head">Choisir une photo</span>
			<span class="closed">x</span>
		</div>
		<div class="modal-body">
		<div class="content-action">
				<input type="file" name="imageUpdate" class="is_hidden input_file" multiple="true">
				<button class="local-storage">Choisir une photo depuis l'ordinateur</button>
				<p>ou</p>
				<div class="content-input">
					<input type="text" name="" placeholder="URL" class="input-url">
				</div>
				<p style="margin: 0.5rem;">ou</p>
				<button class="media-storage">Choisir une image de la médiathèque</button>
			</div>
			<div class="content-img is_hidden">
			</div>
			<div class="parameter-title">
				<span>
					Paramètre de l'image
				</span>
				<i class="fa fa-caret-right caret image-attribut"></i>
			</div>
			<div class="img-setting is_hidden">
				<div class="img-attribut">
					<div class="content-input">
						<input type="text" name="" placeholder="Title" class="input-title"> 
						<input type="text" name="" placeholder="ALT" class="input-alt">
						<div class="content-checkbox">
							<div class="checkbox-item">
								<span class="check-title">Mettre un lien</span>
								<input type="checkbox" class="check check-link"/>
							</div>
							<div class="checkbox-item">
								<span class="check-title">Ouvrir avec un autre onglet</span>
								<input type="checkbox" class="check check-link-target"/>
							</div>
						</div>
						<input type="text" name="" placeholder="Ajouter ici votre lien" class="input-link is_hidden">
					</div>
				</div>
				<div class="setting">
					<div class="content-input">
						<input type="text" name="" placeholder="Largeur" class="input-width"> 
						<input type="text" name="" placeholder="Hauteur" class="input-height">
						<div class="content-property">
							<div class="content-input-setting">
								<div class="title-setting">
									<input type="text" name="dropdown-title" class="input input-align" data-item="" placeholder="Alignement" readonly>
									<div class="content-dropdown is_hidden">
										<span class="drop-item" data-item="flex-start">Gauche</span>
										<span class="drop-item" data-item="center">Centré</span>
										<span class="drop-item" data-item="flex-end">Droite</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content-display-img">
				<img class="image-display" />
			</div>
			<div class="content-btn">
				<button class="btn-delete">Supprimer l'image</button>
				<button class="btn-valid">Valider</button>
			</div>
		</div>
	</form>
</div>