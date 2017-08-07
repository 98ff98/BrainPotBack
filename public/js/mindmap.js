var f = fabric;
var brainField;

var MindMap = {
    keyCount: 0,
    width: undefined,
    height: undefined,
    list: undefined,
    control: {
        selectedNode: undefined,
        ungroupedNode: {
            rect: undefined,
            text: undefined,
            key: undefined,
            owner :undefined,
            parent: undefined,
            dir: undefined,
            leftLine: undefined,
            rightLine: []
        },
        addButton: undefined,
        removeButton: undefined,
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

            //create
            brainField = new f.Canvas(name);

            //init
            MindMap.width = brainField.width;
            MindMap.height = brainField.height;
            MindMap.list = brainField._objects;

            var text = new f.IText("Mind Map", {
                fontSize: 18,
                left: (MindMap.width / 2) - 50,
                top: (MindMap.height / 2) - 50
            });

            var rect = new f.Rect({
                width: text.width,
                height: 4,
                fill: "black",
                left: (MindMap.width / 2) - 50,
                top: (MindMap.height / 2) - 27
            });

            var root = new f.Group([rect, text], {
                key: MindMap.keyCount,
                category: "root",
                dir: "right",
                leftLine: [],
                rightLine: [],
                lockMovementX: true,
                lockMovementY: true
            });
            MindMap.keyCount++;
            root.setControlsVisibility(MindMap.control.selectionUnableOptions);

            brainField.add(root);
            //object select
            brainField.on("mouse:down", function (event) {
                var object = event.target;

                MindMap.methods.removeButtons();

                //<code>regrouping</code>
                if (MindMap.control.ungroupedNode.key)
                    text.exitEditing();

                if (!object)
                    return;

                //<code>create add/remove button</code>
                if (object.category === "node" || object.category === "root") {
                    var width = object.width;
                    var top = object.top;
                    var left = object.left;

                    var removeRect = new f.Rect({
                        fill: "#EAEAEA",
                        width: 20,
                        height: 20,
                        left: left - 25,
                        top: top + 4
                    });

                    var removeText = new f.Text("-", {
                        fontSize: 30,
                        left: removeRect.left + 5,
                        top: top - 4
                    });

                    var addRect = new f.Rect({
                        fill: "#EAEAEA",
                        width: 20,
                        height: 20,
                        left: left + width + 5,
                        top: top + 4
                    });

                    var addText = new f.Text("+", {
                        fontSize: 25,
                        left: addRect.left + 2,
                        top: top
                    });

                    var addButton = new f.Group([addRect, addText], {
                        category: "addButton",
                        lockMovementX: true,
                        lockMovementY: true
                    });
                    var removeButton = new f.Group([removeRect, removeText], {
                        category: "removeButton",
                        lockMovementX: true,
                        lockMovementY: true
                    });

                    addButton.setControlsVisibility(MindMap.control.selectionUnableOptions);
                    removeButton.setControlsVisibility(MindMap.control.selectionUnableOptions);

                    brainField.add(addButton);
                    brainField.add(removeButton);

                    MindMap.control.addButton = addButton;
                    MindMap.control.removeButton = removeButton;
                    MindMap.control.selectedNode = object;
                }
                //<code>create add/remove button</code>

                //<code>add button pressed</code>
                if (object.category === "addButton") {
                    MindMap.methods.removeButtons();
                    MindMap.methods.createNode(MindMap.control.selectedNode);
                }
                //<code>add button pressed</code>

                //<code>remove button pressed</code>
                if (object.category === "removeButton") {
                    MindMap.methods.removeButtons();
                    MindMap.methods.removeNode(MindMap.control.selectedNode);
                }
                //<code>remove button pressed</code>
            });
            //object double click -> text editing mode enter
            f.util.addListener(brainField.upperCanvasEl, 'dblclick', function (event) {
                var object = brainField.getActiveObject();
                var items = [];

                MindMap.methods.removeButtons();
                MindMap.control.selectedNode = object;

                if (!object)
                    return;

                if (object.category === "node") {
                    var left = object.left;
                    var top = object.top;
                    var width = object.width;

                    items = object.getObjects();

                    var key = object.key;
                    var parent = object.parent;
                    var rect = items[0];
                    var text = items[1];
                    var dir = object.dir;
                    var leftLine = object.leftLine;
                    var rightLine = object.rightLine;

                    brainField.remove(object);

                    text.left = object.left;
                    rect.left = object.left;
                    text.top = object.top;
                    rect.top = object.top + 20;

                    MindMap.control.ungroupedNode.rect = rect;
                    MindMap.control.ungroupedNode.text = text;
                    MindMap.control.ungroupedNode.key = key;
                    MindMap.control.ungroupedNode.parent = parent;
                    MindMap.control.ungroupedNode.dir = dir;
                    MindMap.control.ungroupedNode.leftLine = leftLine;
                    MindMap.control.ungroupedNode.rightLine = rightLine;


                    brainField.add(text);
                    brainField.add(rect);

                    text.enterEditing();
                    text.text = "";
                }
            });
            //object moving
            brainField.on("object:moving", function (event) {
                var object = event.target;
                var addButton = MindMap.control.addButton;
                var removeButton = MindMap.control.removeButton;

                //<code>add / remove button move </code>
                if (object.category === "node" || object.category === "root") {

                    if (addButton) {
                        addButton.setLeft(object.left + object.width + 5);
                        addButton.setTop(object.top);
                    }

                    if (removeButton) {
                        removeButton.setLeft(object.left - removeButton.width - 5);
                        removeButton.setTop(object.top - 4);
                    }

                    MindMap.methods.objectMoving(object);
                }
                //<code>add / remove button move </code>
            });
            //object moving (data send)
            brainField.on("object:modified", function (event) {
                var object = event.target;

                if (object.category === "node") {
                    var json = {
                        event: "node_update_loc",
                        owner : object.owner,
                        team: teamID,
                        key: object.key,
                        x: object.left,
                        y: object.top
                    };

                    socket.send(json);
                }
            });
            //text changed
            brainField.on("text:changed", function (event) {
                var object = event.target;

                if (!object)
                    return;

                if (MindMap.control.ungroupedNode.rect)
                    MindMap.control.ungroupedNode.rect.width = object.width;
            });
            //text editing mode exit
            brainField.on("text:editing:exited", function (event) {
                var rect = MindMap.control.ungroupedNode.rect;
                var text = MindMap.control.ungroupedNode.text;
                var key = MindMap.control.ungroupedNode.key;
                var parent = MindMap.control.ungroupedNode.parent;
                var dir = MindMap.control.ungroupedNode.dir;
                var leftLine = MindMap.control.ungroupedNode.leftLine;
                var rightLine = MindMap.control.ungroupedNode.rightLine;

                brainField.remove(rect);
                brainField.remove(text);

                var node = new f.Group([rect, text], {
                    key: key,
                    parent: parent,
                    dir: dir,
                    category: "node",
                    leftLine: leftLine,
                    rightLine: rightLine,
                });
                node.isMoving = false;
                node.scaleX = 1;
                node.scaleY = 1;
                node.skewX = 0;
                node.skewY = 0;
                node.setControlsVisibility(MindMap.control.selectionUnableOptions);

                brainField.add(node);

                MindMap.control.ungroupedNode = {
                    rect: undefined,
                    text: undefined,
                    key: undefined,
                    dir: undefined,
                    parent: undefined,
                    leftLine: undefined,
                    rightLine: []
                };
            });
        },
        removeButtons: () => {
            if (MindMap.control.addButton) {
                MindMap.list.forEach(function (item, index) {
                    if (item === MindMap.control.addButton)
                        MindMap.list.splice(index, 1);
                });
            }

            if (MindMap.control.removeButton) {
                MindMap.list.forEach(function (item, index) {
                    if (item === MindMap.control.removeButton)
                        MindMap.list.splice(index, 1);
                });
            }
        },
        createNode: (parent) => {
            var json = {
                event : "node_add",
                team : teamID,
                node_object : {
                    owner : myID,
                    text : "idea",
                    dir : parent.dir,
                    parent : parent.key,
                    key : MindMap.keyCount
                }
            };

            if (parent.category === "root")
                json.node_object.brush = "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
            else
                json.node_object.brush = parent._objects[0].fill;

            socket.send(json);
        },
        removeNode: (object) => {
            if (object.category === "node") {
                if (object.owner === myID || UserInfo.isAdmin(myID)) {

                    var json = {
                        event:"node_remove",
                        team:teamID,
                        key:object.key
                    }

                    MindMap.methods.removeButtons();
                    socket.send(json);
                } else
                    toast("내가 제출한 아이디어가 아니면 삭제할 수 없습니다.");
            }
        },
        layoutSort: (object) => {
            var key = object.key;
            var keys = [];

            keys.push(key);

            var childs = MindMap.methods.getChild(key);
            sort(object, childs);

            for (var i = 0; i < keys.length; i++)
                for (var j = 0; j < MindMap.list.length; j++)
                    if (keys[i] === MindMap.list[j].parent) {
                        keys.push(MindMap.list[j].key);
                        sort(MindMap.list[j], MindMap.methods.getChild(MindMap.list[j].key));
                        //                        MindMap.methods.objectMoving(MindMap.list[j]);
                    }

            for (var i = 0; i < MindMap.list.length; i++)
                if (MindMap.list[i].category === "node")
                    MindMap.methods.objectMoving(MindMap.list[i]);

            function sort(object, childs) {
                if (!childs)
                    return;

                var childsCount = childs.length;
                var isHol = (childsCount % 2 != 0) ? true : false;
                var half;

                if (object.dir === "right") {
                    if (isHol) {
                        half = childsCount / 2 + 1;
                        childs.forEach(function (item, index) {
                            item.set({
                                top: object.top + ((index + 1 - half) * 40) + 20,
                                left: object.left + object.width + 50
                            });
                        });
                    } else {
                        half = childsCount / 2;
                        childs.forEach(function (item, index) {
                            item.set({
                                top: object.top + ((index + 1 - half) * 40) - 20,
                                left: object.left + object.width + 50
                            });
                        });
                    }
                } else if (object.dir === "left") {
                    if (isHol) {
                        half = childsCount / 2 + 1;
                        childs.forEach(function (item, index) {
                            item.set({
                                top: object.top + ((index + 1 - half) * 40) + 20,
                                left: object.left - item.width - 50
                            });
                        });
                    } else {
                        half = childsCount / 2;
                        childs.forEach(function (item, index) {
                            item.set({
                                top: object.top + ((index + 1 - half) * 40) - 20,
                                left: object.left - item.width - 50
                            });
                        });
                    }
                }
            }
        },
        objectMoving: (object) => {
            if (object.category === "root") {
                //TODO
            } else if (object.category === "node") {
                if (object.dir === "right") {
                    if (object.leftLine) {
                        var parent = MindMap.methods.getParent(object.parent);
                        var objectPoint = new LeftPoint(object);
                        var parentPoint = new RightPoint(parent);

                        object.leftLine && object.leftLine.set({
                            "x1": parentPoint.x,
                            "y1": parentPoint.y,
                            "x2": objectPoint.x,
                            "y2": objectPoint.y
                        });
                    }

                    if (object.rightLine.length > 0)
                        for (var i = 0; i < object.rightLine.length; i++) {
                            var child = MindMap.methods.getObject(object.rightLine[i].to);
                            var childPoint = new LeftPoint(child);
                            var objectPoint = new RightPoint(object);

                            child.leftLine && child.leftLine.set({
                                "x1": objectPoint.x,
                                "y1": objectPoint.y,
                                "x2": childPoint.x,
                                "y2": childPoint.y
                            });
                        }
                } else if (object.dir === "left") {
                    if (object.rightLine) {
                        var parent = MindMap.methods.getParent(object.parent);
                        var objectPoint = new RightPoint(object);
                        var parentPoint = new LeftPoint(parent);

                        object.rightLine && object.rightLine.set({
                            "x1": parentPoint.x,
                            "y1": parentPoint.y,
                            "x2": objectPoint.x,
                            "y2": objectPoint.y
                        });
                    }

                    if (object.leftLine.length > 0)
                        for (var i = 0; i < object.leftLine.length; i++) {
                            var child = MindMap.methods.getObject(object.leftLine[i].to);
                            var childPoint = new RightPoint(child);
                            var objectPoint = new LeftPoint(object);

                            child.rightLine && child.rightLine.set({
                                "x1": objectPoint.x,
                                "y1": objectPoint.y,
                                "x2": childPoint.x,
                                "y2": childPoint.y
                            });
                        }
                }
            }

            render();
        },
        dirChange: (object, dir) => {
            var key = object.key;
            var keys = [];

            keys.push(key);
            object.dir = dir;
            swap(object);

            for (var i = 0; i < keys.length; i++)
                for (var j = 0; j < MindMap.list.length; j++)
                    if (MindMap.list[j].category === "node")
                        if (MindMap.list[j].parent === keys[i]) {
                            keys.push(MindMap.list[j].key);
                            MindMap.list[j].dir = dir;
                            swap(MindMap.list[j]);
                        }

            function swap(object) {
                var rightLine = new Object(object.leftLine);
                var leftLine = new Object(object.rightLine);

                object.leftLine = undefined;
                object.rightLine = undefined;

                object.leftLine = leftLine;
                object.rightLine = rightLine;
            }
        },
        getParent: (parentKey) => {
            var parent;

            for (var i = 0; i < MindMap.list.length; i++) {
                if (MindMap.list[i].key === parentKey) {
                    parent = MindMap.list[i];
                    break;
                }
            }

            return parent;
        },
        getObject: (objectKey) => {
            var object;

            for (var i = 0; i < MindMap.list.length; i++) {
                if (MindMap.list[i].key === objectKey) {
                    object = MindMap.list[i];
                    break;
                }
            }

            return object;
        },
        getChild: (objectKey) => {
            var childs = [];

            for (var i = 0; i < MindMap.list.length; i++)
                if (MindMap.list[i].parent !== undefined)
                    if (MindMap.list[i].parent === objectKey)
                        childs.push(MindMap.list[i]);

            return (childs.length > 0) ? childs : undefined;
        },
        nextLevel: () => {
            //<code>data return mindmap to grouping</code>
            var data = [];

            MindMap.list.forEach(function (item) {
                if (item.category === "root" || item.category === "node") {
                    data.push({
                        category: item.category,
                        key: item.key,
                        parent: item.parent,
                        text: item._objects[1].text
                    });
                }
            });

            return data;
        }
    },
    event : {
        node_add : (object) => {
            var owner = object.owner;
            var idea = object.text;
            var dir = object.dir;
            var key = object.key;
            var parentKey = object.parent;
            var fill = object.brush;

            var text = new f.IText(idea, {
                fontSize: 18
            });

            var rect = new f.Rect({
                width: text.width,
                height: 4,
                top: text.top + 20,
                fill:fill
            });

            var parent = MindMap.methods.getParent(parentKey);

            var node = new f.Group([rect, text], {
                top: parent.top,
                left: parent.left + parent.width + 50,
                key: key,
                parent: parentKey,
                category: "node",
                dir: dir,
                owner : owner
            });

            if (node.dir === "right") {
                node.leftLine = undefined;
                node.rightLine = [];
            } else if (node.dir === "left") {
                node.leftLine = [];
                node.rightLine = undefined;
            }

            node.setControlsVisibility(MindMap.control.selectionUnableOptions);
            MindMap.keyCount++;

            brainField.add(node);

            var parentRightPoint = new RightPoint(parent);
            var nodeLeftPoint = new LeftPoint(node);
            var line = new f.Line([parentRightPoint.x, parentRightPoint.y, nodeLeftPoint.x, nodeLeftPoint.y], {
                category: "line",
                from: parent.key,
                to: node.key,
                fill: rect.fill,
                stroke: rect.fill,
                strokeWidth: 4,
                selectable: false
            });

            if (parent.dir === "right") {
                node.leftLine = line;
                parent.rightLine.push(line);
            } else if (parent.dir === "left") {
                node.rightLine = line;
                parent.leftLine.push(line);
            }

            brainField.add(line);

            MindMap.methods.layoutSort(parent);
            MindMap.methods.objectMoving(parent);
            render();
        },
        node_remove : (key) => {
                var keys = [];

                keys.push(key);

                MindMap.list.forEach(function (item, index) {
                    if (item.key === keys[0]) {
                        MindMap.list.splice(index, 1);
                        return;
                    }
                });

                for (var i = 0; i < keys.length; i++)
                    for (var j = 0; j < MindMap.list.length;) {
                        if (MindMap.list[j].category === "root") {
                            j++;
                            continue;
                        }

                        if (MindMap.list[j].category === "node") {
                            if (MindMap.list[j].parent === keys[i]) {
                                keys.push(MindMap.list[j].key);
                                MindMap.list.splice(j, 1);
                            } else
                                j++;
                        }

                        if (MindMap.list[j].category === "line") {
                            if (MindMap.list[j].to === keys[i]) {
                                MindMap.list.splice(j, 1);
                            } else
                                j++;
                        }
                    }

                brainField.renderAll();
        },
        node_update_content : (key, text) => {
            //TODO
            render();
        },
        node_update_loc : (key, x, y) => {
            //TODO
            var object = MindMap.methods.getObject(key);
            var parentKey = object.parent;
            var parent = MindMap.methods.getParent(parentKey);

            object.set({
                top : y,
                left : x
            });

            if (parent.category === "root") {
                var objectLoc = new Location(object);
                var parentLoc = new Location(parent);
                var dir = object.dir;
                var dirChange;

                if (objectLoc.x < parentLoc.x) {
                    dirChange = (dir === "left") ? false : true;
                    if (dirChange)
                        MindMap.methods.dirChange(object, "left");
                } else if (objectLoc.x > parentLoc.x) {
                    dirChange = (dir === "right") ? false : true;
                    if (dirChange)
                        MindMap.methods.dirChange(object, "right");
                }

                if (dirChange) {
                    MindMap.methods.layoutSort(object);
                    MindMap.methods.objectMoving(object);
                }
            }

            MindMap.methods.objectMoving(object);
            brainField.renderAll();
        }
    }
};

function Location(object) {
    var x;
    var y;

    x = object.left + (object.width / 2);
    y = object.top + (object.height / 2);

    return {
        x: x,
        y: y
    }
}

function LeftPoint(object) {
    var x;
    var y;

    x = object.left;
    y = object.top + object.height - 4;

    return {
        x: x,
        y: y
    }
}

function RightPoint(object) {
    var x;
    var y;

    x = object.left + object.width - 4;
    y = object.top + object.height - 4;

    return {
        x: x,
        y: y
    }
}
