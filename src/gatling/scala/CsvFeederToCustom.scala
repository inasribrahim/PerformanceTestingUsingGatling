import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder

class CsvFeederToCustom extends Simulation {

  val httpConf = http
    .baseURL("http://localhost:8080/app/")
    .header("Accept", "application/json")
    .proxy(Proxy("localhost",8888).httpsPort(8888))

  val idNumber = (1 to 10 ).iterator
  def getNextGameId() = Map("gameId" -> idNumber.next())
  val customFeeder = Iterator.continually(getNextGameId())


  def getAspecficVideogame():ChainBuilder ={
    repeat(10) {
      feed(customFeeder).
      exec(http("GET A Specfic video game")
        .get("videogames/${gameId}")
        .check(status.is(200)))
        .pause(1)

      }
    }

  val scn = scenario("Video Game DB")
    .exec(getAspecficVideogame())

  setUp(
    scn.inject(atOnceUsers(users = 1))
  ).protocols(httpConf)
}
