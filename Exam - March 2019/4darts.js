function solve(input){
    let points = 301;
    let name = input.shift();
    let currentLine = input.shift();
    let successfullShots = 0;
    let unsuccessfullShots = 0;
    let total = 0;

    while (currentLine != "Retire"){
        let currentPoints = Number(input.shift())
          
            if (currentLine == "Single"){  
                currentPoints;
                
            } else if (currentLine == "Double"){
                currentPoints = currentPoints * 2;
                

            } else if (currentLine == "Triple"){
                currentPoints = currentPoints * 3;
                

            }
            if (currentPoints <= points){
                points = points - currentPoints;
                successfullShots++;
                if (points == 0){
                    console.log(`${name} won the leg with ${successfullShots} shots.`);
                    break;
                } 
            } else {
                unsuccessfullShots++;
            }
            
                
            
    
    currentLine = input.shift();
    }
    if (points != 0) {
        console.log(`${name} retired after ${unsuccessfullShots} unsuccessful shots.`)
    } 
}

solve([
    'Stephen Bunting', 'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Double',
    '7',               'Single',
    '12',              'Double',
    '1',               'Single',
    '1',               ''
  ]
  
  
  
  )