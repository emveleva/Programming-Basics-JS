function solve([num1, num2, num3, num4]) {
    let area = Number(num1);
    let grapePerMeter = Number(num2);
    let neededLitersWine = Number(num3);
    let workers = Number(num4);

    let totalGrape = area*grapePerMeter;
    let totalWine = totalGrape*0.40/2.5;

    if (totalWine < neededLitersWine) {
        let notEnoughWine = Math.floor(neededLitersWine - totalWine);
        console.log(`It will be a tough winter! More ${notEnoughWine} liters wine needed.`)

    } else {
        let wineLeft = Math.ceil(totalWine - neededLitersWine);
        let winePerWorker = Math.ceil(wineLeft/workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
        console.log(`${wineLeft} liters left -> ${winePerWorker} liters per person.`)
    }
}

solve(650, 2, 175, 3)