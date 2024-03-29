var f = fabric;

var Idea = {
    keyCount: 1,
    list : undefined,
    control : {
        selectedIdea : undefined,
        selectionUnableOptions: {
            bl: false,
            br: false,
            mb: false,
            ml: false,
            mr: false,
            mt: false,
            mtr: false,
            tl: false,
            tr: false
        }
    },
    methods: {
        init: (name) => {
            //hide
            $(".upper-canvas").removeClass("z-depth-2");

            //show
            $("#menu_idea").css("display", "inline");

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
                        team : teamID,
                        owner : object.owner,
                        key : object.key,
                        x : object.left,
                        y : object.top
                    };

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
                    team : teamID,
                    owner : object.owner,
                    key : object.key,
                    text : object.text
                };

                socket.send(json);
            });

            //<code>group selection lock</code>
            brainField.observe('selection:created', function () {
                var group = brainField.getActiveGroup();
                group.lockMovementX = true;
                group.lockMovementY = true;
                group.hasControls = false;
            });
            //<code>group selection lock</code>
        },
        ideaAdd: () => {
            var text = $("#idea").val();

            if (text === "") {
                toast("아이디어를 입력해주세요.");
                return;
            }

            var x = Math.floor(Math.random() * Idea.width - 100) + 1;
            var y = Math.floor(Math.random() * Idea.height - 50) + 1;

            var json = {
                event: "idea_add",
                team: teamID,
                idea_object: {
                    text: text,
                    key: Idea.keyCount,
                    owner: myID,
                    x: x,
                    y: y
                }
            };

            $("#idea").val("")
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
                toast ("타인의 아이디어는 지울 수 없습니다.");
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
        },
        nextLevel : () => {
            var data = [];

            Idea.list.forEach(function (item) {
                if (item.category === "idea") {
                    item.category = "node";
                    data.push(item);
                }
            });

            return data;
        }
    },
    event: {
        idea_add: (idea_object) => {
            var text = idea_object.text;
            var left = idea_object.x;
            var top = idea_object.y;
            var key = idea_object.key;
            var owner = idea_object.owner;

            var idea = new f.IText(text, {
                category : "idea",
                left : left,
                top : top,
                owner : owner,
                key : key,
                fontSize : 20
            });
            idea.setControlsVisibility(Idea.control.selectionUnableOptions);

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
            
            brainField.remove(object);
            brainField.renderAll();
        }
    }
};

$("#idea").keydown(function (event) {
    if (event.key === "Enter") {
        Idea.methods.ideaAdd();
    }
});

$("#idea_send").click(function (event) {
    Idea.methods.ideaAdd();
});

$(document).keydown(function (event) {
    if (event.key === "Delete" || event.key === "Backspace")
        if (Idea.control.selectedIdea)
            Idea.methods.ideaRemove();
});