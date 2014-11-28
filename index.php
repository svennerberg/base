<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Base/title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="apple-touch-icon" href="apple-touch-icon.png">
		<!-- Place favicon.ico in the root directory -->
		<!-- build:css /css/app.min.css -->
    		<link rel="stylesheet" href="css/app.css">
    	<!-- /build -->
	</head>
	<body>
		<div class="wrapper" id="top">
			<? include("partials/_siteheader.php"); ?>
			<? include("partials/_hero.php"); ?>
			<? include("partials/_section1.php"); ?>
			<? include("partials/_section2.php"); ?>
			<? include("partials/_sitefooter.php"); ?>
		</div>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.js"><\/script>')</script>
		<!-- build:js /js/app.min.js -->
			<script src="js/app.js"></script>
		<!-- /build -->

		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<script>
			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X','auto');ga('send','pageview');
		</script>
	</body>
</html>
