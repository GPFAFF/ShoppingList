
$(document).ready(function() {

	function getItem() {
		$('#add').keydown(function (enter) {
			console.log("typed character in list")
			if (enter.keyCode == 13) {
				postItem();
			}
		});
	}

	getItem();

	var postItem = function() {
		var item = $('#add').val();
		var work = ('<div class="checkedItems"><li>'+ item +'</li></div>');
		console.log("item posted to list")
		$('ul.checkedItems').prepend(work); /* add value in front of list */
		$('#add').val('');
	}


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

 
