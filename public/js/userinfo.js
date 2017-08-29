var UserInfo = {
    list: [],
    isKicked:false,
    //유저 데이터 추가
    add: (json) => {
        var user = {
            id: json.id,
            nickname: json.nickname
        };

        UserInfo.list.push(user);

        $("#user_list").append(
            '<li class="user_list_item" data-id='
            + '"'
            + user.id
            + '"'
            +'><a href="#!">'
            + user.nickname
            + '</a></li>');

        $(".user_list_item").click(function () {
            if (UserInfo.isAdmin(myID)) {
                var id = $(this).attr("data-id");
                var nickname = this.innerText;
                var onclick = 'onclick="UserInfo.left(' + id + ', ' + "'" + nickname + "'" + ')"';

                if (id != myID) {
                    $("#modal_kick")[0].innerHTML = '<div class="modal-content">' +
                        '<h4 class="font-jeju text">추방</h4>' +
                        '<div class="divider"></div>' +
                        '<p class="font-jeju text">' + nickname + '님을 강제로 추방합니다.</p>' +
                        '<p class="font-jeju text">(※주의 : 무작위한 추방은 반란을 일으킬 수 있습니다.)</p>' +
                        '</div>' +
                        '<div class="modal-footer">' +
                        '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat text font-jeju" ' + onclick + '>추방</a>' +
                        '<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat text font-jeju">취소</a>' +
                        '</div>';
                } else {
                    $("#modal_kick")[0].innerHTML = '<div class="modal-content">' +
                        '<h4 class="font-jeju text">추방</h4>' +
                        '<div class="divider"></div>' +
                        '<p class="font-jeju text">자기 자신을 추방할 수는 없습니다!</p>' +
                        '</div>' +
                        '<div class="modal-footer">' +
                        '<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat text font-jeju">취소</a>' +
                        '</div>';
                }

                $("#modal_kick").modal('open');
            }
        });
    },
    //유저 데이터 입장 요청
    join : () => {
        var json = {
            event : "join_user",
            team : teamID,
            id: myID,
            nickname: myNickname,
        };

        socket.send(json);
    },
    //유저 데이터 제거
    remove: (json) => {
        UserInfo.list.forEach (function (item, index) {
            //내가 추방 당하는 경우
            if (json.id === myID) {
                UserInfo.isKicked = true;
                deleteCookie("BrainPotLogin");
            }

            if (json.id === item.id) {
                toast(json.nickname + "님이 퇴장하였습니다.");
                UserInfo.list.splice(index, 1);
            }
        });
    },
    //유저 데이터 퇴장 요청
    left : (id, nickname) => {
        var json = {
            event : "left_user",
            team : teamID,
            id: id,
            nickname: nickname,
            isAdmin : UserInfo.isAdmin(id)
        };

        socket.send(json);
    },
    //방장인가
    isAdmin: (id) => {
        return (id === teamAdminID)? true : false;
    }
}

// //내 정보 입장
// $(document).ready ( function () {
//     UserInfo.join();
// });


//<summary> event function define </summary>
$("#user_list").click(function () {
    
});