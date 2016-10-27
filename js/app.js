$(document).ready(function(){

    var menu = $(".menu");
    var btn = $(".button");

    btn.on("click",function(){
        menu.toggle();
        console.log("show");
    });


    $(".menu-li").find("a").on("click", function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('body').animate({
            scrollTop: $anchor.top
        },1000);


        // menu.toggle();

    });


    $(".logo").on("click", function(){
        $('body').animate({
            scrollTop: 0
        },1000)

    });


    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBi5qs2n_fdJiot_Ak2-hhRGl_cZH99GM8", function(){

        initMap();
    });



    function initMap() {
        var wroclaw = {lat: 51.110148, lng: 17.030487};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: wroclaw
        });
        var marker = new google.maps.Marker({
            position: wroclaw,
            map: map
        });
    }


});
