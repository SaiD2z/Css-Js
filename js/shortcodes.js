jQuery(document).ready(function() {

	if( jQuery("ul.onepage").length ){

		jQuery("ul.onepage").each(function(){

			jQuery(this).onePageNav({
				currentClass: 'current_page_item',
				filter: ':not(.external)',
				scrollOffset:150
			});
		});
	}

	//parallax
	jQuery('.dt-sc-parallax-section').each(function(){
		jQuery(this).bind('inview', function (event, visible){
			if(visible == true) {
				jQuery(this).parallax("50%", 0.3, true);
			} else {
				jQuery(this).css('background-position','');
			}
		});
	});

	//Accordion & Toggle
	jQuery('.dt-sc-toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
	jQuery('.dt-sc-toggle').click(function(){ jQuery(this).next('.dt-sc-toggle-content').slideToggle(); });
	
	jQuery('.dt-sc-toggle-set').each(function(){
		var $this = jQuery(this),
		    $toggle = $this.find('.dt-sc-toggle-accordion');
			
			$toggle.click(function(){
				if( jQuery(this).next().is(':hidden') ) {
					$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
					jQuery(this).toggleClass('active').next().slideDown();
				}
				return false;
			});
			
			//Activate First Item always
			$this.find('.dt-sc-toggle-accordion:first').addClass("active");
			$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
  	});//Accordion & Toggle

	//Tooltip
	 if(jQuery(".dt-sc-tooltip-bottom").length){
		 jQuery(".dt-sc-tooltip-bottom").each(function(){ jQuery(this).tipTip({maxWidth: "auto"}); });
	 }
	 
	 if(jQuery(".dt-sc-tooltip-top").length){
		 jQuery(".dt-sc-tooltip-top").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	 }
	 
	 if(jQuery(".dt-sc-tooltip-left").length){
		 jQuery(".dt-sc-tooltip-left").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	 }
	 
	 if(jQuery(".dt-sc-tooltip-right").length){
		 jQuery(".dt-sc-tooltip-right").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	 }//Tooltip End	

	/* Progress Bar */
	 animateSkillBars();
	 animateSection();
	 jQuery(window).scroll(function(){ 
	 	animateSkillBars();
	 	animateSection();
	 });

	 function animateSection(){
	 	 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
	 	 jQuery('.animate'+applyViewPort).each(function(){
	 	 	var $this = jQuery(this),
	 	 		$animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
	 	 	var	$delay = ( $this.data("delay") !== undefined ) ? $this.data("delay") : 300;

	 	 	if( !$this.hasClass($animation) ){
	 	 		setTimeout(function() { $this.addClass($animation);	},$delay);
	 	 	}
	 	 });
	 }
	 
	 function animateSkillBars(){
		 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
		 
		 jQuery('.dt-sc-progress'+applyViewPort).each(function(){
			 var progressBar = jQuery(this),
			 	 progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
				 
				 if (!progressBar.hasClass('animated')) {
					 	progressBar.addClass('animated');
						progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
				 }
    	 });
  	}/* Progress Bar End */

  //Divider Scroll to top
  jQuery("a.scrollTop").each(function(){
    jQuery(this).click(function(e){
      jQuery("html, body").animate({ scrollTop: 0 }, 600);
      e.preventDefault();
    });
  });//Divider Scroll to top end

  // Tabs Shortcodes
  "use strict";
  if(jQuery('ul.dt-sc-tabs').length > 0) {
    jQuery('ul.dt-sc-tabs').tabs('> .dt-sc-tabs-content');
  }
  
  if(jQuery('ul.dt-sc-tabs-frame').length > 0){
    jQuery('ul.dt-sc-tabs-frame').each(function(){
		jQuery(this).tabs('> .dt-sc-tabs-frame-content');
	});
  }

  if(jQuery('ul.property-search-tabs-frame').length > 0){
    jQuery('ul.property-search-tabs-frame').tabs('> .property-search-tabs-frame-content');
  }
  
  if(jQuery('.dt-sc-tabs-vertical-frame').length > 0){
    
    jQuery('.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content');
    
    jQuery('.dt-sc-tabs-vertical-frame').each(function(){
      jQuery(this).find("li:first").addClass('first').addClass('current');
      jQuery(this).find("li:last").addClass('last');
    });
    
    jQuery('.dt-sc-tabs-vertical-frame li').click(function(){
      jQuery(this).parent().children().removeClass('current');
      jQuery(this).addClass('current');
    });
    
  }
  
  
  /*Tabs Shortcode Ends*/
  
  //Donutchart
  jQuery(".dt-sc-donutchart").each(function(){
  	var $this = jQuery(this);
  	var $bgColor =  ( $this.data("bgcolor").length == 0  ) ? "#f5f5f5" : $this.data("bgcolor");
  	var $fgColor =  ( $this.data("fgcolor").length == 0  ) ?  "#405069" : $this.data("fgcolor");
  	var $textcolor = ( $this.data("textcolor") .length == 0 ) ? "#405069" : $this.data("textcolor") ;

  	$this.donutchart({'size':140, 'fgColor': $fgColor, 'bgColor': $bgColor , 'donutwidth' : 5 , 'textColor':$textcolor});
  	$this.donutchart('animate');
 });//Donutchart Shortcode Ends

	jQuery('.dt-sc-num-count').each(function(){
		jQuery(this).one('inview', function (event, visible) {
			if(visible === true) {
				var val = jQuery(this).attr('data-value');
				jQuery(this).animateNumber({ number: val	}, 2000);
			}
		});
	});

  
  
  jQuery(window).load(function() {

  	   if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
  	   	 jQuery(".dt-sc-fullwidth-video-section").each(function(){
  	   	 	jQuery(this).find(".dt-sc-mobile-image-container").show();
  	   	 	jQuery(this).find(".dt-sc-video").remove();
  	   	 });
  	   }

  	   //Testimonial Carousel
  	   if( jQuery('.dt-sc-testimonial-carousel').length ) {
		  jQuery('.dt-sc-testimonial-carousel').each(function(){
			  var pagger = jQuery(this).parents(".dt-sc-testimonial-carousel-wrapper").find("div.carousel-arrows"),
			      next = pagger.find("a.next-arrow"),
				  prev = pagger.find("a.prev-arrow") ;
			  		
			  jQuery(this).carouFredSel({
				  responsive:true,
				  auto:false,
				  height: 'variable',
				  width:'100%',
				  scroll:2,
				  items:{ 
				  	width:572,
				  	height: 'auto',
				  	visible: {min: 1,max: 2} 
				  },
				  prev:prev,
				  next:next
			  });
		  });
	   }

	   // Team Carousel
		if( jQuery('.dt-sc-team-carousel').length ) {

		jQuery('.dt-sc-team-carousel').each(function(){
			var pagger = jQuery(this).parents(".dt-sc-team-carousel-wrapper").find("div.carousel-arrows"),
				next = pagger.find("a.next-arrow"),
				prev = pagger.find("a.prev-arrow");

				jQuery(this).carouFredSel({
					responsive:true,
				  	auto:false,
				  	height: 'variable',
				  	width:'100%',
				  	scroll:2,
				  	items:{ 
				  		width:572,
				  		height: 'auto',
				  		visible: {min: 1,max: 3} 
				  	},
				  	prev:prev,
				  	next:next
				});
		});
		}

		// Clients Carousel
		if( jQuery('.dt-sc-sponsor-carousel').length) {
		jQuery('.dt-sc-sponsor-carousel').each(function(){
			  var $min = jQuery(this).parents(".dt-sc-sponsor-carousel-wrapper").data('min'),
				  $max = jQuery(this).parents(".dt-sc-sponsor-carousel-wrapper").data('max'),
				  $width = jQuery(this).parents(".dt-sc-sponsor-carousel-wrapper").data('width');

			jQuery(this).carouFredSel({
				  responsive:true,
				  auto:true,
				  width:'100%',
				  height: 'variable',
				  scroll:1,
				  items:{ 
				  	width:$width,
				  	height: 'variable',
				  	visible: {min: $min,max: $max} 
				  },
			});
		});
		}// Clients Carousel End
		
		
		// Domain Carousel
		if(jQuery('.search-carousel').length) {
			
			var $maxvis = 5;
			if(jQuery('.container').width() < 710 && jQuery('.container').width() > 420) {
				$maxvis = 2;
			} else if(jQuery('.container').width() < 420) {
				$maxvis = 1;
			}
			
			jQuery('.search-carousel').each(function(){
				var $this = jQuery(this).find('.carousel_items');
				$this.carouFredSel({
					responsive: true,
					width: '100%',
					circular: false,
					infinite: false,
					auto 	: false,
					prev	: {	
						button	: jQuery(this).find('.search-prev'),
						key		: "left"
					},
					next	: { 
						button	: jQuery(this).find('.search-next'),
						key		: "right"
					},
					height: 'variable',
					circular: false,
					scroll: 1,
					items: { width: $this.find(".column").width(), height: 'variable',  visible: { min: 1, max: $maxvis } }
				});
			});			
		}
		// Domain Carousel End

		if( jQuery('.flexslider').length ){
		jQuery('.flexslider').each(function(){
			$slider = jQuery(this);

			$slider.flexslider({
				animation: $slider.data('animation'),
				easing: $slider.data('easing'),
				direction: $slider.data('direction'),
				slideshow: $slider.data('slideshow'),
				slideshowSpeed:$slider.data('slideshowspeed'),
				animationSpeed: $slider.data('animationspeed'),
				pauseOnHover:$slider.data('pauseonhover'),
				randomize:$slider.data('randomize'),
				reverse:$slider.data('reverse'),
				controlNav: "",
				video:true,
				smoothHeight: true
			});
		});
		}

		if( jQuery('.page-slider-wrapper').length ){
			jQuery('.page-slider-wrapper').each(function(){
				var $this = jQuery(this).find('.page-slider');
				var $pager = jQuery(this).find(".slide-nav-control-wrapper ul");
				$this.carouFredSel({
					responsive: true,
					auto: false,
					width: '100%',
					height: 'auto',
					scroll: { fx: "uncover-fade",	duration: 800},
					items: { width: $this.find("li").width(),  visible: { min: 1, max: 1 } },
					pagination: {
						container: $pager,
						anchorBuilder: false
					}
				});
			});
		}	
  });
});
