function solve(input){
    let n = Number(input.shift());
    let currentLine = input.shift();
    let finalGrade = 0;
    let topics = 0;

    while (currentLine != "Finish"){
        topics++;
        let presentation = currentLine;
        let grade = 0;
        for (let j = 0; j < n; j++){
            let score = Number(input.shift());
            grade += score;
        }
        grade = grade / n;
        finalGrade += grade;
        console.log(`${presentation} - ${grade.toFixed(2)}.`)
        currentLine = input.shift();
    }
    finalGrade = finalGrade / topics;;
    console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);
}

solve([
    '2',
    'Objects and Classes',
    '5.77',
    '4.23',
    'Dictionaries',
    '4.62',
    '5.02',
    'RegEx',
    '2.88',
    '3.42',
    'Finish'
  ]
  )