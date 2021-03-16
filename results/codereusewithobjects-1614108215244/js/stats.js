var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3579",
        "ok": "3579",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1230",
        "ok": "1230",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1661",
        "ok": "1661",
        "ko": "-"
    },
    "percentiles1": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1826",
        "ok": "1826",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3228",
        "ok": "3228",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3509",
        "ok": "3509",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 67
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
},
contents: {
"req_get-all-video-g-f5d04": {
        type: "REQUEST",
        name: "GET All video games ",
path: "GET All video games ",
pathFormatted: "req_get-all-video-g-f5d04",
stats: {
    "name": "GET All video games ",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3579",
        "ok": "3579",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1826",
        "ok": "1826",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1754",
        "ok": "1754",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1826",
        "ok": "1826",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2702",
        "ok": "2702",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3404",
        "ok": "3404",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3544",
        "ok": "3544",
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
        "total": "0.133",
        "ok": "0.133",
        "ko": "-"
    }
}
    },"req_get-a-specfic-v-a515a": {
        type: "REQUEST",
        name: "GET A Specfic VideoGames ",
path: "GET A Specfic VideoGames ",
pathFormatted: "req_get-a-specfic-v-a515a",
stats: {
    "name": "GET A Specfic VideoGames ",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles2": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles3": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles4": {
        "total": "40",
        "ok": "40",
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
        "total": "0.067",
        "ok": "0.067",
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
