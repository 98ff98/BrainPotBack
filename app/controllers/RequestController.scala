package controllers

import java.util.concurrent.TimeUnit

import akka.actor.ActorSystem
import com.google.inject.Inject
import models.{AutoTeamRemover, TeamManager}
import play.Logger
import play.api._
import play.api.data.Form
import play.api.data.Forms.{mapping, nonEmptyText}
import play.api.db.DBApi
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.concurrent.Future
import scala.concurrent.duration.Duration

class RequestController @Inject()(actorSystem: ActorSystem , dBApi: DBApi) extends Controller {
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

      }
    )
  }

  def createTeam = Action {
    Ok(views.html.index())
  }

  def app = Action {
    Ok(views.html.index())
  }

  val joinTeamDataForm = Form(
    mapping(
      "nickname" -> nonEmptyText(1,10),
      "inviteCode" -> nonEmptyText(5,5)
    )(JoinTeamDataSet.apply)(JoinTeamDataSet.unapply _))

}


case class CreateTeamDataSet(nickname: String, goal: String)
case class JoinTeamDataSet(nickname: String, inviteCode: String)