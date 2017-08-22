package controllers

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.ActorMaterializer
import models.{MySQLConnection, Node, TeamManager}
import play.Logger
import play.api.db.DB
import play.api.libs.json.Json
import play.api.libs.streams.ActorFlow
import play.api.mvc.WebSocket
import play.api.libs.concurrent.Execution.Implicits.defaultContext


//클라이언트와의 웹 소켓 연결을 처리하는 클래스
class WebSocketController {
  //액터를 사용하기 위한 기본 설정
  implicit val system = ActorSystem("MyActorSystem")
  implicit val materializer = ActorMaterializer()

  //웹 소켓 연결 요청을 액터 플로우로 처리한다.
  //앞으로 해당 클라이언트와의 연결은 props 메소드를 통해서 생성된 액터가 담당한다.
  def webSocketConn() = WebSocket.accept[String, String] { request =>
    ActorFlow.actorRef( actor => MsgActor.props(actor) )
  }
}


class MsgActor(out: ActorRef) extends Actor {
  //MySQL default DB에 접근하기 위한 인스턴스
  val mySQLConnection = new MySQLConnection("default")

  //클라이언트와의 웹소켓 연결에서 새로운 메세지 수신시 호출된다.
  def receive = {
    case msg: String => {
      Logger.debug(msg)
      //받은 메세지를 JSON 포맷으로 파싱한다.
      val json = Json.parse(msg)
      //메세지의 "event" 코드에 따라 작업을 처리한다.
      (json  \ "event").as[String] match {

        //유저 접속 메세지를 처리한다.
        case "join_user" => {
          TeamManager.addUser( (json  \ "id").as[Int], (json  \ "team").as[Int], out)
          TeamManager.broadcast( (json \ "team").as[Int], msg)
        }

        //유저 퇴장 메세지를 처리한다.
        //DB 접근 있음
        case "left_user" => {
          TeamManager.dropUser((json  \ "id").as[Int], (json  \ "team").as[Int])
          TeamManager.broadcast( (json \ "team").as[Int], msg)
        }

        //채팅 메세지를 처리한다.
        //DB 접근 없음
        case "chat" => {
          //받은 채팅 메세지를 같은 팀에 속한 모든 유저들에게 전달해준다.
          TeamManager.broadcast( (json \ "team").as[Int], msg)
        }

        //브레인 스토밍이 다음단계로 진행되었음을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "init" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }


        //유저가 새롭게 아이디어 오브젝트를 추가했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_add" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          val node = Node((json \ "node_object" \ "key").as[Int], (json \ "team" ).as[Int], (json \ "node_object" \ "owner").as[Int], msg)
          mySQLConnection.addNode(node)
        }

        //유저가 아이디어 오브젝트를 수정했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_update_content" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          mySQLConnection.modiNodeText( (json \ "key").as[Int], (json \ "owner").as[Int], msg)
        }

        //유저가 아이디어 오브젝트의 위치를 변경했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_update_loc" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          mySQLConnection.modiNodeLoc( (json \ "key").as[Int], (json \ "owner").as[Int], msg)
        }

        //유저가 오브젝트를 삭제 했다는 것을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "node_remove" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //유저가 새롭게 그림판에 무언가를 그렸음을 알리는 메세지를 처리한다.
        //DB 접근 있음
        case "draw" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //todo
        case "draw_remove" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //todo
        case "draw_update_loc" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        //
        case "idea_add" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        case "idea_update_content" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        case "idea_update_loc" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        case "idea_remove" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        case "group_create_block" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }

        case "group_create" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        
        case "group_update_loc" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        
        case "comment_add" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        
        case "comment_remove" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        
        case "vote_setup" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        
        case "vote_vote" => {
          TeamManager.broadcast( (json \ "team").as[Int], msg)
          //TODO
        }
        
        case "vote_finish" => {
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

//MsgActor의 props를 담당하는 컴패니언 오브젝트
object MsgActor{
  def props(out: ActorRef) = Props(new MsgActor(out))
}
