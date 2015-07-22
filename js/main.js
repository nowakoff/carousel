
var backgroundImage = new Array(); 
backgroundImage[0] = "./img/1.jpg";
backgroundImage[1] = "./img/2.jpg";
backgroundImage[2] = "./img/3.jpg";
backgroundImage[3] = "./img/4.jpg";
backgroundImage[4] = "./img/5.jpg";

function displayAllImages() {
 for (i=0;i<backgroundImage.length;i++) {
    document.write("<img id='" + (i+1) + "' src='" + backgroundImage[i] + "'/>");
}
}


sliderInt=1;
sliderNext = 2;

$(document).ready(function(){
	$("#slider>img#1").fadeIn(300);
	startSlider();
	
});

function startSlider(){
	count= $("#slider>img").size();

	loop = setInterval(function(){
	
	if(sliderNext>count){
		sliderNext=1;
		sliderInt=1;
	}

	$("#slider>img").fadeOut(300);
	$("#slider>img#" + sliderNext).fadeIn(300);
	
	sliderInt = sliderNext;
	sliderNext = sliderNext+1;


	}, 3000)

}

function prev(){
	newSlide = sliderInt-1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt+1;
	showSlide(newSlide);
}

function stopLoop(){
	window.clearInterval(loop);


}

function showSlide(Id){
	stopLoop();
	if(Id>count){
		Id=1;
	}else if(Id<1){
		Id = count;
	}

	$("#slider>img").fadeOut(300);
	$("#slider>img#" + Id).fadeIn(300);
	
	sliderInt = Id;
	sliderNext = Id+1;
	startSlider();

}


