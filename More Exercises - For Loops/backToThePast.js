function solve(input){
    let inheritedMoney = Number(input.shift());
    let yearBack = Number(input.shift());
    let spentMoney = 0;
    let years = 18;

    for (let i = 1800; i <= yearBack; i++){
        
        if (i % 2 === 0){
            spentMoney += 12000;
        } else {
            spentMoney += 12000 + 50 * years;
        }
        years++;
    }
    if (inheritedMoney >= spentMoney){
        let moneyLeft = inheritedMoney - spentMoney;
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`)
    } else {
        let notEnough = spentMoney - inheritedMoney;
        console.log(`He will need ${notEnough.toFixed(2)} dollars to survive.`)
    }
}

solve(['100000.15', "1808"])