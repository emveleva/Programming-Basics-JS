function solve(input){
    let budget = Number(input.shift());
    let nights = Number(input.shift());
    let pricePerNight = Number(input.shift());
    let percentExtraPay = Number(input.shift());

    if (nights > 7){
        pricePerNight = pricePerNight - pricePerNight*0.05;
    }

    let cost = nights * pricePerNight + budget*percentExtraPay/100;

    if(cost <= budget){
        let left = budget - cost;
        console.log(`Ivanovi will be left with ${left.toFixed(2)} leva after vacation.`)
    } else {
        let needed = cost - budget;
        console.log(`${needed.toFixed(2)} leva needed.`)
    }
}

solve(["500", "7", "66", "15"])