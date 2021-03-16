var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45",
        "ok": "45",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2102",
        "ok": "2102",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "338",
        "ok": "338",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "738",
        "ok": "738",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles2": {
        "total": "27",
        "ok": "27",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2078",
        "ok": "2078",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2099",
        "ok": "2099",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 38,
        "percentage": 84
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 16
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.045",
        "ok": "2.045",
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
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2102",
        "ok": "2102",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "859",
        "ok": "859",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles2": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2092",
        "ok": "2092",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2100",
        "ok": "2100",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23,
        "percentage": 77
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 23
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.364",
        "ok": "1.364",
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
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles3": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles4": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15,
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
        "total": "0.682",
        "ok": "0.682",
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
