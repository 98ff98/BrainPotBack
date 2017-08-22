package models

import scala.concurrent.Future

trait NodeConnection {
  def addNode(node: Node) : Unit
  def modiNodeLoc(nodeID: Int, userID: Int, content: String) : Unit
  def modiNodeText(nodeID: Int, userID: Int, content: String) : Unit
  def delNode(nodeID: Int, userID: Int) : Unit
  def loadNodes(teamID: Int) : Future[List[Node]]
}
