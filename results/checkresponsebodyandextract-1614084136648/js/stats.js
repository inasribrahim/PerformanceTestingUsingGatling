var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "2094",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "2094",
        "ok": "2094",
        "ko": "61"
    },
    "meanResponseTime": {
        "total": "1078",
        "ok": "2094",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "1017",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1078",
        "ok": "2094",
        "ko": "61"
    },
    "percentiles2": {
        "total": "1586",
        "ok": "2094",
        "ko": "61"
    },
    "percentiles3": {
        "total": "1992",
        "ok": "2094",
        "ko": "61"
    },
    "percentiles4": {
        "total": "2074",
        "ok": "2094",
        "ko": "61"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.333",
        "ko": "0.333"
    }
},
contents: {
"req_get-all-videoga-3fb97": {
        type: "REQUEST",
        name: "GET All videogames",
path: "GET All videogames",
pathFormatted: "req_get-all-videoga-3fb97",
stats: {
    "name": "GET All videogames",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2094",
        "ok": "2094",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2094",
        "ok": "2094",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2094",
        "ok": "2094",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2094",
        "ok": "2094",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2094",
        "ok": "2094",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2094",
        "ok": "2094",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2094",
        "ok": "2094",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
    }
}
    },"req_get-a-specfic-n-9a5e1": {
        type: "REQUEST",
        name: "Get A specfic name using previous varible name`s gameId",
path: "Get A specfic name using previous varible name`s gameId",
pathFormatted: "req_get-a-specfic-n-9a5e1",
stats: {
    "name": "Get A specfic name using previous varible name`s gameId",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles2": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles3": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles4": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "-",
        "ko": "0.333"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
