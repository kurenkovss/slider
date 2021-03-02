var flagColor;

function getColor(colorValue) {
  	var color = "";
  	if (colorValue < 50){
		redColor = 255;
		greenColor = parseInt(((colorValue * 2) * 255) / 100);
	}
	else{
		redColor = parseInt(((100 - colorValue) * 2) * 255 / 100);
		greenColor = 255;
	}
	  color = "rgb(" + redColor + "," + greenColor + ",0)"; 
  	return(color); 
}

function refreshItem() {
	var coloredSlider = $("#coloredSlider").slider("value");
	var currentColor = getColor(coloredSlider);
	if(flagColor == true){
		$("div p").css({"color": currentColor});
	}else{	
		$("#box").css("background-color", currentColor);
	}
}

$(document).ready(function(){
	$("#coloredSlider").slider({
		orientation: "horizontal",
		range: "min",
		max: 100,
		value: 0,
		slide: refreshItem,
		change: refreshItem
	});
	  
	$(".colorButton").click(function() {
		flagColor = true;
		refreshItem();
    });
    
    $(".colorButtonBackground").click(function() {
        flagColor = false;
		refreshItem();
    });
});