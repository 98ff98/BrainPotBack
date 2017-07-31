var socket = {
	websocket : tempWebSocket,
	init : () => {
		socket.websocket.onerror = function (json) {
    		console.log("socket error occured! : " + json);
   		}

   		socket.websocket.onclose = function (json) {
    		console.log("socket connection is closed! : " + json);
		}

		socket.websocket.onopen = function (json) {
			console.log("socket is successfuly connected! : " + json);
		}

		socket.websocket.onmessage = function (json) {
			json = JSON.parse(json.data);
			
			switch (json.event) {
				case "join_user" :
					UserInfo.add(json);
				    //TODO
				    blind();
					break;
				case "left_user" :
					UserInfo.remove(json);
					break;
				case "chat" :
					chat.write(json);
					break;
				case "init" : 
					break;
				case "draw" :
					break;
				case "node_add" :
					MindMap.event.node_add(json.node_object);
					break;
				case "node_update_content" :
					break;
				case "node_update_loc" :
					break;
				case "node_add_comment" :
					break;
				case "node_remove" :
					MindMap.event.node_remove(json.key);
					break;
			}
		}
	},
	send : (json) => {
		json = JSON.stringify(json);
		socket.websocket.send(json);
	}
};

socket.init();