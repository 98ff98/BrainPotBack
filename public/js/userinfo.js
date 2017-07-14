var UserInfo = {
    list: [],
    add: (json) => {
        var user = {
            id: json.id,
            nickname: json.nickname
        };

        UserInfo.list.push(user);
    },
    join : () => {
        var json = {
            event : "join_user",
            team : teamID,
            id: myID,
            nickname: myNickname,
        };

        socket.send(join);
    },
    delete: (id) => {
         UserInfo.list.forEach (function (item, index) {

            //강퇴
            if (item.id === id) {

            }
        });
    }
}

//내 정보 입장
UserInfo.join();