var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9",
        "ok": "9",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2046",
        "ok": "2046",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "632",
        "ok": "632",
        "ko": "-"
    },
    "percentiles1": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles2": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1276",
        "ok": "1276",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1892",
        "ok": "1892",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 89
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.643",
        "ok": "0.643",
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
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2046",
        "ok": "2046",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "368",
        "ok": "368",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "751",
        "ok": "751",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles2": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1550",
        "ok": "1550",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1947",
        "ok": "1947",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 17
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.429",
        "ok": "0.429",
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
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles2": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles3": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "percentiles4": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
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
        "total": "0.214",
        "ok": "0.214",
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
