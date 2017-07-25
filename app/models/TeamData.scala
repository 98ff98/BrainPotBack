package models

//팀의 정보를 담는 케이스 클래스
case class TeamData(id: Int, owner: Int, goal: String, status: Int, inviteCode: String)
