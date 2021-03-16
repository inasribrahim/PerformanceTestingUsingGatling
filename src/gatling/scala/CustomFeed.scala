import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

import scala.util.Random
import java.time.LocalDate
import java.time.format.DateTimeFormatter

class CustomFeed extends Simulation{

  val httpConf = http
    .baseURL("http://localhost:8080/app/")
    .header("Accept","application/json")
    .proxy(Proxy("localhost",8888).httpsPort(8888))


  val idNumbers = (11 to 20 ).iterator
  val rnd =  new Random()
  val now = LocalDate.now()
  val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd")

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
        .pause(1)
    }
  }

val  scn = scenario("Video Game DB")
  .exec(postNewGame())

setUp(
  scn.inject(atOnceUsers(users = 1))
).protocols(httpConf)
}


