$(document).ready(function(){

	$(document).on('click', '.add-bloc-btn', function(){
		launch_modal('modal-add-bloc')
		$("body,html").animate(
			{
				scrollTop: $('.modal-edit-bloc').offset().top
			},800);
		selecteur = $(this)
	})

	$(".modal-add-bloc").on('click', '.closed', function(){
		close_modal("modal-add-bloc")
	})
	let col_number = 0;

	$(".modal-add-bloc").on('change', '.on_modal .nbre_col', function(){
		col_number = $(this).val();
		$(this).addClass('is_hidden')
	})

	$(".modal-add-bloc").on('click', '.btn-valid', function(){
		if (sectionDataOnModal == "1") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
		}else if (sectionDataOnModal == "2") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			for (var i = 0; i < 2; i++) {
				selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			}
		}else if (sectionDataOnModal == "3") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section35On)

		}else if (sectionDataOnModal == "4") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section35On)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)

		}else{
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			for (var i = 0; i < col_number; i++) {
				selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			}
			
		}
		close_modal("modal-add-bloc")
	})

	$(".modal-add-bloc").on('click', '.on_modal .defaultSection', function(){
		console.log("ivivivi");
		sectionDataOnModal = $(this).attr('data-section');
		$(this).siblings().removeClass('active_bloc');
		$(this).addClass('active_bloc')
		if(sectionDataOnModal == '5'){
			$(this).find('.nbre_col').removeClass('is_hidden')
		}else{
			$(".modal-update-bloc").find('.on_modal').find('.nbre_col').addClass('is_hidden')
		}
	})

	$(document).on('click', '.image-btn-on', function(){
    	launch_modal('modal-upload-file-two')
		$("body,html").animate(
			{
				scrollTop: $('.modal-upload-file-two').offset().top
			},800);
    	selecteur = $(this)
    })

	$(".modal-upload-file-two").on('click', '.closed', function(){
        close_modal('modal-upload-file-two')
	})

	$(".modal-upload-file-two").on('click', '.btn-valid', function(){
		let title = $('.modal-upload-file-two').find('.input-title').val()
		let alt = $('.modal-upload-file-two').find('.input-alt').val()
		let width = $('.modal-upload-file-two').find('.input-width').val()
		let height = $('.modal-upload-file-two').find('.input-height').val()
		let url = $('.modal-upload-file-two').find('.input-url').val()
		let align = $('.modal-upload-file-two').find('.input-align').attr('data-item')
		let alignValue = $('.modal-upload-file').find('.input-align').val()
		let imgStyle = {
			align,
			width,
			height,
			title,
			url,
			alt,
			alignValue
		}
		let html = ''
		if(url !== ""){
			html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><img title="'+title+'" alt="'+alt+'" src="'+url+'" class="img-insert" /></div></div>'
		}else{
			html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' style="width: '+width+'px; height: '+height+'px"><img title="'+title+'" alt="'+alt+'" src="'+imgData+'" class="img-insert" /></div></div>'
		}
		console.log('sqd', selecteur.closest('.section-child').find('.section-item'))
		selecteur.closest('.section-child').find('.section-item').append(html)
		close_modal('modal-upload-file-two')
	})

	$('.modal-upload-file-two').on('click', '.content-input-setting', function(){
		$(this).find('.content-dropdown').toggleClass('is_hidden')
	})

	$(".modal-upload-file-two").on('click', '.local-storage', function(){
		$(this).siblings('.input_file').trigger('click')
	})

	$('.modal-upload-file-two').on('click', '.drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align').val(data)
		$(this).closest('.content-input-setting').find('.input-align').attr('data-item', dataItem)
	})

	$('.modal-edit-img').on('click', '.content-input-setting', function(){
		$(this).find('.content-dropdown').toggleClass('is_hidden')
	})

	$('.modal-edit-img').on('click', '.btn-delete', function(){
		selecteur.closest('.img-inserted-container').remove()
		close_modal("modal-edit-img")
	})

	$(".modal-edit-img").on('click', '.local-storage', function(){
		$(this).siblings('.input_file').trigger('click')
	})

	$('.modal-edit-img').on('click', '.drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align').val(data)
		$(this).closest('.content-input-setting').find('.input-align').attr('data-item', dataItem)
	})

	$(".modal-edit-img").on('click', '.btn-valid', function(){
		let title = $('.modal-edit-img').find('.input-title').val()
		let alt = $('.modal-edit-img').find('.input-alt').val()
		let width = $('.modal-edit-img').find('.input-width').val()
		let height = $('.modal-edit-img').find('.input-height').val()
		let url = $('.modal-edit-img').find('.input-url').val()
		let alignValue = $('.modal-upload-file').find('.input-align').val()
		let align = $('.modal-edit-img').find('.input-align').attr('data-item')
		let imgStyle = {
			align,
			width,
			height,
			title,
			url,
			alt,
			alignValue
		}
		selecteur.closest('.img-inserted-container').attr('style', "justify-content: "+align)
		selecteur.attr('style', 'width: '+width+'px; height: '+height+'px')
		selecteur.find('img').attr('title', title)
		selecteur.find('img').attr('alt', alt)
		selecteur.attr('data-imgstyle', JSON.stringify(imgStyle))
		if(url !== ""){
			selecteur.find('img').attr('src', url)
		}else{
			selecteur.find('img').attr('src', imgData)
		}
		close_modal('modal-edit-img')
	})

	$(document).on('click', '.text-btn-on', function(){
    	launch_modal('modal-add-text')
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
		let data = $(this).closest('.content-btn-act-on').siblings('.section-item').find('.paragraph-container').html()
		$('.editor').val(data)
    })

    $(document).on('click', '.delete-btn-on', function(){
    	let index = $(this).closest('.section-containerOn').find('.section-child').length
    	console.log(index)
    	if(index != 1){
    		$(this).closest('.section-child').remove()
    	}else{
    		$(this).closest('.section-containerOn').remove()
    	}
    })

    $(document).on('click', '.edit-btn-on', function(){
    	launch_modal('modal-edit-bloc')
		$("body,html").animate(
			{
				scrollTop: $('.modal-edit-bloc').offset().top
			},800);
    	selecteur = $(this)
    	var data = []
    	console.log($(this).attr('data-bigData'))
    	if($(this).attr('data-bigData') != ""){
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

		console.log(textColor)

		$('.modal-edit-bloc').find('.text-color-bloc').val(textColor?textColor:"#000")
		$('.modal-edit-bloc').find('.back-color-bloc').val(backColor?backColor:"#000")
		$('.modal-edit-bloc').find('.marge-haut-bloc').val(margeUp?margeUp:"")
		$('.modal-edit-bloc').find('.marge-bas-bloc').val(margeDown?margeDown:"")
		$('.modal-edit-bloc').find('.marge-droite-bloc').val(margeRight?margeRight:"")
		$('.modal-edit-bloc').find('.marge-gauche-bloc').val(margeLeft?margeLeft:"")
		$('.modal-edit-bloc').find('.padding-haut-bloc').val(paddingUp?paddingUp:"")
		$('.modal-edit-bloc').find('.padding-bas-bloc').val(paddingDown?paddingDown:"")
		$('.modal-edit-bloc').find('.padding-droite-bloc').val(paddingRight?paddingRight:"")
		$('.modal-edit-bloc').find('.padding-gauche-bloc').val(paddingLeft?paddingLeft:"")
		$('.modal-edit-bloc').find('.input-class-bloc').val(classe?classe:"")
		$('.modal-edit-bloc').find('.input-id-bloc').val(id?id:"")
		$('.modal-edit-bloc').find('.borderInput-bloc').val(borderType?borderType:"")
		$('.modal-edit-bloc').find('.border-color-bloc').val(borderColor?borderColor:"")
		$('.modal-edit-bloc').find('.border-height-bloc').val(borderHeight?borderHeight:"")
    })
})