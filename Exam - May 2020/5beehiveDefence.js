function solve(num1, num2, num3){
    let countBees = Number(num1);
    let healthBear = Number(num2);
    let attackBear = Number(num3);
    let attackBee = 5;
  

    while (countBees > 0 || healthBear > 0){
        if (countBees >= attackBear){
        countBees = countBees - attackBear;
            if (countBees < 100){
            console.log(`The bear stole the honey! Bees left ${countBees}.`)
            break;
        } 
        } 
        else if (countBees <= attackBear){
            countBees = 0;
            console.log(`The bear stole the honey! Bees left ${countBees}.`)
            break;
        

        }
        if (healthBear > 0){
        healthBear = healthBear - countBees * attackBee;
            if (healthBear <= 0){
            console.log(`Beehive won! Bees left ${countBees}.`);
            break;
        }
    }

    }
}

solve("200", "10000", "300")