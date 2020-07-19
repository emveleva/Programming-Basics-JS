function solve(input){
    let budget = Number(input.shift());
    let gender = input.shift();
    let age = Number(input.shift());
    let sport = input.shift();

    switch (sport) {
        case "Gym":
            if (gender == "m"){
                price = 42;
            } else {
                price = 35;
            }
            break;
    
        case "Boxing":
            if (gender == "m"){
                price = 41;
            } else {
                price = 37;
            }
            break;
        case "Yoga":
            if (gender == "m"){
                price = 45;
            } else {
                price = 42;
            }
            break;
        case "Zumba":
            if (gender == "m"){
                price = 34;
            } else {
                price = 31;
            }
            break;
        case "Dances":
            if (gender == "m"){
                price = 51;
            } else {
                price = 53;
            }
            break;
        case "Pilates":
            if (gender == "m"){
                price = 39;
            } else {
                price = 37;
            }
            break;
    }
    if (age <= "19"){
        price = price - price * 0.20;
    }

    if (budget >= price){
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let needed = price - budget;
        console.log(`You don't have enough money! You need $${needed.toFixed(2)} more.`)
    }

}

solve(["50", "m", "23", "Gym"])