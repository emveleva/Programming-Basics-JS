function solve(input){
    let breads = Number(input.shift());
    let currentLine = input.shift();
    let bestScore = 0;
    
    let winner = "";
    let name = "";

    for (let i = 1; i <= breads; i++){    
        name = currentLine;
        currentLine = input.shift();
        let score = 0;
        let totalScore = 0;
        while (currentLine != "Stop"){
            score = Number(currentLine);
            totalScore += score;



        currentLine = input.shift();

    }
    console.log(`${name} has ${totalScore} points.`)
    if (totalScore > bestScore){
        bestScore = totalScore;
        console.log(`${name} is the new number 1!`);
        winner = name;
    }
    currentLine = input.shift();
    
}
console.log(`${winner} won competition with ${bestScore} points!`);
}

solve([
    '2',         'Chef Angelov',
    '9',         '9',
    '9',         'Stop',
    'Chef Rowe', '10',
    '10',        '10',
    '10',        'Stop'
  ]
  
  )