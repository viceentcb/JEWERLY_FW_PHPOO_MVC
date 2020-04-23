<!DOCTYPE html>
<html>

<head>
   <!--meta tags -->
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="keywords" content="Jeweler Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
         Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
   <script>
      addEventListener("load", function() {
         setTimeout(hideURLbar, 0);
      }, false);

      function hideURLbar() {
         window.scrollTo(0, 1);
      }
   </script>
   <!--//meta tags ends here-->
   <!--booststrap-->
   <link href="<?php echo CSS_PATH ?>bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
   <!--//booststrap end-->
   <!-- mini iconos services -->
   <link href="<?php echo CSS_PATH ?>fontawesome-all.min.css" rel="stylesheet" type="text/css" media="all">
   <!-- //mini iconos services -->
   <!--gallery-->
   <link rel="stylesheet" href="<?php echo CSS_PATH ?>lightbox.css">
   <!--//gallery-->
   <!--gallery-hover-->
   <link href="<?php echo CSS_PATH ?>set1.css" rel="stylesheet" type="text/css" />
   <!--//gallery-hover-->
   <!--stylesheets-->
   <link href="<?php echo CSS_PATH ?>style.css" rel="stylesheet" type="text/css" media="all" />
   <!--//stylesheets-->
   <link href="//fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet">
   <link href="//fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700" rel="stylesheet">

</head>

<body>
   <script src="<?php echo JS_PATH ?>responsiveslides.min.js"></script>
   <script>
      // You can also use "$(window).load(function() {"
      $(function() {
         // Slideshow 4
         $("#slider4").responsiveSlides({
            auto: true,
            pager: false,
            nav: true,
            speed: 900,
            namespace: "callbacks",
            before: function() {
               $('.events').append("<li>before event fired.</li>");
            },
            after: function() {
               $('.events').append("<li>after event fired.</li>");
            }
         });

      });
   </script>
   <!-- start-smoth-scrolling -->
   <script src="<?php echo JS_PATH ?>move-top.js"></script>
   <script src="<?php echo JS_PATH ?>easing.js"></script>
   <script>
      jQuery(document).ready(function($) {
         $(".scroll").click(function(event) {
            event.preventDefault();
            $('html,body').animate({
               scrollTop: $(this.hash).offset().top
            }, 900);
         });
      });
   </script>
   <!-- start-smoth-scrolling -->
   <!-- <script src='view/js/jquery-2.2.3.min.js'></script> -->
   <!-- here stars scrolling icon -->
   <script>
      $(document).ready(function() {

         var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear'
         };


         $().UItoTop({
            easingType: 'easeOutQuart'
         });

      });
   </script>
   <!-- //here ends scrolling icon -->

   <!-- <script src="module/menu/model/menu.js"></script> -->
   <!-- <script src="module/login/model/login.js"></script> -->
   <!-- <script src="view/activity/activity.js"></script> -->


   <!-- Archivos para no subir al github -->
   <!-- <script src="model/gitignore.js"></script> -->

</body>

</html>