package models

import scala.concurrent.Future

trait NodeConnection {
  def addNode(nodeID: Int, teamID: Int, userID: Int, content: String) : Future[Unit]
  def modiNode(nodeID: Int, userID: Int) : Future[Unit]
  def delNode(nodeID: Int, userID: Int) : Future[Unit]
  def loadNodes(teamID: Int) : Future[List[Node]]
}
