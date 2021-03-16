import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class CodeReuseWithObjectAndLoop extends Simulation{
  val httpConf = http
    .baseURL("http://localhost:8080/app/")
    .header("Accept","application/json")
    .proxy(Proxy("localhost",8888).httpsPort(8888))

  def getAllVideoGames() :ChainBuilder = {
    repeat(3){
    exec(http("GET All video games ")
      .get("videogames")
      .check(status.is(200))
    )
    }
  }

  def getASpecficVideogames() :ChainBuilder = {
    repeat(3){
    exec(http("GET A Specfic VideoGames ")
      .get("videogames/1")
      .check(status.is(200))
    )}
  }

  val scn = scenario("Videogames DB ")
    .exec(getAllVideoGames())
    .pause(5)
    .exec(getASpecficVideogames())
    .pause(1)
    .exec(getAllVideoGames())
    .pause(5)


  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
