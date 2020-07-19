function lateOnTimeOrEarly(hourOfExamInput, minutesOfExamInput, hourOfArrivingInput, minutesOfArrivingInput) {
    let hourOfExam = Number(hourOfExamInput);
    let minutesOfExam = Number(minutesOfExamInput);
    let hourOfArriving = Number(hourOfArrivingInput);
    let minutesOfArriving = Number(minutesOfArrivingInput);
 
    let totalMinutesOfExam = hourOfExam * 60 + minutesOfExam;
    let totalMinutesOfArriving = hourOfArriving * 60 + minutesOfArriving;
    let onTimeOrEarly = Math.abs(totalMinutesOfExam - totalMinutesOfArriving);
 
    if (totalMinutesOfArriving > totalMinutesOfExam) {
        console.log('Late');
        let late = Math.abs(totalMinutesOfArriving - totalMinutesOfExam);
        if (late < 60) {
            console.log(`${late} minutes after the start`);
        } else {
            let hours = Math.floor(late / 60);
            let minutes = late % 60;
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (onTimeOrEarly <= 30) {
        console.log('On time');
        let early = totalMinutesOfExam - totalMinutesOfArriving;
        if (early != 0) {
            console.log(`${early} minutes before the start`);
        }
    } else if (onTimeOrEarly > 30) {
        console.log('Early');
        let earlyMinutes = Math.abs(totalMinutesOfArriving - totalMinutesOfExam);
        let hours = Math.floor(earlyMinutes / 60);
        let minutes = earlyMinutes % 60;
        if (earlyMinutes < 60) {
            console.log(`${minutes} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}

lateOnTimeOrEarly(10, 00, 00, 01)