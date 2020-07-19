function solve(input) {
    let honeyForWinter = Number(input.shift());
    let totalHarvest = 0;
    let currentLine = input.shift();
    let notPrinted = true;
    

    while (currentLine != "Winter has come"){
        let beeName = currentLine;
        let beeHarvest = 0;
        for (i = 1; i <= 6; i++){
            let harvest = Number(input.shift());
            if (harvest < 0){
                beeHarvest -= Math.abs(harvest);
            } else {
            beeHarvest += harvest;
            }
            
            }
            if (honeyForWinter <= beeHarvest){
                let surplus = beeHarvest - honeyForWinter;
                console.log(`Well done! Honey surplus ${surplus.toFixed(2)}.`);
                notPrinted = false;
                break;
            }
        
        if (beeHarvest < 0){
            console.log(`${beeName} was banished for gluttony`);
        }
        
        totalHarvest += beeHarvest;
        currentLine = input.shift()

    }
    if (honeyForWinter <= totalHarvest && notPrinted){
        let surplus = totalHarvest - honeyForWinter;
        console.log(`Well done! Honey surplus ${surplus.toFixed(2)}.`);
    } else if (honeyForWinter > totalHarvest && notPrinted){
        let notEnough = honeyForWinter - totalHarvest;
        console.log(`Hard Winter! Honey needed ${notEnough.toFixed(2)}.`);
    }
    
}

solve([
    '1000',   'Maya',
    '50',    '210',
    '200', '100',
    '500',  '20',
    'Yama',   '50',
    '10',     '20',
    '30',     '100',
    '100',    'Winter has come'
  ])