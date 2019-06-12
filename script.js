jQuery(document).ready(function () {

  $("#sky").draggable({ containment: '.inner-sky-wrapper' });
  
  var inner = $("#sky").draggable({ containment: '.inner-sky-wrapper'}),
      h = inner.height(),
      w = inner.width(),
      outer = $('.sky-wrapper'),
      oH = outer.height(),
      oW = outer.width(),
      iH = h + (h - oH),
      iW = w + (w - oW),
      iT = '-' + ((iH - oH)/2) + 'px',
      iL = '-' + ((iW - oW)/2) + 'px';

  $('.inner-sky-wrapper').css({ width: iW, height: iH, top: iT, left: iL });


});




