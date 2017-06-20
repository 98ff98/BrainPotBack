package models

import javax.inject.Inject

import anorm.SQL
import play.api.db.DBApi


class TeamManager @Inject() (dbApi: DBApi) {
  private val db = dbApi.database("default")

  def callCLEAR_OLD_TEAMS() : Unit = {
    db.withConnection { implicit collection =>
      SQL("CALL `CLEAR_OLD_TEAMS`()").executeUpdate()
    }
  }

}
object TeamManager{

}