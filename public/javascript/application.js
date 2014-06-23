$(document).on('click', '#go-search', function() {

	findImagesOnGoogle({keywords: $('#search-term').val(), container:'#search-results'})
});

$(document).on('click', '#search-results img', function() {
  var url = $(this).data('url');
  $("#workspace img").remove();
  var img = $("<img>").attr('src', url);
  $("#workspace").append(img);
});

$(document).on('input', '#text', function() {
	$("#caption").text($(this).val());
});

$(document).on('change', '#left', function() {
	$("#caption").css("left", $(this).val() + 'px');
});
$(document).on('change', '#width', function() {
	$("#caption").css("width", $(this).val() + 'px');
});
$(document).on('change', '#size', function() {
	$("#caption").css("font-size", $(this).val() + 'px');
});
$(document).on('change', '#colour', function() {
	$("#caption").css("color", $(this).val());
});
$(document).on('change', '#align', function() {
	$("#caption").css("text-align", $(this).val());
});

