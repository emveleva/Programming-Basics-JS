function solve(input){
    let wantedHeight = Number(input.shift());
    let countJumps = 0;

    for (let i = wantedHeight - 30; i <= wantedHeight; i += 5){
        let counterFailed = 0;
        let currentHeight = Number(input.shift());
        countJumps++;


        if (currentHeight > wantedHeight && i == wantedHeight){
            console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${countJumps} jumps.`);
            break;
        }

        if (currentHeight <= i){
            counterFailed++;
            while (counterFailed < 3){
                currentHeight = Number(input.shift());
                countJumps++;

                if (currentHeight > wantedHeight && i == wantedHeight){
                    console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${countJumps} jumps.`);
                    break;
                } else if (currentHeight <= i){
                    counterFailed++;
                    
                    } else if (currentHeight > i) {
                        break;
                    }
                    
                }
                if (counterFailed == 3){
                    console.log(`Tihomir failed at ${i}cm after ${countJumps} jumps.`);
                    break;
                }
                
            }
           
            

        
    }
}

solve([
    '231', '205', '212',
    '213', '228', '229',
    '230', '235', ''
  ]
  
  )
