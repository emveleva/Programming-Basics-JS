function solve(input){
    let minutesOfWalking = Number(input.shift());
    let countOfWalks = Number(input.shift());
    let caloriesPerDay = Number(input.shift());

    let totalWalk = minutesOfWalking*countOfWalks;
    let totalCalories = totalWalk * 5;

    if (totalCalories >= caloriesPerDay*0.5){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)
    }
}

solve(["15", "2", "500"])