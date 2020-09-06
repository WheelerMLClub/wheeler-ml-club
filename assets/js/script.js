/* custom JS */
$(document).ready(function() {
    var $window = $(window);

    $window.on('scroll resize', function() {
        check_if_in_view('.slide-up', 'do-slide-up');
        check_if_in_view('.grow-animation', 'do-grow-animation');
        check_if_in_view('.slide-left', 'do-slide-left');
        check_if_in_view('.slide-right', 'do-slide-right');
    });

    $window.trigger('scroll');

    function check_if_in_view(elementToCheck, animationToAdd) {
        
        $(elementToCheck).each(function(i, el) {
            var el = $(el);
            if (checkVisible(el)) {
              el.addClass(animationToAdd); 
            } 
          });
        
    }

    
    function checkVisible(elm) {
      var rect = elm[0].getBoundingClientRect();
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }


});


/*(function($) {

    /*
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     *
  
    $.fn.visible = function(partial) {

      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            subtracting   = ($w.height() <= 100) ? $w.height() : 0;
            _top          = $t.offset().top - subtracting,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);*/