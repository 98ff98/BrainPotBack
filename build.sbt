name := "BrainPot"

version := "1.0"

lazy val `brainpot` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc ,
  cache ,
  ws   ,
  specs2 % Test,
  "mysql" % "mysql-connector-java" % "5.1.34",
  "com.typesafe.play" %% "anorm" % "2.4.0",
  "org.apache.commons" % "commons-lang3" % "3.4",
  "commons-codec" % "commons-codec" % "1.10"
)


unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"  