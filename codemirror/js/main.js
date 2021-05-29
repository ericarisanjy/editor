$(document).ready(function(){

    var validation = false;
    var myTimeoutId = null;


    $('#info').onclick = function() {
        $('#console').style.display = "block";
        console.log("hello");
    }
    $('#close').onclick = function() {
        $('#console').style.display = "none";
    }

    var config = {
        mode: "css",
        extraKeys: {"Ctrl-Space": "autocomplete"},
        lineNumbers: true,
        keyMap:"sublime",
        tabSize:4,
    };
    // initialize editor
    var editor = CodeMirror.fromTextArea(document.getElementById('editor'),config);
    editor.setOption("theme", "material-ocean");

    $('.content-create-css').on('click', '.btn-valid-add-css', function(){
        let name = $(".content-create-css").find('.input-css-name').val()
        let content = editor.getValue()
        $.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({
			type: "POST",
			url: 'cssFunction.php',
			dataType: 'json',
			data: {name: name, content: content},
			success: function(responses){
                responses.forEach(function(cssUnit){
                    let html = '<div class="item-content">\
                    <div class="check-item">\
                      <input type="checkbox" class="input-check" value="'+cssUnit.id+'"/>\
                    </div>\
                    <span class="">'+cssUnit.name+'</span>\
                    </div>'
                    $(document).find('.drop-container').prepend(html)
                })
                $(document).find('.container-css').addClass('is_hidden')
                toastr.success("Fichier créee avec success")
            },
            error: function(error){
                console.log(error)
                toastr.warning('Une erreur est survenue lors de la suppression')
            }
		});
	})

    $('.content-create-css').on('click', '.btn-valid-edit-css', function(){
        let name = $(".content-create-css").find('.input-css-name').val()
        let content = editor.getValue()
        $.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({
			type: "POST",
			url: 'cssFunction.php',
			dataType: 'json',
			data: {name: name, content: content, cssFileId: cssFileId},
			success: function(responses){
                for(var i = 0; i < responses.length; i++){
                    if(responses[i]?.[0] === cssFileId){
                        $(document).find('.check-text[data-id="'+cssFileId+'"]').text(responses[i].name)
                    }
                }
                $(document).find('.container-css').addClass('is_hidden')
                toastr.success("Fichier modifié avec success")
            },
            error: function(error){
                console.log(error)
                toastr.warning('Une erreur est survenue lors de la suppression')
            }
		});
	})

    $(document).on('click', '.btn-new-css-file', function(){
		$(document).find('.drop-container').addClass('is_hidden')
		$(document).find('.container-css').removeClass('is_hidden')
        $(document).find('.btn-valid-edit-css').addClass('btn-valid-add-css')
        $(document).find('.btn-valid-add-css').removeClass('btn-valid-edit-css')
	})

    $(document).on('click', '.btn-remove-css-file', function(){
		$(document).find('.drop-container').addClass('is_hidden')
		if(cssFileId){
            launch_modal('modal-confirm-delete-css')
        }
	})

    $('.modal-confirm-delete-css').on('click', '.btn-valid-delete-css', function(){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: "POST",
            url: 'cssFunction.php',
            dataType: 'json',
            data: {cssFileIdToDeleted: cssFileId},
            success: function(responses){
                $('.content-create-css').find('.drop-container').html("")
                for(var i = 0; i < responses.length; i++){
                    let html = '<div class="item-content">\
                    <div class="check-item">\
                      <input type="checkbox" class="input-check" value="'+responses[i].id+'"/>\
                    </div>\
                    <span class="">'+responses[i].name+'</span>\
                    </div>'
                    $(document).find('.drop-container').prepend(html)
                    toastr.success("Fichier supprimé avec success")
                }
                close_modal('modal-confirm-delete-css')
            },
            error: function(error){
                console.log(error)
                toastr.warning('Une erreur est survenue lors de la suppression')
            }
        });
    })

    $('.modal-confirm-delete-css').on('click', '.btn-delete', function(){
        close_modal('modal-confirm-delete-css')
    })

    $('.modal-confirm-delete-css').on('click', '.closed', function(){
        close_modal('modal-confirm-delete-css')
    })

    $(document).on('click', '.btn-edit-css-file', function(){
		$(document).find('.drop-container').addClass('is_hidden')
		if(cssFileId){
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});
			$.ajax({
				type: "GET",
				url: 'getCssFunction.php',
				dataType: 'json',
				data: {cssFileId: cssFileId},
				success: function(responses){
                    $(document).find('.btn-valid-add-css').addClass('btn-valid-edit-css')
                    $(document).find('.btn-valid-edit-css').removeClass('btn-valid-add-css')
                    $(document).find('.container-css').removeClass('is_hidden')
					$(document).find('.input-css-name').val(responses?.[0].name)
					editor.setValue(responses?.[0].content)
				},
				error: function(error){
					console.log(error)
					toastr.warning('Une erreur est survenue lors de la suppression')
				}
			});
		}
	})

	function loadHtml(html) {
		const document_pattern = /( )*?document\./i;
		let finalHtml = html.replace(document_pattern, "document.getElementById('result').contentWindow.document.");
		$('#result').contents().find('html').html(finalHtml);
	}

	loadHtml($('#editor').val());

    editor.on('change',function(cMirror){

        if (myTimeoutId!==null) {
            clearTimeout(myTimeoutId);
        }
        myTimeoutId = setTimeout(function() {

                try{

                    loadHtml(cMirror.getValue());

                }catch(err){

                    console.log('err:'+err);

                }


            }, 1000);

        });

});
