function solve([num1, num2, num3]){
    let neededHours = Number(num1);
    let availableDays = Number(num2);
    let workersExtraHours = Number(num3);

    let workHours = (availableDays - availableDays*0.10)*8;
    let extraTime = workersExtraHours*2*availableDays;
    let totalTime = Math.floor(workHours + extraTime);

    if (neededHours <= totalTime) {
        let hoursLeft = totalTime - neededHours;
        console.log(`Yes!${hoursLeft} hours left.`);
    } else {
        let hoursNeeded = neededHours - totalTime;
        console.log(`Not enough time!${hoursNeeded} hours needed.`)
    }
}

solve([ '90', '7', '3', '' ]

    )