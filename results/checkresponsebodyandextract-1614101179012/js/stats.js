var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1290",
        "ok": "1290",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "percentiles1": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1023",
        "ok": "1023",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1237",
        "ok": "1237",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1279",
        "ok": "1279",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 50
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
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
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles2": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles3": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles4": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
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
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1290",
        "ok": "1290",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1290",
        "ok": "1290",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1290",
        "ok": "1290",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1290",
        "ok": "1290",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1290",
        "ok": "1290",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1290",
        "ok": "1290",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1290",
        "ok": "1290",
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
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
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
