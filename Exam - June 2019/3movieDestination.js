function solve(input) {
    let budget = Number(input.shift());
    let destination = input.shift();
    let season = input.shift();
    let days = Number(input.shift());
    let cost = 0;

    switch (destination) {
        case "Dubai":
            if (season == "Winter"){
                cost = days * 45000;
            } else {
                cost = days * 40000;
            }
            cost = cost - cost * 0.30;
            break;
    
        case "Sofia":
            if (season == "Winter"){
                cost = days * 17000;
            } else {
                cost = days * 12500;
            }
            cost = cost + cost * 0.25;
            break;


        case "London":
            if (season == "Winter"){
                cost = days * 24000;
            } else {
                cost = days * 20250;
            }
            break;
    }
    if (budget >= cost){
        let left = budget - cost;
        console.log(`The budget for the movie is enough! We have ${left.toFixed(2)} leva left!`)
    } else {
        let needed = cost - budget;
        console.log(`The director needs ${needed.toFixed(2)} leva more!`)
    }
}

solve(["1500000", "Sofia", "Summer", "13"])