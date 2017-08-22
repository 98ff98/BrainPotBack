package models

import com.google.inject.Inject
import play.Logger
import scala.concurrent.Future

//생성되고 나서 일정 시간이 흐른 팀들을 자동으로 삭제한다.
class AutoTeamRemover extends java.lang.Runnable{
  override def run() : Unit = {
    val mySQLConnection = new MySQLConnection("default")
    mySQLConnection.clearOldTeams()
    //Logger.info("Cleared Old Teams Automatically !!")
  }
}
