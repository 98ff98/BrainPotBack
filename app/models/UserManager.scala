package models

import javax.inject.Inject
import java.util.Random

import akka.actor.ActorRef
import anorm.SqlParser.get
import anorm.{RowParser, SQL, SqlParser, ~}
import play.api.Logger
import play.api.db.DBApi

import scala.concurrent.Future


//유저관련 정보를 표현하는 케이스 클래스
case class UserData(id: Int, teamID: Int, nickname: String)
