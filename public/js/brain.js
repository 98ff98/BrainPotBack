$(document).ready(function () {
    //<summary>initialize</summary>
    $(".modal").modal();
    $(".button-collapse").sideNav();

    //<summary>resize</summary>
    $(".modal").css("width", "35%");

    //<summary>event define</summary>
    
    $("#menu_next").click(function () {
        var nextLevel = level + 1;

        if (nextLevel === 4) 
            $('#modal_vote').modal('open');
        else {

            var json = {
                event: "init",
                level : nextLevel,
                team : teamID
            };

            socket.send(json);
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
        UserInfo.left(myID, myNickname);
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