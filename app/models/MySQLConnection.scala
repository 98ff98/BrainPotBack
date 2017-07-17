package models
import play.api.db.{DB, DBApi, DBApiProvider, Database}
import anorm.SqlParser.get
import anorm.{RowParser, SQL, SqlParser, ~}
import play.Logger
import play.api.Play.current
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.concurrent.Future


class MySQLConnection(dbName: String) extends PaintConnection with TeamConnection{

  //##### TEAM 테이블 영역 #####

  //생성된지 일정 이상의 시간이 지난 팀들을 DB에서 삭제한다.
  override def clearOldTeams(): Unit = DB.withConnection(dbName){ implicit conn =>
    try {
      Future {
        SQL("CALL `CLEAR_OLD_TEAMS`()").execute()
      }
    }
    catch {
      case e : Exception => e.printStackTrace()
    }
  }

  // 해당 문자열을 초대코드로 가지고 있는 팀이 존재하는지 확인하고,
  // 만약 있다면 해당 팀의 ID를 반환한다.
  def findTeamByCode(inviteCode: String): Option[Int] = DB.withConnection(dbName){ implicit connection =>
    try {
      val teamIDList = SQL("CALL `FIND_TEAM_BY_INVITECODE`({INVITE_CODE})").on('INVITE_CODE -> inviteCode).as(SqlParser.int("ID") *)
      //만약 팀 ID 리스트가 비어있지 않다면 (해당 문자열을 초대코드로 가지는 팀이 있다면)
      if (teamIDList.size == 1) {
        return Some(teamIDList.head)
      }
      else {
        return None
      }
    }
    catch {
      case e: Exception => Logger.error("Job Failed : method findTeamByCode()")
        e.printStackTrace()
        None
    }
  }


  //##### PAINT 테이블 영역 #####

  //사용자가 그림판에 그린 그림을 DB에 추가한다.
  //비동기로 동작한다.
  override def addPaint(): Unit = DB.withConnection(dbName){ implicit conn =>
    Future{
      //TODO
      SQL("").executeUpdate()
    }
  }

  //해당 그룹에 속한 모든 그림을 담은 List를 반환한다.
  //비동기로 동작한다.
  override def getAllPaints(teamID: Int): Future[ List[Paint] ]  = DB.withConnection(dbName){ implicit conn =>
    Future {
      //TODO
      SQL("").on('ID -> teamID).as(paintParser *)
    }
  }



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

  //PAINT 테이블의 칼럼을 파싱하는 파서
  private val paintParser : RowParser[Paint] = {
    get[Int]("PAINT.ID_IN_APP") ~
    get[Int]("PAINT.OWNERTEAM") ~
    get[Int]("PAINT.OWNERUSER") ~
    get[String]("PAINT.CONTENT") map {
      case id ~ teamID ~ userID ~ content => Paint(id, teamID, userID, content)
    }
  }

}
