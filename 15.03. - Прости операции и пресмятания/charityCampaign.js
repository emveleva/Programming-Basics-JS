function solve (days, backers, cakesPerDay, wafflesPerDay, pancakesPerDay) {
    days = Number(days);
    backers = Number(backers);
    cakesPerDay = Number(cakesPerDay);
    wafflesPerDay = Number(wafflesPerDay);
    pancakesPerDay = Number(pancakesPerDay);
    let cakeCost = 45;
    let waffleCost = 5.80;
    let pancakeCost = 3.20;
    let cakes = cakesPerDay*cakeCost;
    let waffles = wafflesPerDay*waffleCost;
    let pancakes = pancakesPerDay*pancakeCost;
    let sumDay = (cakes+waffles+pancakes)*backers;
    let sumTotal = sumDay*days;
    let cost = sumTotal - (sumTotal/8);
    console.log(cost.toFixed(2))
}

solve(20, 8, 14, 30, 16)