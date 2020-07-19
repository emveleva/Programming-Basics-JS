function solve(arg, num) {
    let fuel = (arg);
    let fuelInTank = Number(num);

    if (fuel == "Diesel" || fuel == "Gasoline" || fuel == "Gas") {
        if (fuelInTank < 25) {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        }
    } else {
        console.log("Invalid fuel!")
    }
}

solve("kerosene", 10)