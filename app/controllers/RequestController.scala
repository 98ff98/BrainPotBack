package controllers

import java.util.concurrent.TimeUnit

import akka.actor.ActorSystem
import com.google.inject.Inject
import models._
import play.Logger
import play.api.data.Form
import play.api.data.Forms.{mapping, nonEmptyText}
import play.api.db.DBApi
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.concurrent.Future
import scala.concurrent.duration.Duration

class RequestController @Inject()(actorSystem: ActorSystem) extends Controller {
  //"default" DB에 접근하여 여러 작업을 수행하기 위한 커넥터
  val mySQLConnection: MySQLConnection = new MySQLConnection("default")
  //일정시간마다 자동으로 오래된 팀들을 DB에서 삭제
  { // 30분마다 오래된 팀들을 자동으로 삭제한다.
    val scheduler = actorSystem.scheduler
    val runnableTask = new AutoTeamRemover()
    implicit val executor = actorSystem.dispatcher
    scheduler.schedule(
      initialDelay = Duration(900, TimeUnit.SECONDS),
      interval = Duration(900, TimeUnit.SECONDS),
      runnable = runnableTask)
  }

  //인덱스 페이지에 접속하려 할 때 호출되는 메소드
  def index = Action {
    Ok(views.html.newIndex())
  }

  //방을 새로 생성하려는 POST 요청을 처리하는 메소드
  def createTeam = Action.async{ implicit request =>
    val receivedData = createTeamDataForm.bindFromRequest()
    receivedData.fold(
      hasErrors => {
        Logger.error("방 생성 폼을 받던 도중에 에러발생")
        println(hasErrors)
        Future(Redirect("/"))
      },
      data => {
        try{
          //방을 생성한다.
          val createdUserID = mySQLConnection.createTeam(data.nickname, data.goal)
          createdUserID.map{
            userID => Redirect("/app").withCookies(Cookie("BrainPotLogin", userID + ""))
          }
        }
        catch {
          case e: Exception => Logger.error("Job Failed : During creating Team")
            e.printStackTrace()
            Future(Redirect("/"))
        }
      }
    )
  }

  //팀 입장 POST 요청을 처리하는 메소드
  def joinTeam = Action.async{ implicit request =>
    val receivedData = joinTeamDataForm.bindFromRequest()
    receivedData.fold(
      hasErrors => {
        Logger.error("방 접속 폼을 받던 도중에 에러발생")
        println(hasErrors)
        Future( Redirect("/") )
      },
      data => {
        try{
          //유저가 입장하려는 팀이 존재하는 팀인지 확인한다.
          val teamIDFuture = mySQLConnection.findTeamByCode(data.inviteCode)
          //해당 유저의 정보가 유효한지 확인한다.
          val userIDFuture = teamIDFuture.flatMap{
            teamID => mySQLConnection.addNormalUser(data.nickname, teamID)
          }

          userIDFuture.map{
            id => Redirect("/app").withCookies(Cookie("BrainPotLogin", id + ""))
          }
        }

        catch {
          case e: Exception => Logger.error("Job Failed : Durung Join Team")
            e.printStackTrace()
            Future( Redirect("/") )
        }

      }
    )
  }

  //웹 어플리케이션 로드시에 호출된다.
  def app = Action.async{ request =>
    //해당 유저가 정상적인 방법으로 앱에 접속을 시도하는지 판단한다.
    val userCookie = request.cookies.get("BrainPotLogin")
    userCookie match{
      case Some(cookie) =>
      //ALERT 10001 : 잘못된 입장 정보입니다
      case None => Future( Redirect("/").withCookies(Cookie("ALERT", "10001", Some(60))) )
    }

    //DB로 부터 쿠키에서 가져온 ID를 가지고 있는 유저의 정보를 가져온다
    val userDataFuture = mySQLConnection.getUserData(userCookie.get.value.toInt)
    val loadDataFuture : Future[AppLoadDataSet] = userDataFuture.flatMap{
      ud => {
        mySQLConnection.getTeamData(ud.teamID).map{
          td => AppLoadDataSet(ud, td)
        }
      }
    }
    //가져온 데이터를 app 페이지에 전달한다`.
    loadDataFuture.map{
      data => Ok(views.html.app(request, data))
    }
  }

  //어드민이 아닌 유저가 기존 방에 들어가기 위해서 서버로 전송하는 POST 파라미터를 파싱하는 폼
  val joinTeamDataForm = Form(
    mapping(
      "NICKNAME" -> nonEmptyText(1,10),
      "CODE" -> nonEmptyText(5,5)
    )(JoinTeamDataSet.apply)(JoinTeamDataSet.unapply _))

  //어드민 유저가 방을 생성하기 위해서 서버로 전송하는 POST 파라미터를 파싱하는 폼
  val createTeamDataForm = Form(
    mapping(
      "NICKNAME" -> nonEmptyText(1,10),
      "TOPIC" -> nonEmptyText(1,100)
    )(CreateTeamDataSet.apply)(CreateTeamDataSet.unapply _))

}

//app.scala.html 페이지를 로드할 때 필요한 데이터를 담는 케이스 클래스
case class AppLoadDataSet(userData: UserData, teamData: TeamData)

//방 생성에 필요한 데이터를 담는 케이스 클래스
case class CreateTeamDataSet(nickname: String, goal: String)

//방 입장에 필요한 데이터를 담는 케이스 클래스
case class JoinTeamDataSet(nickname: String, inviteCode: String)