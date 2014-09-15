/**
nmae: mp-slider
author: mpr0xy

**/
$(function(){
  (function($){
    $.fn.extend({
      "mpSlider": function(){
        var options = (typeof arguments[0] != 'object') ? {} : arguments[0];
        options = $.extend({
          "width": "520px",
          "height": "280px",
          "time": 4000
        }, options);
        var width = parseInt(options.width);
        var height = parseInt(options.height);

        var $imgs = $("img", this);
        var imgsLength = $imgs.length;
        var $self = $(this);
        var $imgsDiv = $(".mp-slider-imgs", this);

        $self.css(options);
        $imgs.addClass('mp-slider-img');
        $imgs.css(options);
        $imgsDiv.css("left", "-" + options.width);

        $self.append('<div class="mp-slider-prev-and-next">\
                        <div class="mp-slider-prev" href="javascript:;">\
                          <i class="slider-click"></i>\
                        </div>\
                        <div class="mp-slider-next" href="javascript:;">\
                          <i class="slider-click"></i>\
                        </div>\
                      </div>');

        var $mpSliderNav = $('<ul class="mp-slider-nav"></ul>');
        var liItem = "";
        for (var i = 0; i < imgsLength; i++){
          liItem += '<li class="mp-slider-nav-item"></li> ';
        }
        $mpSliderNav.append(liItem);
        $self.append($mpSliderNav);
        
        var $mpSliderPrevNext = $(".mp-slider-prev-and-next");
        var $mpSliderNav = $(".mp-slider-nav");

        $mpSliderPrevNext.css({
          "width": options.width,
          "top": String((height - 40) / 2) + "px"
        });

        $mpSliderNav.css("margin-left", -($mpSliderNav.width() / 2));
        $mpSliderPrevNext.hide();

        // hover
        $self.hover(function() {
          /* Stuff to do when the mouse enters the element */
          $mpSliderPrevNext.show();
        }, function() {
          /* Stuff to do when the mouse leaves the element */
          $mpSliderPrevNext.hide();
        });

        // slider logic
        var $sliderImgDiv = $(".mp-slider-imgs");
        var $sliderImgs = $(".mp-slider img");
        width = -width;
        var index = 1;
        var imgsX = width;

        
        $sliderImgDiv.find("a").last().clone().insertBefore($sliderImgDiv.find("a").first());
        $sliderImgDiv.append($sliderImgDiv.find("a").eq(1).clone());
        hoverNav(0);
        // prev and next click event
        $(".mp-slider-prev").on("click", function(event) {
          var self = $(this);
          var $sliderImgDiv = $(".mp-slider-imgs");
          $sliderImgDiv.stop(true, true);
          if (index == 0){
            $sliderImgDiv.animate({"left": String(imgsLength * width) + "px"}, 0);
            index = imgsLength;
            imgsX = imgsLength * width;
            $sliderImgDiv.stop(true, true);
            $(this).trigger('click');
          }
          else{
            index--;
            imgsX = imgsX - width;
            $sliderImgDiv.animate({"left":String(imgsX) + "px"}, 500);
            hoverNav(index - 1);
          }
        });
        $(".mp-slider-next").on("click", function(event) {
          var self = $(this);
          var $sliderImgDiv = $(".mp-slider-imgs");
          $sliderImgDiv.stop(true, true);
          if (index == imgsLength + 1){
            $sliderImgDiv.animate({"left": String(width) + "px"}, 0);
            index = 1;
            imgsX = width;
            $sliderImgDiv.stop(true, true);
            $(this).trigger('click');
          }
          else{
            index++;
            imgsX = imgsX + width;
            $sliderImgDiv.animate({"left":String(imgsX) + "px"}, 500);
            hoverNav(index - 1);
          } 
        });

        // slider nav 
        $(".mp-slider-nav li").hover(function() {
          /* Stuff to do when the mouse enters the element */
          var selfIndex = $(".mp-slider-nav li").index(this);
          hoverNav(selfIndex);
          var $sliderImgDiv = $(".mp-slider-imgs");
          if (index == 0){
            $sliderImgDiv.animate({"left": String(imgsLength * width) + "px"}, 0);
            index = imgsLength;
            imgsX = imgsLength * width;
            $sliderImgDiv.stop(true, true);
          }
          if (index == imgsLength + 1){
            $sliderImgDiv.animate({"left": String(width) + "px"}, 0);
            index = 1;
            imgsX = width;
            $sliderImgDiv.stop(true, true);
          }
          $sliderImgDiv.animate({"left": String((selfIndex + 1) * width) + "px"}, 500);        
        }, function() {
          /* Stuff to do when the mouse leaves the element */
          
        });

        function hoverNav (index) {
          if (index == imgsLength){
            index = 0;
          }
          $(".mp-slider-nav li").removeClass("mp-slider-nav-li-hover")
            .eq(index).addClass("mp-slider-nav-li-hover");
        } 

        // auto slider
        $self.hover(function() {
          /* Stuff to do when the mouse enters the element */
          if(sliderTimer){
            clearInterval(sliderTimer);
          }
        }, function() {
          /* Stuff to do when the mouse leaves the element */
          sliderTimer = setInterval(function(){
            $(".mp-slider-next").trigger('click');
          }, options.time);
        }).trigger('mouseleave');

      }
    });
    
  })(jQuery); 
})
