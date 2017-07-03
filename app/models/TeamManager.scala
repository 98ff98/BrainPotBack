package models

import java.util.Random
import javax.inject.Inject

import anorm.{SQL, SqlParser}
import org.apache.commons.lang3.RandomStringUtils
import play.api.Logger
import play.api.db.DBApi

import play.api.libs.concurrent.Execution.Implicits.defaultContext
import scala.concurrent.Future


class TeamManager @Inject() (dbApi: DBApi, userManager: UserManager) {
  private val db = dbApi.database("default")
  //랜덤 초대 코드 생성에 사용항 문자 리스트
  val charList = "ABCDEFGHGKLMNPQRSTUVWXYZ23456789"
  def callCLEAR_OLD_TEAMS(): Unit = {
    db.withConnection { implicit collection =>
      SQL("CALL `CLEAR_OLD_TEAMS`()").executeUpdate()
    }
  }

  // 해당 문자열을 초대코드로 가지고 있는 팀이 존재하는지 확인하고,
  // 만약 있다면 해당 팀의 ID를 반환한다.
  def findTeamByCode(inviteCode: String): Option[Int] = db.withConnection { implicit connection =>
    try {
      // 해당 문자열을 초대코드로 가지고 있는 팀들의 ID를 가져온다.
      val teamIDList = SQL("CALL `FIND_TEAM_BY_INVITECODE`({INVITE_CODE})").on('INVITE_CODE -> inviteCode).as(SqlParser.int("ID") *)
      //만약 팀 ID 리스트가 비어있지 않다면 (해당 문자열을 초대코드로 가지는 팀이 있다면)
      if (teamIDList.size == 1) {
        return Some(teamIDList.head)
      }
      else if(teamIDList.isEmpty){
        return None
      }
      else{
        Logger.error("Critical Data Error Detected : Duplicated Team ID !!!")
        return None
      }
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method findTeamByCode()")
        e.printStackTrace()
        None
    }

  }

  //받은 정보를 바탕으로 팀을 생성하고,
  //생성한 방의 방장의 고유 ID를 반환한다.
  def createTeam(nickname: String, goal: String) : Option[Int] = db.withConnection{ implicit connection =>
    val userManager = new  UserManager(dbApi)
    lazy val createdTeamID = createUniqueTeamID()
    lazy val createdAdminID = userManager.createUniqueID()
    lazy val createdInviteCode = createUniqueInviteCode()

    createdTeamID match {
      case Some(n) => //Nothing to do
      case None => return None
    }
    createdAdminID match {
      case Some(n) => //Nothing to do
      case None => return None
    }
    createdInviteCode match {
      case Some(n) => //Nothing to do
      case None => return None
    }

    SQL("CALL `ADD_TEAM`({ID}, {OWNER}, {GOAL}, {INVITECODE})").on('ID -> createdTeamID.get, 'OWNER -> createdAdminID.get, 'GOAL -> goal, 'INVITECODE -> createdInviteCode.get).executeUpdate()
    userManager.addAdminUser(nickname, createdAdminID.get, createdTeamID.get) match {
      case Some(n) => //Nothing to do
      case None => return None
    }

    createdAdminID
  }

  def createUniqueTeamID() : Option[Int] = db.withConnection{ implicit connection =>
    try {
      val ran = new Random()
      val createdID = ran.nextInt()
      val duplicatedUser = SQL("CALL `CHECK_TEAM`({createdID})").on('createdID -> createdID).as(SqlParser.int("OWNER") *)
      //만약 생성한 ID가 중복이 아니라면
      if(duplicatedUser.isEmpty){
        return Some(createdID)
      }
      //생성한 ID가 중복이였다면 재귀호출해서 다시 생성절차를 거친다.
      createUniqueTeamID()
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method createUniqueID()")
        e.printStackTrace()
        None
    }
  }

  def createUniqueInviteCode() : Option[String] = db.withConnection{ implicit connection =>
    val createdUniqueInviteCode = RandomStringUtils.random(5, charList)
    val duplicatedTeamList = SQL("CALL `FIND_TEAM_BY_CODE`({inviteCode})").on('inviteCode -> createdUniqueInviteCode).as(SqlParser.int("ID") *)
    if(duplicatedTeamList.isEmpty)
      return Some(createdUniqueInviteCode)
    else
      return None
  }
}