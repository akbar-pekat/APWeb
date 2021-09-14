if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$(".desktop").hide();
	$(".mobile").show();
} else {
	$(".desktop").show();
	$(".mobile").hide();
}

setTimeout(function() {
    $(".loading").fadeOut();
}, 2000);