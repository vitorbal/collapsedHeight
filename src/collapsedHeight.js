(function( $ ) {

  $.fn.collapsedHeight = function() {

    var $target = this,
      $wrapper = $('<div style="border: 1px solid transparent;" />'),
      result = $target.wrap($wrapper).parent().height();

      $target.unwrap();
      return result;
  }

})( jQuery );
