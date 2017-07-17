package models

case class Paint(ID: Int, teamID: Int, userID: Int, content: String)

class PaintManager {
  val db : PaintConnection = new MySQLConnection("default")
}
