function solve(num1, arg, num2) {
    let budget = Number(num1);
    let category = arg;
    let people = Number(num2);
    let moneyTickets = 0;
    let transportMoney = 0;

    if (category == "VIP") {
        let ticketPrice = 499.99;
        moneyTickets = ticketPrice*people;
    } else if (category == "Normal") {
        let ticketPrice = 249.99;
        moneyTickets = ticketPrice*people;
    }

    if (people >=1 && people <= 4) {
        transportMoney = budget*0.75;
    } else if (people >= 5 && people <= 9){
        transportMoney = budget*0.60;
    } else if (people >= 10 && people <= 24) {
        transportMoney = budget*0.50;
    }else if (people >= 25 && people <= 49) {
        transportMoney = budget*0.40;
    } else if (people > 50) {
        transportMoney = budget*0.25;
    }
    let moneyNeeded = budget - transportMoney;
    if (moneyNeeded >= moneyTickets){
        let moneyLeft = moneyNeeded - moneyTickets;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let notEnough = moneyTickets - moneyNeeded;
        console.log(`Not enough money! You need ${notEnough.toFixed(2)} leva.`)
    }
}

solve(15000, "VIP", -50)