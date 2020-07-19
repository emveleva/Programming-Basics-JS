function solve(input) {
    let name = input.shift();
    let classNumber = 1;
    let total = 0;
    
  

    while (classNumber <= 12) {
        let grades = Number(input.shift());
        if (grades >= 4) {
            total = total + grades;
            classNumber++;
        }
        
    }
    let average = total / 12;
    if (average >= 4.00) {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
} 
}

solve([
    'Pesho', '4',    '5.5',
    '6',     '5.43', '4.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5',     '6'
  ]
  )