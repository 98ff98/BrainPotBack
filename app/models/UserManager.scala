package models

import javax.inject.Inject
import java.util.Random

import akka.actor.ActorRef
import anorm.SqlParser.get
import anorm.{RowParser, SQL, SqlParser, ~}
import play.api.Logger
import play.api.db.DBApi

import scala.concurrent.Future


//유저관련 정보를 표현하는 케이스 클래스
case class UserData(id: Int, teamID: Int, nickname: String)


class UserManager @Inject()(dbApi: DBApi){
  private val db = dbApi.database("default")

  //유저 데이터를 파싱하는 파서
  val userDataParser : RowParser[UserData] = {
      get[Int]("USER.ID") ~
      get[Int]("USER.TEAM") ~
      get[String]("USER.NICKNAME")  map{
      case id ~ teamID ~ nickname =>
        UserData(id, teamID, nickname)
    }
  }

  //방장이 아닌 유저를 DB에 추가하는 메소드
  def addNormalUser(nickname: String, teamID: Int) : Option[Int] =  db.withConnection{ implicit  connection =>
    try {
      val createdID = createUniqueID()
      createdID match {
        case Some(n) => //Nothing to do
        case None => return None
      }
      SQL("CALL `ADD_USER`({id}, {teamID}, {nickname})").on('id -> createdID, 'teamID -> teamID, 'nickname -> nickname).executeUpdate()
      Some(createdID.get)
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method addNormalUser()")
        e.printStackTrace()
        None
    }
  }

  //방장을 DB에 추가하는 메소드
  def addAdminUser(nickname: String, userID: Int, teamID: Int) : Option[Int] =  db.withConnection{ implicit  connection =>
    try {
      SQL("CALL `ADD_USER`({id}, {teamID}, {nickname})").on('id -> userID, 'teamID -> teamID, 'nickname -> nickname).executeUpdate()
      Some(userID)
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method addAdminlUser()")
        e.printStackTrace()
        None
    }
  }

  //해당 ID를 가진 유저의 정보를 DB에서 가져오는 메소드
  def findUserByID(id: Int) : Boolean = db.withConnection{ implicit connection =>
    val duplicatedUser = SQL("CALL `CHECK_ID`({ID})").on('ID -> id).as(SqlParser.int("TEAM") *)
    if(duplicatedUser.isEmpty){
      return false
    }
    return true
  }

  //현재 BrainPot에 존재하지 않는 유일한 ID값을 생성한다.
  def createUniqueID() : Option[Int] = db.withConnection{ implicit connection =>
    try {
      val ran = new Random()
      val createdID = ran.nextInt()
      val duplicatedUser = SQL("CALL `CHECK_ID`({createdID})").on('createdID -> createdID).as(SqlParser.int("TEAM") *)
      //만약 생성한 ID가 중복이 아니라면
      if(duplicatedUser.isEmpty){
        return Some(createdID)
      }
      //생성한 ID가 중복이였다면 재귀호출해서 다시 생성절차를 거친다.
      createUniqueID()
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method createUniqueID()")
        e.printStackTrace()
        None
    }
  }

  //해당 ID를 가지고 있는 팀의 데이터를 가져온다.
  def getUserData(id: Int) : Option[UserData] = db.withConnection{ implicit connection =>
    try{
      val userData = SQL("CALL `GET_USER_DATA`({ID})").on('ID -> id).as(userDataParser *)
      if(userData.size > 1){
        Logger.warn("Critical DB Error Detected : at table `USER`")
        return None
      }
      return Some(userData.head)
    }
    catch {
      case e: Exception => {
        Logger.error("job failed : method getUserData")
        e.printStackTrace()
        return None
      }
    }
  }
}
