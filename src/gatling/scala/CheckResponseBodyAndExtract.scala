import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jsonpath.JsonPath

class CheckResponseBodyAndExtract extends  Simulation{
   val httpConf = http
     .baseURL("http://localhost:8080/app/")
     .header("Accept","application/json")
     .proxy(Proxy("localhost",8888).httpsPort(8888))


  // Save value in parameter and use it : correlation in performance testing

    val scn = scenario("Check Response and extractInfo using XPATH ")
      .exec(http("GET All videogames")
        .get("videogames")
        .check(jsonPath("$[0].id").saveAs( "gameId"))
      )

      .exec(http("Get A specfic name using previous varible name`s gameId")
        .get("videogames/${gameId}")
        .check(jsonPath("$.name").is( "Resident Evil 4"))
        .check(bodyString.saveAs("responseBody")))

  // Capture the entire response body and view that for debugging purposes
      .exec {session => println(session("responseBody").as[transient]) ; session }

  /*
  // Session(Check Response and extract Info using XPATH ,1,Map(gatling.http.cache.dns -> io.gatling.http.resolver.ShuffleJdkNameResolver@23b93a92, gameId -> 1),1614100242102,308,OK,List(),io.gatling.core.protocol.ProtocolComponentsRegistry$$Lambda$374/1120670624@6bc9061b)
  // {"id":1,"name":"Resident Evil 4","releaseDate":"2005-10-01","reviewScore":85,"category":"Shooter","rating":"Universal"}
  */

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)

}
