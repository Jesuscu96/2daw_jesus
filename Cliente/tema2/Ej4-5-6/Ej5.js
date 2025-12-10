$(function () {
    $(".avengers").append("<li>Black widow</li>");
    $(".avengers").prepend("<li>Red widow</li>");
    const capitanAmerica = $("li").filter(function () {
        return $(this).text().includes("Captain America");
    });
    $("li:first").insertAfter(capitanAmerica);
    $(".avengers").prepend(`<li>${$("title").text()}</li>`);
    const thor = $("li:contains('Thor')");
    $("<li>Spider-man</li>").insertBefore(thor);

    
    
})