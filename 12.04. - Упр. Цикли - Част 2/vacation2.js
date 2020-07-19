function solve(input) {
    let neededMoney = Number(input.shift());
    let savedMoney = Number(input.shift());

    let days = 0;
    let spendCounter = 0;

    while(spendCounter < 5 && savedMoney < neededMoney) {
        let action = input.shift();
        let money = Number(input.shift());

        if (action ==="spend") {
            savedMoney -= money;
            if (savedMoney < 0) {
                savedMoney = 0;
            }
            spendCounter++;
        } else {
            savedMoney += money;
            spendCounter = 0;
        }
        days++;
    }
    if (spendCounter === 5) {
        console.log(`You can't save the money.`);
        console.log(days);
    } else {
        console.log(`You saved the money for ${days} days.`)
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