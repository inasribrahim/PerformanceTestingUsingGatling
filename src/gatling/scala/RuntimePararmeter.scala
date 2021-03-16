import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class RuntimePararmeter extends Simulation{

    // make a method to pass parameter to command line

    private def getProperty(propertyName: String , defaultValue :String): String ={
      Option(System.getenv(propertyName))
        .orElse(Option(System.getProperty(propertyName)))
        .getOrElse(defaultValue)
    }

    // Make varible
  def userCount :Int = getProperty("USERS", "5").toInt
  def rampDuration :Int = getProperty("RAMP_DURATION", "10").toInt
  def testDuration :Int = getProperty("DURATION", "60").toInt

  // Add debug to trace variables
  before {
    println(s"Running test with ${userCount} users")
    println(s"Ramping users over ${rampDuration} seconds")
    println(s"Total test duration ${testDuration} seconds")
  }

  val httpConf = http
    .baseURL("http://localhost:8080/app/")
    .header("Accept", "application/json")
    .proxy(Proxy("localhost",8888).httpsPort(8888))

  def getAllVideoGame() :ChainBuilder ={
    exec(
     http("Get All Video games ")
       .get("vediogames")
       .check(status.is(200))
    )
  }

  val scn = scenario("Video game DB")
    .forever(){
      exec(getAllVideoGame())
    }

  setUp(
    scn.inject(
      nothingFor(5),
      rampUsers(userCount) over (rampDuration))
    ).protocols(httpConf).maxDuration(testDuration)

  /*
  * Go to path of project Gatling\gatling-fundmentals-projectStart-master
  * command = gradlew gatlingRun-simulaitons.RuntimePararmeter
  *
  * */
}
