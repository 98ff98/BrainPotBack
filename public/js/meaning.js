var Meaning = {
    list: undefined,
    methods: {
        init: (data) => {
            //lock
            $("#menu_draw").addClass("disabled");
            $("#menu_postit").addClass("disabled");

            //hide
            $("#menu2").css("display", "none");
            $(".canvas-container").css("display", "none");

            Meaning.list = data;

            //<code>load data grouping to meaning</code>
            var div = $("#brain_field_3")[0];

            data.forEach(function (item, index) {
                var chips = "";
                item.node.forEach(function (node) {
                    chips += '<div class="chip chip-idea font-jeju text-white">' + node + '</div>';
                });

                div.innerHTML += '<div class="row center mean_list" index="' + index + '">' +
                    '<div class="col s8 offset-s2 z-depth-1 mean_list_item">' +
                    '<h4 class="left-align font-jeju text mean_title">' + item.title + '</h4>' +
                    '<div class="divider mean_line"></div>' +
                    '<div class="input-field row s6">' +
                    '<input id="test" type="text" class="validate comment_input font-jeju" index="' + index + '">' +
                    '<label for="test" class="font-jeju">' + item.title + '에 대한 의미를 최대 3개까지 부여해주세요.<label>' +
                    '</div>' +
                    '<div>' +
                    '<span class="ideas">' +
                    chips +
                    '</span>' +
                    '<span class="comments"></span>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            });
            //<code>load data grouping to meaning</code>

            //<code>comment add</code>
            $(".comment_input").keydown(function (event) {
                var key = event.key;

                if (key === "Enter") {
                    var comment = $(event.target).val();
                    var index = $(event.target).attr("index");

                    if (comment === "")
                        toast("아이디어 그룹에 알맞는 의미를 부여하세요.");
                    else if (comment.length < 10)
                        toast("10자 이상 입력해주세요.");
                    else {
                        var isExist = false;

                        if (Meaning.list[index].comment.length >= 3) {
                            toast("최대 3개의 의미만 부여할 수 있습니다.");
                            return;
                        }

                        Meaning.list[index].comment.forEach(function (item) {
                            if (item === comment)
                                isExist = true;
                        });

                        if (isExist) {
                            toast("중복된 의미를 부여할 수 없습니다!");
                            return;
                        }

                        var json = {
                            event: "comment_add",
                            team: teamID,
                            index: index,
                            comment: comment
                        };

                        socket.send(json);

                        $(event.target).val("");
                    }
                }
            });
            //<code>comment add</code>
        },
        nextLevel: () => {
            return Meaning.list;
        }
    },
    event: {
        comment_add: (comment, index) => {
            var div = $(".comments")[index];

            $(div)[0].innerHTML += '<div class="chip chip-comment font-jeju text-white">' +
                comment +
                '<i class="close material-icons">close</i>' +
                '</div>';

            Meaning.list[index].comment.push(comment);

            $(".close").click(function (event) {
                var comment = event.target.parentNode.firstChild.data;
                var titleIndex;
                var commentIndex;

                titleIndex = $(event.target).parent().parent().parent().parent().parent().attr("index");
                Meaning.list[titleIndex].comment.forEach(function (item, index) {
                    if (item === comment)
                        commentIndex = index;
                });

                var json = {
                    event: "comment_remove",
                    team: teamID,
                    index_title: titleIndex,
                    index_comment: commentIndex,
                    removerID : myID
                };

                socket.send(json);
            });
        },
        comment_remove: (index_title, index_comment, removerID) => {
            var div = $(".comments")[index_title];

            if(removerID !== myID)
                div.removeChild(div.childNodes[index_comment]);

            Meaning.list[index_title].comment.splice(index_comment, 1);
        }
    }
};
