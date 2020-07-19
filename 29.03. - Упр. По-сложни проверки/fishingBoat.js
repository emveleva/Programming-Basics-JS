function solve(budget, season, fishermen) {
    budget = Number(budget);
    fishermen = Number(fishermen);
    let ship = 0;
    total = 0;

    switch (season) {
        case "Spring":
            ship = 3000;
            total = total + ship;
            break;
        case "Summer":
        case "Autumn":
            ship = 4200;
            total = total + ship;
            break;
        case "Winter":
            ship = 2600;
            total = total + ship;
            break;
    }
    if (fishermen <=6 ) {
        total = total - total *0.1;
    } else if (fishermen >= 7 && fishermen <= 11) {
        total = total - total * 0.15
    } else if (fishermen > 12) {
        total = total - total * 0.25;
    }
    if (fishermen % 2 === 0 && season != "Autumn") {
        total = total - total * 0.05;
    }
    if (total <= budget) {
        let moneyLeft = budget - total;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else if (total > budget){
        let moneyNeeded = total -budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}

// solve(3000, "Summer", 11);
// solve(3600, "Autumn", 6);
solve(2000, "Winter", 13)