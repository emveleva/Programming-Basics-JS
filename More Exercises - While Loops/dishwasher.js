function solve(input){
    let bottles = Number(input.shift());
    let detergent = bottles * 750;
    let currentLine = input.shift();
    let counter = 0;
    let countPlates = 0;
    let countPots = 0;
    let neededDetergent = 0;
    
     while (currentLine !== "End"){    
         let load = Number(currentLine);
         counter++;
         if(counter % 3 === 0){
             countPots += load;
             neededDetergent += 15 * load;
         } else {
             countPlates += load;
             neededDetergent += 5 * load;
         }
         if (detergent < neededDetergent){
            let notEnough = neededDetergent - detergent;
         console.log(`Not enough detergent, ${notEnough} ml. more necessary!`)
            break;
         }
        currentLine = input.shift()
     }
     if(detergent >= neededDetergent){
         let detergentLeft = detergent - neededDetergent;
         console.log("Detergent was enough!");
         console.log(`${countPlates} dishes and ${countPots} pots were washed.`);
         console.log(`Leftover detergent ${detergentLeft} ml.`)
     
         
     }
}

solve([ '2', '53', '65', '55', 'End' ]
)