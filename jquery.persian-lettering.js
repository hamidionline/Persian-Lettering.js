/*global jQuery */
/*
* Persian-Lettering.JS 1.0.0
* by Mojtaba Taheri (http://mojtaba-taheri.ir)
*/
(function($){
	function injector(t, splitter, klass, after) {
		var text = t.text()
		, a = text.split(splitter)
		, inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
			});
			t.attr('aria-label',text)
			.empty()
			.append(inject)

		}
	}


	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		//Kerning Persian and Arabic typography are different from latin languages.
		//Some letters are connected to the text letters, some are not.
		//so we have to apply kerning for each LIGATURE instead of each letter.
		//you can divide your Persian or Arabic text to ligatures using the following method:
		pligatures : function() {
			return this.each(function() {
				ptext = $(this).text();
				ptext = ptext.replace(/([آادذرزژو.،:؛؟ ])/g , '$1↔').replace(/([. ])/g, '↔$1').replace(/↔↔/g, '↔');
				injector($(this).text(ptext), '↔', 'plig', '');
			});
		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);