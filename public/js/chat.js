var chat = { 
	write : (json) => {
		var id = json.id;
		var nickname = json.nickname;
		var message = json.message;

		var html;

		if (myID === id)
			html = "<p class='right-align text-blue'>" + nickname + " : " + message + "</p>";
		else
			html = "<p>" + nickname + " : " + message + "</p>";

		$("#brain_chatList").append(html);
        $("#brain_chatList").scrollTop($("#brain_chatList")[0].scrollHeight);
	}
};

//<summary>control function define</summary>
$("#brain_chatField").keydown(function (event) {
    if (event.key === "Enter")
        chatSend();
});

$("#chat_send").click(function (event) {
    chatSend();
});

//<summary>function define</summary>
function chatSend() {
    //빈 텍스트 필터링
    if ($("#brain_chatField").val() === "")
        return;

    //TODO 서버로 채팅 데이터 전송
    var json = {
    	event : "chat",
    	team : teamID,
    	id : myID,
    	nickname : myNickname,
    	message : $("#brain_chatField").val()
    };

    socket.send(json);
    $("#brain_chatField").val("");
}