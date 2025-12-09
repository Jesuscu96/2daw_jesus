$(function () {
    
    // $(".activa").css({
    //     border: "2px solid red"
    // });
    $("p").click(function () {
        if(!$(this).hasClass("activa")) {
            $(this).addClass('activa');
        }
    })
    $("#clearActive").click(function () {
        if($(".activa").hasClass("activa")) {
            $(".activa").removeClass('activa');
        }
    })
    $("#checkActive").click(function () {
        if($(".activa").hasClass("activa")) {
            const pText = $(".activa").text();
            const pActive = pText + " active";
            const Allp = $(".activa").text(pActive);
            
            
        }
    })
    $("#toggleActive").click(function () {
        $('p').toggleClass('activa');
    })
    $("#addCSS").click(function () {
        $(".activa").css({
            "background-color": "lightblue"
        });
    })
    
});





// if (aValue === 10) {
//     $('p').addClass('hidden');
// } else {
//     $('p').removeClass('hidden');
// }
// $('p').toggleClass('hidden', aValue === 10);