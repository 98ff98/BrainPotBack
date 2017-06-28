package controllers

import java.util.concurrent.TimeUnit

import akka.actor.ActorSystem
import com.google.inject.Inject
import models.{AutoTeamRemover, TeamManager, UserManager}
import play.Logger
import play.api.data.Form
import play.api.data.Forms.{mapping, nonEmptyText}
import play.api.db.DBApi
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.concurrent.Future
import scala.concurrent.duration.Duration

class RequestController @Inject()(actorSystem: ActorSystem , dBApi: DBApi, teamManager: TeamManager, userManager: UserManager) extends Controller {
  { // 10분마다 오래된 팀들을 자동으로 삭제한다.
    val scheduler = actorSystem.scheduler
    val runnableTask = new AutoTeamRemover(new TeamManager(dBApi))
    implicit val executor = actorSystem.dispatcher
    scheduler.schedule(
      initialDelay = Duration(300, TimeUnit.SECONDS),
      interval = Duration(300, TimeUnit.SECONDS),
      runnable = runnableTask)
  }

  def index = Action {
    Ok(views.html.index())
  }

  def joinTeam = Action { implicit request =>
    val receivedData = joinTeamDataForm.bindFromRequest()
    receivedData.fold(
      hasErrors => {
        Logger.error("회원가입 폼을 받던 도중에 에러발생")
        println(hasErrors)
        Redirect("/")
      },
      data => {
        try{
          val teamID = teamManager.findTeamByCode(data.inviteCode)
          teamID match {
            case None => Redirect("/")
          }
          val createdUserID = userManager.addNormalUser(data.nickname, teamID.get)
          createdUserID match {
            case Some(n) => Redirect("/app").withCookies(Cookie("BrainPotLogin", n + ""))
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


  def app = Action {
    Ok(views.html.index())
  }


  val joinTeamDataForm = Form(
    mapping(
      "nickname" -> nonEmptyText(1,10),
      "inviteCode" -> nonEmptyText(5,5)
    )(JoinTeamDataSet.apply)(JoinTeamDataSet.unapply _))
  val createTeamDataForm = Form(
    mapping(
      "nickname" -> nonEmptyText(1,10),
      "goal" -> nonEmptyText(1,100)
    )(CreateTeamDataSet.apply)(CreateTeamDataSet.unapply _))
}


case class CreateTeamDataSet(nickname: String, goal: String)
case class JoinTeamDataSet(nickname: String, inviteCode: String)