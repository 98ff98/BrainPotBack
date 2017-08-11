var Meaning = {
    methods: { 
        init :(data) => {
            //lock
            $("#menu_draw").addClass("disabled");
            $("#menu_postit").addClass("disabled");

            //hide
            $("#menu2").css("display", "none");
            $(".canvas-container").css("display", "none");

            
        }
    }
};