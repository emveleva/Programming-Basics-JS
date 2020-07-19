function solve(input) {
    let peopleTotal = Number(input.shift());
    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let shake = 0;
    let bar = 0;
    let train = 0;
    let buy = 0;
    
    for (let i = 1; i <= peopleTotal; i++){
        let currentLine = input.shift();
        if (currentLine == "Back"){
            backCount++;
            train++;
        } else if (currentLine == "Chest"){
            chestCount++;
            train++;
        } else if (currentLine == "Legs") {
            legsCount++;
            train++;
        } else if (currentLine == "Abs") {
            absCount++;
            train++;
        } else if (currentLine == "Protein shake"){
            shake++;
            buy++;
        } else if (currentLine == "Protein bar"){
            bar++;
            buy++;
        }
    }
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${(train/peopleTotal*100).toFixed(2)}% - work out`);
    console.log(`${(buy/peopleTotal*100).toFixed(2)}% - protein`);
}


solve([
    '7',
    'Chest',
    'Back',
    'Legs',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    ''
  ]
  
  )