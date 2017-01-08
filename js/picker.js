jQuery(document).ready(function($){

  "use strict";
  var $picker_container = jQuery("div.dt-style-picker-wrapper"),
      $theme_url = mytheme_urls.theme_base_url,
      $fw_url = mytheme_urls.framework_base_url,
      $patterns_url = $fw_url+"theme_options/images/patterns/";
  

  if ( $.cookie('control-open') === '1' ) {
    $picker_container.animate({left: -300});
    $('a.style-picker-ico').addClass('control-open');
  }

  //Applying Cookies
  if($.cookie("raven_skin")!== null ) {

    if( mytheme_urls.is_admin === '1' ) {
      $.cookie("raven_skin",mytheme_urls.skin, { path: '/' });
    }

    var $href = $("link[id='skin-css']").attr("href");
    $href = $href.substr(0,$href.lastIndexOf("/"));
    $href = $href.substr(0,$href.lastIndexOf("/"))+"/"+$.cookie("raven_skin")+"/style.css";
    
    $("link[id='skin-css']").attr("href",$href);
    $("ul.color-picker a[id='"+$.cookie("raven_skin")+"']").addClass("selected");
  }else{
	$("ul.color-picker a:first").addClass("selected");
  }
  
  
  //1. Applying Layout & patterns
  if($.cookie("raven_layout") === "boxed"){
	  
    $("ul.layout-picker li a").removeAttr("class");
    $("ul.layout-picker li a[id='"+$.cookie("raven_layout")+"']").addClass("selected");

	  $("div#pattern-holder").removeAttr("style");
    $('body').addClass('boxed');
	
    if($.cookie("raven_pattern")) {
	    var $i = $.cookie("raven_pattern");
    	var $img = $patterns_url+$i;
        $('body').css('background-image', 'url('+$img+')');
    	$("ul.pattern-picker a[data-image='"+$.cookie("raven_pattern")+"']").addClass('selected');
	   }
  }//Applying Cookies End
  
  //Picker On/Off
  $("a.style-picker-ico").click(function(e){
    var $this = $(this);	
    
    if($this.hasClass('control-open')){
      $picker_container.animate({left: 0},function(){$this.removeClass('control-open');});
      $.cookie('control-open', 0, { path: '/' });	
    }else{
      $picker_container.animate({left: -300},function(){$this.addClass('control-open');});
      $.cookie('control-open', 1, { path: '/' });
	  }
	  e.preventDefault();
  });//Picker On/Off end

  //Layout Picker
  $("ul.layout-picker a").click(function(e){
    var $this = $(this);
    $("ul.layout-picker a").removeAttr("class");
    $this.addClass("selected");
    $.cookie("raven_layout", $this.attr("id"), { path: '/' });

    if( $.cookie("raven_layout") === "boxed") {
        $("body").addClass("boxed");
        $("div#pattern-holder").slideDown();

         if( $.cookie("raven_pattern")  ) {
          $("ul.pattern-picker a[data-image='"+$.cookie("raven_pattern")+"']").addClass('selected');
          $img = $patterns_url+$.cookie("raven_pattern");
          $('body').css('background-image', 'url('+$img+')');
         }
    } else {
        $("body").removeAttr("style").removeClass("boxed");
        $("div#pattern-holder").slideUp();
        $("ul.pattern-picker a").removeAttr("class");
    }
    window.location.href = location.href;
    e.preventDefault();
  });//Layout Picker End

  //Pattern Picker
  $("ul.pattern-picker a").click(function(e){
    
    if($.cookie("raven_layout") === "boxed"){
      var $this = $(this);
      $("ul.pattern-picker a").removeAttr("class");
      $this.addClass("selected");
      $.cookie("raven_pattern", $this.attr("data-image"), { path: '/' });
      var $img = $patterns_url+$.cookie("raven_pattern");
      $('body').css('background-image', 'url('+$img+')');
    }
    e.preventDefault();
  });//Pattern Picker End

  //Color Picker
  $("ul.color-picker a").click(function(e){
    var $this = $(this);
    $("ul.color-picker a").removeAttr("class");
    $this.addClass("selected");
    $.cookie("raven_skin", $this.attr("id"), { path: '/' });
    $href = $("link[id='skin-css']").attr("href");
    $href = $href.substr(0,$href.lastIndexOf("/"));
    $href = $href.substr(0,$href.lastIndexOf("/"))+"/"+$this.attr("id")+"/style.css";
    $("link[id='skin-css']").attr("href",$href);
    e.preventDefault();
  });//Color Picker End
});
