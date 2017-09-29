$(document).ready(function(){

    var menu = $(".menu");
    var btn = $(".button");

    btn.on("click",function(){
        menu.toggle();
        console.log("show");
    });


    $(".menu-li").find("a").on("click", function(e){

        var $href = $(this).attr('href');
        var $anchor = $($href).offset().top;
        $('html, body').animate({
            scrollTop: $anchor
        },1000);
    });


    $(".logo").on("click", function(){
        $('html, body').animate({
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






    //-------------------verification---------------------

    var name = $("#name");
    var email = $("#email");
    var message = $("#message");
    var submitButton = $("#formButton");



    function verify_name () {

        var name_length = name.val().length;

        if (name_length > 2) {
            console.log("Name OK!");
            return true;
        }
        else{

            console.log("Name NOT ok!");
            return false;
        }
    }




    function verify_mail(){
        var email_length = email.val().length;
        var checkAt = email.val().indexOf("@");

        if(checkAt > -1 && email_length > 4){
            console.log("email OK!");
            return true;
        }
        else{
            console.log("email NOT ok!");
            return false;
        }
    }




    function sendForm (){

        var form = $("form");

        submitButton.on("click", function(e){
            e.preventDefault();

            console.log("click");


            function verify_all (){

                if(verify_mail() && verify_name()){
                    console.log("verified");

                    var getName = name.val();
                    var getMail = email.val();
                    var getMessage = message.val();

                    var newForm = {
                        "name": getName,
                        "message": getMessage,
                        "email": getMail
                    };


                    // $.ajax({
                    //
                    //     type: "POST",
                    //     url: "" ,
                    //     data: JSON.stringify(newForm),
                    //     dataType: "json"
                    //
                    // }).done(function(response){
                    //     console.log(response);
                    //     form.hide();
                    //     success.show().text(response);
                    // }).fail(function(error) {
                    //     console.log(error);
                    //     danger.show().text(error);
                    // })

                }
                else{
                    console.log("error");
                    return false;
                }

            } // verify_all() function

            verify_all();

        });   // on.click event

    }  // main sendForm() function

    sendForm();

//-----------------end of verification ---------------------



//------------parallax---&---scroll events----------------------------
    $(window).on("scroll", function (){

        var wScroll = $(this).scrollTop();

        $(".header-logo").css({

            "transform" : "translate(0px, "+ wScroll / 3.4 +"%)"
        });

        $("#notes").find("p").css({

            "transform" : "translate("+$("#notes").find("p").offset().top+", "+ wScroll /7.8 +"%)"
        });


        if(wScroll > $("#projects").offset().top - ($(window).height() / 1.2)){

            $(".thumb-item").each(function(i){

                setTimeout(function(){

                $(".thumb-item").eq(i).addClass("land");

                }, 150 * (i+1));

            });

        }


    });  // end of window on.scroll function


    // var opinions = populateOpinions();

    // function populateOpinions () {
    //     $.getJSON("data/opinions.json",function( opinionsJson ){
    //         return opinionsJson.toString();
    //     });
    // }

    // var opinions = $.getJSON("data/opinions.json",function( opinionsJson ){
    //     console.log(opinionsJson.length);
    //     var unit = $(".client-unit");
    //
    //     var unitClone = unit.clone();
    //
    //     unit.find(".client-icon").find(".client-name").text(opinionsJson[0].name);
    //
    // });
    //
    // console.log(opinions);



    function clientSlider(){

        $(".client-unit").first().addClass("current-unit");      // .current-unit is added to the first unit by default
        $(".clients-mobile-nav span").first().addClass("current-unit");

        $(".clients-mobile-nav span").on("click", function(){
            var $this = $(this);
            var $siblings = $this.parent().children();
            var position = $siblings.index($this);



            $(".client-unit").removeClass("current-unit").eq(position).addClass("current-unit");
            $siblings.removeClass("current-unit");
            $this.addClass("current-unit");
        });


        $(".client-arrow-next, .client-arrow-prev").on("click", function(){   // on click event added to both arrows

            var $this = $(this);
            var currentUnit = $(".clients-slider").find(".current-unit");          // finds element that currently has .current-unit
            var position = $(".clients-slider").children().index(currentUnit);     // finds the position of that element
            var CUlength = $(".client-unit").length;                               // get the length of all .client-unit elements

            console.log(currentUnit);
            console.log(position);
            console.log(CUlength);

            if($this.hasClass("client-arrow-next")) {   // identify click on the right arrow
                if (position < CUlength - 1) {
                    $(".current-unit").removeClass("current-unit").next().addClass("current-unit");  // move the .current-unit to the next element
                }
                else {   // if .current-unit is on the last element of our slider, jump to the first element
                    $(".client-unit").removeClass("current-unit").first().addClass("current-unit");
                }
            }
            else{   // identify click on the left arrow
                if(position === 0 ){
                    $(".client-unit").removeClass("current-unit").last().addClass("current-unit");  // move the .current-unit to the prev element
                }
                else{     // if .current-unit is on the first element of our slider, jump to the last element
                    $(".current-unit").removeClass("current-unit").prev().addClass("current-unit");
                }

            }

        });

    }

    clientSlider();









}); // end of document ready

