var navHeight;
var pageNavHeight;

window.onload=function() 
{
	navHeight = $('#nav').outerHeight(true);
	pageNavHeight = $('#page-nav').outerHeight(true);
	
	Shadowbox.init();
}
$(window).on('scroll', function() {
	var y_scroll_pos = window.pageYOffset;
	var scroll_pos_test = $('#nav').position().top + navHeight - pageNavHeight;

	if (y_scroll_pos > scroll_pos_test)
		$("#page-nav").addClass("is-fixed");
	else if (y_scroll_pos < scroll_pos_test)
		$("#page-nav").removeClass("is-fixed");
});