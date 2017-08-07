var Drawing = {
    keyCount : 0,
    control: {
        selectedDraw : undefind,
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
        init: () => {
            brainField.freeDrawingBrush.width = 2;
            brainField.freeDrawingBrush.onMouseUp = function () {
                var context = this.canvas.contextTop;
                var pathData = this.convertPointsToSVGPath(this._points).join('');
                var color = brainField.freeDrawingBrush.color;

                context.closePath();

                var json = {
                    event: "draw",
                    team: teamID,
                    draw_object: {
                        owner: myID,
                        path: pathData,
                        color: color,
                        category: "draw"
                    }
                };

                socket.send(json);
            }

            brainField.on('mouse:down', function (event) {
                
            });
        },
        switch: () => {
            brainField.isDrawingMode = (brainField.isDrawingMode) ? false : true;
        },
        setColor: (hex) => {
            brainField.freeDrawingBrush.color = hex;
        }
    },
    event: {
        draw: (draw_object) => {
            var owner = draw_object.owner;
            var color = draw_object.color;
            var category = draw_object.category;
            var path = brainField.freeDrawingBrush.createPath(draw_object.path);

            path.owner = owner;
            path.stroke = color;
            path.category = category;
            path.key = Drawing.keyCount++;
            path.setControlsVisibility(Drawing.control.selectionUnableOptions);

            brainField.add(path);
            brainField.renderAll();
        },
        draw_remove: () => {

        }
    }
};

//그리기 버튼을 눌렀을 때 실행
$("#menu_draw").click(function () {
    Drawing.methods.switch();
});

//색을 선택했을 때 실행
$("#palette>area").click(function () {
    var hex = $(this).attr("data-color");

    $("#menu_draw").css("background", hex);
    Drawing.methods.setColor(hex);
});
