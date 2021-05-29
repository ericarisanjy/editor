let selecteur = ""
let imageSelector = ""
let imgData = "";
let imgSelected = "";
let imgLoaded = []
let sectionDataOnModal = ""
let imageId = 0
let createIsTrue = true
let cssFileId = null
let cssFileContent = {}
let section100On = '<div class="section-child content-sections">\
              <div class="content-btn-move is_hidden">\
                <i class="fa fa-chevron-left move move-left" aria-hidden="true"></i>\
                <i class="fa fa-chevron-right move move-right" aria-hidden="true"></i>\
              </div>\
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
              <div class="content-btn-move is_hidden">\
                <i class="fa fa-chevron-left move move-left" aria-hidden="true"></i>\
                <i class="fa fa-chevron-right move move-right" aria-hidden="true"></i>\
              </div>\
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
let sectionParentOn = '<div class="section-containerOn" data-bloc="">\
			<div class="content-three-dots">\
			<div class="three-dots">.</div>\
			<div class="three-dots">.</div>\
			<div class="three-dots">.</div>\
		</div>\
          </div>'

let section100 = '<div class="content-sections">\
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
            </div>'
let section35 = '<div class="content-sections35">\
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
            </div>'
let sectionParent = '<div class="section-container" data-section="">\
            <div class="section sectionOne">\
              <div class="section-side">\
                <i class="fa fa-pencil-square-o edit-section-btn" aria-hidden="true"></i>\
                <i class="fa fa-trash delete-section-btn" aria-hidden="true"></i>\
				<i class="fa fa-files-o copy-bloc-btn" aria-hidden="true"></i>\
              </div>\
            </div>\
          </div><style class="style"></style>'  

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
        $(this).siblings('.content-btn-move').removeClass('is_hidden')
    })

    $(document).on('mouseleave', '.section-containerOn .section-item', function(){
        $(this).siblings('.content-btn-act-on').addClass('is_hidden')
        $(this).siblings('.content-btn-move').addClass('is_hidden')
    })

    $(document).on('mouseover', '.content-btn-act-on', function(){
        $(this).removeClass('is_hidden')
    })
    $(document).on('mouseover', '.content-btn-move', function(){
      $(this).removeClass('is_hidden')
  })
})

function launch_modal(selector){
	$("."+selector).removeClass('is_hidden')
	$(".container").addClass('is_blurred')
	$(".container-page-list").addClass('is_blurred')
	$(".create-page-container").addClass('is_blurred')
	$("body").addClass("no_scroll")
}
function close_modal(selector){
	$("."+selector).addClass('is_hidden')
	$(".container").removeClass('is_blurred')
	$(".container-page-list").removeClass('is_blurred')
	$(".create-page-container").removeClass('is_blurred')
	$("body").removeClass("no_scroll")
}
function readURLLogo(input, div) {
    if (input.files && input.files[0]) {
        if (input.files[0].type == "image/jpeg" || input.files[0].type == "image/png" || input.files[0].type == "image/svg+xml"){
            var reader = new FileReader();
            reader.onload = function (e) {
            	imgData = e.target.result
				imgLoaded.push(imgData)
				localStorage.setItem('ImgLoaded', JSON.stringify(imgLoaded))
				$(document).find('.image-display').attr('src', imgData)
            }
            reader.readAsDataURL(input.files[0]);
            $('p.infoLogo').text('');
        } else {
            $('p.infoLogo').text(image_valid);
            $('#company_logo').val('');
        }
    }
}

function removeDuplicates(colors) {
	let unique = {};
	colors.forEach(function(i) {
	  if(!unique[i]) {
		unique[i] = true;
	  }
	});
	return Object.keys(unique);
}

function tableResponse(response){
	$(document).find('tbody').html("")
	for(let unit of response){
		let html = "<tr><td>"+unit.id+"</td><td class='td-title'>"+unit.title+"</td><td>"+unit.description+"</td>\
		<td><a href='"+unit.url+"' target='_blank'>"+unit.url+"</a></td><td class='td-action'><button class='btn-valid' data-pageid='"+unit.id+"'>Edit</button>\
		<button class='btn-delete' data-pageid='"+unit.id+"'>Supprimer</button></td></tr>"
		$(document).find('tbody').append(html)
	}
}