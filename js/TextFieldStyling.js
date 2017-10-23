function JqueryInputTheme(){  
	$("input").css({
		"border": "none",
		"border-bottom": "solid 2px #c9c9c9",
		"padding-top": "0px", 
		"padding-bottom": "15px", 
		"transition": "border 0.3s",
		"background-color": "rgba(0,0,0,0.0)" ,
		"width" : "100%",
		"font-family" : "'Raleway', sans-serif",
		"font-weight": "600",
		// "margin-bottom" : "20px",
		"box-sizing" : "border-box"});

	$("button").css({
		"padding":"10px",
		"background-color": "#ff7400",
		"border-radius": "4px",
		"border": "none",
		"color":"white",
		"box-shadow": "2px 2px 10px rgba(0, 0, 0, .3)",
		"font-family" : "'Raleway', sans-serif",
		"font-weight": "600",
		"-webkit-transition" : "all 0.5s",
		"-moz-transition" : "all 0.5s",
		"transition" : "all 0.5s"
	});

	$(".submit").css({
		"background":"#ff8e00",
	});

	$("textarea").css({
		"width": "100%", 
		"height" : "100px",
		"max-width" : "100%",
		"max-height" : "100px",
		"box-sizing" : "border-box",
		"border" : "solid 2px #c9c9c9",
		"outline-width" : "0",
		"resize" : "none",
		"transition": "border 0.3s",
		"border-radius": "4px"
	});

	$("input").focus (function () {
		$(this).css({"border-bottom": "solid 2px #969696", "outline-width": "0"});
	});

	$("input").focusout(function(){
		$(this).css({"border-bottom": "solid 2px #c9c9c9"});
	});

	$(".clear").click(function() {
		$('input').val("");
		$('textarea').val("");
		$(".helperText").hide(1000); 
		$(".helperText1").hide(); 
	});

	$("button").focus (function () {
		$(this).css({"outline":"none"});
	});

	$("button").hover(function() {
		$(this).css({
			"background" : "#ffc687",
			"color": "white"});
	}, function() {
		$(this).css({
			"background" : "#ff7400",
			"color": "white"});
	});

	$(".submit").hover(function() {
		$(this).css({
			"background" : "#ffc687",
			"color": "white"});
	}, function() {
		$(this).css({
			"background" : "#ff8e00",
			"color": "white"});
	});

	$("textarea").focus (function () {
		$(this).css({"border": "solid 2px #969696", "outline-width": "0"});
	});

	$("textarea").focusout(function(){
		$(this).css({"border": "solid 2px #c9c9c9"});
	});

	$("label").css({
		"color":"#444444",
		"font-size" : "17px",
		"font-family" : "'Raleway', sans-serif",
		"font-weight": "600",
	});

	$(".helperText").css({
		"color":"red",
		"font-size" : "12px"
	});

	$(".helperText1").css({
		"color":"red",
		"font-size" : "12px"
	});

	$(".row").css({
		"margin-bottom" : "20px"
	});

	$(".helperText").hide(); 

	$(".helperText1").hide(); 

	$(".password").keypress(function() {
	    if($(this).val().length < 8) {
	         $(".helperText").show(100);
	    } else {
	        $(".helperText").hide(1000); 
	    }
	});

	$(".submit").click(function() {
	    if($('.email').val() == "" || $('.password').val() == "") {
	    	$(".helperText1").show(100);
	    } else {
	    	$(".helperText1").hide(1000); 
	    }
	});
}