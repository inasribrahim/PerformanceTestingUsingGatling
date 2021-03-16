import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponeCode extends Simulation{

  val httpConf = http
    .baseURL("http://localhost:8080/app/")// 5
    .header("Accept" , "application/json")
    .proxy(Proxy("localhost", 8888).httpsPort(8888))


  val  scn = scenario("video Games DB ")
    .exec(http("GET all video Games 1-st call")
      .get("videogames")
    .check(status.is(200)))


    .exec(http("GET a Specfic videogame ")
      .get("videogames/1")
    .check(status.in(200 to 210)))

    .exec(http("Get a All games 2nd  call ")
      .get("videogames")
      .check(status.not(404) , status.not(500)))


  setUp( // 11
    scn.inject(atOnceUsers(1)) // 12
  ).protocols(httpConf) // 13

}
