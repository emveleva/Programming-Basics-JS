function solve(input) {
    let minutesControl = Number(input.shift());
    let secondsControl = Number(input.shift());
    let length = Number(input.shift());
    let secondsPer100Meters = Number(input.shift());

    let controlSeconds = minutesControl*60 + secondsControl;
    let delay = length/120;
    let totalDelay = delay * 2.5;
    let timeMarin = (length/100)*secondsPer100Meters-totalDelay;

    if (timeMarin <= controlSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMarin.toFixed(3)}.`);
    } else {
        let neededSeconds = timeMarin - controlSeconds;
        console.log(`No, Marin failed! He was ${neededSeconds.toFixed(3)} second slower.`)
    }

}

solve([1, 20, 1546, 12])