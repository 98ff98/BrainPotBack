var Meaning = {
    selectKey: undefined,
    init: (fieldName, callback) => {
        Grouping.init("brain_field_3");

        brainField.linkTemplate = GO(go.Link, {
            routing: go.Link.Orthogonal,
            corner: 10
        }, GO(go.Shape, {
            strokeWidth: 2
        }), GO(go.Shape, {
            toArrow: "OpenTriangle"
        }));

        brainField.groupTemplateMap.add("OfComment",
            GO(go.Group, "Auto", {
                    background: "transparent",
                    ungroupable: true,
                    mouseDragEnter: function (e, grp, prev) {
                        Grouping.methods.highlightGroup(e, grp, true);
                    },
                    mouseDragLeave: function (e, grp, next) {
                        Grouping.methods.highlightGroup(e, grp, false);
                    },
                    computesBoundsAfterDrag: true,
                    mouseDrop: Grouping.methods.finishDrop,
                    handlesDragDropForMembers: true,
                    layout: GO(go.GridLayout, {
                        wrappingColumn: 1,
                        alignment: go.GridLayout.Position,
                        cellSize: new go.Size(1, 1),
                        spacing: new go.Size(4, 4)
                    })
                },
                new go.Binding("background", "isHighlighted", function (h) {
                    return h ? "rgba(255,0,0,0.2)" : "transparent";
                }).ofObject(),
                GO(go.Shape, "Rectangle", {
                    fill: null,
                    stroke: "#33D3E5",
                    strokeWidth: 2
                }),
                GO(go.Panel, "Vertical",
                    GO(go.Panel, "Horizontal", {
                            stretch: go.GraphObject.Horizontal,
                            background: "#000000"
                        },
                        GO("SubGraphExpanderButton", {
                            alignment: go.Spot.Right,
                            margin: 5
                        }),
                        GO(go.TextBlock, {
                                alignment: go.Spot.Left,
                                editable: true,
                                margin: 5,
                                font: "bold 16px sans-serif",
                                opacity: 0.75,
                                stroke: "#000000"
                            },
                            new go.Binding("text", "text").makeTwoWay())
                    ),
                    GO(go.Placeholder, {
                        padding: 5,
                        alignment: go.Spot.TopLeft
                    })
                )
            ));

        //의미를 부여할 아이디어를 눌렀을 경우
        brainField.addDiagramListener("ObjectSingleClicked", function (event) {
            if (event.subject.Q == null)
                return;

            var obj = event.subject.Q.Y.Nd;
            var category = obj.category;

            Meaning.selectKey = obj.key;
            Meaning.methods.commentLineOn(obj.text);
        });

        //의미를 선택하지 않은 경우
        brainField.addDiagramListener("BackgroundSingleClicked", function (event) {
            Meaning.methods.commentLineOff();
        });

        if (typeof callback === 'function')
            callback();
    },
    methods: {
        groupingToMeaning: (nodeData) => {
            brainField.model = go.Model.fromJson(nodeData);
        },
        commentLineOn: (text) => {
            $("#comment").removeAttr("disabled");
            $("#comment_send").removeAttr("disabled");
            $("#comment_label").html('"' + text + '"' + "에 의미를 부여하세요.");
        },
        commentLineOff: () => {
            $("#comment").attr("disabled", "on");
            $("#comment_send").attr("disabled", "on");
            $("#comment_label").html("먼저, 의미를 부여할 의견을 선택하세요.");
        },
        add: (from, to, text) => {
            brainField.model.addNodeData({
                key: to,
                category: "OfComment",
                text: text,
                brush: go.Brush.randomColor()
            });
            brainField.model.addLinkData({
                from: from,
                to: to
            });
        }
    }
}

$("#comment").keydown(function (event) {
    if (event.key === "Enter")
        commentSend();
});

$("#comment_send").click(function (event) {
    commentSend();
});

//<summary>function define</summary>
function commentSend() {
    //빈 텍스트 필터링
    if ($("#comment").val() === "")
        return;

    var json = JSON.parse(brainField.model.toJson());
    var keys = [];
    var key;

    for (var i = 0; i < json.nodeDataArray.length; i++) {
        keys.push(json.nodeDataArray[i].key);
    }

    do {
        key = Math.floor(Math.random() * 1000) + 1; //키값은 1 ~ 1000 사이

        var isExist = keys.forEach(function (item) {
            if (item.key == key)
                return true;
        });
    } while (isExist)

    Meaning.methods.add(Meaning.selectKey, key, $("#comment").val());
    $("#comment").val("");
}
