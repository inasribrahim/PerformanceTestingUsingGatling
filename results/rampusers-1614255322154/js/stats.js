var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles2": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles3": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles4": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6,
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
        "total": "0.545",
        "ok": "0.545",
        "ko": "-"
    }
},
contents: {
"req_get-all-video-g-3d05e": {
        type: "REQUEST",
        name: "GET all video games API ",
path: "GET all video games API ",
pathFormatted: "req_get-all-video-g-3d05e",
stats: {
    "name": "GET all video games API ",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "percentiles2": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles3": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles4": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
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
        "total": "0.364",
        "ok": "0.364",
        "ko": "-"
    }
}
    },"req_get-a-specfic-v-c83bf": {
        type: "REQUEST",
        name: "Get A specfic video game",
path: "Get A specfic video game",
pathFormatted: "req_get-a-specfic-v-c83bf",
stats: {
    "name": "Get A specfic video game",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles2": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles3": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
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
        "total": "0.182",
        "ok": "0.182",
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
