/**

**/
;$(function(){
  ;(function($) {
  $.fn.extend({
    "mpSlider":function(options){
      // css object start
      var mpSliderCss = {
          "position": "relative",
          "width": "400px",
          "height": "250px",
          "overflow": "hidden",
      };
      var mpSliderImgCss = {
          "width": "400px",
          "height": "250px"
      };
      var mpSliderRestCss = {
          "padding": "0px",
          "margin": "0px"
      };
      var mpSliderDescriptionCss = {
          "position": "absolute",
          "bottom": "0",
          "opacity": "0.4",
          "width": "400px",
          "font-size": "0px"
      }; 
      var mpSliderItemCss =  {
          "display": "inline-block",
          "width": "80px",
          "text-align": "center",
          "background-color": "rgb(13, 227, 126)",
          "font-size": "20px",
          "cursor": "pointer",
          "overflow": "hidden",
          "height": "24px",
          "box-shadow": "4px 4px 20px #000000"
      };
      var mpSliderDescriptionOnCss = {
          "background-color": "#f4f4f4"
      };
      // css object end
      options = $.extend({
        mpSliderCss: mpSliderCss,
        mpSliderImgCss: mpSliderImgCss,
        mpSliderRestCss: mpSliderRestCss,
        mpSliderDescriptionCss: mpSliderDescriptionCss,
        mpSliderItemCss: mpSliderItemCss,
        mpSliderDescriptionOnCss: mpSliderDescriptionOnCss,
        width: "400px",
        height: "250px"
      }, options);
      
      options.mpSliderCss.width = options.width;
      options.mpSliderCss.height = options.height;

      options.mpSliderImgCss.width = options.width;
      options.mpSliderImgCss.height = options.height;

      var $mpSlider = $(this);
      var $imgs = $("img", this); 
      var $ulElement = $("<ul class='mp-slider-description'/>");
      var liElements = "";
      var sliderTimer = null;
      var index = 1;
      var imgsLength = $imgs.length;
      
      $mpSlider.css(options.mpSliderCss);
      $imgs.css(options.mpSliderImgCss);
      
      $imgs.each(function(index){
        liElements += '<li class="mp-slider-item">' + $(this).attr("alt") + '</li>';
      });

      // mp-slider-item width
      var sliderWidth = $mpSlider.width();
      var mpSliderItemWidth = sliderWidth / imgsLength;
      var $liElements = $(liElements)

      options.mpSliderItemCss.width = mpSliderItemWidth;
      $liElements.css(options.mpSliderItemCss);
      $ulElement.append($liElements);

      $ulElement.css(options.mpSliderDescriptionCss);
      $mpSlider.append($ulElement);

      $("ul", this).css(options.mpSliderRestCss);
      $("li", this).css(options.mpSliderRestCss);

      var $mpSliderItem = $(".mp-slider-item");

      // bind mouseover event
      $mpSliderItem.on("mouseover", function(event) {
        /* Act on the event */
        index = $mpSliderItem.index(this);
        showImg(index);
        index++;
      });

      // make index img show and others hide
      function showImg(index){
        $(".mp-slider-img").eq(index).stop(true, true)
          .show()
          .animate({"opacity": "1"}, 1000/2)
          .siblings("img").css("opacity", "0.7").hide();
        
        $mpSliderItem.removeAttr("style")
          .css(options.mpSliderItemCss)
          .eq(index).css(options.mpSliderDescriptionOnCss)
      }

      // auto slider
      $mpSlider.hover(function() {
        /* Stuff to do when the mouse enters the element */
        if(sliderTimer){
          clearInterval(sliderTimer);
        }
      }, function() {
        /* Stuff to do when the mouse leaves the element */
        sliderTimer = setInterval(function(){
          showImg(index);
          index++;
          if (index == imgsLength){
            index = 0;
          }
        }, 4000)
      }).trigger('mouseleave');

    }
  });
  
})(jQuery);