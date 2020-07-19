function solve(input){
    let budget = Number(input.shift());
    let fuelNeeded = Number(input.shift());
    let day = input.shift();
    let fuelCost = fuelNeeded * 2.10;
    let guide = 100;

    let total = guide + fuelCost;

    if (day == "Saturday"){
        total = total - total * 0.10;
    } else if (day == "Sunday"){
        total = total - total * 0.20;
    }

    if (budget >= total){
        let left = budget - total;
        console.log(`Safari time! Money left: ${left.toFixed(2)} lv.`);
    } else if (budget < total){
        let needed = total - budget;
        console.log(`Not enough money! Money needed: ${needed.toFixed(2)} lv.`)
    }


}

solve(["1000", "10", "Sunday"])