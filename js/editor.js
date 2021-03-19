$(document).ready(function(){
	//Section Created
	let sectOneCreated = '<div class="section-body" data-content="">\
	<div class="colonne col-100 border-dashed  column-direction min-height-150" contenteditable="true" data-section="1"></div></div>';
	
	let sectTwoCreated = '<div class="section-body border-dashed min-height-150" data-content="">\
	<div class="colonne col-50  column-direction" contenteditable="true" data-section="1"></div>\
	<div class="colonne col-50 border-left-dashed column-direction" contenteditable="true" data-content="2"></div></div>'

	let sectThreeCreated = '<div class="section-body border-dashed min-height-150" data-content="">\
	<div class="colonne col-65 column-direction" contenteditable="true" data-content="1"></div>\
	<div class="colonne col-35 border-left-dashed column-direction" contenteditable="true" data-content="2"></div></div>'

	let sectFourCreated = '<div class="section-body border-dashed min-height-150" data-content="">\
	<div class="colonne col-35 column-direction" contenteditable="true" data-content="1"></div>\
	<div class="colonne col-65 border-left-dashed column-direction" contenteditable="true" data-content="2"></div></div>'

	let sectFiveCreated = '<div class="section-body border-dashed min-height-150" data-content="">\
	<div class="colonne col-33 column-direction" contenteditable="true" data-content="1"></div>\
	<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true" data-content="2"></div>\
	<div class="colonne col-33 border-left-dashed column-direction" contenteditable="true" data-content="3"></div></div>'

	//Section Modified
	let sectOneModified = '<div class="colonne col-100 border-dashed min-height-150" contenteditable="true" data-section="1"></div>'

	let sectTwoModified = '<div class="colonne col-50 " contenteditable="true" data-content="1"></div>\
	<div class="colonne col-50 border-left-dashed column-direction" contenteditable="true" data-content="2"></div>'

	let sectThreeModified = '<div class="colonne col-65 " contenteditable="true" data-content="1"></div>\
	<div class="colonne col-35  border-left-dashed column-direction" contenteditable="true" data-content="2"></div>'

	let sectFourModified = '<div class="colonne col-35 " contenteditable="true" data-content="1"></div>\
	<div class="colonne col-65  border-left-dashed column-direction" contenteditable="true" data-content="2"></div>'

	let sectFiveModified = '<div class="colonne col-33  column-direction" contenteditable="true" data-content="1"></div>\
	<div class="colonne col-33  border-left-dashed column-direction" contenteditable="true" data-content="2"></div>\
	<div class="colonne col-33  border-left-dashed column-direction" contenteditable="true" data-content="3"></div>'
})