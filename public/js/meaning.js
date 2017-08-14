var Meaning = {
    methods: { 
        init :(data) => {
            //lock
            $("#menu_draw").addClass("disabled");
            $("#menu_postit").addClass("disabled");

            //hide
            $("#menu2").css("display", "none");
            $(".canvas-container").css("display", "none");

            //<code>load data grouping to meaning</code>
            var div = $("#brain_field_3")[0];

            data.forEach(function (item) {
                var chips = "";
                item.node.forEach(function (node) {
                    chips += '<div class="chip green">' + node + '</div>';
                });

                div.innerHTML += '<div class="row center">' +
                    '<div class="col s2"></div>' +
                    '<div class="col s8 z-depth-1">' +
                    '<div>' +
                    '<h4 class="left">' + item.title + '</h4>' +
                    chips +
                    '<div class="input-field col s6">' +
                    '<input id="test" type="text" class="validate">' +
                    '<label for="test">comment<label>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col s2"></div>' +
                    '</div>';
            });
            //<code>load data grouping to meaning</code>

            
        }
    }
};