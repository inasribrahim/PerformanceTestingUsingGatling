import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._


class CsvFeeder extends Simulation{

  val httpConf = http
    .baseURL("http://localhost:8080/app/")
    .header("Accept","application/json")
    .proxy(Proxy("localhost",8888).httpsPort(8888))
  val csvFeeder = csv("gameCSVFile.csv").circular

  def getSpecficVideoGame() :ChainBuilder ={
  repeat(10){
    feed(csvFeeder).
      exec(http("GET A Specfic videoGame")
        .get("videogames/${gameId}")
        .check(jsonPath("$.name").is("${gameName}"))
        .check(status.is(200)))
        .pause(1)
  }}

  val scn = scenario("Videogames DB ")
    .exec(getSpecficVideoGame())

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
