function solve(input){
    let money = Number(input.shift())*100;
    let coinCount = 0;

    while (money > 0) {
        if(money > 200 || money == 200) {
            money = Math.round(money - 200);
            coinCount++
        }
        if(money < 200 && money > 100 || money == 100) {
            money = Math.round(money - 100);
            coinCount++
        }
        if(money < 100 && money > 50 || money == 50) {
            money = Math.round(money - 50);
            coinCount++;
        }
        if(money < 50 && money > 20 || money == 20) {
            money = Math.round(money - 20);
            coinCount++
        }
        if (money < 20 && money > 10 || money == 10) {
            money = Math.round(money - 10);
            coinCount++;
        }
        if (money < 10 && money > 5 || money == 5) {
            money = Math.round(money - 5);
            coinCount++
        }
        if(money < 5 && money > 2 || money == 2) {
            money = Math.round(money - 2);
            coinCount++
        }
        if(money == 1 ) {
            money = Math.round(money - 1);
            coinCount++;
        }
        }
        console.log(coinCount)
        

    }
    
    

solve([2.73])