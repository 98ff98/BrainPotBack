package models

import javax.inject.Inject

import play.api.db.DBApi


class UserManager @Inject()(dbApi: DBApi){
  private val db = dbApi.database("default")

  def addNormalUser(nickname: String, teamID: Int) : Boolean =  db.withConnection{ implicit  connection =>

  }

  def addAdminUser(nickname: String, teamID: Int) : Boolean =  db.withConnection{ implicit  connection =>

  }
}
