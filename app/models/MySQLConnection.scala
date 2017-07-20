package models

import java.util.Random

import play.api.db.{DB, DBApi, DBApiProvider, Database}
import anorm.SqlParser.get
import anorm.{RowParser, SQL, SqlParser, ~}
import org.apache.commons.lang3.RandomStringUtils
import play.Logger
import play.api.Play.current
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}
import scala.util.{Failure, Success}


class MySQLConnection(dbName: String) extends TeamConnection with UserConnection{
  //랜덤 초대 코드 생성에 사용항 문자 리스트
  private val charList = "ABCDEFGHGKLMNPQRSTUVWXYZ23456789"

  //##### TEAM 테이블 영역 #####

  //생성된지 일정 이상의 시간이 지난 팀들을 DB에서 삭제한다.
  override def clearOldTeams(): Future[Unit] = {
    Future {
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `CLEAR_OLD_TEAMS`()").execute()
      }
      Logger.info("--- Cleared Old Teams ---")
    }
  }

  // 해당 문자열을 초대코드로 가지고 있는 팀이 존재하는지 확인하고,
  // 만약 있다면 해당 팀의 ID를 반환한다.
  override def findTeamByCode(inviteCode: String): Future[Int] = {
    Future {
      DB.withConnection(dbName) { implicit conn =>
        try SQL("CALL `FIND_TEAM_BY_INVITECODE`({INVITE_CODE})").on('INVITE_CODE -> inviteCode).as(SqlParser.int("ID") *).head
      }
    }
  }

  //받은 정보를 바탕으로 팀을 생성하고,
  //생성한 방의 방장의 고유 ID를 반환한다.
  override def createTeam(nickname: String, goal: String): Future[Int] = {
    //`BRAINPOT` 데이터베이스의 `TEAM` 테이블에서 중복되지 않는 정수형 키를 생성한다.
    def createUniqueTeamID(): Int = {
      val ran = new Random()
      val createdID = ran.nextInt()
      DB.withConnection(dbName) { implicit connection =>
        val duplicatedUser = SQL("CALL `CHECK_TEAM`({createdID})").on('createdID -> createdID).as(SqlParser.int("OWNER") *)
        //만약 생성한 ID가 중복이 아니라면
        if (duplicatedUser.isEmpty) {
          return createdID
        }
      }
      //생성한 ID가 중복이였다면 재귀호출해서 다시 생성절차를 거친다.
      createUniqueTeamID()
    }
    //`BRAINPOT` 데이터베이스의 `TEAM` 테이블에서 중복되지 않는 5자리의 초대코드를 생성한다.
    def createUniqueInviteCode(): String = {
      val createdInviteCode = RandomStringUtils.random(5, charList)
      DB.withConnection(dbName) { implicit connection =>
        val duplicatedTeamList = SQL("CALL `FIND_TEAM_BY_CODE`({inviteCode})").on('inviteCode -> createdInviteCode).as(SqlParser.int("ID") *)
        if (duplicatedTeamList.isEmpty)
          return createdInviteCode
      }
      createUniqueInviteCode()
    }

    //방장의 ID를 비동기적으로 반환하는 Future
    Future{
      var teamID = 0 ; var inviteCode = "" ; var adminID = 0
      val createdTeamID = Future( teamID = createUniqueTeamID() )
      val createdInviteCode = Future( inviteCode = createUniqueInviteCode() )
      val createdAdminID = Future( adminID = createUniqueUserID() )
      Await.ready(createdTeamID, Duration.Inf)
      Await.ready(createdInviteCode, Duration.Inf)
      Await.ready(createdAdminID, Duration.Inf)
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `ADD_TEAM`({ID}, {OWNER}, {GOAL}, {INVITECODE})").on('ID -> teamID, 'OWNER -> adminID, 'GOAL -> goal, 'INVITECODE -> inviteCode).executeUpdate()
      }
      addAdminUser(nickname, adminID, teamID)
      adminID
    }

  }

  //해당 ID를 가지고 있는 팀의 데이터를 가져온다.
  override def getTeamData(id: Int): Future[TeamData] = {
    Future{
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `GET_TEAM_DATA`({ID})").on('ID -> id).as(teamParser *).head
      }
    }
  }

  //해당 ID를 가진 팀의 진행상황을 다음 단계로 넘긴다.
  override def toNextInit(teamID: Int): Future[Unit] = DB.withConnection(dbName){ implicit connection =>
    Future{
      //TODO
    }
  }


  //##### USER 테이블 영역 #####

  //현재 BrainPot에 존재하지 않는 유일한 ID값을 생성한다.
  override def createUniqueUserID() : Int = {
    val ran = new Random()
    val createdID = ran.nextInt()
    DB.withConnection(dbName) { implicit conn =>
      val duplicatedUser = SQL("CALL `CHECK_ID`({createdID})").on('createdID -> createdID).as(SqlParser.int("TEAM") *)
      //만약 생성한 ID가 중복이 아니라면
      if (duplicatedUser.isEmpty) {
        return createdID
      }
    }
    //생성한 ID가 중복이였다면 재귀호출해서 다시 생성절차를 거친다.
    createUniqueUserID()
  }

  //방장을 DB에 추가하는 메소드
  override def addAdminUser(nickname: String, userID: Int, teamID: Int): Future[Int] = {
    Future {
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `ADD_USER`({id}, {teamID}, {nickname})").on('id -> userID, 'teamID -> teamID, 'nickname -> nickname).executeUpdate()
      }
      userID
    }
  }

  //방장이 아닌 일반 유저를 DB에 추가하는 메소드
  override def addNormalUser(nickname: String, teamID: Int): Future[Int] = {
    Future{
      val userID = createUniqueUserID()
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `ADD_USER`({id}, {teamID}, {nickname})").on('id -> userID, 'teamID -> teamID, 'nickname -> nickname).executeUpdate()
      }
      userID
    }
  }

  //해당 ID를 가진 유저를 DB에서 삭제하는 메소드
  override def dropUser(userID: Int): Future[Unit] = {
    Future{
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `DROP_USER`({ID})").on('ID -> userID).execute()
      }
    }
  }

  //
  override def findUserByID(id: Int): Future[Boolean] = {
    Future{
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `CHECK_ID`({ID})").on('ID -> id).as(SqlParser.int("TEAM") *).nonEmpty
      }
    }
  }

  //
  override def getUserData(id: Int): Future[UserData] = {
    Future{
      DB.withConnection(dbName) { implicit conn =>
        SQL("CALL `GET_USER_DATA`({ID})").on('ID -> id).as(userParser *).head
      }
    }
  }

  //##### TASK 테이블 영역 #####



  //##### PowParser 영역 #####

  //팀 생성 시간을 제외한 팀 데이터를 파싱하는 파서
  private val teamParser: RowParser[TeamData] = {
    get[Int]("TEAM.ID") ~
      get[Int]("TEAM.OWNER") ~
      get[String]("TEAM.GOAL") ~
      get[Int]("TEAM.STATUS") ~
      get[String]("TEAM.INVITECODE") map {
      case id ~ owner ~ goal ~ status ~ inviteCode =>
        TeamData(id, owner, goal, status, inviteCode)
    }
  }

  //유저 데이터를 파싱하는 파서
  private val userParser : RowParser[UserData] = {
    get[Int]("USER.ID") ~
      get[Int]("USER.TEAM") ~
      get[String]("USER.NICKNAME")  map{
      case id ~ teamID ~ nickname =>
        UserData(id, teamID, nickname)
    }
  }

}
