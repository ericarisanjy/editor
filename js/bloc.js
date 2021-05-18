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
	let col_number = 3;

	$(".modal-add-bloc").on('change', '.on_modal .nbre_col', function(){
		col_number = $(this).val();
		$(this).addClass('is_hidden')
	})

	let blocHtml = []
	let blocSelected = 3
	let dataBloc = ""

	$(document).on('click', '.content-three-dots', function(){
		selecteur = $(this)
		dataBloc = $(this).closest('.section-containerOn').attr('data-bloc')
		launch_modal('modal-modif-bloc')
		if(dataBloc === "5"){
			blocSelected = $(this).siblings('.section-child').length
			$(".modal-modif-bloc").find('.defaultSection[data-section="'+dataBloc+'"]').find('.nbre_col').val(blocSelected)
			$(".modal-modif-bloc").find('.defaultSection[data-section="'+dataBloc+'"]').find('.nbre_col').removeClass('is_hidden')
		}else{
			$(".modal-modif-bloc").find('.nbre_col').addClass('is_hidden')
		}
		$(".modal-modif-bloc").find('.defaultSection[data-section="'+dataBloc+'"]').addClass('active')
		$("body,html").animate(
			{
				scrollTop: $('.modal-modif-bloc').offset().top
			},800);
		$(this).siblings('.section-child').each(function(){
			blocHtml.push($(this).html())
		})
	})

	$(".modal-modif-bloc").on('click', '.defaultSection', function(){
		$(".modal-modif-bloc").find('.defaultSection').removeClass('active')
		$(this).addClass('active')
		dataBloc = $(this).attr('data-section')
		if(dataBloc === "5"){
			$(this).find('.nbre_col').removeClass('is_hidden')
		}else{
			$(".modal-modif-bloc").find('.nbre_col').addClass('is_hidden')
		}
	})

	$(".modal-modif-bloc").on('change', '.nbre_col', function(){
		blocSelected = $(this).val()
	})

	$(".modal-modif-bloc").on('click', '.btn-valid', function(){
		let threeDotsHtml = '<div class="content-three-dots">\
		<div class="three-dots">.</div>\
		<div class="three-dots">.</div>\
		<div class="three-dots">.</div>\
		</div>'
		if(dataBloc === "1"){
			selecteur.siblings('.section-child').remove()
			selecteur.closest('.section-containerOn').append(section100On)
		}else if(dataBloc === "2"){
			selecteur.siblings('.section-child').remove()
			selecteur.closest('.section-containerOn').append(section100On)
			selecteur.closest('.section-containerOn').append(section100On)
		}else if(dataBloc === "3"){
			selecteur.siblings('.section-child').remove()
			selecteur.closest('.section-containerOn').append(section100On)
			selecteur.closest('.section-containerOn').append(section35On)
		}else if(dataBloc === "4"){
			selecteur.siblings('.section-child').remove()
			selecteur.closest('.section-containerOn').append(section35On)
			selecteur.closest('.section-containerOn').append(section100On)
		}else{
			selecteur.siblings('.section-child').remove()
			selecteur.closest('.section-containerOn').append(section100On)
			for(var i = 0; i < (parseInt(blocSelected) - 1); i++){
				selecteur.closest('.section-containerOn').append(section100On)
			}
		}
		selecteur.closest('.section-containerOn').attr('data-bloc', selecteur)
		close_modal("modal-modif-bloc")
	})

	$(".modal-modif-bloc").on('click', '.closed', function(){
		close_modal('modal-modif-bloc')
	})

	$(".modal-add-bloc").on('click', '.btn-valid', function(){
		if (sectionDataOnModal == "1") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').attr('data-bloc', sectionDataOnModal)
		}else if (sectionDataOnModal == "2") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			for (var i = 0; i < 2; i++) {
				selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			}
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').attr('data-bloc', sectionDataOnModal)
		}else if (sectionDataOnModal == "3") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section35On)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').attr('data-bloc', sectionDataOnModal)
		}else if (sectionDataOnModal == "4") {
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section35On)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').attr('data-bloc', sectionDataOnModal)
		}else{
			$(selecteur).closest('.content-btn-act').siblings('.section-item').append(sectionParentOn)
			for (var i = 0; i < col_number; i++) {
				selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').append(section100On)
			}
			selecteur.closest('.content-btn-act').siblings('.section-item').find('.section-containerOn:last').attr('data-bloc', sectionDataOnModal)
		}
		close_modal("modal-add-bloc")
	})

	$(".modal-add-bloc").on('click', '.on_modal .defaultSection', function(){
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
		$(".modal-upload-file-two").find('.content-img').html('')
		$(document).find('.image-display').attr("src", "")
		$(document).find('.input-width').val('')
		$(document).find('.input-height').val('')
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
						$(".modal-upload-file-two").find('.content-img').prepend(html)
					}
				}else{
					$(".modal-upload-file-two").find('.media-storage').addClass('grised')
				}
				},
				error: function(error){
					console.log(error)
					toastr.warning('Une erreur est survenue lors de la suppression')
				}
		});
		$("body,html").animate(
			{
				scrollTop: $('.modal-upload-file-two').offset().top
			},800);
		imageSelector = $(this)
    })

	$(".modal-upload-file-two").on('click', '.closed', function(){
        close_modal('modal-upload-file-two')
	})

	$(".modal-upload-file-two").on('click', '.btn-valid', function(e){
		e.preventDefault()

		let isReady = false
		let title = $('.modal-upload-file-two').find('.input-title').val()
		let alt = $('.modal-upload-file-two').find('.input-alt').val()
		let width = $('.modal-upload-file-two').find('.input-width').val()
		let height = $('.modal-upload-file-two').find('.input-height').val()
		let url = $('.modal-upload-file-two').find('.input-url').val()
		let align = $('.modal-upload-file-two').find('.input-align').attr('data-item')
		let alignValue = $('.modal-upload-file-two').find('.input-align').val()
		let link = $('.modal-upload-file-two').find('.check-link').is(':checked')
		let linkTarget = $('.modal-upload-file-two').find('.check-link-target').is(':checked')
		let linkValue = $('.modal-upload-file-two').find('.input-link').val()
		let imgStyle = {
			align,
			width,
			height,
			title,
			url,
			alt,
			alignValue,
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
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
						}
					}else{
						html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></div></div>'
					}
					imgLoaded.push(url)
					localStorage.setItem('ImgLoaded', JSON.stringify(imgLoaded))
					isReady = true
					if(isReady){
						imageSelector.closest('.section-child').find('.section-item').append(html)
						close_modal('modal-upload-file-two')
					}
				 },
				   error: function(error){
					   console.log(error)
					 toastr.success('Une erreur est survenue lors de la suppression')
				 }
			});
		}else{
			if(imgSelected !== ""){
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
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}else{
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></div></div>'
						}
						isReady = true
						if(isReady){
							imageSelector.closest('.section-child').find('.section-item').append(html)
							close_modal('modal-upload-file-two')
						}
					 },
					   error: function(error){
						 toastr.success('Une erreur est survenue lors de la suppression')
					 }
				});
			}else if(imgData !== ""){
				var form = $('.modal-upload-file-two').find('.modal-content')[0];
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
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}else{
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></a></div></div>'
							}
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+responses[responses.length - 1].id+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[responses.length - 1].filename+'" class="img-insert" /></div></div>'
						}
						isReady = true
						if(isReady){
							imageSelector.closest('.section-child').find('.section-item').append(html)
							close_modal('modal-upload-file-two')
						}
					 },
					   error: function(error){
						 toastr.success('Une erreur est survenue lors de la suppression')
					 }
				});
			}
		}
	})

	$('.modal-upload-file-two').on('click', '.content-input-setting', function(){
		$(this).find('.content-dropdown').toggleClass('is_hidden')
	})

	$(".modal-upload-file-two").on('click', '.local-storage', function(){
		$(this).siblings('.input_file').trigger('click')
		return false
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

	$('.modal-edit-img').on('click', '.btn-delete', function(e){
		e.preventDefault()
		imageSelector.closest('.img-inserted-container').remove()
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({
			type: "POST",
			url: 'upload.php',
			dataType: 'json',
			data: {imageId: imageId},
			success: function(responses){
				close_modal("modal-edit-img")
			},
			error: function(error){
				console.log(error)
				toastr.success('Une erreur est survenue lors de la suppression')
			}
		});
	})

	$(".modal-edit-img").on('click', '.local-storage', function(){
		$(this).siblings('.input_file').trigger('click')
		return false
	})

	$('.modal-edit-img').on('click', '.drop-item', function(){
		let dataItem = $(this).attr('data-item');
		let data = $(this).text();
		$(this).closest('.content-input-setting').find('.input-align').val(data)
		$(this).closest('.content-input-setting').find('.input-align').attr('data-item', dataItem)
	})

	$(".modal-edit-img").on('click', '.btn-valid', function(e){
		e.preventDefault()
		let isReady = false
		let title = $('.modal-edit-img').find('.input-title').val()
		let alt = $('.modal-edit-img').find('.input-alt').val()
		let width = $('.modal-edit-img').find('.input-width').val()
		let height = $('.modal-edit-img').find('.input-height').val()
		let url = $('.modal-edit-img').find('.input-url').val()
		let alignValue = $('.modal-edit-img').find('.input-align').val()
		let align = $('.modal-edit-img').find('.input-align').attr('data-item')
		let link = $('.modal-edit-img').find('.check-link').is(':checked')
		let linkTarget = $('.modal-edit-img').find('.check-link-target').is(':checked')
		let linkValue = $('.modal-edit-img').find('.input-link').val()
		let imgStyle = {
			align,
			width,
			height,
			title,
			url,
			alt,
			alignValue,
			link,
			linkTarget,
			linkValue
		}
		if(url !== ""){
			let imageUrlUpdate = $('.modal-edit-img').find('.input-url').val()
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				type: "POST",
				url: 'upload.php',
				dataType: 'json',
				data: {imageUrlUpdate: imageUrlUpdate, imageId: imageId},
				success: function(responses){
					imageUrlUpdate
					if(link){
						if(linkTarget){
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></a></div></div>'
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></a></div></div>'
						}
					}else{
						html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+' style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></div></div>'
					}
					isReady = true
					imgLoaded.push(url)
					if(isReady){
						imageSelector.parent().parent().append(html)
						imageSelector.parent().remove()
						close_modal('modal-edit-img')
					}
				 },
				   error: function(error){
					   console.log(error)
					 toastr.success('Une erreur est survenue lors de la suppression')
				 }
			});
		}else{
			if(imgSelected !== ""){
				$.ajaxSetup({
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					}
				});
				$.ajax({
					type: "POST",
					url: 'upload.php',
					dataType: 'json',
					data: {imageId: imageId, imageUrlUpdate: imgSelected},
					success: function(responses){
						imgSelected = ""
						if(link){
							if(linkTarget){
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+'  style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></a></div></div>'
							}else{
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+'  style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></a></div></div>'
							}
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+'  style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></div></div>'
						}
						isReady = true
						if(isReady){
							imageSelector.parent().parent().append(html)
							imageSelector.parent().remove()
							close_modal('modal-edit-img')
						}
					 },
					   error: function(error){
						 toastr.warning('Une erreur est survenue lors de la suppression')
					 }
				});
			}else if(imgData !== ""){
				var form = $('.modal-edit-img').find('.modal-content')[0];
				let formData = new FormData(form)
				formData.append('imageId', imageId)
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
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+'  style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'" target="_blank"><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></a></div></div>'
							}else{
								html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+'  style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><a href="'+linkValue+'"><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></a></div></div>'
							}
						}else{
							html = '<div class="img-inserted-container" style="justify-content: '+align+'"><div class="content-insert-img" data-imgStyle='+JSON.stringify(imgStyle)+' data-imageId='+imageId+'  style="width: '+width+'px; height: '+height+'px"><div class="edit-btn-img" data-bigData=""><i class="fa fa-pencil" aria-hidden="true"></i></div><img title="'+title+'" alt="'+alt+'" src="'+responses[0].filename+'" class="img-insert" /></div></div>'
						}
						isReady = true
						if(isReady){
							imageSelector.parent().parent().append(html)
							imageSelector.parent().remove()
							close_modal('modal-edit-img')
						}
					 },
					   error: function(error){
						 toastr.warning('Une erreur est survenue lors de la suppression')
					 }
				});
			}
		}
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
		createIsTrue = true
		let data = $(this).closest('.content-btn-act-on').siblings('.section-item').find('.paragraph-container').html()
		$('.editor').val("")
    })

    $(document).on('click', '.delete-btn-on', function(){
    	let index = $(this).closest('.section-containerOn').find('.section-child').length
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
		let align = data.align

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
		$('.modal-edit-bloc').find('.input-align').val(align?align:"")
    })
})