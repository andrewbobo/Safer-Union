$(document).ready(function(){
	$("#arrow_bottom").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});
});
