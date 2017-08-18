var Vote = {
    list: undefined,
    methods: {
        init: (data) => {
            //data set
            Vote.list = data;

        },
        setUp: () => {
            var voteTitle = $("#vote_title").val();
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
            
        }
    }
};

$("#vote_start").click(function () {
    Vote.methods.setUp();
});
