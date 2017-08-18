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
			
			console.log("event : " + json.event);
			console.log(json);
			
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
				//initialize
				case "load_start" :
					break;
				case "load_end" :
					break;
				case "init" :
					init (json.level);
					break;
				//draw
				case "draw" :
					Drawing.event.draw(json.draw_object);
					break;
				case "draw_remove" :
					Drawing.event.draw_remove(json.key); 
					break;
				case "draw_update_loc" :
					Drawing.event.draw_update_loc(json.key, json.x, json.y);
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
				case "node_remove" :
					MindMap.event.node_remove(json.key);
					break;
				//idea
				case "idea_add" :
					Idea.event.idea_add(json.idea_object);
					break;
				case "idea_update_content" :
					Idea.event.idea_update_content(json.key, json.text);
					break;
				case "idea_update_loc" :
					Idea.event.idea_update_loc(json.key, json.x, json.y);
					break;
				case "idea_remove" :
					Idea.event.idea_remove(json.key);
					break;
				//grouping
				case "group_create_block" :
					Grouping.event.group_create_block(json.block_object);
					break;
				case "group_create" :
					Grouping.event.group_create(json.group_object);
					break;
				case "group_update_loc" :
					Grouping.event.group_update_loc(json.key, json.x, json.y);
					break;
				//meaning
				case "comment_add" :
					Meaning.event.comment_add(json.comment, json.index);
					break;
				case "comment_remove" :
					Meaning.event.comment_remove(json.index_title, json.index_comment, json.removerID);
					break;
				//vote
				case "vote_setup" :
					Vote.event.vote_setup(json.title, json.multiple);
					break;
				case "vote_vote" :
					Vote.event.vote_vote(json.index);
					break;
				case "vote_finish" :
					Vote.event.vote_finish();
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