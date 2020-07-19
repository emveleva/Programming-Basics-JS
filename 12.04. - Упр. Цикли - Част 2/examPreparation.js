function solve(input) {
    let countBadGrades = Number(input.shift());
    let currentProblem = input.shift();
    let currentGrade = Number(input.shift());
    let gradesTotal = 0;
    let badGrades = 0;
    let problemsCount = 0;
    let lastProblem = ''

    while (currentProblem != "Enough"){
        gradesTotal += currentGrade;
        problemsCount++;
        

        if(currentGrade <= 4) {
            badGrades++;
            if(badGrades >= countBadGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`)
                break;
        }            
        }
        
        lastProblem = currentProblem;
        currentProblem = input.shift();
        currentGrade = Number(input.shift());
        

    }
    if (badGrades < countBadGrades){
        let averageGrades = gradesTotal/problemsCount;
        console.log(`Average score: ${averageGrades.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`)
    }
}

solve([
    '3',
    'Money',
    '6',
    'Story',
    '4',
    'Spring Time',
    '5',
    'Bus',
    '6',
    'Enough'
  ]
  
  )