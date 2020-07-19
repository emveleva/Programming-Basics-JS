function solve(num1, num2, num3) {
    let age = Number(num1);
    let washingMaching = Number(num2);
    let toyPrice = Number(num3);
    let toysCount = 0;
    let money = 0;
    let sumMoney = 0;
    let brotherMoney = 0;
    let totalToysMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            toysCount += 1;
        } else {
            money += 10;
            sumMoney += money;
            brotherMoney += 1;
        }
    }
    totalToysMoney = toysCount * toyPrice;
    sumMoney = sumMoney - brotherMoney + totalToysMoney;
    if (washingMaching <= sumMoney) {
        let moneyLeft = sumMoney - washingMaching;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let moneyNeeded = washingMaching - sumMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
}

solve(21, 1570.98, 3)