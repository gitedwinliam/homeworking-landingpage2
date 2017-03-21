$(document).ready(function(){

$('.readless').hide();

$('.readmore').click(showMore);
$('.readless').click(showLess);
$('.learnmore').click(learnMore);

$('.adUnit').hover(popUpShow, popUpHide);

$(".readmore").click(function(event){
        event.preventDefault();
    });

$(".readless").click(function(event){
        event.preventDefault();
    });

$(".learnmore").click(function(event){
        event.preventDefault();
    });

function popUpShow(){
	$(".popUp").removeClass('hide');
}

function popUpHide(){
	$(".popUp").addClass('hide');
}

function showMore(){
	$('#show-this-on-click').slideDown();
	$('#show-this-on-click').removeClass('hide');
	
	$('.readless').show();
	$('.readmore').hide();
}

function showLess(){
	$('#show-this-on-click').slideUp();
	$('#show-this-on-click').addClass('hide');
	$('.readless').hide();
	$('.readmore').show();
}

function learnMore(){
	$('#learnmoretext').slideDown();
	$('#learnmoretext').removeClass('hide');
	$('.learnmore').hide();
}


});
