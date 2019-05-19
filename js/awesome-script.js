function awesAnimation(x) {
	$('#animation').removeClass().addClass(x + ' animation')
};

$(document).ready(function(){
	$('.trigger').click(function(){
		var id = $(this).prop('id');
		awesAnimation(id);
	});
});
