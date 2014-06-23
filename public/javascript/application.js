$(document).on('click', '#go-search', function() {

	findImagesOnGoogle({keywords: $('#search-term').val(), container:'#search-results'})
});