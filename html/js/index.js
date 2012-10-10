$(document).ready(function(){
	$('.pCategory').hover(function(){
		$(this).stop().fadeTo(300, '1');
	}, function(){
		$(this).stop().fadeTo(300, '0.2');
	});
	$('.cateTitle').click(function(){
		$('.pCategory .toc').stop().slideToggle(300);
	});
	$('a[href^="http://"]').each(function(){
		this.target = "_blank";
	});
});
