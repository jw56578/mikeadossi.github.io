'use strict';

$(document).ready(function(){    

var dHeight = $(this).height()-$(window).height();
  if (dHeight >= $(this).scrollTop()) {
    $('nav').css('background', 'rgba(53,145,204,' + $(this).scrollTop() / dHeight + ')');
  }

});