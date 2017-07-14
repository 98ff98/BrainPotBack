var Grouping = {
    init: (fieldName, callback) => {
        brainField = GO(go.Diagram, fieldName, {
            allowDrop: true,
            mouseDrop: function (e) {
                Grouping.methods.finishDrop(e, null);
            },
            layout: GO(go.GridLayout, {
                wrappingWidth: Infinity,
                alignment: go.GridLayout.Position,
                cellSize: new go.Size(1, 1)
            }),
            initialContentAlignment: go.Spot.Center,
            "commandHandler.archetypeGroupData": {
                isGroup: true,
                category: "OfNodes"
            },
            "undoManager.isEnabled": false
        });

        brainField.groupTemplateMap.add("OfGroups",
            GO(go.Group, "Auto", {
                    background: "transparent",
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
                        wrappingWidth: Infinity,
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
                    stroke: "#FFDD33",
                    strokeWidth: 2
                }),
                GO(go.Panel, "Vertical",
                    GO(go.Panel, "Horizontal", {
                            stretch: go.GraphObject.Horizontal,
                            background: "#FFDD33"
                        },
                        GO("SubGraphExpanderButton", {
                            alignment: go.Spot.Right,
                            margin: 5
                        }),
                        GO(go.TextBlock, {
                                alignment: go.Spot.Left,
                                editable: true,
                                margin: 5,
                                font: "bold 18px sans-serif",
                                opacity: 0.75,
                                stroke: "#404040"
                            },
                            new go.Binding("text", "text").makeTwoWay())
                    ),
                    GO(go.Placeholder, {
                        padding: 5,
                        alignment: go.Spot.TopLeft
                    })
                )
            ));

        brainField.groupTemplateMap.add("OfNodes",
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
                            background: "#33D3E5"
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
                                stroke: "#404040"
                            },
                            new go.Binding("text", "text").makeTwoWay())
                    ),
                    GO(go.Placeholder, {
                        padding: 5,
                        alignment: go.Spot.TopLeft
                    })
                )
            ));

        brainField.nodeTemplate =
            GO(go.Node, "Auto", {
                    mouseDrop: function (e, nod) {
                        Grouping.methods.finishDrop(e, nod.containingGroup);
                    }
                },
                GO(go.Shape, "Rectangle", {
                        fill: "#ACE600",
                        stroke: null
                    },
                    new go.Binding("fill", "color")),
                GO(go.TextBlock, {
                        margin: 5,
                        editable: true,
                        font: "bold 13px sans-serif",
                        opacity: 0.75,
                        stroke: "#404040"
                    },
                    new go.Binding("text", "text").makeTwoWay())
            );

        if (typeof callback === 'function')
            callback();
    },
    methods: {
        highlightGroup: (event, group, show) => {
            if (!group)
                return;

            event.handled = true;

            if (show) {
                var tool = group.diagram.toolManager.draggingTool;
                var map = tool.draggedParts || tool.copiedParts;

                if (group.canAddMembers(map.toKeySet())) {
                    group.isHighlighted = true;
                    return;
                }
            }

            group.isHighlighted = false;
        },
        finishDrop: (event, group) => {
            var ok = (group !== null ?
                group.addMembers(group.diagram.selection, true) :
                event.diagram.commandHandler.addTopLevelParts(event.diagram.selection, true));

            if (!ok)
                event.diagram.currentTool.doCancel();
        },
        mindMapToGrouping: (nodeData) => {
            var key = [];

            nodeData = Drawing.methods.cleanDrawing(nodeData);

            for (var i = 0; i < nodeData.nodeDataArray.length; i++) {
                if (nodeData.nodeDataArray[i].parent != undefined) { //최상위 루트가 아닌 경우
                    nodeData.nodeDataArray[i].group = nodeData.nodeDataArray[i].parent;
                    delete nodeData.nodeDataArray[i].parent;
                }
            }

            for (var i = 0; i < nodeData.nodeDataArray.length; i++) {
                if (key.indexOf(nodeData.nodeDataArray[i].group) == -1)
                    key.push(nodeData.nodeDataArray[i].group);
            }

            key.forEach(function (key) {
                for (var i = 0; i < nodeData.nodeDataArray.length; i++) {
                    if (key == nodeData.nodeDataArray[i].key) {
                        nodeData.nodeDataArray[i].isGroup = true;
                        nodeData.nodeDataArray[i].category = "OfNodes";
                    }
                }
            });

            nodeData.class = "go.GraphLinksModel";
            nodeData.nodeDataArray[0].isGroup = true;
            nodeData.nodeDataArray[0].category = "OfGroups";

            brainField.model = go.Model.fromJson(nodeData);
        }
    }
};
