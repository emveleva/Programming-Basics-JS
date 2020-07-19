function honeyWinterReserves(input) {
    let honeyWinterQuantity = Number(input.shift());
    let beeName = input.shift();
    let honeyCounter = 0;
 
    while (beeName !== "Winter has come" && honeyCounter < honeyWinterQuantity) {
        for (let row = 1; row <= 6; row++) {
            let currentHoney = Number(input.shift());
            honeyCounter += currentHoney;
        }
        if (honeyCounter < 0) {
            console.log(`${beeName} was banished for gluttony`);
        }
        beeName = input.shift();
    }
    if (honeyCounter >= honeyWinterQuantity) {
        console.log(`Well done! Honey surplus ${(honeyCounter - honeyWinterQuantity).toFixed(2)}.`);
    } else {
        console.log(`Hard Winter! Honey needed ${(honeyWinterQuantity - honeyCounter).toFixed(2)}.`);
    }
}