function solve(input){
    let goalHeight = Number(input.shift());
    let currentJump = Number(input.shift());
    let count = input.length;
    let initHeight = goalHeight - 30;
    let counter = 1;
    let failCounter = 0;
    let failed = false;
    let jumps = 0;
    let won = true;;


    while (counter <= count){
        counter++;
        jumps++;
            for (let i = 1; i <= 3; i++){
            if(currentJump > initHeight){
                failCounter = 0;
                initHeight += 5;
                // if (initHeight >= goalHeight){

                //     won = true;
                //     break;
                // }
                break;
            } else if (currentJump <= initHeight){
                failCounter++;
                break;
            }
                
            }    
            if (failCounter >= 3){
                failed = true;
                
            } 
        
        if (failed){
            won = false;
            console.log(`Tihomir failed at ${initHeight}cm after ${jumps} jumps.`)
            break;
        }
        // if (won){break}
        currentJump = Number(input.shift());
    }
    if (won){
        console.log(`Tihomir succeeded, he jumped over ${goalHeight}cm after ${jumps} jumps.`)
}

}
    
    


solve([
    '250', '225', '224',
    '225', '228', '231',
    '235', '234', '235',
    ''
  ]
  )