
$(document).ready(function() {

	$('input').on('keypress', function (event) {
		if (event.which == '13'){
			// add new item
			// alert('enter is hit');
			addItem($(this).val());
			$(this).val('');
		}
	});

$(document).ready(function(){
	$(".Add").click(function(){
		var toAdd = $("input[name=add-items]").val();
		$("ul.checkedItems").append($("<div class='checkedItems'><li>"+toAdd+"</li></div>"));
		$("input[name=add-items]").val("")
	});
	
	$(document).on('click', ".Remove", function(){
  	$("ul.checkedItems").remove();
  })
	$(document).on("dblclick",".checkedItems li",function(){
		$(this).remove()
	})
});
});



 
