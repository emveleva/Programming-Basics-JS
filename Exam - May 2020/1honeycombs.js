function solve(num1, num2){
    let beeCouns = Number(num1);
    let flowerCount = Number(num2);

    let totalHoney = beeCouns * flowerCount * 0.21;
    let totalHoneycombs = Math.floor(totalHoney / 100);
    let honeyLeft = totalHoney - totalHoneycombs*100;

    console.log(`${totalHoneycombs} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`)

}

solve(11, 120)