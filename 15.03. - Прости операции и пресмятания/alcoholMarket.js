function solve(whiskeyCost, beerLiters, wineLiters, rakiaLiters, whiskeyLiters){
    whiskeyCost = Number(whiskeyCost);
    beerLiters = Number(beerLiters);
    wineLiters = Number(wineLiters);
    rakiaLiters = Number(rakiaLiters);
    whiskeyLiters = Number(whiskeyLiters);
    let rakiaCost = whiskeyCost/2;
    let wineCost = rakiaCost-(0.4*rakiaCost);
    let beerCost = rakiaCost-(0.8*rakiaCost);
    let sum = whiskeyLiters*whiskeyCost +
              beerLiters*beerCost +
              wineLiters*wineCost + 
              rakiaLiters*rakiaCost;
    console.log(sum.toFixed(2));
}

solve(63.44, 3.57, 6.35, 8.15, 2.5)