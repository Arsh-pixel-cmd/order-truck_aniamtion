$(".order").click(function (e) {
    let button = $(this);
    

    if (!button.hasClass("animate")) {
        button.addClass("animate");
        button.css("background-color", "#4338ca");
        setTimeout(() => {
            button.removeClass("animate");
            button.css("background-color", ""); // reset background color
        }, 10000);
    }
});