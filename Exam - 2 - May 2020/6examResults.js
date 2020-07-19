function solve(input){
    let currentLine = input.shift();
    
    let score = 0;
    let notCheating = true;

    while (currentLine != "Midnight"){
        let name = currentLine;
        let points = 0;
        let notCheating = true;
        for (let i = 0; i < 6; i++){
        score = Number(input.shift());
        if (score < 0) {
            console.log(`${name} was cheating!`);
            notCheating = false;
            break;
        } else {
            points += score;
        }
        
        }
        let grade = Math.floor(points / 600 * 100);
        grade = grade * 0.06;
        if (grade < 3){
            grade = 2.00;
        }
        if (grade >= 5 && notCheating){
            console.log("=".repeat(19));
            console.log(`|   CERTIFICATE   |`);
            console.log(`|    ${grade.toFixed(2)}/6.00    |`);
            console.log("=".repeat(19));
            console.log(`Issued to ${name}`)
        } else if (notCheating && grade < 5){
            console.log(`${name} - ${grade.toFixed(2)}`);
        }
        currentLine = input.shift();
    }
}


solve([
    'George', '100',   '100',
    '100',    '100',   '40',
    '0',      'John',  '10',
    '-1',     'Peter', '100',
    '100',    '100',   '100',
    '100',    '70',    'Midnight'
  ]
  
  

  )