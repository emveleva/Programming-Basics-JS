function solve(arg1, num1, num2) {
    let year = arg1;
    let holidaysPerYear = Number(num1);
    let weekendsHomeTown = Number(num2);
    let weekendsPerYear = 48;
    let volleyballTotal = 0;
    let weekendsSofia = weekendsPerYear - weekendsHomeTown;
    let freeWeekends = weekendsSofia - weekendsSofia / 4;

    volleyballTotal = volleyballTotal + freeWeekends;
    volleyballTotal = volleyballTotal + (holidaysPerYear - holidaysPerYear / 3);
    volleyballTotal = volleyballTotal + weekendsHomeTown;

    if (year == "leap") {
        volleyballTotal = volleyballTotal + volleyballTotal*0.15;
    }

    console.log(Math.floor(volleyballTotal));
}

solve("normal", 6, 13)