function solve(input) {
    let vacationMoney = Number(input.shift());
    let currentMoney = Number(input.shift());
    let currentDay = 0;
    let spend = 0;

    while(currentMoney < vacationMoney && spend < 5) {
        let action = input.shift();
        let currentAmount = Number(input.shift());
        if(action == "save") {
            currentMoney += currentAmount;
            currentDay++
            spend = 0;
        
        } else if (action == "spend") {
            currentDay++;
            spend++;        
            currentMoney -= currentAmount;
            if (currentMoney <= 0) {
                currentMoney = 0;
            }
        } else {
            currentDay++
        }
         
    }
    if (spend == 5 ) {
        console.log("You can't save the money.");
        console.log(currentDay)
   } else {
    console.log(`You saved the money for ${currentDay} days.`);

   }
}

solve([
    '25000',   '150',
    'spend', '50',
    'spend', '50',
    'save',  '100',
    'save',  '100',,
    'save',  '100',
    'save',  '100'
  ])


