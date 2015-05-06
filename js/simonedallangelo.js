$(document).ready(function (){
	em = ['mai', 'lto', ':', 'sim', 'o', 'bg@', 'gmai', 'l.c','om'];
	e_i = ['email', 'drop-line'];
	$.each(e_i, function(){
		$('#' + this).attr('href', em.join(''));
	});

	colors = ['blue', 'turquoise', 'emerald', 'orange', 'yellow', 'violet', 'red'];
	old_pos = 0;
	pos = 0;
	setInterval(function(){
		old_pos = pos;
		pos = ((pos == (colors.length -1)) ? 0 : (pos + 1))
		$('.changeable').switchClass(colors[old_pos], colors[pos], 5000);
	}, 5000);

	$('#navigation a').click(function (e) {
		e.preventDefault();
		if ( $(this).hasClass('active')){
			return;
		};
		var id = $(this).attr('href');

		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.show').fadeOut(500, function(){
			$(this).removeClass('show').addClass('hide');
			$(id).fadeIn(500, function(){
				$(this).removeClass('hide').addClass('show');
			});
		});
	});
});