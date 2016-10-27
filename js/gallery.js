$(document).ready(function(){

    $(".button").on("click",function(){
        $(".menu").toggle();
        console.log("show");
    });

    console.log($(document).width());
    var modal = $(".modal-gallery");
    var modal_gallery_content = $(".modal-gallery-content");
    var gallery_list = $("#photos").find("img");

    gallery_list.on("click", function(){
        if ($(document).width() > 400) {
            modal.css("display", "block");
            modal_gallery_content.addClass("gallery_shown");
            modal_gallery_content.css("background-image", "url(" + $(this).attr("src") + ")");
        }
    });

    modal.on("click", function(){
        modal.css("display", "none");
    });


    $(".logo").on("click", function(){
        $('body').animate({
            scrollTop: 0
        },1000)

    });

});
