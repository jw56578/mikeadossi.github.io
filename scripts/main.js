'use strict';

$(document).ready(function(){
var mq = window.matchMedia("(min-width: 402px)")
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

});