var Vote = {
    list: undefined,
    methods: {
        init: (data) => {
            //data set
            Vote.list = data;

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
        }
    },
    event: {
        setup : (voteTitle, isMultiple) => {
            var div = $("#vote_field")[0];
            var type = (isMultiple) ? "radio" : "checkbox";

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
