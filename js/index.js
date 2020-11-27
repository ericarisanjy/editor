$(document).ready(function(){
	$('#trumbowyg-demo').attr('contenteditable', false)

	$('#trumbowyg-demo').attr('style', "height: auto")

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
	let sectionOne = ''

let sectionTwo = '<div class="col-50 flex column-direction" contenteditable="true">\
</div><div class="col-50 flex border-left-dashed column-direction" contenteditable="true"></div>'

let sectionThree = '<div class="col-65 flex column-direction" contenteditable="true">\
</div><div class="col-35 flex border-left-dashed column-direction" contenteditable="true"></div>'

let sectionFour = '<div class="col-35 flex column-direction" contenteditable="true"></div>\
<div class="col-65 flex border-left-dashed column-direction" contenteditable="true"></div>'

let sectionFive = '<div class="col-33 flex column-direction" contenteditable="true"></div>\
<div class="col-33 flex border-left-dashed column-direction" contenteditable="true"></div>\
<div class="col-33 flex border-left-dashed column-direction" contenteditable="true"></div>'

let sectionOneChange = '<div class="section-body border-dashed column-direction min-height-150" data-section="1" data-bloc="" contenteditable="true"></div>';
let sectionTwoChange = '<div class="section-body border-dashed min-height-150" data-section="2" data-bloc=""><div class="col-50 flex column-direction" contenteditable="true">\
</div><div class="col-50 flex border-left-dashed column-direction" contenteditable="true"></div></div>'
let sectionThreeChange = '<div class="section-body border-dashed min-height-150" data-section="3" data-bloc=""><div class="col-65 flex column-direction" contenteditable="true">\
</div><div class="col-35 flex border-left-dashed column-direction" contenteditable="true"></div></div>'
let sectionFourChange = '<div class="section-body border-dashed min-height-150" data-section="4" data-bloc=""><div class="col-35 flex column-direction" contenteditable="true"></div>\
<div class="col-65 flex border-left-dashed column-direction" contenteditable="true"></div></div>'
let sectionFiveChange = '<div class="section-body border-dashed min-height-150" data-section="5" data-bloc=""><div class="col-33 flex column-direction" contenteditable="true"></div>\
<div class="col-33 flex border-left-dashed column-direction" contenteditable="true"></div>\
<div class="col-33 flex border-left-dashed column-direction" contenteditable="true"></div></div>'

	let itemBloc = ""
	let dataBloc = ""

	$(document).on('click', '.item-bloc', function(){
		itemBloc = $(this).attr('data-section');
		dataBloc = $(this).attr('data-bloc');
		launch_modal('modal-update-bloc')
		$('.modal-update-bloc').find('.txt-head').text("Modification Bloc "+dataBloc)
		$('.modal-update-bloc').find('.on_modal').find('.defaultSection').removeClass('active_bloc')
		$('.modal-update-bloc').find('.on_modal').find('.defaultSection[data-section="'+itemBloc+'"]').addClass('active_bloc')
	})

	$(".modal-update-bloc").on('click', '.closed', function(){
		close_modal("modal-update-bloc")
	})

	$(document).on('click', '.not_on_modal .defaultSection', function(){
		let sectionData = $(this).attr('data-section');
		if(sectionData === "sectionOne"){
			$('#trumbowyg-demo').append(sectionOneChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			//$('#trumbowyg-demo').addClass('column-direction')
		}else if(sectionData === "sectionTwo"){
			$('#trumbowyg-demo').append(sectionTwoChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			//$('#trumbowyg-demo').removeClass('column-direction')
		}else if(sectionData === "sectionThree"){
			$('#trumbowyg-demo').append(sectionThreeChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			//$('#trumbowyg-demo').removeClass('column-direction')
		}else if(sectionData === "sectionFour"){
			$('#trumbowyg-demo').append(sectionFourChange)
			$('#trumbowyg-demo').attr('contenteditable', false)
			//$('#trumbowyg-demo').removeClass('column-direction')
		}else{
			$(document).find('.not_on_modal').find('.nbre_col').removeClass('is_hidden')
			//$('#trumbowyg-demo').removeClass('column-direction')
		}
		getBloc();
	})

	$(document).on('change', '.not_on_modal .nbre_col', function(){
		let nbre_col = $(this).val();
		let html = []
		for(let i = 0; i < nbre_col; i++){
			html.push('<div class="col-33 flex border-left-dashed column-direction" contenteditable="true"></div>')
		}
		sectionFiveChange = '<div class="section-body border-dashed min-height-150" data-section="5" data-bloc="">'+html+'</div>'
		$('#trumbowyg-demo').append(sectionFiveChange)
		$('#trumbowyg-demo').attr('contenteditable', false)
		$(this).addClass('is_hidden')
		$(this).val('')
	})

	let sectionDataOnModal = 0

	$(".modal-update-bloc").on('click', '.on_modal .defaultSection', function(){
		sectionDataOnModal = $(this).attr('data-section');
		$(this).siblings().removeClass('active_bloc');
		$(this).addClass('active_bloc')
		if(sectionDataOnModal == '5'){
			$(this).find('.nbre_col').removeClass('is_hidden')
		}
	})

	$(".modal-update-bloc").on('change', '.on_modal .nbre_col', function(){
		let nbre_col = $(this).val();
		sectionFive = []
		for(let i = 0; i < nbre_col; i++){
			sectionFive.push('<div class="col-33 flex border-left-dashed column-direction" contenteditable="true"></div>')
		}
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
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').addClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else if(sectionDataOnModal == "2"){
			console.log("voila",$(document).find('.section-body[data-bloc="'+dataBloc+'"]'))
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionTwo)
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else if(sectionDataOnModal == "3"){
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionThree)
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else if(sectionDataOnModal == "4"){
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionFour)
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}else{
			$(document).find('.nbre_col').val("")
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').html(sectionFive)
			$(document).find('.section-body[data-bloc="'+dataBloc+'"]').removeClass("column-direction")
			$(document).find('.item-bloc[data-bloc="'+dataBloc+'"]').attr('data-section', sectionDataOnModal)
		}
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
		$(document).find('.preview-page').find('.section-body').attr('contenteditable', false)
		$(document).find('.preview-page').find('.section-body').removeClass('min-height-150')
	})

	$(document).on('click', '.close-preview', function(){
		$(document).find('.preview-page').html("")
		$(document).find('.container').removeClass('is_hidden')
		$(document).find('.close-preview').addClass('is_hidden')
		$(document).find('.trumbowyg-editor-visible').append(pageHtml)
		$(document).find('.trumbowyg-editor-visible').find('.section-body').attr('contenteditable', true)
		$(document).find('.trumbowyg-editor-visible').find('.section-body').addClass('min-height-150')
	})

	$(document).on('click', '.trumbowyg-insertImage-button ', function(){
		launch_modal("modal-upload-file")
	})

	$(".modal-upload-file").on('click', '.closed', function(){
		close_modal("modal-upload-file")
	})

	$(".modal-upload-file").on('click', '.local-storage', function(){
		console.log('ao tsar', $(this).siblings('.input_file'))
		$(this).siblings('.input_file').trigger('click')
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
		let html = '<span class="item-bloc" data-bloc="'+(i+1)+'" data-section="'+sectionData+'">Bloc '+(i+1)+'</span>'
		$(document).find('.bloc-content').append(html)
	})
}