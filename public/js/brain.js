$(document).ready(function () {
    //<summary>initialize</summary>
    $(".modal").modal();
    $(".button-collapse").sideNav();

    //<summary>resize</summary>
    $(".modal").css("width", "35%");

    //<summary>event define</summary>
    
    $("#menu_next").click(function () {
        level++;
        init(level);
    });

    $("#menu_capture").click(function () {
        html2canvas($("#brain_field_" + level), {
            onrendered: function (canvas) {
                var img = canvas.toDataURL();
                window.open(img, "_blank");
            }
        });
    });

    //json 다운로드 (데이터 세이브)
    $("#menu_save").click(function () {
        var obj = brainField.model.toJson();
        console.log(obj);
        var writer = new FileWriter();
    });

    //json 업로드 (데이터 로드)
    $("#upload_json").bind("change", function (event) {
        //파일을 업로드 하지 않은 경우
        if ($("#upload_json").val() == undefined)
            return;

        var file = event.target.files;

        for (var i = 0, f; f = file[i]; i++) {
            var reader = new FileReader();

            reader.onload = (function (theFile) {
                return function (event) {
                    //TODO 서버로 json 데이터 전송
                    var obj = JSON.parse(event.target.result);
                    brainField.model = go.Model.fromJson(obj);
                }
            })(f);

            reader.readAsBinaryString(f);
        }

        $("#upload_json").val(undefined);
    });

    //<summary> function define </summary>
    function toast(text) {
        Materialize.toast(text, 4000);
    }

    function exit () {
        UserInfo.left(myID);
    }   

    //방장이 아닌 경우
    if (!isAdmin(myID)) {
        $("#menu_next").attr("disabled", "on");
        $("#upload_json").attr("disabled", "on");
    }
});
