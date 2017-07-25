package models

import scala.concurrent.Future

trait NodeConnection {
  def addNode() : Future[Unit]
  def modiNode() : Future[Unit]
  def delNode() : Future[Unit]
  def loadNodes() : Future[List[Node]]
}
