package models


trait TeamConnection{
  //생성된지 일정 이상 시간이 지난 팀들을 삭제한다.
  def clearOldTeams() : Unit

  // 해당 문자열을 초대코드로 가지고 있는 팀이 존재하는지 확인하고,
  // 만약 있다면 해당 팀의 ID를 반환한다.
  def findTeamByCode(inviteCode: String): Option[Int]
}

