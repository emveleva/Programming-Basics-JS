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
        total += currentBeeHarvest
        if (currentBeeHarvest >= honeyForWinter || total >= honeyForWinter){
            gathered = true;
            break;
        }
        if (gathered){
            break;
        } 
        
        currentLine = input.shift()

    }
    if (gathered){
        let surplus = total - honeyForWinter;
        console.log(`Well done! Honey surplus ${surplus.toFixed(2)}.`);
    } else {
        let notEnough = honeyForWinter - total;
        console.log(`Hard Winter! Honey needed ${notEnough.toFixed(2)}.`);
    }
}

solve([
    '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '230',     '700',
    '100',    
    'Nina',   '50',
    '10',     '20',
    '30',     '100',
    '100','Winter has come'
  ]
  

  
  )
