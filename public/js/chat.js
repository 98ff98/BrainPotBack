var chat = { 
	write : (json) => {
		var id = json.id;
		var nickname = json.nickname;
		var message = json.message;

		var html;

		if (myID === id)
			html = "<p class='right-align'>" + nickname + " : " + message + "</p>";
		else
			html = "<p>" + nickname + " : " + message + "</p>";

		$("#brain_chatList").append(html);
	}
}