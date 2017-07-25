package models

import scala.concurrent.Future


trait PaintConnection {
  def addPaint() : Future[Unit]
  def modiPaint() : Future[Unit]
  def delPaint() : Future[Unit]
  def loadPaints() : Future[List[String]]
}
