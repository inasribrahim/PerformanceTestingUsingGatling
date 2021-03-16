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
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2635",
        "ok": "2635",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles2": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1649",
        "ok": "1649",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2438",
        "ok": "2438",
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
        "total": "0.6",
        "ok": "0.6",
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
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2635",
        "ok": "2635",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "946",
        "ok": "946",
        "ko": "-"
    },
    "percentiles1": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles2": {
        "total": "169",
        "ok": "169",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2512",
        "ok": "2512",
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
        "total": "0.4",
        "ok": "0.4",
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
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles1": {
        "total": "44",
        "ok": "44",
        "ko": "-"
    },
    "percentiles2": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles3": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "percentiles4": {
        "total": "61",
        "ok": "61",
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
        "total": "0.2",
        "ok": "0.2",
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
