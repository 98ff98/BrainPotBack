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

            div.innerHTML += '<a id="btn_vote" class="waves-effect waves-light btn-large btn-z-2 text-white font-jeju">' +
                '<i class="material-icons left">done</i>제출</a>' +
                '<a id="btn_vote_finish" class="waves-effect waves-light btn-large btn-z-3 text-white font-jeju">' +
                '<i class="material-icons left">gavel</i>종료</a>';
        }
    },
    event: {
        setup : (voteTitle, isMultiple) => {
            var div = $("#vote_field")[0];
            var type = (isMultiple) ? "checkbox" : "radio";

            Vote.type = type;

            div.innerHTML +=
                '<h4 id="vote_title" class="center-align font-jeju">' +
                voteTitle +
                '</h4>';

            Vote.list.forEach(function (item, index) {
                var node = "";
                var comment = "";

                item.node.forEach(function (n) {
                    node += '<div class="chip chip-idea text-white">' + n + '</div>';
                });

                item.comment.forEach(function (c) {
                    comment += '<div class="chip chip-comment text-white">' + c + '</div>';
                })

                div.innerHTML += '<div class="vote_list row">' +
                    '<div class="col s10 offset-s1 z-depth-1">' +
                    '<div>' +
                    '<h5 class="font-jeju vote_list_title">' + item.title + '</h5>' +
                    '<span>' +
                    '<input id="vote_index_' + index + '" name="vote" type="' + type + '">' +
                    '<label for="vote_index_' + index + '" class="right"></label>' +
                    '</span>' +
                    '</div>' +
                    '<div class="left">' +
                    '<span>' + node + '</span>' +
                    '<span>' + comment + '</span>' +
                    '</div>' +
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

            $("#btn_vote_finish").click(function () {
                var json = {
                    event: "vote_finish",
                    team: teamID
                };

                socket.send(json);
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
            var div = $("#vote_field")[0];
            var list = "";
            var sumCount = 0;

            $(div).removeClass("row");
            $(div).removeClass("center");

            Vote.list.sort(function (a, b) {
                return b.count - a.count;
            });
            Vote.list.forEach(function (item) {
                var chips = "";

                item.node.forEach(function (node) {
                    chips += '<div class="chip green">' + node + '</div>';
                });
                item.comment.forEach(function (comment) {
                    chips += '<div class="chip pink">' + comment + '</div>';
                });

                sumCount += item.count;
                list += '<li>' +
                    '<div class="collapsible-header"><i class="material-icons">filter_drama</i><span class="vote_result_bar">' + item.title + '</span></div>' +
                    '<div class="collapsible-body"><span>' + chips + '</span></div>' +
                    '</li>';
            });
            div.innerHTML = "";
            div.innerHTML += '<ul class="collapsible" data-collapsible="accordion">' +
                list +
                '</ul>';

            Vote.list.forEach(function (item, index) {
                var percent = 100 / sumCount * item.count;

                switch (index % 6) {
                    case 0:
                        $($(".vote_result_bar")[index]).css("background", "#009688");
                        break;
                    case 1:
                        $($(".vote_result_bar")[index]).css("background", "#26a69a");
                        break;
                    case 2:
                        $($(".vote_result_bar")[index]).css("background", "#4db6ac");
                        break;
                    case 3:
                        $($(".vote_result_bar")[index]).css("background", "#80cbc4");
                        break;
                    case 4:
                        $($(".vote_result_bar")[index]).css("background", "#b2dfdb");
                        break;
                    case 5:
                        $($(".vote_result_bar")[index]).css("background", "#e0f2f1");
                        break;
                }

                if (percent)
                    $($(".vote_result_bar")[index]).width(1000 * percent / 100);
                else
                    $($(".vote_result_bar")[index]).width(10);
            });
            $(".vote_result_bar").css("display", "inline-block");
            $('.collapsible').collapsible();

            toast('이번 브레인스토밍의 최종 아이디어는 "' + Vote.list[0].title + '"로 결정되었습니다.');
            toast('브레인스토밍이 종료되었습니다.');
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
