import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class RampUsers extends Simulation {
  val httpConf = http
    .baseURL("http://localhost:8080/app/")// 5
    .header("Accept" , "application/json")
    .proxy(Proxy("localhost", 8888).httpsPort(8888))


  def getAllVideogames() :ChainBuilder = {
      exec(http("GET all video games API ")
        .get("videogames")
        .check(status.is(200)))

  }
  def getASpecficVideogames() :ChainBuilder = {
    exec(http("Get A specfic video game")
      .get("videogames/1")
      .check(status.is(200)))
  }

  val scn = scenario("Video games DB")
    // three transaction
    .exec(getAllVideogames())
    .pause(5)
    .exec(getASpecficVideogames())
    .pause(5)
    .exec(getAllVideogames())


    setUp(
      scn.inject(nothingFor(5),
        atOnceUsers(1),
        rampUsers(1) over (10) //
      ).protocols(httpConf.inferHtmlResources())
    )
}
