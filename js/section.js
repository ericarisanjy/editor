let textOnSection = []
$(document).ready(function(){

	$(document).on("click", '.add-section-text', function(){
		if(!$(this).hasClass('grised')){
			launch_modal("modal-add-text")
			$("body,html").animate(
				{
					scrollTop: $('.modal-add-text').offset().top
				},800);
			setTimeout(()=>{
				$("#cke_17").addClass('is_hidden')
				$("#cke_25").addClass('is_hidden')
				$("#cke_38").addClass('is_hidden')
				$("#cke_33").addClass('is_hidden')
			},100)
			selecteur = $(this)
			createIsTrue = true
			let data = $(this).closest('.section-header').siblings('.section-item').find('.paragraph-container').html()
			$('.editor').val("")
		}
	})

	$(document).on("click", '.update-text-btn', function(){
		if(!$(this).hasClass('grised')){
			launch_modal("modal-add-text")
			$("body,html").animate(
				{
					scrollTop: $('.modal-add-text').offset().top
				},800);
			setTimeout(()=>{
				$("#cke_17").addClass('is_hidden')
				$("#cke_25").addClass('is_hidden')
				$("#cke_38").addClass('is_hidden')
				$("#cke_33").addClass('is_hidden')
			},100)
			selecteur = $(this)
			createIsTrue = false
			let data = $(this).closest('.paragraph-container').html()
			$('.editor').val(data)
		}
	})

	$(document).on('click', '.add-image-section', function(){
    	if(!$(this).hasClass('grised')){
    		launch_modal('modal-upload-file')
			$(".modal-upload-file").find('.content-img').html('')
			$(".modal-upload-file").find('.image-display').removeAttr('src')
			$(".modal-upload-file").find('.input-width').val("")
			$(".modal-upload-file").find('.input-height').val("")
			let getImage = "getImage"
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				type: "POST",
				url: 'getFunction.php',
				dataType: 'json',
				data: {getImage: getImage},
				success: function(responses){
					if(responses.length){
						for(let value of responses){
							let html = '<div class="unit-img">\
								<img src="'+value.filename+'">\
							</div>'
							$(".modal-upload-file").find('.content-img').prepend(html)
						}
					}else{
						$(".modal-upload-file").find('.media-storage').addClass('grised')
					}
				 },
				   error: function(error){
					   console.log(error)
					 toastr.warning('Une erreur est survenue lors de la suppression')
				 }
			});
			$("body,html").animate(
				{
					scrollTop: $('.modal-upload-file').offset().top
				},800);
			imageSelector = $(this)
    	}
    })

	$(document).on('click', '.parameter-title', function(){
		selecteur = $(this).siblings('.img-setting')
		if(selecteur.hasClass('is_hidden')){
			selecteur.removeClass('is_hidden')
			if($(this).hasClass('fa')){
				$(this).addClass('fa-caret-down')
				$(this).removeClass('fa-caret-right')
			}else{
				$(this).siblings('.fa').addClass('fa-caret-down')
				$(this).siblings('.fa').removeClass('fa-caret-right')
			}
			$(this).siblings('.img-setting').find('.img-attribut').attr('style', 'height: 214px')
			$(this).siblings('.img-setting').find('.setting').attr('style', 'height: 214px')
		}else{
			selecteur.addClass('is_hidden')
			if($(this).hasClass('fa')){
				$(this).removeClass('fa-caret-down')
				$(this).addClass('fa-caret-right')
			}else{
				$(this).siblings('.fa').removeClass('fa-caret-down')
				$(this).siblings('.fa').addClass('fa-caret-right')
			}
			$(this).siblings('.img-setting').find('.img-attribut').attr('style', '')
			$(this).siblings('.img-setting').find('.setting').attr('style', '')
		}

	})

	// $(document).on('click', '.image-setting', function(){
	// 	selecteur = $(this).closest('.setting').find('.content-input')
	// 	if(selecteur.hasClass('is_hidden')){
	// 		selecteur.removeClass('is_hidden')
	// 		if($(this).hasClass('fa')){
	// 			$(this).addClass('fa-caret-down')
	// 			$(this).removeClass('fa-caret-right')
	// 		}else{
	// 			$(this).siblings('.fa').addClass('fa-caret-down')
	// 			$(this).siblings('.fa').removeClass('fa-caret-right')
	// 		}
	// 		$(this).closest('.setting').attr('style', 'height: 214px')
	// 	}else{
	// 		selecteur.addClass('is_hidden')
	// 		if($(this).hasClass('fa')){
	// 			$(this).removeClass('fa-caret-down')
	// 			$(this).addClass('fa-caret-right')
	// 		}else{
	// 			$(this).siblings('.fa').removeClass('fa-caret-down')
	// 			$(this).siblings('.fa').addClass('fa-caret-right')
	// 		}
	// 		$(this).closest('.setting').attr('style', '')
	// 	}

	// })

	$(document).on('click', '.media-storage', function(e){
		e.preventDefault();
		if(!$(this).hasClass('grised')){
			$(this).closest('.modal-body').find('.content-img').toggleClass('is_hidden')
		}
	})

    $(".modal-upload-file").on('click', '.closed', function(){
        close_modal('modal-upload-file')
	})

	$(document).on('click', '.check-link', function(){
		if($(this).is(':checked')){
			$('.input-link').removeClass('is_hidden')
		}else{
			$('.input-link').addClass('is_hidden')
		}
	})

	$(document).on('change', '.input-link', function(){
		$(this).addClass('is_hidden')
	})

	$(document).on('change', '.input-url', function(){
		let url = $(this).val()
		$(document).find('.image-display').attr('src', url)
	})

	let width = ""
	let height = ""

	$(document).on('keyup', '.input-width', function(){
		width = $(this).val()
		$(document).find('.image-display').attr('style', "width: "+width+"px;height: "+height+"px;")
	})

	$(document).on('keyup', '.input-height', function(){
		height = $(this).val()
		$(document).find('.image-display').attr('style', "width: "+width+"px;height: "+height+"px;")
	})

	$(".modal-upload-file").on('click', '.btn-valid', function(e){
		e.preventDefault()
				
		let isReady = false
		let title = $('.modal-upload-file').find('.input-title').val()
		let alt = $('.modal-upload-file').find('.input-alt').val()
		let width = $('.modal-upload-file').find('.input-width').val()
		let height = $('.modal-upload-file').find('.input-height').val()
		let url = $('.modal-upload-file').find('.input-url').val()
		let align = $('.modal-upload-file').find('.input-align').attr('data-item')
		let alignValue = $('.modal-upload-file').find('.input-align').val()
		let link = $('.modal-upload-file').find('.check-link').is(':checked')
		let linkTarget = $('.modal-upload-file').find('.check-link-target').is(':checked')
		let linkValue = $('.modal-upload-file').find('.input-link').val()
		let imgStyle = {
			align,
			width,
			height,
			title,
			alignValue,
			url,
			alt,
			link,
			linkTarget,
			linkValue
		}
		let html = ''
		if(url !== ""){
			let imageUrl = $('.modal-upload-file').find('.input-url').val()
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				type: "POST",
				url: 'upload.php',
				dataType: 'json',
				data: {imageUrl: imageUrl},
				success: function(responses){
					imageUrl = ""
					if(link){
						if(linkTarget){
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
						}
					}else{
						html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></div></div>'
					}
					imgLoaded.push(url)
					localStorage.setItem('ImgLoaded', JSON.stringify(imgLoaded))
					isReady = true
					if(isReady){
						imageSelector.closest(".section-header").siblings('.section-item').append(html)
						close_modal('modal-upload-file')
					}else{
						toastr.warning('Veuillez choisir une image avant de valider')
					}
				 },
				   error: function(error){
					   console.log(error)
					 toastr.success('Une erreur est survenue lors de la suppression')
				 }
			});
		}else{
			if(imgSelected !== ""){
				console.log('YUYUYUYUYUY-------', imgSelected)
				$.ajaxSetup({
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					}
				});
				$.ajax({
					type: "POST",
					url: 'upload.php',
					dataType: 'json',
					data: {imageUrl: imgSelected},
					success: function(responses){
						imgSelected = ""
						if(link){
							if(linkTarget){
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}else{
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></div></div>'
						}
						isReady = true
						if(isReady){
							imageSelector.closest(".section-header").siblings('.section-item').append(html)
							close_modal('modal-upload-file')
						}else{
							toastr.warning('Veuillez choisir une image avant de valider')
						}
					 },
					   error: function(error){
						 toastr.success('Une erreur est survenue lors de la suppression')
					 }
				});
			}else if(imgData !== ""){
				var form = $('.modal-upload-file').find('.modal-content')[0];
				let formData = new FormData(form)
				$.ajaxSetup({
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					}
				});
				$.ajax({
					type: "POST",
					url: 'upload.php',
					dataType: 'json',
					data: formData,
					processData: false,
					contentType: false,
					cache: false,
					timeout: 800000,
					success: function(responses){
						imgData = ""
						if(link){
							if(linkTarget){
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}else{
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imageId='+responses[responses.length - 1].id+' data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></div></div>'
						}
						isReady = true
						if(isReady){
							imageSelector.closest(".section-header").siblings('.section-item').append(html)
							close_modal('modal-upload-file')
						}else{
							toastr.warning('Veuillez choisir une image avant de valider')
						}
					 },
					   error: function(error){
						 toastr.success('Une erreur est survenue lors de la suppression')
					 }
				});
			}
		}
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
		$(this).siblings('.input_file').trigger('click')
		return false
	})

	$(".input_file").change(function () {
	    readURLLogo(this);
	});

	//Start Edit Section
	$(document).on('click', '.edit-section-btn', function(){
		let section = $(this).closest('.section-container').attr('data-section')
		textOnSection = []
		$(this).closest('.section-container').find('.content-sections').each(function(){
			textOnSection.push($(this).find('.section-parent').html())
		})
		sectionDataOnModal = ""
		launch_modal('modal-update-bloc')
		$("body,html").animate(
			{
				scrollTop: $('.modal-update-bloc').offset().top
			},800);
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
		let alignment = data.alignment


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
		$('.modal-update-bloc').find('.input-align').attr('data-item', alignment?alignment:"")
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

	$('.modal-update-bloc').on('click', '.content-input-setting', function(){
		$(this).find('.content-dropdown').toggleClass('is_hidden')
	})

	$('.modal-edit-section').on('click', '.content-input-setting', function(){
		$(this).find('.content-dropdown').toggleClass('is_hidden')
	})

	$('.modal-edit-bloc').on('click', '.content-input-setting', function(){
		$(this).find('.content-dropdown').toggleClass('is_hidden')
	})

	$('.modal-edit-bloc').on('click', '.drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align').val(data)
		$(this).closest('.content-input-setting').find('.input-align').attr('data-item', dataItem)
	})

	let nbre_col_on_modal = 3

	$(".modal-update-bloc").on('change', '.on_modal .nbre_col', function(){
		nbre_col_on_modal = $(this).val();
		$(this).addClass('is_hidden')
	})

	$(".modal-update-bloc").on('click', '.btn-valid', function(){
		if(sectionDataOnModal == "1"){
			$(selecteur).closest('.section-container').attr('data-section', "sectionOne")
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	$(selecteur).closest('.section-container').append(section100)
			 $(selecteur).closest('.section-container').find('.section-parent').html(textOnSection[0])
		 }else if(sectionDataOnModal == "2"){
			$(selecteur).closest('.section-container').attr('data-section', "sectionTwo")
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	for (var i = 0; i < 2; i++) {
		 		$(selecteur).closest('.section-container').append(section100)
				$(selecteur).closest('.section-container').find('.section-parent').html(textOnSection[i])
	 		}
		 }else if(sectionDataOnModal == "3"){
			$(selecteur).closest('.section-container').attr('data-section', "sectionThree")
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	$(selecteur).closest('.section-container').append(section100)
		 	$(selecteur).closest('.section-container').append(section35)
			$(selecteur).closest('.section-container').find('.content-sections').find('.section-parent').html(textOnSection[0])
			$(selecteur).closest('.section-container').find('.content-sections35').find('.section-parent').html(textOnSection[1])
		}else if(sectionDataOnModal == "4"){
			$(selecteur).closest('.section-container').attr('data-section', "sectionFour")
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	$(selecteur).closest('.section-container').append(section35)
		 	$(selecteur).closest('.section-container').append(section100)
			$(selecteur).closest('.section-container').find('.content-sections').find('.section-parent').html(textOnSection[1])
			$(selecteur).closest('.section-container').find('.content-sections35').find('.section-parent').html(textOnSection[0])
		 }else if(sectionDataOnModal == "5"){
			$(selecteur).closest('.section-container').attr('data-section', "sectionFive")
		 	$(selecteur).closest('.section-container').find('.content-sections').remove()
		 	for (var i = 0; i < nbre_col_on_modal; i++) {
		 		$(selecteur).closest('.section-container').append(section100)
				$(selecteur).closest('.section-container').find('.section-parent').html(textOnSection[i])
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
		let alignment = $('.modal-update-bloc').find('.input-align').attr('data-item')

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
			alignment: alignment
		}
		$(selecteur).attr('data-bigData', JSON.stringify(data))
		selecteur.closest('.section-container').find('.section-parent').addClass(classe)
		selecteur.closest('.section-container').find('.section-parent').attr('id', id)
		let blocStyle = ["color: "+data.textColor+"; background: "+data.backColor+"; margin: "+data.margeUp+"px "+data.margeRight+"px "+data.margeDown+"px "+data.margeLeft+"px;padding: "+data.paddingUp+"px "+data.paddingRight+"px "+data.paddingDown+"px "+data.paddingLeft+"px"]
		if(data.borderHeight > 0 && data.borderType !== "Sans Bordure"){
			blocStyle.push("border:"+data.borderHeight+"px "+data.borderColor+" "+data.borderType+" !important;")
		}
		selecteur.closest('.section-container').find('.section-parent').attr('style', blocStyle.join(";"))
		if(data.alignment !== ""){
			let dataAlignement = "center"
		
			if(data.alignment === "flex-start"){
				dataAlignement = "left"
			}else if(data.alignment === "flex-end"){
				dataAlignement = "right"
			}
			selecteur.closest(".section-container").find('.paragraph-container').attr('style', "text-align:"+dataAlignement)
			selecteur.closest(".section-container").find('.img-inserted-container').attr('style', "justify-content:"+data.alignment)
		}
		
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
		let alignment = $('.modal-edit-section').find('.input-align').attr('data-item')

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
			alignment: alignment
		}
		let sectionStyle = ["color: "+data.textColor+"; background: "+data.backColor+"; margin: "+data.margeUp+"px "+data.margeRight+"px "+data.margeDown+"px "+data.margeLeft+"px;padding: "+data.paddingUp+"px "+data.paddingRight+"px "+data.paddingDown+"px "+data.paddingLeft+"px"]
		if(data.borderHeight > 0 && data.borderType !== "Sans Bordure"){
			sectionStyle.push("border:"+data.borderHeight+"px "+data.borderColor+" "+data.borderType+";")
		}
		$(selecteur).attr('data-bigData', JSON.stringify(data))
		selecteur.closest('.content-btn-act').siblings('.section-item').addClass(classe)
		selecteur.closest('.content-btn-act').siblings('.section-item').attr('id', id)
		selecteur.closest('.content-btn-act').siblings('.section-item').attr('style', sectionStyle.join(';'))
		selecteur.closest('.content-sections').find('.paragraph-container').attr('style', "text-align:"+alignment)
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
	$(".modal-update-bloc").on('click', '.bordure-drop-item', function(){
		dropItemBloc = true
		let dropValue = $(this).text()
		$(this).closest('.title').find('.borderInput-bloc').val(dropValue)
		$(this).closest('.content-dropdown').addClass('is_hidden')
	})

	$(".modal-update-bloc").on('click', ".input-align", function(){
		$(this).siblings('.dropdown-alignment').toggleClass('is_hidden')
	})

	$('.modal-update-bloc').on('click', '.align-drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align').val(data)
		$(this).closest('.content-input-setting').find('.input-align').attr('data-item', dataItem)
		$(this).closest('.dropdown-alignment').toggleClass('is_hidden')
	})
	//End Edit Section

	//Start Delete Section
	$(document).on('click', '.delete-section-btn', function(){
		launch_modal('modal-confirm-delete')
		$("body,html").animate(
			{
				scrollTop: $('.modal-confirm-delete').offset().top
			},800);
		selecteur = $(this)
		//$(this).closest('.section-container').remove()
	})
	$('.modal-confirm-delete').on('click', '.btn-valid', function(){
		selecteur.closest('.section-container').remove()
		close_modal('modal-confirm-delete')
	})
	$('.modal-confirm-delete').on('click', '.btn-delete', function(){
		close_modal('modal-confirm-delete')
	})
	$('.modal-confirm-delete').on('click', '.closed', function(){
		close_modal('modal-confirm-delete')
	})
	//End Delete Section
})
