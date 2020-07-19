function solve(input){
    let goalHeight = Number(input.shift());
    let countJumps = 0;
    let failed = false;
    let failCounter = 0;
    let currentJump = 0;
    let currentHeight = Number(input.shift());
    

    for (let i = goalHeight-30; i <= goalHeight; i += 5){
        
        countJumps++;
        
        if (currentHeight > goalHeight && i == goalHeight)
            {
            console.log(`Tihomir succeeded, he jumped over ${goalHeight}cm after ${countJumps} jumps.`);
            break;
            
            } else if (currentHeight <= i){
                failCounter++;
                
            } else if (currentHeight > i){
                failCounter = 0;
            }
                    
            if (failCounter >= 3){
                failed = true;
                
            } 
        
        if (failed){
            won = false;
            console.log(`Tihomir failed at ${initHeight}cm after ${countJumps} jumps.`)
            break;
        }
       
        currentHeight = Number(input.shift());
    }
    

}

solve([
    '250', '225', '224',
    '225', '228', '231',
    '235', '234', '235',
    ''
  ]
  )