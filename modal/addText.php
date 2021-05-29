<div class="modal modal-add-text-two is_hidden">
	<div class="modal-content content_modal_insert_text">
		<div class="modal-head">
			<span class="txt-head">Ajouter un texte</span>
			<span class="closed">x</span>
		</div>
		<div class="modal-body body_insert_table">
			<textarea class="editor">
				
			</textarea>
			<script type="text/javascript">
				$('textarea.editor').ckeditor(function() {
			        }, { toolbar : [
			            ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
			            ['Undo','Redo'],
			            ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
			            ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
			            ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			            ['Link', 'Image', 'Smiley'],
			            ['Table','HorizontalRule','SpecialChar'],
			            ['TextColor','BGColor']
			        ], toolbarCanCollapse:false, height: '300px', scayt_sLang: 'pt_PT', uiColor : '#EBEBEB' } );
			</script>
			<div class="content-btn">
				<button class="btn-delete">Supprimer le texte</button>
				<button class="btn-valid">Valider</button>
			</div>
		</div>
	</div>
</div>