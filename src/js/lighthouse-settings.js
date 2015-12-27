( function( $ ) {

/***
Primary Nav manu Toggle hide/show
***/

$(window).scroll(function(){
  var sticky = $('#masthead'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('panel-fixed').removeClass('panel-top');
  else sticky.removeClass('panel-fixed').addClass('panel-top');
});


jQuery('#mm-menu li').addClass("mm-menu__item");
jQuery('#mm-menu a').addClass("mm-menu__link");
jQuery('#mm-menu a span').addClass("mm-menu__link-text");
var menu = new Menu;

})(jQuery);


function ivan_live_search_init() {
	//"use strict";
	var searchTopStyle = jQuery('.live-search'),
		searchfullScreen = jQuery('.live-search.search-full-screen-style'),
		searchfullScreenAlt = jQuery('.live-search.search-full-screen-alt-style'),
		formCloseBtn = jQuery('.live-search').find('.form-close-btn');

	jQuery('.live-search .trigger').click( function(e) {

		e.preventDefault();

		var _element = jQuery(this).siblings('.inner-wrapper');

		if ( jQuery(this).parents('.live-search').hasClass('search-top-style') == true ) {
			// jQuery('#all-site-wrapper').css('top', jQuery(this).siblings('.inner-wrapper').outerHeight());
			jQuery('body').addClass('top-search-active');
			if ( jQuery('.iv-layout.header.stuck').length ) {
				jQuery('.iv-layout.header.stuck').addClass('top-search-active');
			};
		};

		_element.toggleClass('visible');

		if (!jQuery(this).parents('.iv-layout').hasClass('top-header') == true) {
			jQuery('.top-header').addClass('beneath');
		} else if (jQuery(this).parents('.iv-layout').hasClass('top-header') == true) {
			jQuery('.top-header').removeClass('beneath');
		}

		setTimeout(function(){
			_element.find('#s').focus().end()
		}, 300);
		
	});

	if ( searchTopStyle.length && jQuery(window).width() >= 992 ) {
		jQuery(window).on('scroll', function() {
			if ( searchTopStyle.find('.inner-wrapper').hasClass('visible') ) {
				searchTopStyle.find('.inner-wrapper').removeClass('visible');
				jQuery('body').removeClass('top-search-active');
			};
		});
	};

	jQuery(document).mouseup( function(e) {

		var _element = jQuery('.inner-wrapper.visible');

		if (!_element.is(e.target) // if the target of the click isn't the container...
			&& _element.has(e.target).length === 0 ) // ... nor a descendant of the container
		{

			if(jQuery(this).parents('.header.simple-left-right').length == 0) {
				if( _element.hasClass('visible') ) {
					_element.removeClass('visible');
				}
			} else {
				if( _element.hasClass('visible') ) {
					_element.removeClass('visible');
				}
			}
			if ( searchTopStyle.length ) {
				// jQuery('#all-site-wrapper').css('top', 0);
				jQuery('body').removeClass('top-search-active');
				if ( jQuery('.iv-layout.header.stuck').length ) {
					jQuery('.iv-layout.header.stuck').removeClass('top-search-active');
				};
			};
		}

	});

	formCloseBtn.on('click', function() {
		var _element = jQuery('.inner-wrapper.visible');
		_element.removeClass('visible');
		if ( jQuery('.iv-layout.header.stuck').length ) {
			jQuery('.iv-layout.header.stuck').removeClass('top-search-active');
		};
		setTimeout(function(){
			jQuery('.top-header').removeClass('beneath')	
		}, 500);
	});

	if ( searchTopStyle.length ) {
		searchTopStyle.find('.form-close-btn').css('right', searchTopStyle.find('form').offset().left);
		formCloseBtn.on('click', function() {
			var _element = jQuery('.inner-wrapper.visible');
			_element.removeClass('visible');
			// jQuery('#all-site-wrapper').css('top', 0);
			jQuery('body').removeClass('top-search-active');
		});
	};


	jQuery('.live-search .submit-form').click( function(e) {

		e.preventDefault();

		jQuery(this).parents('form').submit();

	});
}

ivan_live_search_init();