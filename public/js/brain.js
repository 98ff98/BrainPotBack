$(document).ready(function () {
    //<summary>initialize</summary>
    $(".modal").modal();
    $(".button-collapse").sideNav();

    //<summary>resize</summary>
    $(".modal").css("width", "35%");

    //<summary>event define</summary>
    
    $("#menu_next").click(function () {
        var nextLevel = level + 1;

        switch (nextLevel) {
            case 2 :
                if (Idea.list.length < 10)
                    toast("아이디어는 최소한 10개 이상 제출되어야 합니다.");
                else {
                    var json = {
                        event: "init",
                        level : nextLevel,
                        team : teamID
                    };

                    socket.send(json);
                }
                break;
            case 3 :
                if (Grouping.list.length < 2)
                    toast("아이디어들을 최소한 2개 이상의 그룹으로 묶어야 합니다.");
                else {
                    var json = {
                        event: "init",
                        level : nextLevel,
                        team : teamID
                    };

                    socket.send(json);
                }
                break;
            case 4 :
                $('#modal_vote').modal('open');
                break;
        }
    });

    $("#menu_capture").click(function () {
        html2canvas($("#brain_field_" + level), {
            onrendered: function (canvas) {
                var url = canvas.toDataURL();
                var link = document.createElement('a');

                link.setAttribute('href', url);
                link.download = "BrainPot Image";
                link.click();
            }
        });
    });

    //PPT 다운로드
    $("#menu_save").click(function () {
        XMLDownload();
    });

    //방장이 아닌 경우
    if (!UserInfo.isAdmin(myID)) {
        $("#menu_next").attr("disabled", "on");
        $("#upload_json").attr("disabled", "on");
    }

    //페이지를 나가는 경우
    $(window).on("beforeunload", function () {
        if (!UserInfo.isKicked)
            UserInfo.left(myID, myNickname);
    });

    //뒤로가기 브라우저 버튼 방지
    history.pushState(null, null, "#noback");
    $(window).bind("hashchange", function () {
        history.pushState(null, null, "#noback");
    });

    //새로고침 F5 방지
    $(window).keydown(function (event) {
        var key = event.key;

        if (key === "F5")
            event.preventDefault();
    });
});
    //<summary> function define </summary>
function toast(text) {
    Materialize.toast(text, 4000);
}

function exit () {
    UserInfo.left(myID);
}

function blind () {
    $("#blind").css("display", "none");
}

function render () {
    brainField.setActiveGroup(new f.Group(brainField.getObjects()));
    brainField.deactivateAll();
    brainField.renderAll();
}

function getCookie (name) {
    name = "=";

    var cookieData = document.cookie;
    var start = cookieData.indexOf(name);
    var value = "";

    if (start !== -1) {
        start += name.length;
        var end = cookieData.indexOf(";", start);

        if (end === -1)
            end = cookieData.length;

        value = cookieData.substring(start, end);
    }

    return unescape(value);
}

function deleteCookie(name) {
    var expireDate = new Date();
  
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = name + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}