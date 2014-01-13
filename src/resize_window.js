window.onload = function(){
	middle_width  = (window.outerWidth  - window.innerWidth);
	middle_height = (window.outerHeight - window.innerHeight);

	w = 810 + middle_width;
	h = 960 + middle_height;

	window.top.resizeTo(w,h);
	alert('innerWidth: '  + window.innerWidth  + '\n' +
          'innerHeight: ' + window.innerHeight+ '\n' +
		  'New Width: ' + w + ' & New Height: ' + h);
};

window.addEventListener('resize', function(){
	if(window.innerWidth !== 810 || window.innerHeight !== 960){
		window_outer_width  = window.outerWidth;
		window_outer_height = window.outerHeight;
		window_inner_width  = window.innerWidth;
		window_inner_height = window.innerHeight;

		w = (window.outerWidth  - window.innerWidth);
		h = (window.outerHeight - window.innerHeight);

		window.top.resizeTo(w,h);

		alert(
			'OuterWidth: '  + window_outer_width  + '\n' +
			'OuterHeight: ' + window_outer_height + '\n' +
			'innerWidth: '  + window_inner_width  + '\n' +
			'innerHeight: ' + window_inner_height + '\n' +
			'New Width: ' + w + ' & New Height: ' + h
		);
	}
}, true);
