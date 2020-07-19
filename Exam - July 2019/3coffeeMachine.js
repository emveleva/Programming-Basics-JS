function solve(input){
    let drink = input.shift();
    let sugar = input.shift();
    let countDrinks = Number(input.shift());
    let price = 0;

    switch (drink) {
        case "Espresso":
            if (sugar == "Without"){
                price = countDrinks * 0.90;
                price = price - price * 0.35;
            } else if (sugar == "Normal"){
                price = countDrinks * 1;
            } else if (sugar == "Extra"){
                price = countDrinks * 1.20;
            }
            if (countDrinks >= 5){
                price = price - price * 0.25;
            }
            break;
    
        case "Cappuccino":
            if (sugar == "Without"){
                price = countDrinks * 1.00;
                price = price - price * 0.35;
            } else if (sugar == "Normal"){
                price = countDrinks * 1.20;
            } else if (sugar == "Extra"){
                price = countDrinks * 1.60;
            }
            break;
        case "Tea":
            if (sugar == "Without"){
                price = countDrinks * 0.50;
                price = price - price * 0.35;
            } else if (sugar == "Normal"){
                price = countDrinks * 0.60;
            } else if (sugar == "Extra"){
                price = countDrinks * 0.70;
            }
            break;
    }
    if (price > 15){
        price = price - price * 0.20;
    }
    console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`)
}

solve(["Tea", "Extra", "100"])