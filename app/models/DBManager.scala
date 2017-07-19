package models

import play.api.db.DB
import play.api.db.Database


object DBManager {
  implicit val app = play.api.Play.current
  def getConn() = {
    DB.getConnection()
  }
}
