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



//------------parallax header----------------------------
    $(window).on("scroll", function (){

        var wScroll = $(this).scrollTop();

        $(".header-logo").css({

            "transform" : "translate(0px, "+ wScroll /7.8 +"%)"
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


    });




});

