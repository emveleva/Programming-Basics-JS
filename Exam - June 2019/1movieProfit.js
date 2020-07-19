function solve(input){
    let movieName = input.shift();
    let days = Number(input.shift());
    let ticketsCount = Number(input.shift());
    let priceTicket = Number(input.shift());
    let percent = Number(input.shift());

    let ticketsTotal = days*priceTicket*ticketsCount;
    let cost = ticketsTotal * percent / 100;
    let income = ticketsTotal - cost;
    console.log(`The profit from the movie ${movieName} is ${income.toFixed(2)} lv.`)

}

solve(["The programer", "20", "500", "7.50", "7"])