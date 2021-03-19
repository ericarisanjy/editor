let selecteur = ""
let imgData = "";
let sectionDataOnModal = ""
let section100On = '<div class="section-child content-sections">\
              <div class="section-item border-dashed-blue min-height-150"  data-section="1">\
              </div>\
              <div class="content-btn-act-on is_hidden">\
              	<div class="edit-btn-on" data-bigData="">\
	                <i class="fa fa-pencil" aria-hidden="true"></i>\
	              </div>\
	              <div class="delete-btn-on" data-bigData="">\
	                <i class="fa fa-trash" aria-hidden="true"></i>\
	              </div>\
	              <div class="text-btn-on" data-bigData="">\
	                T\
	              </div>\
	              <div class="image-btn-on" data-bigData="">\
	                <i class="fa fa-picture-o" aria-hidden="true"></i>\
	              </div>\
              </div>\
            </div>'
    let section35On = '<div class="section-child content-sections35">\
              <div class="section-item border-dashed-blue min-height-150"  data-section="1">\
              </div>\
              <div class="content-btn-act-on is_hidden">\
              	<div class="edit-btn-on" data-bigData="">\
	                <i class="fa fa-pencil" aria-hidden="true"></i>\
	              </div>\
	              <div class="delete-btn-on" data-bigData="">\
	                <i class="fa fa-trash" aria-hidden="true"></i>\
	              </div>\
	              <div class="text-btn-on" data-bigData="">\
	                T\
	              </div>\
	              <div class="image-btn-on" data-bigData="">\
	                <i class="fa fa-picture-o" aria-hidden="true"></i>\
	              </div>\
              </div>\
            </div>'
    let sectionParentOn = '<div class="section-containerOn">\
          </div>'

    let section100 = '<div class="content-sections">\
              <div class="section-header">\
                <span class="add-text add-section-text">T</span>\
                <i class="fa fa-picture-o add-image-section" aria-hidden="true"></i>\
              </div>\
              <div class="section-parent section-item border-dashed min-height-150"  data-section="1">\
              </div>\
              <div class="content-btn-act is_hidden">\
              	<div class="copy-bloc-btn">\
                  <i class="fa fa-files-o" aria-hidden="true"></i>\
                </div>\
                <div class="add-bloc-btn">\
                  <i class="fa fa-th" aria-hidden="true"></i>\
                </div>\
                <div class="edit-btn">\
                  <i class="fa fa-pencil edit-property-section" aria-hidden="true"></i>\
                </div>\
              </div>\
            </div>'
    let section35 = '<div class="content-sections35">\
              <div class="section-header">\
                <span class="add-text add-section-text">T</span>\
                <i class="fa fa-picture-o add-image-section" aria-hidden="true"></i>\
              </div>\
              <div class="section-parent section-item border-dashed min-height-150"  data-section="1">\
              </div>\
              <div class="content-btn-act is_hidden">\
              	<div class="copy-bloc-btn">\
                  <i class="fa fa-files-o" aria-hidden="true"></i>\
                </div>\
                <div class="add-bloc-btn">\
                  <i class="fa fa-th" aria-hidden="true"></i>\
                </div>\
                <div class="edit-btn">\
                  <i class="fa fa-pencil edit-property-section" aria-hidden="true"></i>\
                </div>\
              </div>\
            </div>'
    let sectionParent = '<div class="section-container">\
            <div class="section sectionOne">\
              <div class="section-side">\
                <i class="fa fa-pencil-square-o edit-section-btn" aria-hidden="true"></i>\
                <i class="fa fa-trash delete-section-btn" aria-hidden="true"></i>\
              </div>\
            </div>\
          </div>'   
$(document).ready(function(){
	setInterval(function(){
		$(document).find('.content-sections').each(function(){
			if($(this).find('.section-containerOn').html() == undefined){
				$(this).find('.add-section-text').removeClass('grised')
				$(this).find('.add-image-section').removeClass('grised')
			}else{
				$(this).find('.add-section-text').addClass('grised')
				$(this).find('.add-image-section').addClass('grised')
			}
		})
	},1000)
	$(document).on('mouseover', '.section-item', function(){
		$(this).siblings('.content-btn-act').removeClass('is_hidden')
	})
	$(document).on('mouseleave', '.section-item', function(){
		$(this).siblings('.content-btn-act').addClass('is_hidden')
	})
	$(document).on('mouseover', '.content-btn-act', function(){
		$(this).removeClass('is_hidden')
	})

	$(document).on('mouseover', '.section-containerOn .section-item', function(){
		$(this).siblings('.content-btn-act-on').removeClass('is_hidden')
	})
	$(document).on('mouseleave', '.section-containerOn .section-item', function(){
		$(this).siblings('.content-btn-act-on').addClass('is_hidden')
	})
	$(document).on('mouseover', '.content-btn-act-on', function(){
		$(this).removeClass('is_hidden')
	})


    $(document).on('click', '.copy-bloc-btn', function(){
    	let clone = $(this).closest('.section-container').clone()
    	clone.insertAfter($(document).find('.section-container:last'))
    })
    
    $(".modal-edit-bloc").on('click', '.closed', function(){
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

    })

	
	$(document).on("click", '.edit-btn', function(){
		launch_modal("modal-edit-section")
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


		$('.modal-edit-section').find('.text-color-section').val(textColor?textColor:"#000")
		$('.modal-edit-section').find('.back-color-section').val(backColor?backColor:"#000")
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
	  
	$(document).on("click", '.not_on_modal .defaultSection', function(){
		let section = $(this).attr('data-section')
		console.log("lalalall---", section);
          let sectionType = $(this).attr('data-section')
          if(sectionType === "sectionOne"){
          	$(document).find('.page-container').append(sectionParent)
          	$(document).find('.section-container:last').append(section100)
          }else if(sectionType === "sectionTwo"){
          	$(document).find('.page-container').append(sectionParent)
          	for(var i = 0; i < 2; i++){
          		$(document).find('.section-container:last').append(section100)
          	}
          }else if(sectionType === "sectionThree"){
          	$(document).find('.page-container').append(sectionParent)
          	$(document).find('.section-container:last').append(section100)
          	$(document).find('.section-container:last').append(section35)
          }else if(sectionType === "sectionFour"){
          	$(document).find('.page-container').append(sectionParent)
          	$(document).find('.section-container:last').append(section35)
          	$(document).find('.section-container:last').append(section100)
          }else{
          	$(document).find('.not_on_modal').find('.nbre_col').removeClass('is_hidden')
          }
	})

	

	

	


	

	$(document).on('click', '.unit-img', function(){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
		imgData = $(this).find('img').attr('src')
	})

	

	

	

	$(document).on('change', '.not_on_modal .nbre_col', function(){
		let nbre_col = $(this).val();
		if(nbre_col === "1"){
          	$(document).find('.page-container').append(sectionParent)
          	$(document).find('.section-container:last').append(section100)
      	}else if(nbre_col === "2"){
      		$(document).find('.page-container').append(sectionParent)
      		for(var i = 0; i < 2; i++){
      			$(document).find('.section-container:last').append(section100)
      		}
      	}else{
      		$(document).find('.page-container').append(sectionParent)
      		for(var i = 0; i < nbre_col; i++){
      			$(document).find('.section-container:last').append(section100)
      		}
      	}
      	$(this).addClass('is_hidden')
	})

	$('.page-container').dad();
	$('.section-parent').dad();
	
	$(".modal-edit-section").on("click", '.closed', function(){
		close_modal('modal-edit-section')
	})
	$(".modal-add-text").on("click", '.closed', function(){
		close_modal('modal-add-text')
	})
	$(document).on('change', '.cke_editable', function(){
		console.log('mande tsara')
	})
	$(".modal-add-text").on("click", '.btn-valid', function(){
		let result = $('.editor').val()
		let finallyValue = ""
		if(selecteur.closest('.section-header').siblings('.section-item').find('.paragraph-container').length != 0 || selecteur.closest('.content-btn-act-on').siblings('.section-item').find('.paragraph-container').length != 0){
			finallyValue = result
			if(selecteur.closest('.section-header').siblings('.section-item').length != 0){
				selecteur.closest('.section-header').siblings('.section-item').find('.paragraph-container').html(finallyValue)
			}else{
				selecteur.closest('.content-btn-act-on').siblings('.section-item').find('.paragraph-container').html(finallyValue)
			}
		}else{
			finallyValue = '<div class="paragraph-container">'+result+'</>'
			if(selecteur.closest('.section-header').siblings('.section-item').length != 0){
				selecteur.closest('.section-header').siblings('.section-item').append(finallyValue)
			}else{
				selecteur.closest('.content-btn-act-on').siblings('.section-item').append(finallyValue)
			}
		}
		
		close_modal('modal-add-text')
	})

	$('.modal-edit-section').on('click', '.borderInput-section', function(){
		$(this).siblings('.content-dropdown').toggleClass('is_hidden')
	})
	$('.modal-edit-bloc').on('click', '.borderInput-bloc', function(){
		$(this).siblings('.content-dropdown').toggleClass('is_hidden')
	})

	
	$('.modal-edit-section').on('click', '.drop-item', function(){
		dropItem = $(this).text()
		$(this).parent().addClass('is_hidden')
		$(".modal-edit-section").find('.borderInput-section').val(dropItem)
	})

	$('.modal-edit-bloc').on('click', '.drop-item', function(){
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

	$(document).on('dblclick', '.content-insert-img', function(){
		selecteur = $(this)
		let imgStyle = []
		if(selecteur.attr('data-imgStyle')){
			imgStyle = JSON.parse($(selecteur).attr('data-imgStyle'))
		}
		$('.modal-edit-img').find('.input-title').val(imgStyle.title)
		$('.modal-edit-img').find('.input-alt').val(imgStyle.alt)
		$('.modal-edit-img').find('.input-width').val(imgStyle.width)
		$('.modal-edit-img').find('.input-height').val(imgStyle.height)
		$('.modal-edit-img').find('.input-url').val(imgStyle.url)
		$('.modal-edit-img').find('.input-align').val(imgStyle.alignValue)
		$('.modal-edit-img').find('.input-align').attr('data-item', imgStyle.align)
		launch_modal('modal-edit-img')
	})

	$('.modal-edit-img').on('click', '.closed', function(){
		close_modal('modal-edit-img')
	})

	$('.modal-edit-img').on('click', '.btn-valid', function(){
		let width = $(".modal-edit-img").find('.width-image').val()
		let height = $(".modal-edit-img").find('.height-image').val()
		selecteur.closest('.content-insert-img').attr('style',"width:"+width+"px;height:"+height+"px")
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
		$(document).find('.body-container').addClass('is_hidden')
		$(document).find('.content-btn-register').addClass('is_hidden')
		$(document).find('.bloc-container').addClass('is_hidden')
		$(document).find('.close-preview').removeClass('is_hidden')

	})
	$(document).on('click', '.close-preview', function(){
		$(document).find('.preview-page').html("")
		$(document).find('.body-container').removeClass('is_hidden')
		$(document).find('.content-btn-register').removeClass('is_hidden')
		$(document).find('.bloc-container').removeClass('is_hidden')
		$(this).addClass('is_hidden')
		htmlToPreview.forEach(function(el){
			$(document).find('.content-sections').append(el)
		})
	})
	$(document).on('click', '.btn-register', function(){
		htmlToPreview = $(document).find('.page-container').html()
		$(document).find('.sectionOne').addClass('is_hidden')
		$(document).find('.section-header').addClass('is_hidden')
		$(document).find('.content-btn-act').addClass('is_hidden')
		$(document).find('.section-parent').removeClass('border-dashed')
		$(document).find('.section-child').find('.section-item').removeClass('border-dashed-blue')
		$(document).find('.section-child').find('.content-btn-act-on').addClass('is_hidden')


		let id = 2
		let title = $(document).find('.pageName').val()
		let description = $(document).find('.pagedescription').val()
		let content = htmlToPreview
		$.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
		$.ajax({
            type: "POST",
            url: 'function.php',
            data: {id: id, title: title, description: description},
            success: function(responses){
            	console.log(responses)
                // $(document).find('.list-commune').html(responses);
                // $(document).find('input').val("");
                // toastr.success('Commune enregistrer avec success')
            },
            error: function(error){
                //toastr.success('Une erreur est survenue lors de l\'enregistrement')
            }
        });
		return false
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
function readURLLogo(input, div) {
    if (input.files && input.files[0]) {
        if (input.files[0].type == "image/jpeg" || input.files[0].type == "image/png" || input.files[0].type == "image/svg+xml"){
            var reader = new FileReader();
            reader.onload = function (e) {
            	imgData = e.target.result
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