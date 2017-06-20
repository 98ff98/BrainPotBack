package controllers

import play.api._
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits.defaultContext

class RequestController extends Controller {

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