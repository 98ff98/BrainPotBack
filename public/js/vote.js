var Vote = {
    list: undefined,
    type : undefined,
    methods: {
        init: (data) => {
            //data set
            Vote.list = data;
            Vote.list.forEach(function (item) {
                item.count = 0;
            });
        },
        setUp: () => {
            var voteTitle = $("#input_vote_title").val();
            var isMultiple = $(':input:radio[id=multiple]').is(':checked');

            var json = {
                event: "vote_setup",
                team: teamID,
                title: voteTitle,
                multiple: isMultiple
            }

            socket.send(json);
        },
        createButtons: () => {
            var div = $("#vote_field")[0];

            div.innerHTML += '<a id="btn_vote" class="waves-effect waves-light btn-large">' +
                '<i class="material-icons left">done</i>제출</a>' +
                '<a id="btn_vote_finish" class="waves-effect waves-light btn-large">' +
                '<i class="material-icons left">gavel</i>종료</a>';
        }
    },
    event: {
        setup : (voteTitle, isMultiple) => {
            var div = $("#vote_field")[0];
            var type = (isMultiple) ? "radio" : "checkbox";

            Vote.type = type;

            div.innerHTML +=
                '<h4 id="vote_title" class="font-noto-bold">' +
                voteTitle +
                '</h4>';

            Vote.list.forEach(function (item, index) {
                var node = "";
                var comment = "";

                item.node.forEach(function (n) {
                    node += '<div class="chip green">' + n + '</div>';
                });

                item.comment.forEach(function (c) {
                    comment += '<div class="chip pink">' + c + '</div>';
                })

                div.innerHTML += '<div class="vote_list row">' +
                    '<div class="col s10 offset-s2 z-depth-1">' +
                    '<span>' +
                    '<h5 class="font-noto-medium vote_list_title">' + item.title + '</h5>' +
                    '<input id="vote_index_' + index + '" name="vote" type="' + type + '">' +
                    '<label for="vote_index_' + index + '" class="right"></label>' +
                    '</span>' +
                    '<div>' + node + '</div>' +
                    '<div>' + comment + '</div>' +
                    '</div>' +
                    '</div>';
            }); 

            Vote.methods.createButtons();

            if (!UserInfo.isAdmin(myID))
                $("#btn_vote_finish").addClass("disabled");

            $("#btn_vote").click(function () {
                var checkerList = $(":input:" + Vote.type + "[name=vote]");
                var checkList = [];

                for (var i = 0; i < checkerList.length; i++)
                    if ($(checkerList[i]).is(":checked"))
                        checkList.push(i);

                var json = {
                    event: "vote_vote",
                    team: teamID,
                    index: checkList
                };

                socket.send(json);

                toast("투표하였습니다. 다른 팀원이 모두 투표할 때까지 기다려주세요.");
                $("#btn_vote").addClass("disabled");
            });
        },
        vote: (votedIndex) => {
            Vote.list.forEach(function (item, index) {
                votedIndex.forEach(function (item2) {
                    if (index === item2)
                        item.count++;
                });
            });
        },
        finish : () => {
            
        }
    }
};

$("#vote_start").click(function () {
    var json = {
        event: "init",
        level : level + 1,
        team : teamID
    };

    socket.send(json);
    Vote.methods.setUp();
});
