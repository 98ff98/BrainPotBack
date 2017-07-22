package models

import scala.concurrent.Future

trait TaskConnection {
  def addTask() : Future[Unit]
  def modiTask() : Future[Unit]
  def delTask() : Future[Unit]
  //TODO
  def loadTasks() : List[String]
}
