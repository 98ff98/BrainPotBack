$(document).ready(function () {
    //<summary>initialize</summary>
    $(".button-collapse").sideNav();
    $(".modal").modal();
    $('.slider').slider();

    //<summary>resize</summary>
    $(".slider").css("opacity", "0.7");
    $('.indicators').css("z-index", 2);
    $('.indicators').css("bottom", 50);

    $("#start_buttons").css("position", "absolute");
    $("#start_buttons").css("z-index", 2);
    $("#start_buttons").css("bottom", 200);
    $("#start_buttons").css("left", screen.width / 2 - $("#start_buttons").width() / 2);

    $(".modal").css("width", "35%");

    //<summary>event define</summary>
    $("ul>li>a").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 52
        }, 700);
    });

    //<summary>function define</summary>
    function logout() {
        var cookie = $.cookie("ALERT");

        //쿠키가 있는 경우
        if (cookie != undefined) {
            alert("로그아웃 되었습니다.");
            $.removeCookie("ALERT");
        }
    }
});
