package models

import scala.concurrent.Future


trait PaintConnection {
  //사용자가 그림판에 그린 그림을 DB에 추가한다.
  def addPaint() : Unit

  //해당 그룹에 속한 모든 그림을 담은 List를 반환한다.
  //비동기로 동작한다.
  def getAllPaints(teamID: Int) : Future[ List[Paint] ]

}
