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
            currentBeeHarvest += Math.round(harvest);       
        }
        if (currentBeeHarvest < 0){
            console.log(`${beeName} was banished for gluttony`);
            }
        total += currentBeeHarvest;
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
        let surplus = Math.round(total - honeyForWinter);
        console.log(`Well done! Honey surplus ${surplus.toFixed(2)}.`);
    } 
    else {
        if (total <= 0){
            console.log(`Hard Winter! Honey needed ${honeyForWinter.toFixed(2)}.`);
        } else {
        let notEnough = Math.round(honeyForWinter - total);
        
        console.log(`Hard Winter! Honey needed ${notEnough.toFixed(2)}.`);
        }
    }
    
}

solve([
    '10',   'Maya',
    '0.2',    '-0.25',
    '0', '10',
    '-2',  '0',
    'Yama',   '-5',
    '0',     '5',
    '0',     '0',
    '0',    'Winter has come'
  ]
  
  

  
  )
