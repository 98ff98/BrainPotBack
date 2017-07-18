package models

import scala.concurrent.Future


trait TeamConnection{
  //생성된지 일정 이상 시간이 지난 팀들을 삭제한다.
  def clearOldTeams() : Future[Unit]

  // 해당 문자열을 초대코드로 가지고 있는 팀이 존재하는지 확인하고,
  // 만약 있다면 해당 팀의 ID를 반환한다.
  def findTeamByCode(inviteCode: String): Future[Int]

  //받은 정보를 바탕으로 팀을 생성하고,
  //생성한 방의 방장의 고유 ID를 반환한다.
  def createTeam(nickname: String, goal: String): Future[Int]

  //해당 ID를 가지고 있는 팀의 데이터를 가져온다.
  def getTeamData(id: Int): Future[TeamData]

  //해당 ID를 가진 팀의 진행상황을 다음 단계로 넘긴다.
  def toNextInit(teamID: Int) : Future[Unit]
}

