"use strict";
$(".email").click(function() {
    $(this).toggleText("Email", "tulio.vasconcelos1@gmail.com")
}), $(".note__title").click(function() {
    $(this).siblings(".note__body").toggle()
}), $("button.control").click(function() {
    var e = $(this).next().get(0);
    $("button.control").text("Play"), $("audio").each(function() {
        $(this).get(0).pause()
    }), 0 < e.currentTime ? ($(this).text("Play"), e.currentTime = 0, e.pause()) : ($(this).text("Pause"), e.currentTime = 0, e.play())
}); 