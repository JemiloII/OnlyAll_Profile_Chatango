$(function(){
    $(".navmain a").bind("click", function (event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var target = $(this).attr("href");
        $("html, body").stop().animate({
                //scrollLeft: $(target).offset().left,
                scrollTop: $(target).offset().top
            }, 500);
        if(target == '#landing'){
        	$('rain').delay(500).queue( function(next){ 
		        $(this).show();
                player2.playVideo();
		        next(); 
		      });
        }else{
        	$('rain').delay(500).queue( function(next){ 
		        $(this).hide();
                player2.pauseVideo();
		        next();
		      });
        }
        $('.navmain a').removeClass('highlight');
        $(this).addClass('highlight');
    });
});
// $(function(){
//     $(".characters_guys a").bind("click", function (event) {
//         event.preventDefault ? event.preventDefault() : event.returnValue = false;
//         var target = $(this).attr("href");
//         $("#character_overview").stop().animate({
//             var left = $(target).outerWidth() - $($(this)).width();
//             scrollLeft(left);
//             // scrollTop: $(target).offset().top
//         }, 500);
//         $('.characters_guys a').removeClass('highlight');
//         $('.characters_girls a').removeClass('highlight');
//         $(this).addClass('highlight');
//     });
//     $(".characters_girls a").bind("click", function (event) {
//         event.preventDefault ? event.preventDefault() : event.returnValue = false;
//         var target = $(this).attr("href");
//         $("html, body").stop().animate({
//                 scrollLeft: $(target).offset.left,
//                 // scrollTop: $(target).offset().top
//             }, 500);
//         $('.characters_guys a').removeClass('highlight');
//         $('.characters_girls a').removeClass('highlight');
//         $(this).addClass('highlight');
//     });
// });

var resizeViewPort = function(width, height) {
    var tmp = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "scroll";

    if (window.outerWidth) {
        window.resizeTo(
            width + (window.outerWidth - document.documentElement.clientWidth),
            height + (window.outerHeight - document.documentElement.clientHeight)
        );
    } else {
        window.resizeTo(960, 810);
        window.resizeTo(
            width + (960 - document.documentElement.clientWidth),
            height + (810 - document.documentElement.clientHeight)
        );
    }

    document.documentElement.style.overflow = tmp;
};