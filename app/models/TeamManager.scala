package models

import java.util.Random
import javax.inject.Inject

import akka.actor.ActorRef
import anorm.SqlParser.get
import anorm.{RowParser, SQL, SqlParser, ~}
import org.apache.commons.lang3.RandomStringUtils
import play.Logger
import play.api.db.DBApi
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.collection.mutable
import scala.concurrent.Future

//팀의 정보를 담는 케이스 클래스
case class TeamData(id: Int, owner: Int, goal: String, status: Int, inviteCode: String)

object TeamManager{
  //팀ID와 그 팀에 속하는 유저들의 리스트를 저장하는 맵
  private var users : mutable.HashMap[Int, List[(Int, ActorRef)]] = mutable.HashMap()

  //유저를 팀 유저 리스트에 추가한다.
  def addUser(userID: Int, teamID : Int, actorRef: ActorRef) : Boolean = {
    val userList = this.users.get(teamID)
    userList match {
      //해당 팀의 유저리스트가 존재한다면
      case Some(list) => {
        this.users.synchronized{
          val tempList = (userID, actorRef) :: this.users(teamID)
          this.users(teamID) = tempList
          Logger.debug("유저 추가작동, 팀ID:" + teamID + "유저ID :" + userID)
          true
        }
      }
      //해당 팀의 유저리스트가 존재하지 않느다면
      case None => {
        this.users.synchronized{
          this.users += (teamID -> List{(userID, actorRef)})
          Logger.debug("팀 추가작동, 팀ID:" + teamID)
          Logger.debug("유저 추가작동, 팀ID:" + teamID + "유저ID :" + userID)
          true
        }
      }
    }

  }

  //유저를 팀 유저 리스트에서 삭제한다.
  def dropUser(userID: Int, teamID: Int) : Unit = {
    try{
      val tempList = this.users(teamID).filter( user => user._1 != userID)
      this.users.synchronized{
        this.users(teamID) = tempList
      }
    }
    catch {
      case e: Exception => e.printStackTrace()
    }
  }

  //해당 팀에 있는 모든 유저들에게 메세지를 전달한다
  def broadcast(teamID : Int, msg: String) : Unit = {
    this.users(teamID).foreach( data => data._2 !  msg)
  }
}
