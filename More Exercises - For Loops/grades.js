function solve(input){
    let totalStudents = Number(input.shift());
    let totalGrades = 0;
    let topStudents = 0;
    let goodStudents = 0;
    let midStudents = 0;
    let failedStudents = 0;

    
    for(let i = 1; i <= totalStudents; i++){
        let grade = Number(input.shift());
        totalGrades += grade;
        if (grade >= 5.00){
            topStudents++;
        } else if (grade < 5 && grade >= 4.00){
            goodStudents++;
        } else if (grade < 4 && grade >= 3){
            midStudents++;
        } else {
            failedStudents++;
        }
    }
    let average = totalGrades/totalStudents;
    console.log(`Top students: ${(topStudents/totalStudents*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents/totalStudents*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(midStudents/totalStudents*100).toFixed(2)}%`);
    console.log(`Fail: ${(failedStudents/totalStudents*100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`)
}

solve([
    '6',   '2', '3',
    '4',   '5', '6',
    '2.2', ''
  ])