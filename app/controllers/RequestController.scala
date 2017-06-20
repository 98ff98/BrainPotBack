package controllers

import java.util.concurrent.TimeUnit

import akka.actor.ActorSystem
import com.google.inject.Inject
import models.{AutoTeamRemover, TeamManager}
import play.api._
import play.api.db.DBApi
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits.defaultContext

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

  def joinTeam = Action{
    Ok(views.html.index())
  }

  def createTeam = Action {
    Ok(views.html.index())
  }


}


case class CreateTeamDataSet(nickname: String, goal: String)
case class JoinTeamDataSet(nickname: String, inviteCode: String)