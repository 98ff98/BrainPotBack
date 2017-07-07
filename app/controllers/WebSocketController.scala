package controllers

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.ActorMaterializer
import models.TeamManager
import play.Logger
import play.api.libs.json.Json
import play.api.libs.streams.ActorFlow
import play.api.mvc.WebSocket

class MsgActor(out: ActorRef) extends Actor {
  //클라이언트와의 웹소켓 연결에서 새로운 메세지가 도착하면 호출된다.
  def receive = {
    case msg: String => {
      //받은 메세지를 JSON 포맷으로 파싱한다.
      val json = Json.parse(msg)
      //메세지의 "event" 코드에 따라 작업을 처리한다.
      (json  \ "event").as[String] match {

        //채팅 메세지를 처리한다.
        //DB 접근 없음
        case "chat" => {
          //받은 채팅 메세지를 같은 팀에 속한 모든 유저들에게 전달해준다.
          TeamManager.broadcast( (json \ "team").as[Int], msg)
        }

        //유저 강퇴 메세지를 처리한다.
        //DB 접근 있음
        case "kick_user" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //브레인 스토밍이 다음단계로 진행되었음을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "init" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //유저가 새롭게 그림판에 무언가를 그렸음을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "draw" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //유저가 새롭게 아이디어 오브젝트를 추가했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_add" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //유저가 아이디어 오브젝트를 수정했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_update_content" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //유저가 아이디어 오브젝트의 위치를 변경했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_update_loc" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //유저가 오브젝트를 삭제 했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "remove" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //위에 해당하는 메세지 타입이 없을 경우
        //DB 접근 없음
        case _ => {
          Logger.error("Unknown Massage : \n" + msg + "\n")
        }

      }
    }
  }

}

object MsgActor{
  def props(out: ActorRef) = Props(new MsgActor(out))
}

class WebSocketController {
  implicit val system = ActorSystem("MyActorSystem")
  implicit val materializer = ActorMaterializer()

  def webSocketConn() : Unit = WebSocket.accept[String, String] { request =>
    ActorFlow.actorRef( actor => MsgActor.props(actor) )
  }
}
