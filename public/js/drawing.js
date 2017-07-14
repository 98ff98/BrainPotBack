var Drawing = {
    tool: new FreehandDrawingTool(),
    draw: false, //그리기 On/Off
    color: "#000000", //색상값
    init: () => {
        brainField.toolManager.mouseDownTools.insertAt(3, new GeometryReshapingTool());
        brainField.nodeTemplateMap.add("FreehandDrawing", GO(go.Part, {
                locationSpot: go.Spot.Center,
                isLayoutPositioned: false
            },
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), {
                selectionAdorned: true,
                selectionObjectName: "SHAPE",
                selectionAdornmentTemplate: GO(go.Adornment, "Auto", GO(go.Shape, {
                    stroke: "dodgerblue",
                    fill: null
                }), GO(go.Placeholder, {
                    margin: -1
                }))
            }, {
                resizable: true,
                resizeObjectName: "SHAPE"
            }, {
                rotatable: true,
                rotateObjectName: "SHAPE"
            }, {
                reshapable: true
            }, GO(go.Shape, {
                    name: "SHAPE",
                    fill: null,
                    strokeWidth: 1.5
                },
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                new go.Binding("angle").makeTwoWay(),
                new go.Binding("geometryString", "geo").makeTwoWay(),
                new go.Binding("fill"),
                new go.Binding("stroke"),
                new go.Binding("strokeWidth"))
        ));
        Drawing.tool.archetypePartData = {
            stroke: Drawing.color, //팔레트에서 선택된 현재 색
            strokeWidth: 3,
            category: "FreehandDrawing"
        };
        Drawing.tool.isBackgroundOnly = false;
    },
    methods: {
        drawOn: () => {
            brainField.toolManager.mouseMoveTools.add(Drawing.tool);
            Drawing.draw = true;
        },
        drawOff: () => {
            brainField.toolManager.mouseMoveTools.remove(Drawing.tool);
            Drawing.draw = false;
        },
        colorPick: (colorHex) => {
            Drawing.color = colorHex;
            Drawing.tool.archetypePartData.stroke = colorHex;

            $("#menu_draw").css("background-color", colorHex);
        },
        cleanDrawing: (nodeData) => {
            for (var i = 0; i < nodeData.nodeDataArray.length;) {
                if (nodeData.nodeDataArray[i].category == "FreehandDrawing") //그림인 경우
                    nodeData.nodeDataArray.splice(i, 1);
                else
                    i++;
            }

            return nodeData;
        }
    }
};

//그리기 버튼을 눌렀을 때 실행
$("#menu_draw").click(function () {
    if (!Drawing.draw)
        Drawing.methods.drawOn();
    else
        Drawing.methods.drawOff();
});

//색을 선택했을 때 실행
$("#palette>area").click(function () {
    Drawing.methods.colorPick($(this).attr("data-color"));
});
