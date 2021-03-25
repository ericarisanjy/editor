$(document).ready(function(){
    $(document).find('.sectionOne').remove()
    $(document).find('.section-header').remove()
    $(document).find('.content-btn-act').remove()
    $(document).find('.section-parent').removeClass('border-dashed')
    $(document).find('.section-child').find('.section-item').removeClass('border-dashed-blue')
    $(document).find('.section-child').find('.content-btn-act-on').remove()
})