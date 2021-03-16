var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2035",
        "ok": "2035",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "748",
        "ok": "748",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles2": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2024",
        "ok": "2024",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2029",
        "ok": "2029",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 250,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 50,
        "percentage": 17
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "13.636",
        "ok": "13.636",
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
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2035",
        "ok": "2035",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "517",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles2": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2025",
        "ok": "2025",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2030",
        "ok": "2030",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 150,
        "percentage": 75
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 50,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles2": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 100,
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
        "total": "4.545",
        "ok": "4.545",
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
