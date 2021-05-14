$(document).ready(function() {

   // Theming
   if(localStorage.getItem("style") === null) {
        localStorage.setItem("style", "css/light.css");
    }

    $("#lighter").on("click", function() {
        localStorage.setItem("style", "css/light.css");
        $("link[href='css/dark.css']").attr("href", "css/light.css");
    });

    $("#darker").on("click", function() {
        localStorage.setItem("style", "css/dark.css");
        $("link[href='css/light.css']").attr("href", "css/dark.css");
    });


    // Zoom
    $("#zoomIn").click(function() {
        var currentZoom;
        currentZoom = $("html").css("zoom");
        currentZoom = parseFloat(currentZoom) + 0.05;
        $("html").css("zoom", currentZoom);
    });

    $("#zoomOut").click(function() {
        var currentZoom;
        currentZoom = $("html").css("zoom");
        currentZoom = parseFloat(currentZoom) - 0.05;
        $("html").css("zoom", currentZoom);
    });


    // Font size
    $(".font ul div").hide();

    $(".font button").on("click", function() {
        $(this).next(".slider").toggle();
    });


    // Bold unbold
    $("#bold").on("click", function() {
        $("body").css("font-weight", "bolder");
    });

    $("#unbold").on("click", function() {
        $("body").css("font-weight", "lighter");
    });


    // Slider
    $(".slider").each(function() {
        $(this).slider({
            orientation: "horizontal",
            min: parseFloat($(this).attr("data-min")),
            step: parseFloat($(this).attr("data-step")),
            max: parseFloat($(this).attr("data-max")),
            slide: function(event, ui) {
                var value = ui.value;
                var type = $(this).attr("id");
                switch(type) {
                    case "font": $(".container").css("font-size", value + "px");
                                if(value > 20){
                                    $("#myJumbotron").css("font-size", "20px");
                                }
                                else {
                                    $("#myJumbotron").css("font-size", value + "px");
                                }
                                $("footer").css("font-size", value + "px");
                                break;
                    case "contrast": $("body").css("filter", "grayscale(" + value + "%)");
                                    break;
                }
            }
        });
    });
    
    $('#edit1').click(function(){
        $('#name').removeAttr('disabled');
         
});
        $("#edit2").click(function(){
            $('#email').removeAttr('disabled'); 
        //$('#mobileNumber').removeAttr('disabled');
        })
        
             $('#edit3').click(function(){
        $('#mobileNumber').removeAttr('disabled');
         
});
});


     