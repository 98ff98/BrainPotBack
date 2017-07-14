var GO = go.GraphObject.make;
var brainField;

var MindMap = {
    init: (fieldName) => {
        brainField = GO(go.Diagram, fieldName, { //옵션 설정
            initialContentAlignment: go.Spot.Center, //화면 중앙에 생성
            "commandHandler.copiesTree": false,
            "commandHandler.deletesTree": false,
            "draggingTool.dragsTree": true,
            "undoManager.isEnabled": false,
            "animationManager.isEnabled": false
        });

        //마인드맵 템플릿 설정 -> 의견 아래에 밑줄 표시
        brainField.nodeTemplate = GO(go.Node, "Vertical", {
                selectionObjectName: "TEXT"
            }, GO(go.TextBlock, {
                    name: "TEXT",
                    minSize: new go.Size(30, 15),
                    editable: true
                },
                new go.Binding("text", "text").makeTwoWay(),
                new go.Binding("scale", "scale").makeTwoWay(),
                new go.Binding("font", "font").makeTwoWay()),
            GO(go.Shape, "LineH", {
                    stretch: go.GraphObject.Horizontal,
                    strokeWidth: 3,
                    height: 3,
                    portId: "",
                    fromSpot: go.Spot.LeftRightSides,
                    toSpot: go.Spot.LeftRightSides
                },
                new go.Binding("stroke", "brush"),
                new go.Binding("fromSpot", "dir", function (param) {
                    return MindMap.methods.spotConverter(param, true);
                }),
                new go.Binding("toSpot", "dir", function (param) {
                    return MindMap.methods.spotConverter(param, false);
                })),
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            new go.Binding("locationSpot", "dir", function (param) {
                return MindMap.methods.spotConverter(param, false);
            })
        );

        //마인드맵 하위 디렉토리 생성 UI 표시
        brainField.nodeTemplate.selectionAdornmentTemplate = GO(go.Adornment, "Spot",
            GO(go.Panel, "Auto",
                GO(go.Shape, {
                    fill: null,
                    stroke: "dodgerblue",
                    strokeWidth: 3
                }),
                GO(go.Placeholder, {
                    margin: new go.Margin(4, 4, 0, 4)
                })
            ),
            GO("Button", { //하위 디렉토리 추가 버튼 UI
                alignment: go.Spot.Right,
                alignmentFocus: go.Spot.Left,
                click: MindMap.methods.addNodeAndLink
            }, GO(go.TextBlock, "+", {
                font: "bold 8pt sans-serif" //font
            })),
            GO("Button", { //하위 디렉토리 삭제 버튼 UI
                alignment: go.Spot.Left,
                alignmentFocus: go.Spot.Right,
                click: MindMap.methods.removeNodeAndLink
            }, GO(go.TextBlock, "-", {
                font: "bold 8pt sans-serif"
            }))
        );

        //마인드맵 노드 우클릭 메뉴 (필수 X)
        //brainField.nodeTemplate.contextMenu = GO(go.Adornment, "Vertical",
        //    GO("ContextMenuButton",
        //        GO(go.TextBlock, "Bigger"), {
        //            click: function (event, object) {
        //                changeTextSize(object, 1.1);
        //            }
        //        }));

        //마인드맵 하위 노드에 색을 부여, 상위 노드의 색을 따라감
        brainField.linkTemplate = GO(go.Link, {
            curve: go.Link.Bezier,
            fromShortLength: -2,
            toShortLength: -2,
            selectable: false
        }, GO(go.Shape, {
            strokeWidth: 3
        }, new go.Binding("stroke", "toNode", function (n) {
            if (n.data.brush) //상위 노드가 있는 경우
                return n.data.brush;
            else
                return "black"; //TODO
        }).ofObject()));

        //아이디어 위치 변경 리스너
        brainField.addDiagramListener("SelectionMoved", function (event) {
            var rootX = brainField.findNodeForKey(0).location.x;
            var obj = event.subject.Ka.value.vf.Nd;
            var key = obj.key; //위치를 변경한 노드의 키값
            var loc = obj.loc; //위치를 변경한 노드의 위치값

            brainField.selection.each(function (node) {
                if (node.data.parent !== 0)
                    return;
                else {
                    var nodeX = node.location.x;

                    if (rootX < nodeX && node.data.dir !== "right")
                        MindMap.methods.updateNodeDirection(node, "right");
                    else if (rootX > nodeX && node.data.dir !== "left")
                        MindMap.methods.updateNodeDirection(node, "left");

                    MindMap.methods.layoutSort(node);
                }
            });
        });

        //아이디어 수정 리스너
        brainField.addDiagramListener("TextEdited", function (event) {
            var obj = event.subject.Bh.Nd;
            var text = obj.text; //수정된 아이디어 내용
            var key = obj.key; //수정된 아이디어의 키값
        });

        // 새로운 마인드맵을 생성하는 초기화 함수
        function createMindMap() {
            var newMindMap = {
                "class": "go.TreeModel",
                "nodeDataArray": [{
                    "key": 0,
                    "text": "Mind Map", //중앙 text
                    "loc": "0 0"
        }]
            };

            brainField.model = go.Model.fromJson(newMindMap);
        }

        //initialize
        createMindMap();
    },
    methods: {
        addNodeAndLink: (event, object) => {
            //마인드맵에 새로운 노드(아이디어)를 삽입하는 함수
            var adornment = object.part;
            var diagram = adornment.diagram;
            var rootData = brainField.findNodeForKey(0).data;
            var currentNode = adornment.adornedPart;
            var currentData = currentNode.data;
            var newData;

            diagram.startTransaction("Add Node");
            newData = {
                text: "idea",
                dir: currentData.dir,
                parent: currentData.key
            };

            if (rootData == currentData)
                newData.brush = go.Brush.randomColor(); //"#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
            else
                newData.brush = currentData.brush;

            diagram.model.addNodeData(newData);
            MindMap.methods.layoutSort(currentNode);
            diagram.commitTransaction("Add Node");
        },
        removeNodeAndLink: (event, object) => {
            //마인드맵에서 특정 노드를 삭제하는 함수
            var adornment = object.part;
            var diagram = adornment.diagram;
            var rootData = brainField.findNodeForKey(0).data;
            var currentNode = adornment.adornedPart;

            if (rootData == currentNode.data) {
                alert("최상위 아이디어는 삭제할 수 없습니다.");
                return;
            }

            var key = currentNode.data.key;
            var json = JSON.parse(brainField.model.toJson());
            var deleteKey = [];

            deleteKey.push(key);
            diagram.startTransaction("Remove Node");

            json.nodeDataArray.forEach(function (item, index, arr) {
                if (item.key == deleteKey[0])
                    arr.splice(index, 1);
            });

            for (var i = 0; i < deleteKey.length; i++) {
                for (var j = 0; j < json.nodeDataArray.length;) {
                    if (json.nodeDataArray[j].parent == deleteKey[i]) {
                        deleteKey.push(json.nodeDataArray[j].key);
                        json.nodeDataArray.splice(j, 1);
                    } else
                        j++;
                }
            }

            diagram.commitTransaction("Remove Node");

            brainField.model = go.Model.fromJson(json);
        },
        layoutSort: (node) => {
            //마인드맵 노드 레이아웃 정렬
            if (node.data.key === 0) //최상위 루트 노드인 경우
                MindMap.methods.layoutAll();
            else {
                var parts = node.findTreeParts();
                MindMap.methods.layoutAngle(parts, node.data.dir === "left" ? 180 : 0);
            }
        },
        layoutAngle: (parts, angle) => {
            //마인드맵 초점 조절
            var layout = go.GraphObject.make(go.TreeLayout, {
                angle: angle,
                arrangement: go.TreeLayout.ArrangementFixedRoots,
                nodeSpacing: 5,
                layerSpacing: 20,
                setsPortSpot: false,
                setsChildPortSpot: false
            });
            layout.doLayout(parts);
        },
        layoutAll: () => {
            var root = brainField.findNodeForKey(0);
            var rightWard = new go.Set(go.Part);
            var leftWard = new go.Set(go.Part);

            if (root == null)
                return;

            brainField.startTransaction("Layout");
            root.findLinksConnected().each(function (link) {
                var child = link.toNode;

                if (child.data.dir === "left") {
                    leftWard.add(root);
                    leftWard.add(link);
                    leftWard.addAll(child.findTreeParts());
                } else {
                    rightWard.add(root);
                    rightWard.add(link);
                    rightWard.addAll(child.findTreeParts());
                }
            });

            MindMap.methods.layoutAngle(rightWard, 0);
            MindMap.methods.layoutAngle(leftWard, 180);
            brainField.commitTransaction("Layout");
        },
        updateNodeDirection: (node, dir) => {
            var child = node.findTreeChildrenNodes();

            brainField.model.setDataProperty(node.data, "dir", dir);

            while (child.next())
                MindMap.methods.updateNodeDirection(child.value, dir);
        },
        spotConverter: (dir, from) => {
            if (dir === "left")
                return (from ? go.Spot.Left : go.Spot.Right);
            else
                return (from ? go.Spot.Right : go.Spot.Left);
        },

    }
};

var MindMapEvent = {
    node_add: (json) => {
        var object = json.node_object;
    },
    node_update_content: (json) => {
        var key = json.key;
        var text = json.text;
    },
    node_update_loc: (json) => {
        var key = json.key;
        var loc = json.loc;
    },
    remove: (json) => {
        var key = json.key;
    }
};
