function solve(input){
    let honeyForWinter = Number(input.shift());
    let currentLine = input.shift();
    let harvest = 0;
    let total = 0;
    let currentBeeHarvest = 0;
    let gathered = false;

    while (currentLine != "Winter has come"){
        let beeName = currentLine;
        currentBeeHarvest = 0;
        
        for (let i = 0; i < 6; i++){
            harvest = Number(input.shift());
            currentBeeHarvest += harvest;       
        }
        if (currentBeeHarvest < 0){
            console.log(`${beeName} was banished for gluttony`);
            }
        total += Math.ceil(currentBeeHarvest);
        if (currentBeeHarvest >= honeyForWinter || total > honeyForWinter){
            gathered = true;
            break;
        }
        if (gathered){
            break;
        } 
        
        currentLine = input.shift()

    }
    if (gathered && honeyForWinter <= total){
        let surplus = Math.ceil(total - honeyForWinter);
        console.log(`Well done! Honey surplus ${surplus.toFixed(2)}.`);
    } else {
        if (total < 0){
            let notEnough = honeyForWinter - (honeyForWinter + total);
            console.log(`Hard Winter! Honey needed ${notEnough.toFixed(2)}.`);
        } else {
            total = 0;
            let notEnough = honeyForWinter - total;
        
        console.log(`Hard Winter! Honey needed ${notEnough.toFixed(2)}.`);
        }
    }
    
}


solve([
    '80',   'Maya',
    '0',    '0',
    '0', '0',
    '0',  '-80',
    'Yama',   '0',
    '0',     '0',
    '0',     '70',
    '0',    'Winter has come'
  ]
  
  

  
  )