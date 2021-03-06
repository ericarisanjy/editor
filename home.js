 
$(document).ready(function(){
	
    $(document).on('click', '.copy-bloc-btn', function(){
    	let clone = $(this).closest('.section-container').clone()
    	clone.insertAfter($(document).find('.section-container:last'))
    })
    
    $(".modal-edit-bloc").on('click', '.closed', function(){
		$(".modal-edit-bloc").find('.dropdown-alignment').addClass('is_hidden')
    	close_modal('modal-edit-bloc')
    })

    let backBlocChange = false
	let textBlocChange = false
	$(".modal-edit-bloc").on('click', '.text-color-bloc', function(){
		textBlocChange = true
	})
	$(".modal-edit-bloc").on('click', '.back-color-bloc', function(){
		backBlocChange = true
	})

    $(".modal-edit-bloc").on('click', '.btn-valid', function(){
		$(".modal-edit-bloc").find('.dropdown-alignment').addClass('is_hidden')
    	close_modal('modal-edit-bloc')
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
		let align = $('.modal-edit-bloc').find('.input-align').attr('data-item')
		let alignValue = $('.modal-edit-bloc').find('.input-align').val()
		let alignHorizontal = $('.modal-edit-bloc').find('.input-align-horizontal').attr('data-item')
		let alignHorizontalValue = $('.modal-edit-bloc').find('.input-align-horizontal').val()

		let data = {
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
			align,
			alignValue,
			alignHorizontal,
			alignHorizontalValue,
			borderType: borderType === ""?"":borderType,
			borderColor: borderColor === ""?0:borderColor,
			borderHeight: borderHeight === ""?0:borderHeight,
		}

		$(selecteur).attr('data-bigData', JSON.stringify(data))
		selecteur.closest('.content-btn-act-on').siblings('.section-item').addClass(classe)
		selecteur.closest('.content-btn-act-on').siblings('.section-item').attr('id', id)
		let blocStyle = ["color: "+data.textColor+"; background: "+data.backColor+"; margin: "+data.margeUp+"px "+data.margeRight+"px "+data.margeDown+"px "+data.margeLeft+"px;padding: "+data.paddingUp+"px "+data.paddingRight+"px "+data.paddingDown+"px "+data.paddingLeft+"px"]
		if(data.borderHeight > 0 && data.borderType !== "Sans Bordure"){
			blocStyle.push("border:"+data.borderHeight+"px "+data.borderColor+" "+data.borderType+" !important;")
		}
		selecteur.closest('.content-btn-act-on').siblings('.section-item').attr('style', blocStyle.join(";"))
		selecteur.closest(".content-sections").find('.paragraph-container').attr('style', "text-align:"+data.align+";align-items:"+data.alignHorizontal)
		selecteur.closest(".content-sections").find('.img-inserted-container').attr('style', "justify-content:"+data.align+";align-items:"+data.alignHorizontal)
	})

	
	$(document).on("click", '.edit-btn', function(){
		launch_modal("modal-edit-section")
		$("body,html").animate(
		{
			scrollTop: $('.modal-edit-section').offset().top
		},800);
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


		$('.modal-edit-section').find('.text-color-section').val(textColor?textColor:"#000000")
		$('.modal-edit-section').find('.back-color-section').val(backColor?backColor:"#000000")
		$('.modal-edit-section').find('.marge-haut-section').val(margeUp?margeUp:"")
		$('.modal-edit-section').find('.marge-bas-section').val(margeDown?margeDown:"")
		$('.modal-edit-section').find('.marge-droite-section').val(margeRight?margeRight:"")
		$('.modal-edit-section').find('.marge-gauche-section').val(margeLeft?margeLeft:"")
		$('.modal-edit-section').find('.padding-haut-section').val(paddingUp?paddingUp:"")
		$('.modal-edit-section').find('.padding-bas-section').val(paddingDown?paddingDown:"")
		$('.modal-edit-section').find('.padding-droite-section').val(paddingRight?paddingRight:"")
		$('.modal-edit-section').find('.padding-gauche-section').val(paddingLeft?paddingLeft:"")
		$('.modal-edit-section').find('.input-class-section').val(classe?classe:"")
		$('.modal-edit-section').find('.input-id-section').val(id?id:"")
		$('.modal-edit-section').find('.borderInput-section').val(borderType?borderType:"")
		$('.modal-edit-section').find('.border-color-section').val(borderColor?borderColor:"")
		$('.modal-edit-section').find('.border-height-section').val(borderHeight?borderHeight:"")
	})
	  
	//Create
	$(document).on("click", '.not_on_modal .defaultSection', function(){
		let section = $(this).attr('data-section')
          let sectionType = $(this).attr('data-section')
          if(sectionType === "sectionOne"){
          	$(".container-create").find('.page-container').append(sectionParent)
          	$(".container-create").find('.section-container:last').append(section100)
			$(".container-create").find('.section-container:last').attr('data-section', section)
          }else if(sectionType === "sectionTwo"){
          	$(".container-create").find('.page-container').append(sectionParent)
          	for(var i = 0; i < 2; i++){
          		$(".container-create").find('.section-container:last').append(section100)
          	}
			$(".container-create").find('.section-container:last').attr('data-section', section)
          }else if(sectionType === "sectionThree"){
          	$(".container-create").find('.page-container').append(sectionParent)
          	$(".container-create").find('.section-container:last').append(section100)
          	$(".container-create").find('.section-container:last').append(section35)
			$(".container-create").find('.section-container:last').attr('data-section', section)
          }else if(sectionType === "sectionFour"){
          	$(".container-create").find('.page-container').append(sectionParent)
          	$(".container-create").find('.section-container:last').append(section35)
          	$(".container-create").find('.section-container:last').append(section100)
			$(".container-create").find('.section-container:last').attr('data-section', section)
          }else{
          	$(".container-create").find('.not_on_modal').find('.content_nbre_col').removeClass('is_hidden')
          }
	})

	// Update
	$(document).on("click", '.not_on_modal .defaultSection', function(){
		let section = $(this).attr('data-section')
          let sectionType = $(this).attr('data-section')
		  $(".container-update").find('.not_on_modal').find('.content_nbre_col').addClass('is_hidden')
          if(sectionType === "sectionOne"){
          	$(".container-update").find('.page-container').append(sectionParent)
          	$(".container-update").find('.section-container:last').append(section100)
			$(".container-update").find('.section-container:last').attr('data-section', section)
          }else if(sectionType === "sectionTwo"){
          	$(".container-update").find('.page-container').append(sectionParent)
          	for(var i = 0; i < 2; i++){
          		$(".container-update").find('.section-container:last').append(section100)
          	}
			$(".container-update").find('.section-container:last').attr('data-section', section)
          }else if(sectionType === "sectionThree"){
          	$(".container-update").find('.page-container').append(sectionParent)
          	$(".container-update").find('.section-container:last').append(section100)
          	$(".container-update").find('.section-container:last').append(section35)
			$(".container-update").find('.section-container:last').attr('data-section', section)
          }else if(sectionType === "sectionFour"){
          	$(".container-update").find('.page-container').append(sectionParent)
          	$(".container-update").find('.section-container:last').append(section35)
          	$(".container-update").find('.section-container:last').append(section100)
			$(".container-update").find('.section-container:last').attr('data-section', section)
          }else{
          	$(".container-update").find('.not_on_modal').find('.content_nbre_col').removeClass('is_hidden')
          }
	})

	$(document).on('click', '.unit-img', function(){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
		imgSelected = $(this).find('img').attr('src')
		$(document).find('.image-display').attr('src', imgSelected)
	})


	$(document).on('click', '.not_on_modal .check_nbre_col', function(e){
		let nbre_col = $(this).siblings('.nbre_col').val();
		if(nbre_col === "1"){
			$(".container-create").find('.page-container').append(sectionParent)
			$(".container-create").find('.section-container:last').append(section100)
			//$(".container-create").find('.section-container:last').attr('data-section', section)  
		}else if(nbre_col === "2"){
			$(".container-create").find('.page-container').append(sectionParent)
			for(var i = 0; i < 2; i++){
				$(".container-create").find('.section-container:last').append(section100)
			}
		}else{
			$(".container-create").find('.page-container').append(sectionParent)
			for(var i = 0; i < nbre_col; i++){
				$(".container-create").find('.section-container:last').append(section100)
			}
		}
		$(this).closest('.content_nbre_col').addClass('is_hidden')
	})

	$('.page-container').dad();
	$('.section-parent').dad();
	
	$(".modal-edit-section").on("click", '.closed', function(){
		close_modal('modal-edit-section')
	})
	$(".modal-add-text").on("click", '.closed', function(){
		close_modal('modal-add-text')
	})
	$(".modal-add-text").on("click", '.btn-delete', function(){
		selecteur.closest('.paragraph-container').remove()
		close_modal('modal-add-text')
	})
	$(".modal-add-text").on("click", '.btn-valid', function(){
		let result = $('.editor').val()
		let finallyValue = ""
		if(createIsTrue){
			// if(selecteur.closest('.section-header').siblings('.section-item').find('.paragraph-container').length != 0 || selecteur.closest('.content-btn-act-on').siblings('.section-item').find('.paragraph-container').length != 0){
			// 	finallyValue = result
			// 	if(selecteur.closest('.section-header').siblings('.section-item').length != 0){
			// 		selecteur.closest('.section-header').siblings('.section-item').find('.paragraph-container').append(finallyValue)
			// 	}else{
			// 		selecteur.closest('.content-btn-act-on').siblings('.section-item').find('.paragraph-container').append(finallyValue)
			// 	}
			// }else{
				finallyValue = '<div class="paragraph-container">'+result+'<i class="fa fa-pencil update-text-btn" aria-hidden="true"></i></div>'
				if(selecteur.closest('.section-header').siblings('.section-item').length != 0){
					selecteur.closest('.section-header').siblings('.section-item').append(finallyValue)
				}else{
					console.log('iicicicic')
					selecteur.closest('.content-btn-act-on').siblings('.section-item').append(finallyValue)
				}
			// }
		}else{
			finallyValue = result
			let btn = '<i class="fa fa-pencil update-text-btn" aria-hidden="true"></i>'
			selecteur.closest('.paragraph-container').html(finallyValue+btn)
		}
		
		
		close_modal('modal-add-text')
	})

	$('.modal-edit-section').on('click', '.borderInput-section', function(){
		$(this).siblings('.content-dropdown').toggleClass('is_hidden')
	})
	$('.modal-edit-bloc').on('click', '.borderInput-bloc', function(){
		$(this).siblings('.content-dropdown').toggleClass('is_hidden')
	})

	
	$('.modal-edit-section').on('click', '.bordure-drop-item', function(){
		dropItem = $(this).text()
		$(this).parent().addClass('is_hidden')
		$(".modal-edit-section").find('.borderInput-section').val(dropItem)
	})

	$('.modal-edit-section').on('click', '.align-drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align').val(data)
		$(this).closest('.content-input-setting').find('.input-align').attr('data-item', dataItem)
		$(this).closest('.content-dropdown').toggleClass('is_hidden')
	})

	$('.modal-edit-bloc').on('click', '.align-horizontal-drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align-horizontal').val(data)
		$(this).closest('.content-input-setting').find('.input-align-horizontal').attr('data-item', dataItem)
		$(this).closest('.content-dropdown').toggleClass('is_hidden')
	})

	$('.modal-edit-bloc').on('click', '.bordure-drop-item', function(){
		dropItem = $(this).text()
		$(this).parent().addClass('is_hidden')
		$(".modal-edit-bloc").find('.borderInput-bloc').val(dropItem)
	})

	let data = {
		textColor: "",
		backColor: "",
		margeUp: "",
		margeDown: "",
		margeRight: "",
		margeLeft: "",
		paddingUp: "",
		paddingDown: "",
		paddingRight: "",
		paddingLeft: "",
		classe: "",
		id: "",
		bloc: "",
		borderType: "",
		borderColor: "",
		borderHeight: ""
	}
	$('.edit-btn').attr('data-bigData', JSON.stringify(data))

	$(document).on('click', '.edit-btn-img', function(e){
		imageSelector = $(this).parent()
		imageId = $(this).parent().attr('data-imageid')
		let imgStyle = []
		if(imageSelector.attr('data-imgStyle')){
			imgStyle = JSON.parse($(imageSelector).attr('data-imgStyle'))
		}
		$('.modal-edit-img').find('.input-title').val(imgStyle.title)
		$('.modal-edit-img').find('.input-alt').val(imgStyle.alt)
		$('.modal-edit-img').find('.input-width').val(imgStyle.width)
		$('.modal-edit-img').find('.input-height').val(imgStyle.height)
		$('.modal-edit-img').find('.input-url').val(imgStyle.url)
		$('.modal-edit-img').find('.input-align').val(imgStyle.alignValue)
		$('.modal-edit-img').find('.input-align').attr('data-item', imgStyle.align)
		launch_modal('modal-edit-img')
		
		$(document).find('.image-display').removeAttr("src")
		$(document).find('.input-width').val('')
		$(document).find('.input-height').val('')
		$(".modal-edit-img").find('.input-title').val(imgStyle.title)
		$(".modal-edit-img").find('.input-alt').val(imgStyle.alt)
		$(".modal-edit-img").find('.input-width').val(imgStyle.width)
		$(".modal-edit-img").find('.input-height').val(imgStyle.height)
		$(".modal-edit-img").find('.input-align').val(imgStyle.alignValue)
		$(".modal-edit-img").find('.input-align').attr('data-item',imgStyle.align)
		$(".modal-edit-img").find('.check-link').attr('checked',imgStyle.link)
		$(".modal-edit-img").find('.check-link-target').attr('checked',imgStyle.linkTarget)
		$(".modal-edit-img").find('.input-link').val(imgStyle.linkValue)
		if(imgStyle.link){
			$(".modal-edit-img").find('.input-link').removeClass('is_hidden')
		}
		imgLoaded = removeDuplicates(imgLoaded)
		$(".modal-edit-img").find('.content-img').html('')
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
						$(".modal-edit-img").find('.content-img').prepend(html)
					}
				}else{
					$(".modal-edit-img").find('.media-storage').addClass('grised')
				}
				},
				error: function(error){
					console.log(error)
					toastr.warning('Une erreur est survenue lors de la suppression')
				}
		});
		$("body,html").animate(
		{
			scrollTop: $('.modal-edit-img').find('.modal-content').offset().top
		},800);
	})

	$('.modal-edit-img').on('click', '.closed', function(){
		close_modal('modal-edit-img')
	})

	$('.modal-edit-img').on('click', '.btn-valid', function(){
		let width = $(".modal-edit-img").find('.width-image').val()
		let height = $(".modal-edit-img").find('.height-image').val()
		imageSelector.closest('.content-insert-img').attr('style',"width:"+width+"px;height:"+height+"px")
		close_modal('modal-edit-img')
	})

	let htmlToPreview = ""

	$(document).on('click', '.preview-link', function(){
		// $(document).find('.section-parent').each(function(){
		// 	$(document).find('.preview-page').append($(this))
		// 	htmlToPreview.push($(this))
		// })
		htmlToPreview = $(document).find('.page-container').html()
		$(document).find('.preview-page').html(htmlToPreview)
		$(document).find('.preview-page').find('.sectionOne').remove()
		$(document).find('.preview-page').find('.section-header').remove()
		$(document).find('.preview-page').find('.content-btn-act').remove()
		$(document).find('.preview-page').find('.section-parent').removeClass('border-dashed')
		$(document).find('.preview-page').find('.section-child').find('.section-item').removeClass('border-dashed-blue')
		$(document).find('.preview-page').find('.section-child').find('.content-btn-act-on').remove()
		$(document).find('.preview-page').find('.section-child').find('.content-btn-move').remove()
		$(document).find('.body-container').addClass('is_hidden')
		$(document).find('.content-btn-register').addClass('is_hidden')
		$(document).find('.bloc-container').addClass('is_hidden')
		$(document).find('.close-preview').removeClass('is_hidden')
		$(document).find('.content-three-dots').addClass('is_hidden')
		$(document).find('.edit-btn-img').addClass('is_hidden')

	})
	$(document).on('click', '.close-preview', function(){
		$(document).find('.preview-page').html("")
		$(document).find('.body-container').removeClass('is_hidden')
		$(document).find('.content-btn-register').removeClass('is_hidden')
		$(document).find('.bloc-container').removeClass('is_hidden')
		$(document).find('.content-three-dots').removeClass('is_hidden')
		$(document).find('.edit-btn-img').removeClass('is_hidden')
		$(this).addClass('is_hidden')
		htmlToPreview.forEach(function(el){
			$(document).find('.content-sections').append(el)
		})
	})
	$(document).on('click', '.btn-create', function(){
		$(document).find('.create-page-item').removeClass('is_hidden')
		$(document).find('.update-page').addClass('is_hidden')
		let html = '<div class="section-container" data-section="sectionOne">\
			<div class="section sectionOne">\
			<div class="section-side">\
				<i class="fa fa-pencil-square-o edit-section-btn" aria-hidden="true"></i>\
				<i class="fa fa-trash delete-section-btn" aria-hidden="true"></i>\
				<i class="fa fa-files-o copy-bloc-btn" aria-hidden="true"></i>\
			</div>\
			</div>\
			<div class="content-sections">\
			<div class="section-header">\
				<span class="add-text add-section-text">T</span>\
				<i class="fa fa-picture-o add-image-section" aria-hidden="true"></i>\
			</div>\
			<div class="section-parent section-item border-dashed min-height-150"  data-section="1">\
			</div>\
			<div class="content-btn-act is_hidden">\
				<div class="add-bloc-btn">\
				<i class="fa fa-th" aria-hidden="true"></i>\
				</div>\
				<div class="edit-btn">\
				<i class="fa fa-pencil edit-property-section" aria-hidden="true"></i>\
				</div>\
			</div>\
			</div>\
		</div><style class="style"></style>'
		$(document).find('.container-create').find('.page-container').html(html)
	})
	$(".container-create").on('click', '.btn-register', function(){
		let title = $(document).find(".container-create-input").find('.pageName').val()
		let description = $(document).find(".container-create-input").find('.pagedescription').val()
		let pageUrl = $(document).find(".container-create-input").find('.pageUrl').val()
		if(title !== "" && description !== ""){
			htmlToPreview = $(document).find(".container-create").find('.page-container').html()
			let content = htmlToPreview
			$(document).find(".container-create").find('.sectionOne').addClass('is_hidden')
			$(document).find(".container-create").find('.section-header').addClass('is_hidden')
			$(document).find(".container-create").find('.content-btn-act').addClass('is_hidden')
			$(document).find(".container-create").find('.section-parent').removeClass('border-dashed')
			$(document).find(".container-create").find('.content-three-dots').addClass('is_hidden')
			$(document).find(".container-create").find('.section-child').find('.section-item').removeClass('border-dashed-blue')
			$(document).find(".container-create").find('.section-child').find('.content-btn-act-on').addClass('is_hidden')
			$(document).find(".container-create").find('.section-child').find('.content-btn-move').addClass('is_hidden')
			$(document).find(".container-create").find('.edit-btn-img').addClass('is_hidden')
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				type: "POST",
				url: 'function.php',
				dataType: 'json',
				data: {title: title, description: description, content: content, pageUrl: pageUrl, cssFileArray: JSON.stringify(cssFileContent)},
				success: function(responses){
					tableResponse(responses)
					$(document).find('.create-page-item').addClass('is_hidden')
					toastr.success('Page enregistrer avec success')
				 },
				   error: function(error, res){
					   console.log(error)
					   console.log(res)
					toastr.warning('Une erreur est survenue lors de l\'enregistrement')
				 }
			});
		}else{
			toastr.warning('Veuillez saisir la titre et la description de la page avant d\'enregistrer')
		}
		return false
	})
	$('.container-create-input').on('change', '.pageName', function(){
		let pageName = $(this).val()
		let pageUrl = pageName.replace(/ /g, '_');
		let url = window.location.href
		urlSplit = url.split('home')
		$('.container-create-input').find('.pageUrl').val(urlSplit[0]+"output.php"+"?pageName="+pageUrl)
	})
	$('.container-update-input').on('change', '.pageName', function(){
		let pageName = $(this).val()
		let pageUrl = pageName.replace(/ /g, '_');
		let url = window.location.href
		urlSplit = url.split('home')
		$('.container-update-input').find('.pageUrl').val(urlSplit[0]+"output.php"+"?pageName="+pageUrl)
	})
	$(".container-update").on('click', '.btn-register', function(){
		let title = $(document).find(".container-update-input").find('.pageName').val()
		let description = $(document).find(".container-update-input").find('.pagedescription').val()
		let content = htmlToPreview
		let pageId = $(this).attr('data-pageid')
		let pageUrl = $(document).find(".container-update-input").find('.pageUrl').val()
		if(title !== "" && description !== ""){
			htmlToPreview = $(document).find(".container-update").find('.page-container').html()
			console.log(htmlToPreview)
			$(document).find(".container-update").find('.sectionOne').addClass('is_hidden')
			$(document).find(".container-update").find('.section-header').addClass('is_hidden')
			$(document).find(".container-update").find('.content-btn-act').addClass('is_hidden')
			$(document).find(".container-update").find('.section-parent').removeClass('border-dashed')
			$(document).find(".container-update").find('.content-three-dots').addClass('is_hidden')
			$(document).find(".container-update").find('.section-child').find('.section-item').removeClass('border-dashed-blue')
			$(document).find(".container-update").find('.section-child').find('.content-btn-act-on').addClass('is_hidden')
			$(document).find(".container-update").find('.section-child').find('.content-btn-move').addClass('is_hidden')
			$(document).find(".container-update").find('.edit-btn-img').addClass('is_hidden')
			
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				type: "POST",
				url: 'function.php',
				dataType: 'json',
				data: {idPage: pageId, title: title, description: description, content: htmlToPreview, pageUrl: pageUrl, cssFileArray: JSON.stringify(cssFileContent)},
				success: function(responses){
					tableResponse(responses)
					$(document).find('.update-page').addClass('is_hidden')
					toastr.success('Page enregistrer avec success')
				},
				error: function(error){
					toastr.warning('Une erreur est survenue lors de l\'enregistrement')
				}
			});
		}else{
			toastr.warning('Veuillez saisir la titre et la description de la page avant d\'enregistrer')
		}
		return false
	})
	$('.container-page-list').on('click', '.btn-delete', function(){
		let pageId = $(this).attr('data-pageid')
		$.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
		$.ajax({
            type: "POST",
            url: 'function.php',
			dataType: 'json',
            data: {pageId: pageId},
            success: function(responses){
				tableResponse(responses)
            	toastr.success('Page supprimer avec success')
         	},
           	error: function(error){
             	toastr.success('Une erreur est survenue lors de la suppression')
         	}
        });
		return false
	})

	$('.container-page-list').on('click', '.btn-valid', function(){
		let pageId = $(this).attr('data-pageid')
		$.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
		$.ajax({
            type: "GET",
			dataType: 'json',
            url: 'getFunction.php',
            data: {pageId: pageId},
           	success: function(responses){
				$(document).find('.update-page').removeClass('is_hidden')
				$(document).find('.create-page-item').addClass('is_hidden')
				$(document).find('.container-update-input').find('.pageName').val(responses[0].title)
				$(document).find('.container-update-input').find('.pagedescription').val(responses[0].description)
				cssFileContent = JSON.parse(responses[0].cssContent)
				$(".container-update-input").find(".item-content").each(function(){
					if(cssFileContent[$(this).find('.input-check-page').val()]){
						$(this).find('.input-check-page').prop('checked', true)
					}
				})
				$(document).find('.container-update').find('.btn-register').attr('data-pageid', responses[0].id)
				let content = responses[0].content
				content = content.replace('"{', "'{")
				content = content.replace('}"', "}'")
                $(document).find('.container-update').find('.page-container').html(content)
				$(document).find('.container-update-input').find('.pageUrl').val(responses[0].url)
				$(document).find(".container-update").find('.sectionOne').removeClass('is_hidden')
				$(document).find(".container-update").find('.section-header').removeClass('is_hidden')
				$(document).find(".container-update").find('.content-btn-act').removeClass('is_hidden')
				$(document).find(".container-update").find('.section-parent').addClass('border-dashed')
				$(document).find(".container-update").find('.content-three-dots').addClass('is_hidden')
				$(document).find(".container-update").find('.section-child').find('.section-item').addClass('border-dashed-blue')
				$(document).find(".container-update").find('.section-child').find('.content-btn-act-on').removeClass('is_hidden')
				$(document).find(".container-update").find('.section-child').find('.content-btn-move').removeClass('is_hidden')
            },
            error: function(error){
                toastr.success('Une erreur est survenue lors de l\'enregistrement')
            }
        });
		return false
	})

	$(document).on('click', '.btn-create-css', function(){
		$(document).find('.content-create-css').removeClass('is_hidden')
		$(document).find('.container-page-list').addClass('is_hidden')
		$(document).find('.create-page-container').addClass('is_hidden')
		$(document).find('.create-page-container').addClass('is_hidden')
		$(document).find('.container').addClass('is_hidden')
	})

	$(document).on('click', '.input-drop', function(){
		$(this).siblings('.drop-container').toggleClass('is_hidden')
	})

	$(document).on('click', '.input-check', function(){
		$(document).find('.input-check').prop('checked', false)
		$(this).prop('checked', true)
		cssFileId = $(this).val()
	})

	$(document).on('click', '.input-check-page', function(){
		let cssFilePageContent = $(this).attr('data-content')
		let cssFilePageId = $(this).val()
		$(document).find('.style').html("")
		if($(this).prop('checked')){
			cssFileContent[cssFilePageId] = cssFilePageContent
		}else{
			delete cssFileContent[cssFilePageId]
		}
		for(let i in cssFileContent){
			cssFileContent[i] = cssFileContent[i].replace(/\s{2,10}/g, '');
			cssFileContent[i] = cssFileContent[i].replace(/[\n\r]+/g, '');
		}
		console.log(cssFileContent)
		for(let i in cssFileContent){
			$(document).find('.style').append(cssFileContent[i])
		}
	})

	$(document).on('mouseleave', '.drop-container', function(){
		$(this).closest('.drop-container').addClass('is_hidden')
	})

	$(document).on('click', '.btn-return', function(){
		$(document).find('.content-create-css').addClass('is_hidden')
		$(document).find('.container-page-list').removeClass('is_hidden')
	})
	
})
