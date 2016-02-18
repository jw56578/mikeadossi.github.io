'use strict';

$(document).ready(function(){
var mq = window.matchMedia("(min-width: 870px)")
var scrollTopValue;
var portfolioDiv = $('#portfolioDiv')
var updatePosition = function(){
	console.log(portfolioDiv.position());
	console.log($(window).scrollTop())
	scrollTopValue = $(window).scrollTop()

	if(scrollTopValue >= 382){
		$('#nav').css('background-color','#1E90FF');
		$('.navItem').css('color','white')
	} else{
		$('#nav').css('background-color','transparent');
		$('.navItem').css('color','lightgrey')
	}
//var mq(above) and mq.matches(below) are instrumental in getting desired scrolling effects.
	if((mq.matches) && (scrollTopValue < 382)){
		$('#nav').css('background-color','transparent');
		$('.navItem').css('color','lightgrey');
	}else if((mq.matches) && (scrollTopValue >= 382)){
		$('#nav').css('background-color','#1E90FF');
		$('.navItem').css('color','white')
	}else if (scrollTopValue >= 382){
		$('#nav').css('background-color','#1E90FF');
		$('.navItem').css('color','white')
	} else{
		$('#nav').css('background-color','#1E90FF');
		$('.navItem').css('color','lightgrey')
	} 
}

var throttled = _.throttle(updatePosition, 300)

window.onscroll = throttled;


// 

/*$(function() {
    $('body').on('click', '#aboutLink a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}); */


/*
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(#aboutMe);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1500, 'easeInOutExpo', function () {
	        window.location.hash = target;
	    });
	});
*/
	$('a[href^="#"]').click(function (e) {
	    
	    var target = $(this).attr('href');
	    var strip = target.slice(1);
	    var anchor = $("a[name='" + strip + "' ]");

	    e.preventDefault();

	    $('html, body').animate({

	        scrollTop: anchor.offset().top
	        
	    },'slow');

	});


});
