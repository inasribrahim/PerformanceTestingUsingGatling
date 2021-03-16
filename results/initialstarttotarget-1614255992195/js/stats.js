var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180",
        "ok": "180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2038",
        "ok": "2038",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "727",
        "ok": "727",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2022",
        "ok": "2022",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2029",
        "ok": "2029",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 152,
        "percentage": 84
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 28,
        "percentage": 16
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.625",
        "ok": "5.625",
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
        "total": "120",
        "ok": "120",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2038",
        "ok": "2038",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "848",
        "ok": "848",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles2": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2023",
        "ok": "2023",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2031",
        "ok": "2031",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 92,
        "percentage": 77
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 28,
        "percentage": 23
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.75",
        "ok": "3.75",
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
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles2": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles4": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 60,
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
        "total": "1.875",
        "ok": "1.875",
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
