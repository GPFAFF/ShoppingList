//var listItems = 1;

//$(document).ready(function() {

	//$('#add').on('keypress', function (event) {
	//	if (event.which == '13'){
			// add new item
			// alert('enter is hit');
		//	addItem($(this).val());
		//	$(this).val('');
	//	}
	//});

	//$('.Add').click(function() {
			// add new item
	//		addItem($('#item').val());
//			$('#item').val('');
//	});

//	$('ul').on('click', 'li', function() {
		// alert('clicked on item');
		// put middle line
//		$(this).toggleClass('completed');
//	});

//	$('ul').on('click', '.delete', function(e) {
//		e.stopImmediatePropagation();
		// alert('clicked on DELETE');
//		$(this).closest('li').remove();
//		$(this).remove();
//		if (!$('li').length){
	//		$('.checkedItems').hide();
//			first_item_added = 1;
//		}
//	});

// });

/* ======================
   add item
   ====================== */

//function addItem(item){
//	if (item){
//		if (first_item_added){
//			$('.checkedItems').show();
//			listItems = 0;
//		}
//		$('.checkedItems').find('ul').append('<li>'+item+'<div href="#" class="delete">X</div></li>');
	
//}
//}

//$(document).ready(function() {

	//$('#add').on('keypress', function (event) {
	//	if (event.which == '13'){
			// add new item
			// alert('enter is hit');
		//	addItem($(this).val());
		//	$(this).val('');
	//	}
	//});

$(document).ready(function(){
	$(".Add").click(function(){
		var toAdd = $("input[name=add-items]").val();
		$(".checkedItems").append("<div class='checkedItems li'>"+toAdd+"</div>");
		$("input[name=add-items]").val("")
	});
	$(document).on("click",".checkedItems",function(){
		$(this).toggleClass(".highlight")
	});
	$(document).on("dblclick",".checkedItems",function(){
		$(this).remove()
	})
});