function solve(input){
    let capacity = Number(input.shift());
    let currentLine = input.shift();
    let filled = 0;
    let counter = 0;
    let suitcases = 0;

    while (currentLine != "End"){
        counter++;
        let bagage = Number(currentLine);
        if (counter % 3 == 0){
            bagage = bagage + bagage*0.10;
        }
        filled += bagage;
        if (filled > capacity){
            break;
        }
        suitcases++;

        currentLine = input.shift();
    }
    if (currentLine == "End"){
        console.log(`Congratulations! All suitcases are loaded!`)
        } else if (filled >= capacity){
            console.log(`No more space!`);
        }
    console.log(`Statistic: ${suitcases} suitcases loaded. `)
}

solve([
    '1200.2', '260',
    '380.5',  '125.6',
    '305',    'End',
    ''
  ]
)