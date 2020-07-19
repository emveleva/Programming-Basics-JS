function solve(input){
    let guestCount = Number(input.shift());
    let couvertPerPerson = Number(input.shift());
    let budget = Number(input.shift());

    if(guestCount >= 10 && guestCount <= 15) {
        couvertPerPerson = couvertPerPerson - couvertPerPerson*0.15;
    } else if (guestCount > 15 && guestCount <= 20){
        couvertPerPerson = couvertPerPerson - couvertPerPerson*0.20;
    } else if (guestCount > 20){
        couvertPerPerson = couvertPerPerson - couvertPerPerson*0.25;
    }
    let cake = budget*0.10;
    let total = couvertPerPerson * guestCount + cake;

    if (total <= budget){
        let left = budget - total;
        console.log(`It is party time! ${left.toFixed(2)} leva left.`)
    } else {
        let needed = total - budget;
        console.log(`No party! ${needed.toFixed(2)} leva needed.`)
    }
}

solve([18, 30, 450])