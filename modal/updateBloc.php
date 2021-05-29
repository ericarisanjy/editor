<div class="modal modal-update-bloc is_hidden">
	<div class="modal-content">
		<div class="modal-head">
			<span class="txt-head"></span>
			<span class="closed">x</span>
		</div>
		<div class="modal-body body_update_bloc">
			<div class="bloc-container on_modal">
				<div class="defaultSection" data-section="1">
					<div class="oneSection">	
					</div>
				</div>
				<div class="defaultSection" data-section="2">
					<div class="oneSection">
						<div class="col-50 flex">
							
						</div>
						<div class="col-50 flex border-left">
							
						</div>
					</div>
				</div>
				<div class="defaultSection" data-section="3">
					<div class="oneSection">
						<div class="col-65 flex">
							
						</div>
						<div class="col-35 flex border-left">
							
						</div>
					</div>
				</div>
				<div class="defaultSection" data-section="4">
					<div class="oneSection">
						<div class="col-35 flex">
							
						</div>
						<div class="col-65 flex border-left">
							
						</div>
					</div>
				</div>
				<div class="defaultSection" data-section="5">
					<div class="oneSection">
						<div class="col-33 flex">
							
						</div>
						<div class="col-33 flex border-left">
							
						</div>
						<div class="col-33 flex border-left">
							
						</div>
					</div>
					<input type="number" name="" class="nbre_col is_hidden" value="3" placeholder="Nombre de colonne">
				</div>
			</div>
			<div class="bloc-container bloc-edit-container">
				<div class="items polices">
					<span class="txt-header">POLICE</span>
					<div class="content-property">
						<span>Couleur du text</span>
							<input type="color" class="basic-item text-color-bloc" value="#000000" />
					</div>
					<div class="content-property">
						<span>Couleur du fond</span>
							<input type="color" class="basic-item back-color-bloc" value="#000000" />
					</div>
				</div>
				<div class="items marge-externe">
					<span class="txt-header">MARGE EXTERIEUR</span>
					<div class="content-property">
						<span>Marge Droite</span>
						<input type="number" name="" placeholder="Droite" class="input marge-droite-bloc">
					</div>
					<div class="content-property">
						<span>Marge Gauche</span>
						<input type="number" name="" placeholder="Gauche" class="input marge-gauche-bloc">
					</div>
					<div class="content-property">
						<span>Marge Haut</span>
						<input type="number" name="" placeholder="Haut" class="input marge-haut-bloc">
					</div>
					<div class="content-property">
						<span>Marge Bas</span>
						<input type="number" name="" placeholder="Bas" class="input marge-bas-bloc">
					</div>
				</div>
				<div class="items marge-interne">
					<span class="txt-header">MARGE INTERIEUR</span>
					<div class="content-property">
						<span>Padding Droite</span>
						<input type="number" name="" placeholder="Droite" class="input padding-droite-bloc">
					</div>
					<div class="content-property">
						<span>Padding Gauche</span>
						<input type="number" name="" placeholder="Gauche" class="input padding-gauche-bloc">
					</div>
					<div class="content-property">
						<span>Padding Haut</span>
						<input type="number" name="" placeholder="Haut" class="input padding-haut-bloc">
					</div>
					<div class="content-property">
						<span>Padding Bas</span>
						<input type="number" name="" placeholder="Bas" class="input padding-bas-bloc">
					</div>
				</div>
				<div class="items marge-interne">
					<span class="txt-header">BORDURE</span>
					<div class="content-property">
						<span>Type du Bordure</span>
						<div class="content-input">
							<div class="title">
								<input type="text" name="dropdown-title" class="input borderInput-bloc" placeholder="Sans Bordure" readonly>
								<div class="content-dropdown is_hidden">
									<span class="drop-item bordure-drop-item">Sans Bordure</span>
									<span class="drop-item bordure-drop-item">Solid</span>
									<span class="drop-item bordure-drop-item">Dashed</span>
									<span class="drop-item bordure-drop-item">Inset</span>
									<span class="drop-item bordure-drop-item">Outset</span>
									<span class="drop-item bordure-drop-item">Dotted</span>
									<span class="drop-item bordure-drop-item">Double</span>
								</div>
							</div>
						</div>
					</div>
					<div class="content-property">
						<span>Couleur du bordure</span>
						<input type="color" class="basic-item border-color-bloc" value="#000000" style="width: 62px;"/>
					</div>
					<div class="content-property">
						<span>Epaisseur du Bordure</span>
						<input type="number" name="" placeholder="Haut" class="input border-height-bloc" min="0">
					</div>
				</div>
				<div class="items class-or-id">
					<span class="txt-header">CLASS OU ID</span>
					<div class="content-property">
						<span>Class</span>
						<input type="text" name="" placeholder="Class" class="input input-class-bloc">
					</div>
					<div class="content-property">
						<span>Id</span>
						<input type="text" name="" placeholder="Id" class="input input-id-bloc">
					</div>
				</div>
				<div class="items alignement">
					<span class="txt-header">ALIGNEMENT</span>
					<div class="content-property">
						<span>Alignement Vertical</span>
						<div class="content-input-setting" style="width: auto">
							<div class="title-setting">
								<input type="text" name="dropdown-title" class="input input-align" data-item="" placeholder="Alignement" readonly>
								<div class="dropdown-alignment is_hidden">
									<span class="drop-item align-drop-item" data-item="flex-start">Gauche</span>
									<span class="drop-item align-drop-item" data-item="center">Centré</span>
									<span class="drop-item align-drop-item" data-item="flex-end">Droite</span>
								</div>
							</div>
						</div>
					</div>
					<div class="content-property">
						<span>Alignement Horizontal</span>
						<div class="content-input-setting" style="width: auto">
							<div class="title-setting">
								<input type="text" name="dropdown-title" class="input input-align-horizontal" data-item="" placeholder="Alignement" readonly>
								<div class="dropdown-alignment is_hidden">
									<span class="drop-item align-horizontal-drop-item" data-item="flex-start">En Haut</span>
									<span class="drop-item align-horizontal-drop-item" data-item="center">Centré</span>
									<span class="drop-item align-horizontal-drop-item" data-item="flex-end">En bas</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
			<div class="content-btn justify_content_center">
				<button class="btn-valid">Valider</button>
			</div>
		</div>
	</div>
</div>