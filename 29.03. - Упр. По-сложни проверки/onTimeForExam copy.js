function solve(num1, num2, num3, num4){
    let hourExam = Number(num1);
    let minExam = Number(num2);
    let hourArrival = Number(num3);
    let minArrival = Number(num4);
    let timeExam = hourExam*60  + minExam;
    let timeArrival = hourArrival*60 + minArrival;
    let late = "Late";
    let onTime = "On time";
    let early = "Early";

    let totalMinsDiff = timeArrival - timeExam;

    let studentArrival = late;
    if (totalMinsDiff < -30) {
        studentArrival = early;
    } else if (totalMinsDiff <=0) {
        studentArrival = onTime;
    }

    let result = "";
    if (totalMinsDiff != 0) {
        let hoursDifference = 
            Math.abs(~~(totalMinsDiff/60));
        let minutesDifference = 
            Math.abs(totalMinsDiff % 60);
        if (hoursDifference >0) {
            result = 
            hoursDifference + ":" + (minutesDifference >9 ? minutesDifference: "0" + minutesDifference) + " hours";
            
        } else {
            result = minutesDifference + " minutes";
        }
        if (totalMinsDiff <0) {
            result += " before the start";
        } else {
            result += " after the start";
        }
    }

    console.log(studentArrival);
    if (result) {
        console.log(result);
    }

}



solve(11, 30, 8, 12);

