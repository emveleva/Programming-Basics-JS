function solve(num) {
    let vacationDays = Number(num);
    let daysYear = 365;
    let workdaysPlay = 63/60;
    let daysOffPlay = 127/60;
    let playNorm = 30000/60;
    let workDays = daysYear - vacationDays;

    let totalPlay = workDays * workdaysPlay + vacationDays * daysOffPlay;

    if(totalPlay > playNorm) {
        let difference = totalPlay - playNorm;
        let hh = Math.floor(difference);
        let mm = ((difference*60) % 60).toFixed(0);
        console.log("Tom will run away");
        console.log(`${hh} hours and ${mm} minutes more for play`);
    } else {
        let difference = playNorm - totalPlay;
        let hh = Math.floor(difference);
        let mm = ((difference*60) % 60).toFixed(0);
        console.log("Tom sleeps well");
        console.log(`${hh} hours and ${mm} minutes less for play`)
    }
}

solve(20)