$(function(){
    $(".navmain a").bind("click", function (event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var target = $(this).attr("href");
        $("html, body").stop().animate({
                scrollLeft: $(target).offset().left,
                scrollTop: $(target).offset().top
            }, 500);
        if(target == '#landing'){
        	$('rain').delay(500).queue( function(next){ 
		        $(this).show(); 
		        next(); 
		      });
        }else{
        	$('rain').delay(500).queue( function(next){ 
		        $(this).hide(); 
		        next(); 
		      });
        }
        $('.navmain a').removeClass('highlight');
        $(this).addClass('highlight');
    });
});