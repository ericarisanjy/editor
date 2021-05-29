let selecteur = ""
let dragindex=0;
let clone="";
let select=""
let is_selected = ""
let col_selected = ""
$(document).ready(function(){
	let blocProp = []
	let sectionProp = []
	let dndState = false;
	let imgData = "";
	$(document).on('click', '.unit-img', function(){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
		imgData = $(this).find('img').attr('src')
	})
	$(".modal-upload-file").on('click', '.btn-valid', function(){
		let html = '<div class="content-insert-img"><img src="'+imgData+'"/></div>'
        selecteur.append(html)
        close_modal('modal-upload-file')
	})
	var selected = ""
	$('#trumbowyg-demo').attr('contenteditable', false)

	$(document).on('click', '.view-html-content', function(){
		$(this).toggleClass('trumbowyg-active')
		$(document).find('.trumbowyg-button-pane').toggleClass('trumbowyg-disable')
		$(document).find('.item-bloc').toggleClass('trumbowyg-disable')
		console.log($(this).hasClass('active'))
		if(!$(this).hasClass('trumbowyg-active')){
			let content = $(document).find('.html-output').val();
			$(document).find('#trumbowyg-demo').html(content)
			$(document).find('.html-output').remove()
		}else{
			let content = $(document).find('#trumbowyg-demo').html();
			let output = '<textarea class="html-output">'+content+'</textarea>'
			$(document).find('#trumbowyg-demo').html('')
			$(document).find('#trumbowyg-demo').append(output)
		}
	})
	$(document).on('click', '.dnd-content', function(){
		dndState = !dndState;
	})
	$('#trumbowyg-demo').dad();
	$('#trumbowyg-demo').attr('style', "height: auto")
	$('.container').find('.trumbowyg-button-group:first').addClass('is_hidden')

	let btnPolice = '<button class="txt-color-content"><div class="content-color">A</div>\
	<input type="color" class="basic txt-color" value="#000000" /></button>\
	<button class="back-color-content"><div class="content-color-back"><img src="./img/eye-dropper-solid.svg"/></div><input type="color" class="basic back-color" value="" /></button>'

	let btnTable = '<button class="tab-content">\
	<img src="./img/table-solid.svg" class="img-insert"/>\
	</button>'
	$(document).find('.trumbowyg-button-group').each(function(i){
		if(i === 3){
			$(this).append(btnPolice)
		}
		if(i === 8){
			$(this).prepend(btnTable)
		}
	})

	let btnHtml = '<div class="trumbowyg-button-group ">\
	<button class=" edit bloc-edit-content"><div class="edit-bloc">Bloc<img src="./img/edit.png" class="img-insert"/></div></button></div>'
	$(document).find('.trumbowyg-button-pane').append(btnHtml)

	let tabHtml = '<div class="trumbowyg-button-group ">\
	<button class="edit section-edit-content"><div class="edit-section">Section<img src="./img/edit.png" class="img-insert"/></div></button>\
	</div>'
	$(document).find('.trumbowyg-button-pane').append(tabHtml)

	let btnViewHtml = '<div class="trumbowyg-button-group ">\
	<button class="view-html-content"><div class="view-html"><></div>\
	</button></div>'
	$(document).find('.trumbowyg-button-pane').append(btnViewHtml)

	$(document).on('click', '.txt-color-content', function(){
		$(document).find('.txt-color').trigger('click')
	})

	$(document).on('click', '.back-color-content', function(){
		$(document).find('.back-color').trigger('click')
	})

	$(document).on('change', '.back-color', function(){
		if(select != ""){
			select.css('background', $(this).val())
		}else{
			selecteur.css('background', $(this).val())
		}
	})

	$(document).on('change', '.txt-color', function(){
		let color = $(this).val()
		if(selected !== ""){
       		$(".colonne").html(function(_, html) {
			   return  html.replace(selected, '<span class="smallcaps" style="color: '+color+'">'+selected+'</span>')
			});
			selected = ""
       }
	})


	getBloc();

	$(document).on('click', '.input-title', function(){
		$(this).siblings().toggleClass("is_hidden")
	})
	$(document).on('click', '.bold', function(){
		$(this).toggleClass("active")
	})
	$(document).on('click', '.italic', function(){
		$(this).toggleClass("active")
	})
	$(document).on('click', '.soulign', function(){
		$(this).toggleClass("active")
	})
let sectionOne = '<div class="colonne col-100 border-dashed min-height-150" contenteditable="true" data-section="1"></div>'

let sectionTwo = '<div class="colonne col-50 " contenteditable="true">\
</div><div class="colonne col-50 border-left-dashed column-direction" contenteditable="true"></div>'

let sectionThree = '<div class="colonne col-65 " contenteditable="true">\
</div><div class="colonne col-35  border-left-dashed column-direction" contenteditable="true"></div>'

let sectionFour = '<div class="colonne col-35 " contenteditable="true"></div>\
<div class="colonne col-65  border-left-dashed column-direction" contenteditable="true"></div>'

let sectionFive = '<div class="colonne col-33  column-direction" contenteditable="true"></div>\
<div class="colonne col-33  border-left-dashed column-direction" contenteditable="true"></div>\
<div class="colonne col-33  border-left-dashed column-direction" contenteditable="true"></div>'

let sectionOneChange = '<div class="section-body">\
<div class="colonne col-100 border-dashed  column-direction min-height-150" contenteditable="true" data-bloc="" data-section="1"></div></div>';
let sectionTwoChange = '<div class="section-body border-dashed min-height-150" data-section="2" data-bloc=""><div class="colonne col-50  column-direction" contenteditable="true">\
</div><div class="colonne col-50 border-left-dashed column-direction" contenteditable="true"></div></div>'
let sectionThreeChange = '<div class="section-body border-dashed min-height-150" data-section="3" data-bloc=""><div class="colonne col-65 column-direction" contenteditable="true">\
</div><div class="colonne col-35 border-left-dashed column-direction" contenteditable="true"></div></div>'
let sectionFourChange = '<div class="section-body border-dashed min-height-150" data-section="4" data-bloc=""><div class="colonne col-35 column-direction" contenteditable="true"></div>\
<div class="colonne col-65 border-left-dashed column-direction" contenteditable="true"></div></div>'
let sectionFiveChange = '<div class="section-body border-dashed min-height-150" data-section="5" data-bloc=""><div class="colonne col-33 column-direction" contenteditable="true"></div>\
<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div>\
<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div></div>'

	let itemBloc = ""
	let dataBloc = ""
	let blocValue = []
	$(document).on('click', '.item-bloc', function(){
		if(!$(this).hasClass('trumbowyg-disable')){
			itemBloc = $(this).attr('data-section');
			dataBloc = $(this).attr('data-bloc');
			launch_modal('modal-update-bloc')
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html()
			$('.modal-update-bloc').find('.txt-head').text("Modification Bloc "+dataBloc)
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').find('.colonne').each(function(){
				blocValue.push($(this).html())
			})
			console.log(blocValue)
			$('.modal-update-bloc').find('.on_modal').find('.defaultSection').removeClass('active_bloc')
			$('.modal-update-bloc').find('.on_modal').find('.defaultSection[data-section="'+itemBloc+'"]').addClass('active_bloc')
		}
	})

	$(".modal-update-bloc").on('click', '.closed', function(){
		close_modal("modal-update-bloc")
		blocValue = []
	})

	$(document).on('click', '.not_on_modal .defaultSection', function(){
		let sectionData = $(this).attr('data-section');
		if(sectionData === "sectionOne"){
			$('#trumbowyg-demo').append(sectionOneChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			$(document).find('.not_on_modal').find('.nbre_col').addClass('is_hidden')
			//$('#trumbowyg-demo').addClass('column-direction')
		}else if(sectionData === "sectionTwo"){
			$('#trumbowyg-demo').append(sectionTwoChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			$(document).find('.not_on_modal').find('.nbre_col').addClass('is_hidden')
			//$('#trumbowyg-demo').removeClass('column-direction')
		}else if(sectionData === "sectionThree"){
			$('#trumbowyg-demo').append(sectionThreeChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			$(document).find('.not_on_modal').find('.nbre_col').addClass('is_hidden')
			//$('#trumbowyg-demo').removeClass('column-direction')
		}else if(sectionData === "sectionFour"){
			$('#trumbowyg-demo').append(sectionFourChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			$(document).find('.not_on_modal').find('.nbre_col').addClass('is_hidden')
			//$('#trumbowyg-demo').removeClass('column-direction')
		}else{
			$(document).find('.not_on_modal').find('.nbre_col').removeClass('is_hidden')
			//$('#trumbowyg-demo').removeClass('column-direction')
		}
		getBloc();
	})

	$(document).on('change', '.not_on_modal .nbre_col', function(){
		let nbre_col = $(this).val();
		let html = ""
		if(nbre_col == 1){
			sectionFiveChange = sectionOneChange
		}else if(nbre_col == 2){
			sectionFiveChange = sectionTwoChange
		}else if(nbre_col != 0){
			for(let i = 0; i < nbre_col; i++){
				if(i == 0){
					html = '<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div>'
				}else{
					html = html+'<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div>'
				}
			}
			sectionFiveChange = '<div class="section-body border-dashed min-height-150" data-section="5" data-bloc="">'+html+'</div>'
		}
		$('#trumbowyg-demo').append(sectionFiveChange)
		$('#trumbowyg-demo').attr('contenteditable', false)
		$(this).addClass('is_hidden')
		$(this).val('')
		getBloc()
	})

	let sectionDataOnModal = 0

	$(".modal-update-bloc").on('click', '.on_modal .defaultSection', function(){
		sectionDataOnModal = $(this).attr('data-section');
		$(this).siblings().removeClass('active_bloc');
		$(this).addClass('active_bloc')
		if(sectionDataOnModal == '5'){
			$(this).find('.nbre_col').removeClass('is_hidden')
		}else{
			$(".modal-update-bloc").find('.on_modal').find('.nbre_col').addClass('is_hidden')
		}
	})
	let blocSelected = ""

	$(".modal-add-bloc").on('click', '.on_modal .defaultSection', function(){
		blocSelected = $(this).html()
		sectionDataOnModal = $(this).attr('data-section');
		$(this).siblings().removeClass('active_bloc');
		$(this).addClass('active_bloc')
		if(sectionDataOnModal == '5'){
			$(this).find('.nbre_col').removeClass('is_hidden')
		}else{
			$(".modal-update-bloc").find('.on_modal').find('.nbre_col').addClass('is_hidden')
		}
	})

	$(".modal-update-bloc").on('change', '.on_modal .nbre_col', function(){
		let nbre_col = $(this).val();
		sectionFive = []
		if(nbre_col == 1){
			sectionFive = sectionOne
		}else if(nbre_col == 2){
			sectionFive = sectionTwo
		}else if(nbre_col != 0){
			for(let i = 0; i < nbre_col; i++){
				if(i == 0){
					sectionFive = '<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div>'
				}else{
					sectionFive = sectionFive+'<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div>'
				}
			}
		}
		$(this).addClass('is_hidden')
	})

	let col_number = 0;

	$(".modal-add-bloc").on('change', '.on_modal .nbre_col', function(){
		col_number = $(this).val();
		$(this).addClass('is_hidden')
	})

	$(".modal-update-bloc").on('click', '.btn-delete', function(){
		$(document).find('.section-body[data-bloc="'+dataBloc+'"]').remove()
		close_modal('modal-update-bloc')
		getBloc()
	})

	$(".modal-update-bloc").on('click', '.btn-valid', function(){
		if(sectionDataOnModal == "1"){
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionOne)
			blocValue.forEach(function(el){
				$(document).find('.section-body[data-bloc="'+dataBloc+'"]').find('.colonne').append(el)
			})
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').addClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else if(sectionDataOnModal == "2"){
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionTwo)
			blocValue.forEach(function(el, i){
				$(document).find('.section-body[data-bloc="'+dataBloc+'"]').find('.colonne').each(function(j){
					if(i === j){
						$(this).append(el)
					}
				})
			})
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else if(sectionDataOnModal == "3"){
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionThree)
			blocValue.forEach(function(el, i){
				$(document).find('.section-body[data-bloc="'+dataBloc+'"]').find('.colonne').each(function(j){
					if(i === j){
						$(this).append(el)
					}
				})
			})
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else if(sectionDataOnModal == "4"){
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionFour)
			blocValue.forEach(function(el, i){
				$(document).find('.section-body[data-bloc="'+dataBloc+'"]').find('.colonne').each(function(j){
					if(i === j){
						$(this).append(el)
					}
				})
			})
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else{
			$(document).find('.nbre_col').val("")
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionFive)
			blocValue.forEach(function(el, i){
				$(document).find('.section-body[data-bloc="'+dataBloc+'"]').find('.colonne').each(function(j){
					if(i === j){
						$(this).append(el)
					}
				})
			})
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}
		blocValue = []
		close_modal('modal-update-bloc')
	})

	$(document).on('click', '.erase-bloc', function(){
		$(this).closest('.body-container').remove();
	})

	$(document).on('keyup', '.section-body', function(){
		// console.log($(this).find('div').length)
		// if($(this).find('div').length === 0 || $(this).find('div').length === 1){
		// 	let data = '<div>'+$(this).text()+'</div>'
		// 	$(this).html(data)
		// }
	})
	let pageHtml = ""
	$(document).on('click', '.preview-link', function(){
		pageHtml = $(document).find('#trumbowyg-demo')
		$(document).find('.preview-page').html(pageHtml)
		$(document).find('.container').addClass('is_hidden')
		$(document).find('.close-preview').removeClass('is_hidden')
		$(document).find('.preview-page').find('.colonne').attr('contenteditable', false)
		$(document).find('.preview-page').find('.colonne').removeClass('min-height-150')
		$(document).find('.preview-page').find('.colonne').removeClass('border-dashed')
		$(document).find('.preview-page').find('.colonne').removeClass('border-dashed-blue')
		$(document).find('.preview-page').find('.colonne').removeClass('border-left-dashed')
		$(document).find('.preview-page').find('.colonne').removeClass('border-left-dashed-blue')
		$(document).find('.preview-page').find('.section-body').removeClass('border-dashed')
	})

	$(document).on('click', '.close-preview', function(){
		$(document).find('.preview-page').html("")
		$(document).find('.container').removeClass('is_hidden')
		$(document).find('.close-preview').addClass('is_hidden')
		$(document).find('.trumbowyg-editor-visible').append(pageHtml)
		$(document).find('.trumbowyg-editor-visible').find('.colonne').attr('contenteditable', true)
		$(document).find('.trumbowyg-editor-visible').find('.colonne').addClass('min-height-150')
		$(document).find('.trumbowyg-editor-visible').find('.colonne').addClass('border-dashed')
		$(document).find('.trumbowyg-editor-visible').find('.colonne').addClass('border-left-dashed')
		$(document).find('.trumbowyg-editor-visible').find('.section-body').addClass('border-dashed')
	})

	$(document).on('click', '.trumbowyg-insertImage-button ', function(){
		if(selecteur){
			launch_modal("modal-upload-file")
		}
		$(document).find('.trumbowyg-modal').addClass('is_hidden')
	})

	$(document).on('click', '.tab-content', function(){
		if(selecteur){
			launch_modal("modal-insert-table")
		}
	})

	$(".modal-insert-table").on('click', '.closed', function(){
		close_modal("modal-insert-table")
	})

	$(".modal-insert-table").on('click', '.btn-valid', function(){
		let line = $(".modal-insert-table").find('.tab-line').val()
		let col = $(".modal-insert-table").find('.tab-col').val()
		let lineHtml = ""
		for(var i = 0; i < line; i++){
			let colHtml = ""
			for(var j = 0; j < col; j++){
				if(j == 0){
					colHtml = '<td></td>'
				}else{
					colHtml = colHtml+'<td></td>'
				}
			}
			if(i == 0){
				lineHtml = "<tr>"+colHtml+"</tr>"
			}else{
				lineHtml = lineHtml+"<tr>"+colHtml+"</tr>"
			}
		}
		let html = "<table border='1' cellspacing='0'>"+lineHtml+"</table>"
		selecteur.append(html)
		close_modal("modal-insert-table")
	})

	$(document).on('click', '.border-content', function(){
		if(selecteur){
			launch_modal("modal-border")
		}
	})

	let dropItem = ""
	let borderColor = ""
	let borderSize = ""

	$('.modal-edit-section').on('click', '.drop-item', function(){
		dropItem = $(this).text()
		$(this).parent().addClass('is_hidden')
		$(".modal-edit-section").find('.borderInput').val(dropItem)
	})

	$('.modal-edit-bloc').on('click', '.drop-item', function(){
		dropItem = $(this).text()
		$(this).parent().addClass('is_hidden')
		$(".modal-edit-bloc").find('.borderInput').val(dropItem)
	})

	$('.modal-border').on('change', '.borderColor', function(){
		borderColor = $(this).val()
	})

	$('.modal-border').on('change', '.borderSize', function(){
		borderSize = $(this).val()
	})

	$('.modal-border').on('click', '.btn-valid', function(){
		if(dropItem !== "Sans Bordure"){
			selecteur.attr('style', 'border: '+(borderSize == ""?1:borderSize)+'px '+dropItem+' '+borderColor+'')
		}else{
			selecteur.attr('style', 'border: initial')
		}
		close_modal("modal-border")
	})

	$(document).on('click', '.marge-content', function(){
		if(selecteur){
			launch_modal("modal-add-marge")
		}
	})

	$(document).on('click', '.cAndI-content', function(){
		if(selecteur){
			launch_modal("modal-class-and-id")
		}
	})

	$(document).on('click', '.edit-bloc', function(){
		if(is_selected){
			let index = parseInt(is_selected.attr('data-blocChild')) -1
			let int = parseInt(selecteur.attr('data.bloc')) - 1
			launch_modal("modal-edit-bloc")
			console.log("sdsqdsq", index)
			if(blocProp[index]?.int){
				let textColor = sectionProp[index].int.textColor
				let backColor = sectionProp[index].int.backColor
				let margeUp = sectionProp[index].int.margeUp
				let margeDown = sectionProp[index].int.margeDown
				let margeRight = sectionProp[index].int.margeRight
				let margeLeft = sectionProp[index].int.margeLeft
				let paddingUp = sectionProp[index].int.paddingUp
				let paddingDown = sectionProp[index].int.paddingDown
				let paddingRight = sectionProp[index].int.paddingRight
				let paddingLeft = sectionProp[index].int.paddingLeft
				let classe = sectionProp[index].int.classe
				let id = sectionProp[index].int.id
				let borderType = sectionProp[index].int.borderType
				let borderColor = sectionProp[index].int.borderColor
				let borderHeight = sectionProp[index].int.borderHeight



				$('.modal-edit-bloc').find('.text-color').val(textColor)
				$('.modal-edit-bloc').find('.back-color').val(backColor)
				$('.modal-edit-bloc').find('.marge-haut').val(margeUp)
				$('.modal-edit-bloc').find('.marge-bas').val(margeDown)
				$('.modal-edit-bloc').find('.marge-droite').val(margeRight)
				$('.modal-edit-bloc').find('.marge-gauche').val(margeLeft)
				$('.modal-edit-bloc').find('.padding-haut').val(paddingUp)
				$('.modal-edit-bloc').find('.padding-bas').val(paddingDown)
				$('.modal-edit-bloc').find('.padding-droite').val(paddingRight)
				$('.modal-edit-bloc').find('.padding-gauche').val(paddingLeft)
				$('.modal-edit-bloc').find('.input-class').val(classe)
				$('.modal-edit-bloc').find('.input-id').val(id)
				$('.modal-edit-bloc').find('.borderInput').val(borderType)
				$('.modal-edit-bloc').find('.border-color').val(borderColor)
				$('.modal-edit-bloc').find('.border-height').val(borderHeight)
			}else{
				$('.modal-edit-bloc').find('.text-color').val("#000000")
				$('.modal-edit-bloc').find('.back-color').val("#000000")
				$('.modal-edit-bloc').find('.marge-haut').val("")
				$('.modal-edit-bloc').find('.marge-bas').val("")
				$('.modal-edit-bloc').find('.marge-droite').val("")
				$('.modal-edit-bloc').find('.marge-gauche').val("")
				$('.modal-edit-bloc').find('.padding-haut').val("")
				$('.modal-edit-bloc').find('.padding-bas').val("")
				$('.modal-edit-bloc').find('.padding-droite').val("")
				$('.modal-edit-bloc').find('.padding-gauche').val("")
				$('.modal-edit-bloc').find('.input-class').val("")
				$('.modal-edit-bloc').find('.input-id').val("")
				$('.modal-edit-bloc').find('.borderInput').val("")
				$('.modal-edit-bloc').find('.border-color').val("")
				$('.modal-edit-bloc').find('.border-height').val("")
			}
		}
	})
	$('.modal-edit-section').on('click', '.borderInput', function(){
		$(this).siblings('.content-dropdown').toggleClass('is_hidden')
	})
	$('.modal-edit-bloc').on('click', '.borderInput', function(){
		$(this).siblings('.content-dropdown').toggleClass('is_hidden')
	})
	$(document).on('click', '.edit-section', function(){
		if(selecteur){
			let index = parseInt(selecteur.attr('data-bloc')) -1
			if(!selecteur.attr('data-bloc')){
				index = parseInt(selecteur.closest('.section-body').attr('data-bloc')) -1
			}
			launch_modal("modal-edit-section")
			console.log("sdsqdsq", index)
			if(blocProp[index]){
				let textColor = blocProp[index].textColor
				let backColor = blocProp[index].backColor
				let margeUp = blocProp[index].margeUp
				let margeDown = blocProp[index].margeDown
				let margeRight = blocProp[index].margeRight
				let margeLeft = blocProp[index].margeLeft
				let paddingUp = blocProp[index].paddingUp
				let paddingDown = blocProp[index].paddingDown
				let paddingRight = blocProp[index].paddingRight
				let paddingLeft = blocProp[index].paddingLeft
				let classe = blocProp[index].classe
				let id = blocProp[index].id
				let bloc = blocProp[index].bloc
				let borderType = blocProp[index].borderType
				let borderColor = blocProp[index].borderColor
				let borderHeight = blocProp[index].borderHeight


				$('.modal-edit-section').find('.text-color').val(textColor)
				$('.modal-edit-section').find('.back-color').val(backColor)
				$('.modal-edit-section').find('.marge-haut').val(margeUp)
				$('.modal-edit-section').find('.marge-bas').val(margeDown)
				$('.modal-edit-section').find('.marge-droite').val(margeRight)
				$('.modal-edit-section').find('.marge-gauche').val(margeLeft)
				$('.modal-edit-section').find('.padding-haut').val(paddingUp)
				$('.modal-edit-section').find('.padding-bas').val(paddingDown)
				$('.modal-edit-section').find('.padding-droite').val(paddingRight)
				$('.modal-edit-section').find('.padding-gauche').val(paddingLeft)
				$('.modal-edit-section').find('.input-class').val(classe)
				$('.modal-edit-section').find('.input-id').val(id)
				$('.modal-edit-section').find('.blocs-is').html(bloc)
				$('.modal-edit-section').find('.borderInput').val(borderType)
				$('.modal-edit-section').find('.border-color').val(borderColor)
				$('.modal-edit-section').find('.border-height').val(borderHeight)
			}else{
				$('.modal-edit-section').find('.text-color').val("#000000")
				$('.modal-edit-section').find('.back-color').val("#000000")
				$('.modal-edit-section').find('.marge-haut').val("")
				$('.modal-edit-section').find('.marge-bas').val("")
				$('.modal-edit-section').find('.marge-droite').val("")
				$('.modal-edit-section').find('.marge-gauche').val("")
				$('.modal-edit-section').find('.padding-haut').val("")
				$('.modal-edit-section').find('.padding-bas').val("")
				$('.modal-edit-section').find('.padding-droite').val("")
				$('.modal-edit-section').find('.padding-gauche').val("")
				$('.modal-edit-section').find('.input-class').val("")
				$('.modal-edit-section').find('.input-id').val("")
				$('.modal-edit-section').find('.blocs-is').html("")
				$('.modal-edit-section').find('.borderInput').val("")
				$('.modal-edit-section').find('.border-color').val("")
				$('.modal-edit-section').find('.border-height').val("")
			}
			selecteur.html('')
		}
	})
	let backChange = false
	let textChange = false
	$(".modal-edit-section").on('click', '.text-color-section', function(){
		textChange = true
	})
	$(".modal-edit-section").on('click', '.back-color-section', function(){
		backChange = true
	})

	let backBlocChange = false
	let textBlocChange = false
	$(".modal-edit-bloc").on('click', '.text-color-bloc', function(){
		textBlocChange = true
	})
	$(".modal-edit-bloc").on('click', '.back-color-bloc', function(){
		backBlocChange = true
	})

	$('.modal-edit-bloc').on('click', '.btn-valid', function(){
		let int = is_selected.attr('data-blocChild')
		let index = parseInt(selecteur.attr('data-bloc')) - 1

		let textColor = $('.modal-edit-bloc').find('.text-color-bloc').val()
		let backColor = $('.modal-edit-bloc').find('.back-color-bloc').val()
		let margeUp = $('.modal-edit-bloc').find('.marge-haut-bloc').val()
		let margeDown = $('.modal-edit-bloc').find('.marge-bas-bloc').val()
		let margeRight = $('.modal-edit-bloc').find('.marge-droite-bloc').val()
		let margeLeft = $('.modal-edit-bloc').find('.marge-gauche-bloc').val()
		let paddingUp = $('.modal-edit-bloc').find('.padding-haut-bloc').val()
		let paddingDown = $('.modal-edit-bloc').find('.padding-bas-bloc').val()
		let paddingRight = $('.modal-edit-bloc').find('.padding-droite-bloc').val()
		let paddingLeft = $('.modal-edit-bloc').find('.padding-gauche-bloc').val()
		let classe = $('.modal-edit-bloc').find('.input-class-bloc').val()
		let id = $('.modal-edit-bloc').find('.input-id-bloc').val()
		let borderType = $('.modal-edit-bloc').find('.borderInput-bloc').val()
		let borderColor = $('.modal-edit-bloc').find('.border-color-bloc').val()
		let borderHeight = $('.modal-edit-bloc').find('.border-height-bloc').val()

		if(!sectionProp[index]){
			sectionProp[index] = []
		}

		sectionProp[index][int] = {
			textColor: textBlocChange?textColor:"inherit",
			backColor: backBlocChange? backColor:"inherit",
			margeUp: margeUp === ""?0:margeUp,
			margeDown: margeDown === ""?0:margeDown,
			margeLeft: margeLeft === ""?0:margeLeft,
			margeRight: margeRight === ""?0:margeRight,
			paddingUp: paddingUp === ""?0:paddingUp,
			paddingDown: paddingDown === ""?0:paddingDown,
			paddingLeft: paddingLeft === ""?0:paddingLeft,
			paddingRight: paddingRight === ""?0:paddingRight,
			class: classe,
			id: id,
			borderType: borderType === ""?"":borderType,
			borderColor: borderColor === ""?0:borderColor,
			borderHeight: borderHeight === ""?0:borderHeight,
		}
		console.log('iciciciic', sectionProp[index][int])
		is_selected.addClass(classe)
		is_selected.attr('id', id)
		is_selected.attr('style', "border:"+sectionProp[index][int].borderHeight+"px "+sectionProp[index][int].borderColor+" "+sectionProp[index][int].borderType+";color: "+sectionProp[index][int].textColor+"; background: "+sectionProp[index][int].backColor+"; margin: "+sectionProp[index][int].margeUp+"px "+sectionProp[index][int].margeRight+"px "+sectionProp[index][int].margeDown+"px "+sectionProp[index][int].margeLeft+"px;padding: "+sectionProp[index][int].paddingUp+"px "+sectionProp[index][int].paddingRight+"px "+sectionProp[index][int].paddingDown+"px "+sectionProp[index][int].paddingLeft+"px")
		close_modal('modal-edit-bloc')
	})
	$(".modal-edit-section").on('click', '.btn-valid', function(){
		let index = parseInt(selecteur.attr('data-bloc')) -1
			if(!selecteur.attr('data-bloc')){
				index = parseInt(selecteur.closest('.section-body').attr('data-bloc')) -1
			}
		let textColor = $('.modal-edit-section').find('.text-color-section').val()
		let backColor = $('.modal-edit-section').find('.back-color-section').val()
		let margeUp = $('.modal-edit-section').find('.marge-haut-section').val()
		let margeDown = $('.modal-edit-section').find('.marge-bas-section').val()
		let margeRight = $('.modal-edit-section').find('.marge-droite-section').val()
		let margeLeft = $('.modal-edit-section').find('.marge-gauche-section').val()
		let paddingUp = $('.modal-edit-section').find('.padding-haut-section').val()
		let paddingDown = $('.modal-edit-section').find('.padding-bas-section').val()
		let paddingRight = $('.modal-edit-section').find('.padding-droite-section').val()
		let paddingLeft = $('.modal-edit-section').find('.padding-gauche-section').val()
		let classe = $('.modal-edit-section').find('.input-class-section').val()
		let id = $('.modal-edit-section').find('.input-id-section').val()
		let borderType = $('.modal-edit-section').find('.borderInput-section').val()
		let borderColor = $('.modal-edit-section').find('.border-color-section').val()
		let borderHeight = $('.modal-edit-section').find('.border-height-section').val()

		let blocProperty = {
			textColor: textChange?textColor:"inherit",
			backColor: backChange? backColor:"inherit",
			margeUp: margeUp === ""?0:margeUp,
			margeDown: margeDown === ""?0:margeDown,
			margeLeft: margeLeft === ""?0:margeLeft,
			margeRight: margeRight === ""?0:margeRight,
			paddingUp: paddingUp === ""?0:paddingUp,
			paddingDown: paddingDown === ""?0:paddingDown,
			paddingLeft: paddingLeft === ""?0:paddingLeft,
			paddingRight: paddingRight === ""?0:paddingRight,
			class: classe,
			id: id,
			bloc: $(".modal-edit-section").find('.blocs-is').html(),
			borderType: borderType === ""?"":borderType,
			borderColor: borderColor === ""?0:borderColor,
			borderHeight: borderHeight === ""?0:borderHeight,
		}
		if(!blocProp[index]){
			blocProp.push(blocProperty)
		}else{
			blocProp[index] = blocProperty
		}
		selecteur.addClass(classe)
		selecteur.attr('id', id)
		selecteur.attr('style', "border:"+blocProperty.borderHeight+"px "+blocProperty.borderColor+" "+blocProperty.borderType+";color: "+blocProperty.textColor+"; background: "+blocProperty.backColor+"; margin: "+blocProperty.margeUp+"px "+blocProperty.margeRight+"px "+blocProperty.margeDown+"px "+blocProperty.margeLeft+"px;padding: "+blocProperty.paddingUp+"px "+blocProperty.paddingRight+"px "+blocProperty.paddingDown+"px "+blocProperty.paddingLeft+"px")
		close_modal('modal-edit-section')
		$(".modal-edit-section").find('.blocs').each(function(){
			let secInt = $(this).find('.defaultSection').attr('data-section');
			selecteur.attr('contenteditable', false)
			if(secInt === "1"){
				selecteur.append(sectionOneChange)
			}else if(secInt === "2"){
				selecteur.append(sectionTwoChange)
			}else if(secInt === "3"){
				selecteur.append(sectionThreeChange)
			}else if(secInt === "4"){
				selecteur.append(sectionFourChange)
			}else{
				let nbre_col = $(this).find('.col_number').val()
				if(nbre_col == 1){
					sectionFiveChange = sectionOneChange
				}else if(nbre_col == 2){
					sectionFiveChange = sectionTwoChange
				}else if(nbre_col != 0){
					for(let i = 0; i < nbre_col; i++){
						if(i == 0){
							html = '<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div>'
						}else{
							html = html+'<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true"></div>'
						}
					}
					sectionFiveChange = '<div class="section-body border-dashed min-height-150" data-section="5" data-bloc="">'+html+'</div>'
				}
				selecteur.append(sectionFiveChange)
			}
			selecteur.find('.colonne').each(function(i){
				$(this).attr('data-blocChild', index+""+i)
			})
			selecteur.find('.section-body').addClass('border-dashed-blue')
			selecteur.find('.colonne').addClass('border-left-dashed-blue bloc-intern')
		})
	})

	

	$(".modal-edit-section").on('click', '.add-btn', function(){
		console.log("mande")
		close_modal('modal-edit-section')
		launch_modal('modal-add-bloc')
	})

	$(".modal-add-bloc").on('click', '.closed', function(){
		close_modal("modal-add-bloc")
		launch_modal('modal-edit-section')
	})

	$(".modal-add-bloc").on('click', '.btn-valid', function(){
		close_modal("modal-add-bloc")
		launch_modal('modal-edit-section')
		let value = ""
			value = '<div class="blocs"><div class="defaultSection" data-section="'+sectionDataOnModal+'"><input type="hidden" class="col_number" value="'+col_number+'"/>'+blocSelected+'</div><div class="content-btn-bloc"><button class="modif">Modif</button><button class="suppr">Suppr</button></div></div>'
		
		$(".modal-edit-section").find('.blocs-is').append(value)
		$(".modal-edit-section").find('.nbre_col').remove()
		console.log($(".modal-edit-section").find('.insert-bloc-content'))
	})

	$('.modal-edit-section').on('click', '.suppr', function(){
		$(this).closest('.blocs').remove()
	})

	$('.modal-edit-section').on('click', '.modif', function(){
		close_modal('modal-edit-section')
		launch_modal("modal-add-bloc")
	})
	
	$(".modal-edit-section").on('click', '.closed', function(){
		close_modal("modal-edit-section")
	})
	$(".modal-edit-bloc").on('click', '.closed', function(){
		close_modal("modal-edit-bloc")
	})

	$(".modal-class-and-id").on('click', '.closed', function(){
		close_modal("modal-class-and-id")
	})

	$(".modal-add-marge").on('click', '.closed', function(){
		close_modal("modal-add-marge")
	})

	$(".modal-border").on('click', '.closed', function(){
		close_modal("modal-border")
	})

	$(".modal-class-and-id").on('click', '.btn-valid', function(){
		let classe = $(document).find('.class').val()
		let id = $(document).find('.id').val()
		if(select != ""){
			select.addClass(classe)
			select.attr('id', id)
		}else{
			selecteur.addClass(classe)
			selecteur.attr('id', id)
		}
		close_modal("modal-class-and-id")
	})

	$(".modal-add-marge").on('click', '.btn-valid', function(){
		console.log('mande')
		let haut = $(document).find('.marge-haut').val() == ""? 0 : $(document).find('.marge-haut').val()
		let bas = $(document).find('.marge-bas').val() == ""? 0 : $(document).find('.marge-bas').val()
		let gauche = $(document).find('.marge-gauche').val() == ""? 0 : $(document).find('.marge-gauche').val()
		let droite = $(document).find('.marge-droite').val() == ""? 0 : $(document).find('.marge-droite').val()
		if(select != ""){
			select.attr('style', 'padding-top: '+(haut)+'px;padding-bottom: '+(bas)+'px;padding-left: '+(gauche)+'px;padding-right: '+(droite)+'px;')
		}else{
			selecteur.attr('style', 'padding-top: '+(haut)+'px;padding-bottom: '+(bas)+'px;padding-left: '+(gauche)+'px;padding-right: '+(droite)+'px;')
		}
		close_modal("modal-add-marge")
	})

	$(".modal-upload-file").on('click', '.closed', function(){
		close_modal("modal-upload-file")
		$(".trumbowyg-modal-reset").trigger('click')
	})

	$(".modal-upload-file").on('click', '.local-storage', function(){
		console.log('ao tsar', $(this).siblings('.input_file'))
		$(this).siblings('.input_file').trigger('click')
	})
	$(".input_file").change(function () {
	    readURLLogo(this);
	    close_modal("modal-upload-file")
	    $(document).find('.trumbowyg-overlay').css('display', 'block')
	    $('.trumbowyg-modal-reset').trigger('click')
	});
	$(document).on('keyup', '.colonne', function(){
		let value = $(this).find('div')
		$(this).replace(value, '<p>'+value+'</p>')
	})
	$(document).on('click', '.colonne', function(){
		selecteur = $(this)
	})
	$(document).on('click', 'td', function(){
		select = $(this)
		console.log('mande')
	})
	$(document).on('mouseup', '.colonne', function(){
		 selected = getSelectionText();
	})
	$(document).on('mousedown', '.colonne', function(){
		 selected = getSelectionText();
	})
	$(document).on('click', '.bloc-intern', function(){
		is_selected = $(this)
	})
	
})
function launch_modal(selector){
	$("."+selector).removeClass('is_hidden')
	$(".container").addClass('is_blurred')
	$("body").addClass("no_scroll")
}
function close_modal(selector){
	$("."+selector).addClass('is_hidden')
	$(".container").removeClass('is_blurred')
	$("body").removeClass("no_scroll")
}
function getBloc(){
	$(document).find('.bloc-content').html('')
	let bloc = $(document).find('.section-body').length
	$(document).find('.section-body').each(function(i){
		$(this).attr('data-bloc', i+1)
		let sectionData = $(this).attr("data-section")
		console.log(sectionData)
		let html = '<span class="item-bloc" data-bloc="'+(i+1)+'" data-section="'+sectionData+'">Section '+(i+1)+'</span>'
		$(document).find('.bloc-content').append(html)
	})
}
function readURLLogo(input, div) {
    if (input.files && input.files[0]) {
        if (input.files[0].type == "image/jpeg" || input.files[0].type == "image/png" || input.files[0].type == "image/svg+xml"){
            var reader = new FileReader();
            reader.onload = function (e) {
            	let html = '<div class="content-insert-img"><img src="'+e.target.result+'"/></div>'
            	selecteur.append(html)
            }
            reader.readAsDataURL(input.files[0]);
            $('p.infoLogo').text('');
        } else {
            $('p.infoLogo').text(image_valid);
            $('#company_logo').val('');
            //$('#img_entreprise').attr('src', 's');
        }
    }
}

function getSelectionText() {
	//$('.colonne').empty();
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function onDragStart(e)
{
e.dataTransfer.setData("text",e.target.id);
}
function allowDrop(e)
{
	e.preventDefault();
}
function drop(e)
{
	e.preventDefault();
	clone=e.target.cloneNode(true);
	let data=e.dataTransfer.getData("text");
	let nodelist=document.getElementById("trumbowyg-demo").childNodes;
	for(let i=0;i<nodelist.length;i++)
	{
	if(nodelist[i].id===data)
	{dragindex=i;}
	}
	document.getElementById("trumbowyg-demo").replaceChild(document.getElementById(data),e.target);
	document.getElementById("trumbowyg-demo").insertBefore(clone,document.getElementById("trumbowyg-demo").childNodes[dragindex]);
}

	
