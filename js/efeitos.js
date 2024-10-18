
/*==SLIDE HOME==*/
$(document).ready(function(e) {
	
/*=====APLICANDO O SLIDE=====*/
	$("#slide").cycle({
		fx:'fade',
		timeout:2000,
	});

/*=====EFEITOS DE SLIDE PARA A PAG SERVIÇOS=====*/

	$(".pronat").click(function(){
		$(".box1").slideToggle("slow");
		$(".box2,.box3,.box4").animate({height:'100%'});
	});
	
	$(".gmarc").click(function(){
		$(".box2").slideToggle("slow");
		$(".box1,.box3,.box4").animate({height:'100%'});
	});
	
	$(".dna").click(function(){
		$(".box3").slideToggle("slow");
		$(".box2,.box1,.box4").animate({height:'100%'});
	});
	
	$(".col").click(function(){
		$(".box4").slideToggle("slow");
		$(".box2,.box3,.box1").animate({height:'100%'});
	});
	


});