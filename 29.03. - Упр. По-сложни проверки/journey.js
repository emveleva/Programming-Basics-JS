function solve(budget, season) {
    budget = Number(budget);
    let total = 0;
    let type = "";
    let destination = "";

   
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            total = budget * 0.30;
        } else if (season == "winter") {
            total = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            total = budget * 0.40;
        } else if (season == "winter") {
            total = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        total = budget * 0.90;
    }
    
    if (season == "summer" && destination != "Europe") {
        type = "Camp"
    } else if (season == "winter" || destination == "Europe") {
        type = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${total.toFixed(2)}`)
}

solve(50, "summer");
solve(75, "winter");
solve(312, "summer");
solve(678.53, "winter");
solve(1500, "summer");
