/**
 * @license GNU General Public License v2 http://www.gnu.org/licenses/gpl-2.0
 * @author BlueMöhre <bluemoehre@gmx.de>
 * @copyright 2013 BlueMöhre
 * @link http://www.github.com/bluemoehre
 */
(function($){
	$.fn.centerTo = function(refX, refY) {
		var $refX = refX ? $(refX).first() : $(window);
		var $refY = refY ? $(refY).first() : $refX;
		return this.each(function(){
			// ignore text nodes
			if (this.nodeType === 1){
				var $this = $(this);
				var oriPos = $this.css('position');
				var newPos = oriPos == 'static' ? 'absolute' : oriPos;
				var top  = ($refY.innerHeight() - $this.outerHeight()) / 2 + ($refY.offset() ? $refY.offset().top : 0);
				var left = ($refX.innerWidth() - $this.outerWidth()) / 2 + ($refX.offset() ? $refX.offset().left : 0);
				var refCorrect;
				if (newPos == 'fixed'){
					left -= $refX.get(0) != window ? window.pageXOffset : 0;
					top -= $refY.get(0) != window ? window.pageYOffset : 0;
				} else if (newPos == 'relative') {
					refCorrect = $this.offset();
					left -= refCorrect.left;
					top -= refCorrect.top;
				} else if (newPos == 'absolute'){
					refCorrect = $this.offsetParent().offset();
					left -= refCorrect.left;
					top -= refCorrect.top;
					left += $refX.get(0) == window ? window.pageXOffset : 0;
					top += $refY.get(0) == window ? window.pageYOffset : 0;
				}
				$this.css({
					position: newPos,
					top: top,
					left: left,
					width: $this.width(),
					height: $this.height()
				});
			}
		});
	};



}(jQuery));