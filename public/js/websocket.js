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
			console.log(json.event);
			
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
				//draw
				case "draw" :
					Drawing.event.draw(json.draw_object);
					break;
				case "draw_remove" :
					Drawing.event.draw_remove(json.key); 
					break;
				//mind map
				case "node_add" :
					MindMap.event.node_add(json.node_object);
					break;
				case "node_update_content" :
					MindMap.event.node_update_content(json.key, json.text);
					break;
				case "node_update_loc" :
					MindMap.event.node_update_loc(json.key, json.x, json.y);
					break;
				case "node_add_comment" :
					break;
				case "node_remove" :
					MindMap.event.node_remove(json.key);
					break;
				//grouping
			}
		}
	},
	send : (json) => {
		json = JSON.stringify(json);
		socket.websocket.send(json);
	}
};

socket.init();