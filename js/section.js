$(document).ready(function(){

	$(document).on("click", '.add-section-text', function(){
		if(!$(this).hasClass('grised')){
			launch_modal("modal-add-text")
			setTimeout(()=>{
				$("#cke_17").addClass('is_hidden')
				$("#cke_25").addClass('is_hidden')
				$("#cke_38").addClass('is_hidden')
				$("#cke_33").addClass('is_hidden')
			},100)
			selecteur = $(this)
			let data = $(this).closest('.section-header').siblings('.section-item').find('.paragraph-container').html()
			$('.editor').val(data)
		}
	})

	$(document).on('click', '.add-image-section', function(){
    	if(!$(this).hasClass('grised')){
    		launch_modal('modal-upload-file')
    		selecteur = $(this)
    	}
    })

    $(".modal-upload-file").on('click', '.closed', function(){
        close_modal('modal-upload-file')
	})

	$(".modal-upload-file").on('click', '.btn-valid', function(){
		let title = $('.modal-upload-file').find('.input-title').val()
		let alt = $('.modal-upload-file').find('.input-alt').val()
		let width = $('.modal-upload-file').find('.input-width').val()
		let height = $('.modal-upload-file').find('.input-height').val()
		let url = $('.modal-upload-file').find('.input-url').val()
		let align = $('.modal-upload-file').find('.input-align').attr('data-item')
		let alignValue = $('.modal-upload-file').find('.input-align').val()
		let imgStyle = {
			align,
			width,
			height,
			title,
			alignValue,
			url,
			alt
		}
		let html = ''
		if(url !== ""){
			html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><img title="'+title+'" alt="'+alt+'" src="'+url+'" class="img-insert" /></div></div>'
		}else{
			html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><img title="'+title+'" alt="'+alt+'" src="'+imgData+'" class="img-insert" /></div></div>'
		}
		selecteur.closest(".section-header").siblings('.section-item').append(html)
		close_modal('modal-upload-file')
	})

	$('.modal-upload-file').on('click', '.content-input-setting', function(){
		$(this).find('.content-dropdown').toggleClass('is_hidden')
	})

	$('.modal-upload-file').on('click', '.drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align').val(data)
		$(this).closest('.content-input-setting').find('.input-align').attr('data-item', dataItem)
	})

	$(".modal-upload-file").on('click', '.local-storage', function(){
		console.log('ao tsar', $(this).siblings('.input_file'))
		$(this).siblings('.input_file').trigger('click')
	})

	$(".input_file").change(function () {
	    readURLLogo(this);
	});

	//Start Edit Section
	$(document).on('click', '.edit-section-btn', function(){
		let section = $(this).closest('.section-container').attr('data-section')
		sectionDataOnModal = ""
		launch_modal('modal-update-bloc')
		if(section === "sectionOne"){
			$('.modal-update-bloc').find('.defaultSection').removeClass('active_bloc')
			$('.modal-update-bloc').find('.defaultSection[data-section="1"]').addClass('active_bloc')
		}else if(section === "sectionTwo"){
			$('.modal-update-bloc').find('.defaultSection').removeClass('active_bloc')
			$('.modal-update-bloc').find('.defaultSection[data-section="2"]').addClass('active_bloc')
		}else if(section === "sectionThree"){
			$('.modal-update-bloc').find('.defaultSection').removeClass('active_bloc')
			$('.modal-update-bloc').find('.defaultSection[data-section="3"]').addClass('active_bloc')
		}else if(section === "sectionFour"){
			$('.modal-update-bloc').find('.defaultSection').removeClass('active_bloc')
			$('.modal-update-bloc').find('.defaultSection[data-section="4"]').addClass('active_bloc')
		}else {
			$('.modal-update-bloc').find('.defaultSection').removeClass('active_bloc')
			$('.modal-update-bloc').find('.defaultSection[data-section="5"]').addClass('active_bloc')
		}
		selecteur = $(this)
		let data = []
		if($(this).attr('data-bigData')){
			data = JSON.parse($(this).attr('data-bigData'))
		}
		let textColor = data.textColor
		let backColor = data.backColor
		let margeUp = data.margeUp
		let margeDown = data.margeDown
		let margeRight = data.margeRight
		let margeLeft = data.margeLeft
		let paddingUp = data.paddingUp
		let paddingDown = data.paddingDown
		let paddingRight = data.paddingRight
		let paddingLeft = data.paddingLeft
		let classe = data.classe
		let id = data.id
		let borderType = data.borderType
		let borderColor = data.borderColor
		let borderHeight = data.borderHeight


		$('.modal-update-bloc').find('.text-color-bloc').val(textColor?textColor:"#000")
		$('.modal-update-bloc').find('.back-color-bloc').val(backColor?backColor:"#000")
		$('.modal-update-bloc').find('.marge-haut-bloc').val(margeUp?margeUp:"")
		$('.modal-update-bloc').find('.marge-bas-bloc').val(margeDown?margeDown:"")
		$('.modal-update-bloc').find('.marge-droite-bloc').val(margeRight?margeRight:"")
		$('.modal-update-bloc').find('.marge-gauche-bloc').val(margeLeft?margeLeft:"")
		$('.modal-update-bloc').find('.padding-haut-bloc').val(paddingUp?paddingUp:"")
		$('.modal-update-bloc').find('.padding-bas-bloc').val(paddingDown?paddingDown:"")
		$('.modal-update-bloc').find('.padding-droite-bloc').val(paddingRight?paddingRight:"")
		$('.modal-update-bloc').find('.padding-gauche-bloc').val(paddingLeft?paddingLeft:"")
		$('.modal-update-bloc').find('.input-class-bloc').val(classe?classe:"")
		$('.modal-update-bloc').find('.input-id-bloc').val(id?id:"")
		$('.modal-update-bloc').find('.borderInput-bloc').val(borderType?borderType:"")
		$('.modal-update-bloc').find('.border-color-bloc').val(borderColor?borderColor:"")
		$('.modal-update-bloc').find('.border-height-bloc').val(borderHeight?borderHeight:"")
	})

	$(".modal-update-bloc").on('click', '.closed', function(){
		close_modal('modal-update-bloc')
	})

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

	let nbre_col_on_modal = 3

	$(".modal-update-bloc").on('change', '.on_modal .nbre_col', function(){
		nbre_col_on_modal = $(this).val();
		$(this).addClass('is_hidden')
	})

	$(".modal-update-bloc").on('click', '.btn-valid', function(){
		if(sectionDataOnModal == "1"){
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	$(selecteur).closest('.section-container').append(section100)
		 }else if(sectionDataOnModal == "2"){
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	for (var i = 0; i < 2; i++) {
		 		$(selecteur).closest('.section-container').append(section100)
	 		}
		 }else if(sectionDataOnModal == "3"){
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	$(selecteur).closest('.section-container').append(section100)
		 	$(selecteur).closest('.section-container').append(section35)
		}else if(sectionDataOnModal == "4"){
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	$(selecteur).closest('.section-container').append(section35)
		 	$(selecteur).closest('.section-container').append(section100)
		 }else if(sectionDataOnModal == "5"){
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	for (var i = 0; i < nbre_col_on_modal; i++) {
		 		$(selecteur).closest('.section-container').append(section100)
		 	}
		 }

		let textColor = $('.modal-update-bloc').find('.text-color-bloc').val()
		let backColor = $('.modal-update-bloc').find('.back-color-bloc').val()
		let margeUp = $('.modal-update-bloc').find('.marge-haut-bloc').val()
		let margeDown = $('.modal-update-bloc').find('.marge-bas-bloc').val()
		let margeRight = $('.modal-update-bloc').find('.marge-droite-bloc').val()
		let margeLeft = $('.modal-update-bloc').find('.marge-gauche-bloc').val()
		let paddingUp = $('.modal-update-bloc').find('.padding-haut-bloc').val()
		let paddingDown = $('.modal-update-bloc').find('.padding-bas-bloc').val()
		let paddingRight = $('.modal-update-bloc').find('.padding-droite-bloc').val()
		let paddingLeft = $('.modal-update-bloc').find('.padding-gauche-bloc').val()
		let classe = $('.modal-update-bloc').find('.input-class-bloc').val()
		let id = $('.modal-update-bloc').find('.input-id-bloc').val()
		let borderType = $('.modal-update-bloc').find('.borderInput-bloc').val()
		let borderColor = $('.modal-update-bloc').find('.border-color-bloc').val()
		let borderHeight = $('.modal-update-bloc').find('.border-height-bloc').val()

		let data = {
			textColor: textChangeSection?textColor:"inherit",
			backColor: backChangeSection? backColor:"inherit",
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
		$(selecteur).attr('data-bigData', JSON.stringify(data))
		selecteur.closest('.section-container').find('.section-parent').addClass(classe)
		selecteur.closest('.section-container').find('.section-parent').attr('id', id)
		let blocStyle = ["color: "+data.textColor+"; background: "+data.backColor+"; margin: "+data.margeUp+"px "+data.margeRight+"px "+data.margeDown+"px "+data.margeLeft+"px;padding: "+data.paddingUp+"px "+data.paddingRight+"px "+data.paddingDown+"px "+data.paddingLeft+"px"]
		if(data.borderHeight > 0 && data.borderType !== "Sans Bordure"){
			blocStyle.push("border:"+data.borderHeight+"px "+data.borderColor+" "+data.borderType+" !important;")
		}
		selecteur.closest('.section-container').find('.section-parent').attr('style', blocStyle.join(";"))

		close_modal('modal-update-bloc')
	})

	$(".modal-edit-section").on("click", '.btn-valid', function(){
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

		let data = {
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
			borderType: borderType === ""?"":borderType,
			borderColor: borderColor === ""?0:borderColor,
			borderHeight: borderHeight === ""?0:borderHeight,
		}
		let sectionStyle = ["color: "+data.textColor+"; background: "+data.backColor+"; margin: "+data.margeUp+"px "+data.margeRight+"px "+data.margeDown+"px "+data.margeLeft+"px;padding: "+data.paddingUp+"px "+data.paddingRight+"px "+data.paddingDown+"px "+data.paddingLeft+"px"]
		if(data.borderHeight > 0 && data.borderType !== "Sans Bordure"){
			sectionStyle.push("border:"+data.borderHeight+"px "+data.borderColor+" "+data.borderType+";")
		}
		$(selecteur).attr('data-bigData', JSON.stringify(data))
		selecteur.closest('.content-btn-act').siblings('.section-item').addClass(classe)
		selecteur.closest('.content-btn-act').siblings('.section-item').attr('id', id)
		selecteur.closest('.content-btn-act').siblings('.section-item').attr('style', sectionStyle.join(';'))

		close_modal('modal-edit-section')
	})

	let backChange = false
	let textChange = false
	let backChangeSection = false
	let textChangeSection = false
	$(".modal-update-bloc").on('click', '.text-color-bloc', function(){
		textChangeSection = true
	})

	$(".modal-update-bloc").on('click', '.back-color-bloc', function(){
		backChangeSection = true
	})

	$(".modal-edit-section").on('click', '.text-color-section', function(){
		textChange = true
	})

	$(".modal-edit-section").on('click', '.back-color-section', function(){
		backChange = true
	})

	$(".modal-update-bloc").on('click', '.borderInput-bloc', function(){
		$(this).siblings('.content-dropdown').toggleClass('is_hidden')
	})

	let dropItemBloc = false
	$(".modal-update-bloc").on('click', '.drop-item', function(){
		dropItemBloc = true
		let dropValue = $(this).text()
		$(this).closest('.title').find('.borderInput-bloc').val(dropValue)
		$(this).closest('.content-dropdown').addClass('is_hidden')
	})
	//End Edit Section

	//Start Delete Section
	$(document).on('click', '.delete-section-btn', function(){
		$(this).closest('.section-container').remove()
	})
	//End Delete Section
})