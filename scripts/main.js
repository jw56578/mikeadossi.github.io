'use strict';

$(document).ready(function(){

var scrollTopValue;
var portfolioDiv = $('#portfolioDiv')
var updatePosition = function(){
	console.log(portfolioDiv.position());
	console.log($(window).scrollTop())
	scrollTopValue = $(window).scrollTop()

	if(scrollTopValue >= 382){
		$('#nav').css('background-color','steelblue');
		$('.navItem').css('color','white')
	} else{
		$('#nav').css('background-color','transparent');
		$('.navItem').css('color','lightgrey')
	}
}

var throttled = _.throttle(updatePosition, 300)

window.onscroll = throttled;

/*var dHeight = $(this).height()-$(window).height();
  if (dHeight >= $(this).scrollTop()) {
    $('nav').css('background', 'rgba(53,145,204,' + $(this).scrollTop() / dHeight + ')');
  }
*/
});