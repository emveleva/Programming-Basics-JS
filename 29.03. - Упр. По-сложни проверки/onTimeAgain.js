function solve(num1, num2, num3, num4) {
    let hourExam = Number(num1);
    let minExam = Number(num2);
    let hourArrival = Number(num3);
    let minArrival = Number(num4);
    let timeExam = hourExam*60  + minExam;
    let timeArrival = hourArrival*60 + minArrival;
    let time = "";
    let result = "";

    if (timeArrival > timeExam) {
        time = "Late";
        if (timeArrival - timeExam < 60) {
            let = difference = (timeArrival - timeExam);
                result = `${difference} minutes after the start`;
        } else {
            let mm = Math.max(minArrival, minExam) - Math.min(minArrival, minExam)
            let hh = hourArrival - hourExam;
            if (mm < 10) {
                result = `${hh}:0${mm} hours after the start`;
            } else {
                result = `${hh}:${mm} hours after the start`;
            }
        }
    
    } else if (timeArrival == timeExam || timeExam - timeArrival <= 30) {
        time = "On time";
        let = difference = (timeExam - timeArrival)
            result = `${difference} minutes before the start`;
    } else if (timeArrival < timeExam) { 
        time = "Early"
        if (timeExam - timeArrival < 60) {
           let = difference = (timeExam - timeArrival)
            result = `${difference} minutes before the start`;
        } else {
            let = difference = (timeExam - timeArrival).toFixed(0);
            let hh = Math.floor(difference / 60);
            let mm = difference % 60;
            if (mm < 10) {
                result = `${hh}:0${mm} hours before the start`;
            } else {
                result = `${hh}:${mm} hours before the start`;
            }
         }
    }
    
    console.log(time);
    if (result) {
    console.log(result);
    }
}

solve(10, 00, 00, 01)
