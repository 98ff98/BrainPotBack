//var socket = function () {
//    var websocket = new WebSocket("");

//data send client to server
//    var send = function (json) {
//        json = JSON.stringify(json);
//        websocket.send(json);
//    }

//socket close
//    var close = function () {
//        websocket.close();
//    }

//    websocket.onerror = function (json) {
//        console.log("socket error occured! : " + json);
//    }
//
//    websocket.onclose = function (json) {
//        console.log("socket connection is closed! : " + json);
//    }
//
//    websocket.onopen = function (json) {
//        console.log("socket is successfuly connected! : " + json);
//    }
//
//    websocket.onmessage = function (json) {
//        json = JSON.parse(json);
//        console.log(json);
//    }
//}
//var socket = {
//    socket: new WebSocket("ws://"),
//    send: function (data) {
//        socket.send(JSON.stringify(data));
//    }
//};
