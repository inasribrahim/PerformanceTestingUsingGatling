import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import scala.concurrent.duration.Duration
import scala.util.Random


class VideoGamesFullTestScript extends Simulation {

  val httpConf = http
    .baseURL("http://localhost:8080/app/")
    .header("Accept","application/json")
    .proxy(Proxy("localhost",8888).httpsPort(8888))

  /*** Variables  ***/
  def userCount :Int = getProperty("USERS", "5").toInt
  def rampDuration :Int = getProperty("RAMP_DURATION", "10").toInt
  def testDuration :Int = getProperty("DURATION", "60").toInt

  // other variables
  val idNumbers = (16 to 1000 ).iterator
  val rnd =  new Random()
  val now = LocalDate.now()
  val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd")


  /*** Helper method ***/
  private def getProperty(propertyName: String , defaultValue :String): String ={
    Option(System.getenv(propertyName))
      .orElse(Option(System.getProperty(propertyName)))
      .getOrElse(defaultValue)
  }

  def randomString(len:Int):String ={
    rnd.alphanumeric.filter(_.isLetter).take(len).mkString
  }

  def getRandomDate(startDate: LocalDate , random: Random ):String ={
    startDate.minusDays(random.nextInt(30)).format(pattern)
  }

  val customFeeder = Iterator.continually(Map(
    "gameId" -> idNumbers.next(),
    "name"-> ("Game-" + randomString(5)),
    "releaseDate"-> getRandomDate(now ,rnd),
    "reviewScore"-> rnd.nextInt(100),
    "category" -> ("Category-"+randomString(6)),
    "rating" -> ("Rating-"+randomString(4))
  ))

  def postNewGame():ChainBuilder ={
    repeat(5) {
      feed(customFeeder).
        exec(http("Post New Game ")
          .post("videogames/")
          .body(ElFileBody("NewGameTemplate.json")).asJSON
          .check(status.is(200)))
    }
  }
  def getAllVideoGame():ChainBuilder={
    exec(
      http("Get all video game  ")
        .get("videogames")
        .check(status.is(200))
    )
  }
  def getLastPostedGame() :ChainBuilder = {
    exec(
      http("get a last Posted game ")
        .get("videogames/${gameId}")
        .check(jsonPath("$.name") is ("${name}"))
        .check(status.is(200))
    )
  }
  def deleteLastPostedVideoGame() :ChainBuilder ={
    exec(
      http("Delete Last posted game ")
        .delete("videogames/${gameId}")
        .check(status.is(200))
    )
  }

  val scn = scenario("Video game DB")
    .forever(){
      exec(getAllVideoGame())
        .pause(2)
      exec(postNewGame())
        .pause(2)
      exec(deleteLastPostedVideoGame())
        .pause(2)
      exec(getLastPostedGame())
        .pause(2)
    }

  setUp(
    scn.inject(
      nothingFor(5),
      rampUsers(userCount) over (rampDuration))
  ).protocols(httpConf).maxDuration(testDuration)

  after{
    println("Stress test completed ")
  }
}
