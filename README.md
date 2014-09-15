mp-jQuery-Plugin
================

mpr0xy开发的jQuery插件

##mp-slider
这是一个图片滑动插件.

###用法：
```
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <title>mp-slider</title>
  <script src="http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js"></script>
  <script src="src/jquery.mp-slider.js"></script>
  <link rel="stylesheet" type="text/css" href="src/jquery.mp-slider.css">
  <script type="text/javascript">
    $(function(){
      $(".mp-slider").mpSlider({width: "600px", height: "400px"});
    });
  </script>
</head>
<div>
  <div class="mp-slider" style="margin: 0 auto;">
    <div class="mp-slider-imgs"> 
      <a href="http://www.baidu.com">
        <img alt="one day"  src="http://img2.ph.126.net/fhjCONk0xCxHOos0kS9-lw==/6608609141190105947.jpg"/>
      </a>
      <a href="http://mpr0xy.com">
        <img alt="second day"  src="http://img2.ph.126.net/TD0dsVFeEK5-YHQ4NQk7HA==/104708691354445139.jpg"/>
      </a>
      <a href="http://github.com">
        <img alt="last day"  src="http://img1.ph.126.net/2UW4J4KFOq0iXOSkIgUu_g==/1377538536122836807.jpg"/>
      </a>
    </div>
  </div> 
</div>
</html>
```
###Demo
[mp-slider](http://mpr0xy.github.io/mp-jQuery-Plugin/mp-slider/mp-slider.html)
