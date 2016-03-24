$(document).ready(function() {

	$(".carousel__list").customCarousel({
		nextSelector: $(".carousel__arrow_next"),
        prevSelector: $(".carousel__arrow_prev"),
        changeSelector: ".carousel__control-item",
        afterSlideCallback: function(ui){
        	var self = $(ui.carouselItems.context).closest(".carousel");
        	self.find(".carousel__control-item").removeClass("carousel__control-item_active");
        	self.find(".carousel__control-item").eq(ui.currentIndex).addClass("carousel__control-item_active");
        }
	});
	
});