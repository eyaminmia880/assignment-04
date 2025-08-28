function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    let sum = 0;
    for (let time of waitingTimes) {
        sum += time;
    }

    let average = Math.round(sum / waitingTimes.length);

    let totalBeforeIsrat = serialNumber -1;
    let reamainingPeople = totalBeforeIsrat - waitingTimes.length;

    let waiting = reamainingPeople * average;

    return waiting;
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));