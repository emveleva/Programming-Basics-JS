function solve(num1, num2, num3, num4){
    let hourExam = Number(num1);
    let minExam = Number(num2);
    let hourArrival = Number(num3);
    let minArrival = Number(num4);
    if (hourExam == 00) {
        hourExam = 24;
    }
    if (hourArrival == 00) {
        hourArrival = 24
    }
    let timeExam = hourExam + minExam/60;
    let timeArrival = hourArrival + minArrival/60;
    let onTime = timeExam == timeArrival || timeExam - timeArrival <= 0.5 && timeExam > timeArrival;   
    let early = timeExam - timeArrival > 0.5;
    let late = timeExam < timeArrival && timeArrival - timeExam > 0.01;
    let minsAfter = timeArrival - timeExam <= 0.9833333333333325 && timeExam < timeArrival;
    let hoursAfter = timeArrival - timeExam > 0.9833333333333325 && timeExam < timeArrival;
    let minsBefore = timeExam - timeArrival <= 0.9833333333333325 && timeExam > timeArrival;
    let hoursBefore = timeExam - timeArrival > 0.9833333333333325 && timeExam > timeArrival;
    let difference = 0;

    

if (onTime) {
    console.log("On time");
} else if (late) {
    console.log("Late");
} else if (early) {
    console.log("Early")
}

if (minsBefore) {
    difference = (timeExam - timeArrival)*60;
    console.log(`${difference.toFixed(0)} minutes before the start`);
} else if (hoursBefore) {
    let mm = minExam - minArrival;
    let hh = hourExam - hourArrival;
    if (mm < 10) {
        console.log(`${hh}:0${mm} hours before the start`)
    } else {
        console.log(`${hh}:${mm} hours before the start`);
    }
    
} else if (minsAfter) {
    difference = (timeArrival - timeExam)*60;
    console.log(`${difference.toFixed(0)} minutes after the start`);
} else if (hoursAfter) {
    let mm = Math.max(minArrival, minExam) - Math.min(minArrival, minExam)
    let hh = hourArrival - hourExam;
    if (mm < 10) {
        console.log(`${hh}:0${mm} hours after the start`)
    } else {
        console.log(`${hh}:${mm} hours after the start`);
    }
}
}

solve(00, 12, 23, 58);
// solve(16, 00, 15, 00)
