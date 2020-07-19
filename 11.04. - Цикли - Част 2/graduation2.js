function solve(input) {
    let name = input.shift();
    let classNumber = 1;
    let total = 0;
    let hasFailed = false;
      

    while (classNumber <= 12) {
        let grades = Number(input.shift());
        if (grades < 4) {
            
            if (hasFailed) {
                console.log(`${name} has been excluded at ${classNumber} grade`)
                break;
                
            }
            hasFailed = true;            
        } else {  total = total + grades;
            classNumber++;

        }
    }
    
    if (classNumber > 12) {
        let average = total / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
} 

}

solve([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ])