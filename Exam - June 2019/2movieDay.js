function solve(input){
    let timeForCapture = Number(input.shift());
    let scenes = Number(input.shift());
    let sceneDuration = Number(input.shift());

    let prep = timeForCapture*0.15;

    let totalTimeNeeded = scenes * sceneDuration + prep;

    if (timeForCapture >= totalTimeNeeded){
        let left = timeForCapture - totalTimeNeeded;
        console.log(`You managed to finish the movie on time! You have ${Math.round(left)} minutes left!`);
    } else {
        let needed = totalTimeNeeded - timeForCapture;
        console.log(`Time is up! To complete the movie you need ${Math.round(needed)} minutes.`)
    }

}

solve(["120", "10", "11"])