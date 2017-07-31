package models

import scala.concurrent.Future


trait UserConnection {
  //방장이 아닌 유저를 DB에 추가하는 메소드
  def addNormalUser(nickname: String, teamID: Int): Future[Int]

  //방장을 DB에 추가하는 메소드
  def addAdminUser(nickname: String, userID: Int, teamID: Int): Future[Int]

  //해당 ID를 가진 유저를 DB에서 삭제하는 메소드
  def dropUser(userID: Int): Future[Unit]

  //해당 ID를 가진 유저의 정보를 DB에서 가져오는 메소드
  def findUserByID(id: Int): Future[Boolean]

  //현재 BrainPot에 존재하지 않는 유일한 ID값을 생성한다.
  def createUniqueUserID(): Int

  //해당 ID를 가지고 있는 팀의 데이터를 가져온다.
  def getUserData(id: Int): Future[UserData]
}