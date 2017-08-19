var Grouping = {
    width: undefined,
    height: undefined,
    list: undefined,
    control: {
        selectedNode: undefined,
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
        init: (name, data) => {
            //hide
            $(".upper-canvas").removeClass("z-depth-2");
            $("#menu_idea").css("display", "none");

            //create
            brainField = new f.Canvas(name);

            //init
            Grouping.width = brainField.width;
            Grouping.height = brainField.height;
            Grouping.list = brainField._objects;
            $("#menu2").css("display", "inline");

            // //<code>convert data mindmap to grouping</code>
            // if (data) {
            //     data.forEach(function (item) {
            //         if ((getChild(data, item.key) && item.parent === 0) || item.category === "root") {
            //             item.isGroup = true;
            //             Grouping.methods.createGroup(item);
            //         } else {
            //             item.isGroup = false;
            //             Grouping.methods.createBlock(item);
            //         }
            //     });

            //     function getChild(data, objectKey) {
            //         var childs = [];

            //         for (var i = 0; i < data.length; i++)
            //             if (data[i].parent !== undefined)
            //                 if (data[i].category !== "draw")
            //                     if (data[i].parent === objectKey)
            //                         childs.push(data[i]);

            //         return (childs.length > 0) ? childs : undefined;
            //     }

            //     //sort node
            //     Grouping.methods.createGroupingMode();
            // }
            // //<code>load data mindmap to grouping</code>
            //<code>load data idea to grouping</code>
            Grouping.methods.createGroup("root");

            data.forEach (function (item) {
                Grouping.methods.createBlock(item);
            });
            //<code>load data idea to grouping</code>

            //<code>object drag and drop</code>
            brainField.on('mouse:up', function (event) {
                var object = event.target;

                if (!object)
                    return;

                var json = {
                        event : "group_update_loc",
                        team : teamID,
                        key : object.key,
                        x : object.left,
                        y : object.top
                };

                socket.send(json);
            });
            //<code>object drag and drop</code>

            //<code>object moving</code>
            brainField.on('object:moving', function (event) {
                var object = event.target;
                var childs;

                if (object.isGroup)
                    childs = Grouping.methods.getChild(object.key);

                if (childs) {
                    var distanceX = object.prevX - object.left;
                    var distanceY = object.prevY - object.top;

                    childs.forEach(function (item) {
                        item.set({
                            left: item.left - distanceX,
                            prevX: item.left - distanceX,
                            top: item.top - distanceY,
                            prevY: item.top - distanceY,
                        });
                    });

                    object.prevX = object.left;
                    object.prevY = object.top;
                }
            });
            //<code>object moving</code>

            render();
        },
        createBlock: (object) => {
            var randomX = Math.floor(Math.random() * Grouping.width - 200) + 1;
            var randomY = Math.floor(Math.random() * 50) + 720;
            var json = {
                event : "group_create_block",
                team : teamID,
                block_object : {
                    key : object.key,
                    category : object.category,
                    parent : object.parent,
                    text : object.text,
                    x : randomX,
                    y : randomY
                }
            };
            
            socket.send (json);
        },
        createGroup: (category) => {
            var randomX = Math.floor(Math.random() * Grouping.width - 200) + 1;
            var randomY = Math.floor(Math.random() * 50) + 720;
            var text = $("#brain_groupNameField").val();

            if (text === "" && category !== "root") {
                toast("그룹명을 다시 입력해주세요.");
                return;
            }

            var json = {
                event : "group_create",
                team:teamID,
                group_object : {
                    category : category,
                    x : randomX,
                    y : randomY 
                }
            };

            if (category === "node") {
                json.group_object.key = Idea.keyCount;
                json.group_object.text = text;
                json.group_object.parent = 0;
            }
            else if (category === "root") {
                json.group_object.key = 0;
                json.group_object.text = teamTopic;
                json.group_object.parent = undefined;
            }

            socket.send(json);

            $("#brain_groupNameField").val("");
        },
        createGroupingMode: () => {
            var group = [];

            Grouping.list.forEach(function (item) {
                if (item.isGroup && item.parent === 0)
                    group.push(item);
            });

            group.forEach(function (item) {
                Grouping.methods.groupReDraw(item);
            });
        },
        groupReDraw: (group, isRe) => {
            var objects = group.getObjects();
            var childs = Grouping.methods.getChild(group.key);
            var key = group.key;
            var category = group.category;
            var isGroup = group.isGroup;
            var parent = group.parent;
            var groupWidth = group.width;
            var groupHeight = 0;
            var prevX = group.prevX;
            var prevY = group.prevY;

            var titleBar = objects[0];
            var text = objects[1];
            var leftBorder = objects[2];
            var rightBorder = objects[3];
            var bottomBorder = objects[4];

            //spot update
            objects.forEach(function (i) {
                i.top = 0;
                i.left = 0;
            });

            if (isRe) {
                titleBar.set({
                    top: group.top,
                    left: group.left
                });
            } else {
                titleBar.set({
                    top: Grouping.control.nextTop,
                    left: Grouping.control.nextLeft
                });
            }

            text.set({
                top: titleBar.top + 6,
                left: titleBar.left + 6
            });
            leftBorder.set({
                top: titleBar.top,
                left: titleBar.left
            });
            rightBorder.top = titleBar.top;
            bottomBorder.left = titleBar.left;

            if (childs)
                for (var i = 0; i < childs.length; i++) {
                    childs[i].left = titleBar.left + 6;
                    childs[i].top = titleBar.top + (titleBar.height + 5) + (childs[i].height + 5) * i;
                    childs[i].prevX = childs[i].left;
                    childs[i].prevY = childs[i].top;

                    if (groupWidth < childs[i].width)
                        groupWidth = childs[i].width + 5;

                    groupHeight += (childs[i].height + 5);
                }

            groupHeight += titleBar.height + 2;

            titleBar.width = groupWidth;
            leftBorder.height = groupHeight + 2
            rightBorder.set({
                left: titleBar.left + titleBar.width - 2,
                height: groupHeight + 2
            });
            bottomBorder.set({
                top: titleBar.top + leftBorder.height,
                width: titleBar.width
            });

            var node = new f.Group([titleBar, text, leftBorder, rightBorder, bottomBorder], {
                key: key,
                isGroup: isGroup,
                category: category
            });
            node.set({
                width: Math.floor(node.width - 1),
                prevY: node.top,
                prevX: node.left
            });
            node.setControlsVisibility(Grouping.control.selectionUnableOptions);
            brainField.remove(group);
            brainField.add(node);
            brainField.moveTo(node, 1);

            //location
            Grouping.control.nextLeft += node.width + 5;
            Grouping.control.stackHeight = (Grouping.control.stackHeight < groupHeight) ? groupHeight : Grouping.control.stackHeight;

            if (Grouping.control.nextLeft + 100 >= Grouping.width) {
                Grouping.control.nextLeft = 10;
                Grouping.control.nextTop += Grouping.control.stackHeight + 10;
            }

            render();
        },
        resize: (childs) => {

        },
        locationCheck: (object) => {
            var objectLoc = point(object); //LT, LB, RT, RB
            var areaOf = -1;

            for (var i = 1; i < Grouping.list.length; i++)
                if (Grouping.list[i].isGroup) {
                    var groupLoc = point(Grouping.list[i]);

                    if (inGroup(objectLoc, groupLoc)) {
                        areaOf = Grouping.list[i].key;
                        break;
                    }
                }

            if (areaOf !== -1) {
                var oldParent = object.parent;
                object.parent = areaOf;

                var newGroup = Grouping.methods.getParent(object.parent);
                var oldGroup = Grouping.methods.getParent(oldParent);

                Grouping.methods.groupReDraw(newGroup, true);
                Grouping.methods.groupReDraw(oldGroup, true);
            }

            function point(object) {
                var location = [];

                //Left top
                location.push(new Object({
                    x: object.left,
                    y: object.top
                }));

                //Left bottom
                location.push(new Object({
                    x: object.left,
                    y: object.top + object.height
                }));

                //Right top
                location.push(new Object({
                    x: object.left + object.width,
                    y: object.top
                }));

                //Right bottom
                location.push(new Object({
                    x: object.left + object.width,
                    y: object.top + object.height
                }));

                return location;
            }

            function inGroup(objectLoc, groupLoc) {
                var check = false;

                objectLoc.forEach(function (loc) {
                    if (
                        groupLoc[0].x <= loc.x && //LT.x
                        groupLoc[0].y <= loc.y && //LT.y

                        groupLoc[1].x <= loc.x && //LB.x
                        groupLoc[1].y >= loc.y && //LB.y

                        groupLoc[2].x >= loc.x && //RT.x
                        groupLoc[2].y <= loc.y && //RT.y

                        groupLoc[3].x >= loc.x && //RB.x
                        groupLoc[3].y >= loc.y) //RB.y

                        check = true;
                });

                return check;
            }

            return;
        },
        getObject: (objectKey) => {
            var object;

            for (var i = 0; i < Grouping.list.length; i++) {
                if (Grouping.list[i].category !== "draw")
                    if (Grouping.list[i].key === objectKey) {
                        object = Grouping.list[i];
                        break;
                    }
            }

            return object;
        },
        getChild: (objectKey) => {
            var childs = [];

            for (var i = 0; i < Grouping.list.length; i++) {
                if (Grouping.list[i].parent !== undefined)
                    if (Grouping.list[i].category !== "draw")
                        if (Grouping.list[i].parent === objectKey)
                            childs.push(Grouping.list[i]);
            }

            return (childs.length > 0) ? childs : undefined;
        },
        getParent: (parentKey) => {
            var parent;

            for (var i = 0; i < Grouping.list.length; i++) {
                if (Grouping.list[i].key === parentKey) {
                    parent = Grouping.list[i];
                    break;
                }
            }

            return parent;
        },
        nextLevel: () => {
            var data = [];

            Grouping.list.forEach(function (item) {
                if (item.parent === 0 && item.isGroup) {
                    var object = {
                        title: item.getObjects()[1].text,
                        node: [],
                        comment: []
                    };
                    var childs = Grouping.methods.getChild(item.key);

                    if (childs instanceof Array)
                        childs.forEach(function (item) {
                            object.node.push(item.text);
                        });
                    else
                        object.node.push(childs.text);

                    data.push(object);
                }
            });

            return data;
        }
    },
    event : {
        group_create_block : (block_object) => {
            var block = new f.Text(block_object.text, {
                key: block_object.key,
                parent: block_object.parent,
                category: block_object.category,
                isGroup: false,
                backgroundColor: "#ACE600",
                fontSize: 20,
                fill: "#404040",
                top: block_object.y,
                left: block_object.x
            });
            block.setControlsVisibility(Grouping.control.selectionUnableOptions);

            brainField.add(block);
        },
        group_create : (group_object) => {
            var object = group_object;
            var text;
            var titleBar;
            var leftBorder;
            var rightBorder;
            var bottomBorder;

            if (object.category === "root") {

                titleBar = new f.Rect({
                    width: Grouping.width,
                    height: 35
                });
                text = new f.Text(object.text, {
                    fontSize: 20,
                    top: 6,
                    left: 6
                });
                leftBorder = new f.Rect({
                    width: 2,
                    height: 700
                });
                rightBorder = new f.Rect({
                    left: titleBar.width - 2,
                    width: 2,
                    height: 700
                });
                bottomBorder = new f.Rect({
                    top: 700,
                    width: titleBar.width,
                    height: 2
                });

                titleBar.fill = "#FFDD33";
                leftBorder.fill = "#FFDD33";
                rightBorder.fill = "#FFDD33";
                bottomBorder.fill = "#FFDD33";
            } else if (object.category === "node") {
                titleBar = new f.Rect({
                    width: 100,
                    height: 35
                });
                text = new f.Text(object.text, {
                    fontSize: 20,
                    top: 6,
                    left: 6
                });
                titleBar.width = text.width + (2 * 6);
                leftBorder = new f.Rect({
                    width: 2,
                    height: 75
                });
                rightBorder = new f.Rect({
                    left: titleBar.width - 2,
                    width: 2,
                    height: 75
                });
                bottomBorder = new f.Rect({
                    top: 75,
                    width: titleBar.width,
                    height: 2
                });

                titleBar.fill = "#33D3E5";
                leftBorder.fill = "#33D3E5";
                rightBorder.fill = "#33D3E5";
                bottomBorder.fill = "#33D3E5";
            }

            var group = new f.Group([titleBar, text, leftBorder, rightBorder, bottomBorder], {
                key: object.key,
                parent: object.parent,
                category: object.category,
                isGroup: true,
                top: 10
            });
            group.setControlsVisibility(Grouping.control.selectionUnableOptions);
            Idea.keyCount++;
            if (group.category === "root")
                group.selectable = false;

            brainField.add(group);
        },
        group_update_loc : (key, x, y) => {
            var object = Grouping.methods.getObject(key);

            object.set({
                top : y,
                prevY : y,
                left : x,
                prevX : x
            });

            if (object.category === "node" && !object.isGroup)
                Grouping.methods.locationCheck(object);
            
            brainField.renderAll();
        }
    }
};
