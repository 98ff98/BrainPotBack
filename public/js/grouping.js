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
            Grouping.methods.createGroup({
                text : teamTopic,
                category : "root",
                key : 0,
                isGroup : true,
                parent : undefined
            });

            data.forEach (function (item) {
                Grouping.methods.createBlock();
            });
            //<code>load data idea to grouping</code>

            //<code>object drag and drop</code>
            brainField.on('mouse:up', function (event) {
                var object = event.target;

                if (!object)
                    return;

                else if (object.category === "node" && !object.isGroup)
                    Grouping.methods.locationCheck(object);
            });
            //<code>object drag and drop</code>
        },
        createBlock: (object) => {
            var randomX = Math.floor(Math.random() * Grouping.width - 200) + 1;
            var randomY = Math.floor(Math.random() * 50) + 720;

            var block = new f.Text(object.text, {
                key: object.key,
                parent: object.parent,
                category: object.category,
                isGroup: object.isGroup,
                backgroundColor: "#ACE600",
                fontSize: 20,
                fill: "#404040",
                top: randomY,
                left: randomX
            });
            block.setControlsVisibility(Grouping.control.selectionUnableOptions);

            brainField.add(block);
        },
        createGroup: (object) => {
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
                isGroup: object.isGroup,
                top: 10
            });
            group.setControlsVisibility(Grouping.control.selectionUnableOptions);
            if (group.category === "root")
                group.selectable = false;

            brainField.add(group);
        },
        createGroupingMode: () => {
            var node = [];
            var group = [];
            var nextTop = 50;
            var nextLeft = 10;
            var height = 0;

            Grouping.list.forEach(function (item) {
                if (item.isGroup && item.parent === 0)
                    group.push(item);
                else if (!item.isGroup && item.parent === 0)
                    node.push(item);
            });

            group.forEach(function (item) {
                var objects = item.getObjects();
                var childs = Grouping.methods.getChild(item.key);
                var key = item.key;
                var category = item.category;
                var isGroup = item.isGroup;
                var groupWidth = item.width;
                var groupHeight = 0;

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

                titleBar.set({
                    top: nextTop,
                    left: nextLeft
                });
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

                for (var i = 0; i < childs.length; i++) {
                    childs[i].left = titleBar.left + 6;
                    childs[i].top = titleBar.top + (titleBar.height + 5) + (childs[i].height + 5) * i;

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
                node.setControlsVisibility(Grouping.control.selectionUnableOptions);
                brainField.remove(item);
                brainField.add(node);
                brainField.moveTo(node, 1);

                //location
                nextLeft += node.width + 5;
                height = (height < groupHeight) ? groupHeight : height;

                if (nextLeft + 100 >= Grouping.width) {
                    nextLeft = 10;
                    nextTop += height + 10;
                }
            });
        },
        resize: (childs) => {

        },
        locationCheck: (object) => {
            var objectLoc = point(object); //LT, LB, RT, RB
            var groupLoc = [];
            var isArea;

            for (var i = 1; i < Grouping.list.length; i++) {
                if (Grouping.list[i].isGroup)
                    groupLoc.push({
                        location: point(Grouping.list[i]),
                        key: Grouping.list[i].key
                    });
            }

            console.log(objectLoc);
            console.log(groupLoc);

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

            return;
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
        }
    }
};
