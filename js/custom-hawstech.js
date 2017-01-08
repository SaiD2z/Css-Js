jQuery.noConflict();
jQuery(document).ready(function($){
	"use strict";

	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;

	//Menu Hover Start
	function menuHover() {
		
		$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(function(){
			//mouseover 
			if( $(this).find(".megamenu-child-container").length  ){
				$(this).find(".megamenu-child-container").stop(true, true).slideDown('slow', 'easeOutQuad');
			} else {
				$(this).find("> ul.sub-menu").stop(true, true).slideDown('slow', 'easeOutQuad');
			}
		},function(){
				//mouseout
			if( $(this).find(".megamenu-child-container").length ){
				$(this).find(".megamenu-child-container").stop(true, true).hide();
			} else {
				$(this).find('> ul.sub-menu').stop(true, true).hide(); 
			}
		});
	}//Menu Hover End

	if( $("ul#one-page-menu").length ) {

		$('#main-menu').onePageNav({
			currentClass : 'current_page_item',
			filter		 : ':not(.external)',
			scrollSpeed  : 750,
			scrollOffset : 84,
		});
	}

	// Page Loader
	if( mytheme_urls.loadingbar === "enable") {
		if( mytheme_urls.linkedin === "enable") {
			$(window).load(function() {
				$("#loader-wrapper").fadeOut("slow");
			});
		} else {
			Pace.on("done", function(){
				$("#loader-wrapper").fadeOut(500);
				$(".pace").remove();
			});
		}
	}

	//Mobile Menu
	$("#dt-menu-toggle").click(function( event ){
		event.preventDefault();
		var $menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});

	$(".dt-menu-expand").click(function(){
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(300);
			} else {
				$(this).prev('.megamenu-child-container').find('ul:first').slideUp(300);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(300);
			} else{
				$(this).prev('.megamenu-child-container').find('ul:first').slideDown(300);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});

	if( !isMobile ){
		var currentWidth = window.innerWidth || document.documentElement.clientWidth;
		if( currentWidth > 767 ){
			menuHover();
		}
	}


	//UI TO TOP PLUGIN...
	$().UItoTop({ easingType: 'easeOutQuart' });

	// Gallery post format
	if( $("ul.entry-gallery-post-slider").length && $("ul.entry-gallery-post-slider li").length > 1  ) {
		$("ul.entry-gallery-post-slider").bxSlider({auto:false, video:true, useCSS:false, pager:'', autoHover:true, adaptiveHeight:true});
	}

	// FitVids
 	$("div.dt-video-wrap").fitVids();
 	$('.wp-video').css('width', '100%');
 	$('.wp-video-shortcode').css('width', '100%');
 	$('.wp-video-shortcode').css('height', '100%');

	if( $("a[data-gal^='prettyPhoto']").length ) {
		$("a[data-gal^='prettyPhoto']").prettyPhoto({hook:'data-gal',animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false,social_tools: false,deeplinking:false});		
	}
	
	if( ($("ul.portfolio-slider").length) && ( $("ul.portfolio-slider li").length > 1 ) ){
		$("ul.portfolio-slider").bxSlider({auto:false, video:true, useCSS:false, pager:'', autoHover:true, adaptiveHeight:true});
	}
 	

	// Portfolio Sorting
 	if( $("div.sorting-container").length ){

 		$("div.sorting-container a").click(function(e){

			if( $('.portfolio-container .portfolio').hasClass('with-sidebar') ) {

				if( $(".container").width() == 1170 ) {
					var $width = 16;
				}else if( $(".container").width() == 900 ){
					var $width = 13;
				}else if( $(".container").width() == 710 ){
					var $width = 8;
				}else {
					$width = 23;
				}
			} else {

				if( $(".container").width() == 900 ){
					var $width = 17;
				}else if( $(".container").width() == 710 ){
					var $width = 14;
				}else {
					$width = 22;
				}
			}

			$("div.sorting-container a").removeClass("active-sort");
			var selector = $(this).attr('data-filter');
			$(this).addClass("active-sort");

			$(".portfolio-container").isotope({
				filter: selector,
				masonry:{ gutterWidth: $width },
				animationOptions: { duration: 750, easing: 'linear', queue: false  }
			});

 			e.preventDefault();
 		});
 	}

	// Footer Bar Twitter Module
	if( $("#tweets_container .tweet_list li").length > 1 ) {
		$("#tweets_container .tweet_list").carouFredSel({
			width: 'auto',
			height: 'auto',
			scroll: { duration: 1000 },
			direction: 'up',
			items: { height: 'auto', visible: { min: 1, max: 1 }
		}
		});
	}

	// Smartresize
	$(window).smartresize(function(){
		
		$("ul.menu").removeAttr("style");
		
		// Blog isotope
		if( $(".apply-isotope").length ) {
			var $gw = 19;
			var $width = $(".container").width();

			if( $("#primary").hasClass("page-with-sidebar") ) {
				if( $width == 1170 ) {
					$gw = 17;
				}else if( $width == 900 ) {
					$gw = 12;
				}else if( $width == 710 ) {
					$gw = 10;
				}
			} else {
				if( $width == 1170 ) {
					$gw = 24;
				}else if( $width < 1170 && $width > 710 ){
					$gw = 13;
				}else if( $width <= 710 ){
					$gw = 10;
				}
			}

			$(".apply-isotope").isotope({ itemSelector:'.column', transformsEnabled:false, masonry:{ gutterWidth:$gw} });
		}

		// Portfolio Template
		if( $(".portfolio-container").length ){

			if( $('.portfolio-container .portfolio').hasClass('with-sidebar') ) {

				if( $(".container").width() == 1170 ) {
					var $width = 16;
				}else if( $(".container").width() == 900 ){
					var $width = 13;
				}else if( $(".container").width() == 710 ){
					var $width = 8;
				}else {
					$width = 23;
				}
			} else {

				if( $(".container").width() == 900 ){
					var $width = 17;
				}else if( $(".container").width() == 710 ){
					var $width = 14;
				}else {
					$width = 22;
				}
			}

			$(".portfolio-container").isotope({
				filter: '*',
				masonry:{ gutterWidth: $width },
				animationOptions: { duration: 750, easing: 'linear', queue: false  }
			});
		}// Portfolio Template
	});

	//load
	$(window).load(function(){
		
		if( mytheme_urls.stickynav === "enable" ) {
			
			if( $("body").hasClass('page-template-tpl-onepage') ) {
				$("#header-wrapper").sticky({ topSpacing: 0, bottomSpacing: 0 });
			} else {
				var currentWidth = window.innerWidth || document.documentElement.clientWidth;
				
				if(currentWidth > 480 && currentWidth < 767) {
				} else {
					$("#header-wrapper").sticky({ topSpacing: 0, bottomSpacing: 0 });
				}
			}
		}

		// Blog isotope
		if( $(".apply-isotope").length ) {
			var $gw = 19;
			var $width = $(".container").width();

			if( $("#primary").hasClass("page-with-sidebar") ) {
				if( $width == 1170 ) {
					$gw = 17;
				}else if( $width == 900 ) {
					$gw = 12;
				}else if( $width == 710 ) {
					$gw = 10;
				}
			} else {
				if( $width == 1170 ) {
					$gw = 24;
				}else if( $width < 1170 && $width > 710 ){
					$gw = 13;
				}else if( $width <= 710 ){
					$gw = 10;
				}
			}

			$(".apply-isotope").isotope({ itemSelector:'.column', transformsEnabled:false, masonry:{ gutterWidth:$gw} });
		}

		// Portfolio Template
		if( $(".portfolio-container").length ){

			if( $('.portfolio-container .portfolio').hasClass('with-sidebar') ) {

				if( $(".container").width() == 1170 ) {
					var $width = 16;
				}else if( $(".container").width() == 900 ){
					var $width = 13;
				}else if( $(".container").width() == 710 ){
					var $width = 8;
				}else {
					$width = 23;
				}
			} else {

				if( $(".container").width() == 900 ){
					var $width = 17;
				}else if( $(".container").width() == 710 ){
					var $width = 14;
				}else {
					$width = 22;
				}
			}

			$(".portfolio-container").isotope({
				filter: '*',
				masonry:{ gutterWidth: $width },
				animationOptions: { duration: 750, easing: 'linear', queue: false  }
			});
		}// Portfolio Template
		
		//RECENT PORTFOLIO...
		if($('.carousel-wrapper').length) {
			$('.carousel-wrapper').each(function(){
				var $this = $(this).find('.carousel_items');
				$this.carouFredSel({
					responsive: true,
					auto: false,
					width: '100%',
					prev: jQuery(this).find('.prev-arrow'),
					next: jQuery(this).find('.next-arrow'),
					height: 'auto',
					scroll: 1,
					items: { width: $this.find(".portfolio").width(), visible: { min: 1, max: 3 } }
				});
			});
		}				
	});
	

	/* SELECT DROPDOWN ARROW FIX */
	$("select").each(function(){
		$(this).wrap( '<span class="selection-box"></span>' );
	});

	/* Mailchimp */
	$(document).on("click", ".newsletter-form > .nl-submit", function(e){
		var $this = $(this);
		var $key = $this.parent("form").find("[name='mythem_mc_api_kry']").val();
		var $email = $this.parent("form").find("[name='mythem_mc_emailid']").val();
		var $list_id = $this.parent("form").find("[name='mythem_mc_listid']").val();

		$.ajax({
			url: mytheme_urls.ajaxurl,
			data: { action: 'mailchimp_subscribe', 'key' : $key, 'email' : $email, 'list' : $list_id  },
			success: function (response) {
				$this.parent("form").next('.zn_mailchimp_result').html(response);
				$this.parent("form").next('.zn_mailchimp_result').slideDown('slow');
				if (response.match('success') != null) $this.slideUp('slow');
			}
		});

		e.preventDefault();
	});
	/* Mailchimp */
});
