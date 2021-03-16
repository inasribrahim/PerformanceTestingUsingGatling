import io.gatling.core.Predef._
import io.gatling.http.Predef._

class MyFirstTest extends Simulation {

  val httpConf = http
    .baseURL("http://localhost:8080/app/")// 5
    .header("Accept" , "application/json")
    .proxy(Proxy("localhost", 8888).httpsPort(8888))


  val scn = scenario("Video Game DB")

    .exec(http("Get All Games - 1st call ")
    .get("videogames")) // 9
    .pause(5) // 10

    .exec(http("Get a specfic ")
      .get("videogames/1")) // 9
    .pause(1,20) // 1 - 20

    .exec(http("Get All Games - 2nd Call ")
      .get("videogames")) // 9
    .pause(20) // 1 - 20


  // 3 Load Scenario
  setUp( // 11
    scn.inject(atOnceUsers(3)) // 12
  ).protocols(httpConf) // 13


}
