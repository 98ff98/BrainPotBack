var f = fabric;

var Idea = {
    keyCount: 0,
    list : undefined,
    control : {
        selectedIdea : undefined
    },
    methods: {
        init: (name) => {
            //hide
            $(".upper-canvas").removeClass("z-depth-2");

            //create
            brainField = new f.Canvas(name);

            //init
            Idea.width = brainField.width;
            Idea.height = brainField.height;
            Idea.list = brainField._objects;

            brainField.on("object:modified", function (event) {
                var object = event.target;

                if (object.category === "idea") {
                    var json = {
                        event : "idea_update_loc",
                        owner : object.owner,
                        key : object.key,
                        x : object.left,
                        y : object.top
                    },

                    socket.send (json);
                }
            });

            brainField.on("mouse:down", function (event) {
                var object = event.target;

                if (!object || object.category !== "idea")
                    Idea.control.selectedIdea = undefined;
                else if (object.category === "idea")
                    Idea.control.selectedIdea = object;
            });

            brainField.on("text:editing:exited", function (event) {
                var object = event.target;
                var json = {
                    event : "idea_update_content",
                    owner : object.owner,
                    key : object.key,
                    text : object.text
                };

                socket.send(json);
            });
        },
        ideaAdd: (text) => {
            var json = {
                event: "idea_add",
                team: "TODO_teamID",
                idea_object: {
                    text: text,
                    key: Idea.keyCount,
                    owner: "TODO_myID",
                    x: "TODO_x",
                    y: "TODO_y"
                }
            };

            socket.send(json);
        },
        ideaRemove: () => {
            var object = Idea.control.selectedIdea;

            if(!object)
                return;

            if (object.owner === myID || UserInfo.isAdmin(myID)) {
                var json = {
                    team : teamID,
                    event: "idea_remove",
                    key : object.key,
                    owner : object.owner
                };

                socket.send(json);
            }
            else
                toast ("내가 제출한 아이디어가 아니면 지울 수 없습니다.");
        },
        getObject: (objectKey) => {
            var object;

            for (var i = 0; i < Idea.list.length; i++) {
                if (Idea.list[i].category !== "draw")
                    if (Idea.list[i].key === objectKey) {
                        object = Idea.list[i];
                        break;
                    }
            }

            return object;
        }
    },
    event: {
        idea_add: (idea_object) => {
            var text = idea_object.text;
            var left = idea_object.x;
            var top = idea_object.y;
            var ket = idea_object.key;
            var owner = idea_object.owner;

            var idea = new f.Text(text, {
                category : "idea",
                left : left,
                top : top,
                owner : owner,
                key : key
            });

            brainField.add(idea);
            brainField.renderAll();

            Idea.keyCount++;
        },
        idea_update_loc : (key, x, y) => {
            var object = Idea.methods.getObject(key);

            object.set ({
                left : x,
                top : y
            });

            brainField.renderAll();
        },
        idea_update_content : (key, text) => {
            var object = Idea.methods.getObject(key);

            object.text = text;
            brainField.renderAll();
        },
        idea_remove : (key) => {
            var object = Idea.methods.getObject(key);

            brainField.remove(key);
        }
    }
};

$("#ideaField").keydown(function (event) {
    if (event.key === "Enter") {
        var text = $("#brain_chatField").val();

        if (text !== "") {

        }
    }
});

$(document).keydown(function (event) {
    if (event.key === "Delete" || event.key === "Backspace")
        if (Idea.control.selectedIdea)
            Idea.methods.ideaRemove();
});