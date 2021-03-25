<div class="modal modal-edit-section is_hidden">
	<div class="modal-content" style="width: 95%">
		<div class="modal-head">
			<span class="txt-head">Mise en Page du Section</span>
			<span class="closed">x</span>
		</div>
		<div class="modal-body body_insert_table">
			<div class="bloc-container bloc-edit-container">
				<div class="items polices">
					<span class="txt-header">POLICE</span>
					<div class="content-property">
						<span>Couleur du text</span>
							<input type="color" class="basic-item text-color-section" value="" style="width: 62px;" />
					</div>
					<div class="content-property">
						<span>Couleur du fond</span>
							<input type="color" class="basic-item back-color-section" value="" style="width: 62px;"/>
					</div>
				</div>
				<div class="items marge-externe">
					<span class="txt-header">MARGE EXTERIEUR</span>
					<div class="content-property">
						<span>Marge Droite</span>
						<input type="number" name="" placeholder="Droite" class="input marge-droite-section">
					</div>
					<div class="content-property">
						<span>Marge Gauche</span>
						<input type="number" name="" placeholder="Gauche" class="input marge-gauche-section">
					</div>
					<div class="content-property">
						<span>Marge Haut</span>
						<input type="number" name="" placeholder="Haut" class="input marge-haut-section">
					</div>
					<div class="content-property">
						<span>Marge Bas</span>
						<input type="number" name="" placeholder="Bas" class="input marge-bas-section">
					</div>
				</div>
				<div class="items marge-interne">
					<span class="txt-header">MARGE INTERIEUR</span>
					<div class="content-property">
						<span>Padding Droite</span>
						<input type="number" name="" placeholder="Droite" class="input padding-droite-section">
					</div>
					<div class="content-property">
						<span>Padding Gauche</span>
						<input type="number" name="" placeholder="Gauche" class="input padding-gauche-section">
					</div>
					<div class="content-property">
						<span>Padding Haut</span>
						<input type="number" name="" placeholder="Haut" class="input padding-haut-section">
					</div>
					<div class="content-property">
						<span>Padding Bas</span>
						<input type="number" name="" placeholder="Bas" class="input padding-bas-section">
					</div>
				</div>
				<div class="items marge-interne">
					<span class="txt-header">BORDURE</span>
					<div class="content-property">
						<span>Type du Bordure</span>
						<div class="content-input">
							<div class="title">
								<input type="text" name="dropdown-title" class="input borderInput-section" placeholder="Sans Bordure" readonly>
								<div class="content-dropdown is_hidden">
									<span class="drop-item">Sans Bordure</span>
									<span class="drop-item">Solid</span>
									<span class="drop-item">Dashed</span>
									<span class="drop-item">Inset</span>
									<span class="drop-item">Outset</span>
									<span class="drop-item">Dotted</span>
									<span class="drop-item">Double</span>
								</div>
							</div>
						</div>
					</div>
					<div class="content-property">
						<span>Couleur du bordure</span>
						<input type="color" class="basic-item border-color-section" value="" style="width: 62px;"/>
					</div>
					<div class="content-property">
						<span>Epaisseur du Bordure</span>
						<input type="number" name="" placeholder="Haut" class="input border-height-section" min="0">
					</div>
				</div>
				<div class="items class-or-id">
					<span class="txt-header">CLASS OU ID</span>
					<div class="content-property">
						<span>Class</span>
						<input type="text" name="" placeholder="Class" class="input input-class-section">
					</div>
					<div class="content-property">
						<span>Id</span>
						<input type="text" name="" placeholder="Id" class="input input-id-section">
					</div>
				</div>
				<div class="items alignement">
					<span class="txt-header">ALIGNEMENT</span>
					<div class="content-property">
						<span>Alignement</span>
						<div class="content-input-setting" style="width: auto">
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
			<div class="content-btn btn-insert-table">
				<button class="btn-valid">Valider</button>
			</div>
		</div>
	</div>
</div>