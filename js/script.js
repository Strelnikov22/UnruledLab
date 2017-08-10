$(document).ready(function(){

	$(window).scroll(function(){
        a=$(this).scrollTop();
       
        
        if(a>80){
            $('header').addClass('menu-fixed');
        }
        else{
            $('header').removeClass('menu-fixed');
        }
        if(a>80){
            $('.fixed-block').addClass('menu-fixed-sidebar');
        }
        else{
            $('.fixed-block').removeClass('menu-fixed-sidebar');
        }
});
	
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -33, lng: 151},
    disableDefaultUI: true
  });
};

	})