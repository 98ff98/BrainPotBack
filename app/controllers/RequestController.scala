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

class RequestController @Inject()(actorSystem: ActorSystem , dBApi: DBApi, teamManager: TeamManager, userManager: UserManager) extends Controller {
  { // 30분마다 오래된 팀들을 자동으로 삭제한다.
    val scheduler = actorSystem.scheduler
    val runnableTask = new AutoTeamRemover(new TeamManager(dBApi, new UserManager(dBApi)))
    implicit val executor = actorSystem.dispatcher
    scheduler.schedule(
      initialDelay = Duration(900, TimeUnit.SECONDS),
      interval = Duration(900, TimeUnit.SECONDS),
      runnable = runnableTask)
  }

  //인덱스 페이지에 접속하려 할 때 호출되는 메소드
  def index = Action {
    Ok(views.html.index())
  }

  //방을 새로 생성하려는 POST 요청을 처리하는 메소드
  def createTeam = Action { implicit request =>
    val receivedData = createTeamDataForm.bindFromRequest()
    receivedData.fold(
      hasErrors => {
        Logger.error("방 생성 폼을 받던 도중에 에러발생")
        println(hasErrors)
        Redirect("/")
      },
      data => {
        try{
          //방을 생성한다.
          val createdUserID = teamManager.createTeam(data.nickname, data.goal)
          createdUserID match {
            case Some(n) => Redirect("/app").withCookies(Cookie("BrainPotLogin", n + ""))
             //방 생성 실패시에 인덱스 페이지로 리다이어렉트 시킨다.
            case None => Redirect("/")
          }
        }
        catch {
          case e: Exception => Logger.error("Job Failed : method joinmTeam()")
            e.printStackTrace()
            Redirect("/")
        }

      }
    )
  }

  //팀 입장 POST 요청을 처리하는 메소드
  def joinTeam = Action { implicit request =>
    val receivedData = joinTeamDataForm.bindFromRequest()
    receivedData.fold(
      hasErrors => {
        Logger.error("방 접속 폼을 받던 도중에 에러발생")
        println(hasErrors)
        Redirect("/")
      },
      data => {
        try{
          //유저가 입장하려는 팀이 존재하는 팀인지 확인한다.
          val teamID = teamManager.findTeamByCode(data.inviteCode)
          teamID match {
            case Some(n) => //Nothing to do
            //존재하지 않는 팀에 입장하려한다면 인덱스 페이지로 리다이어렉트 시킨다.
            case None => Redirect("/")
          }
          //해당 유저의 정보가 유효한지 확인한다.
          val createdUserID = userManager.addNormalUser(data.nickname, teamID.get)
          createdUserID match {
            case Some(n) => {
              Redirect("/app").withCookies(Cookie("BrainPotLogin", n + ""))
            }
            //해당 유저의 정보가 유효하지 않다면 인덱스 페이지로 리다이어렉트 시킨다.
            case None => Redirect("/")
          }
        }
        catch {
          case e: Exception => Logger.error("Job Failed : method joinmTeam()")
            e.printStackTrace()
            Redirect("/")
        }

      }
    )
  }

  //웹 어플리케이션 로드시에 호출된다.
  def app = Action { request =>
    //해당 유저가 정상적인 방법으로 앱에 접속을 시도하는지 판단한다.
    val userCookie = request.cookies.get("BrainPotLogin")
    userCookie match{
      case Some(cookie) =>
      //ALERT 10001 : 잘못된 입장 정보입니다
      case None => Redirect("/").withCookies(Cookie("ALERT", "10001", Some(60)))
    }

    //DB로 부터 쿠키에서 가져온 ID를 가지고 있는 유저의 정보를 가져온다
    val userData = userManager.getUserData(userCookie.get.value.toInt)
    userData match{
      case Some(data) =>
      //ALERT 10002 : 유저를 찾을 수 없습니다.
      case None => Redirect("/").withCookies(Cookie("ALERT", "10002", Some(60)))
    }

    //DB로 부터 쿠키에서 가져온 ID를 가지고 있는 유저가 속한 팀의 정보를 가져온다
    val teamData = teamManager.getTeamData(userData.get.teamID)
    teamData match{
      case Some(data) =>
      //ALERT 10003 : 팀을 찾을 수 없습니다.
      case None => Redirect("/").withCookies(Cookie("ALERT", "10003", Some(60)))
    }

    //가져온 유저 데이터와 팀 데이터를 app 페이지에 전달한다.
    Ok(views.html.app(request, AppLoadDataSet(userData.get, teamData.get) ))
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