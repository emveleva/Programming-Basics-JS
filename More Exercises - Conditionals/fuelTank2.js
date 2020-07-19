function solve(arg, num, arg2) {
    let fuel = (arg);
    let fuelToFill = Number(num);
    let clubCard = arg2;
    let price = 0;

    if (fuel == "Gasoline") {  
        price = fuelToFill*2.22;
        if(clubCard == "Yes") {
            price = price - 0.18*fuelToFill;
        }
    } else if (fuel == "Diesel") {
        price = fuelToFill*2.33;
        if(clubCard == "Yes") {
            price = price - 0.12*fuelToFill;
        }
    }
    else if (fuel == "Gas"){
        price = fuelToFill*0.93;
        if(clubCard == "Yes") {
            price = price - 0.08*fuelToFill;
        }
    }

    if (fuelToFill <= 25 && fuelToFill >= 20) {
        price = price - price * 0.08;
    } else if (fuelToFill > 25) {
        price = price - price * 0.10;
    }
    console.log(`${price.toFixed(2)} lv.`)
}

solve("Diesel", 19, "No")