package models

import javax.inject.Inject
import java.util.Random

import anorm.{SQL, SqlParser}
import play.api.Logger
import play.api.db.DBApi

import scala.concurrent.Future


class UserManager @Inject()(dbApi: DBApi){
  private val db = dbApi.database("default")

  def addNormalUser(nickname: String, teamID: Int) : Boolean =  db.withConnection{ implicit  connection =>
    try {
      createUniqueID() match {
        case Some(n) =>
        case None => return false
      }
      SQL("CALL `ADD_NORMAL_USER`({id}, {teamID}, {nickname})").on('id -> createdID, 'nickname -> nickname).executeUpdate()
      true
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method addNormalUser()")
        e.printStackTrace()
        false
    }
  }

  def addAdminUser(nickname: String, teamID: Int) : Boolean =  db.withConnection{ implicit  connection =>
    try {
      SQL("CALL `ADD_ADMIN_USER`({id, {nickname}})").on('id -> teamID, 'nickname -> nickname).executeUpdate()
      true
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method addAdminlUser()")
        e.printStackTrace()
        false
    }
  }

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
}
