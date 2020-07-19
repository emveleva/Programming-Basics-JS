function solve(num1, arg) {
    let budget = Number(num1);
    let season = arg;
    let classCar = '';
    let car = '';
    let cost = 0;


    if (budget <= 100) {
        classCar = "Economy class";
        if (season == "Summer"){
            car = "Cabrio";
            cost = budget*0.35;
        } else {
            car = "Jeep";
            cost = budget*0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        classCar = "Compact class";
        if (season == "Summer"){
            car = "Cabrio";
            cost = budget*0.45;
        } else {
            car = "Jeep";
            cost = budget*0.80;
        }
    } else if (budget > 500) {
        classCar = "Luxury class";
        car = "Jeep";
        cost = budget*0.90;
    }
    console.log(`${classCar}`);
    console.log(`${car} - ${cost.toFixed(2)}`)
}

solve(1010, "Summer")