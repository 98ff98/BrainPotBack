package models


trait TeamConnection{
  //생성된지 일정 이상 시간이 지난 팀들을 삭제한다.
  def clearOldTeams() : Either[Throwable, Unit]

  //DB에 새로운 팀을 추가한다.
  def addTeam() : Either[Throwable, Int]

  //해당 초대코드를 가지고 있는 팀의 ID를 반환한다.
  def findTeamByCode(code: String ) : Either[Throwable, Int]

  //겹치지 않는 고유한 팀 ID를 생성하여 반환한다.
  def createTeamID() : Either[Throwable, Int]
}