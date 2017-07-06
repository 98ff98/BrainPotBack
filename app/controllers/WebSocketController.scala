package controllers

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.ActorMaterializer
import play.Logger
import play.api.libs.json.Json
import play.api.libs.streams.ActorFlow
import play.api.mvc.WebSocket

class MsgActor(out: ActorRef) extends Actor {
  //클라이언트와의 웹소켓 연결에서 새로운 메세지가 도착하면 호출된다.
  def receive() : Unit = {
    case msg: String => {
      //받은 메세지를 JSON 포맷으로 파싱한다.
      val json = Json.parse(msg)
      //메세지의 "event" 코드에 따라 작업을 처리한다.
      (json  \ "event").as[String] match {

        //채팅 메세지를 처리한다.
        //DB 접근 없음
        case "chat" => {

        }

        //유저 입장 메세지를 처리한다.
        //DB 접근 없음
        case "join_user" => {

        }

        //유저 강퇴 메세지를 처리한다.
        //DB 접근 있음
        case "kick_user" => {

        }

        //브레인 스토밍이 다음단계로 진행되었음을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "init" => {

        }

        //유저가 새롭게 그림판에 무언가를 그렸음을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "draw" => {

        }

        //유저가 새롭게 아이디어 오브젝트를 추가했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_add" => {

        }

        //유저가 아이디어 오브젝트를 수정했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_update_content" => {

        }

        //유저가 아이디어 오브젝트의 위치를 변경했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_update_loc" => {

        }

        //유저가 오브젝트를 삭제 했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "remove" => {

        }

        case _ => {
          Logger.error("Unknown Massage : \n" + msg + "\n")
        }

      }
    }
  }

  def broadcast(teamID : Int) : Unit = {

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
