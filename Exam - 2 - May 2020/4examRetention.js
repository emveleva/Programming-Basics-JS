function solve(num1, num2){
    let countStudents = Number(num1);
    let seasons = Number(num2);

    for (let i = 1; i <= seasons; i++){
        countStudents = Math.ceil(countStudents *90 / 100);
        countStudents = Math.ceil(countStudents *90 / 100);
        countStudents = Math.ceil(countStudents * 80 / 100);
        if (i % 3 == 0){
            countStudents = Math.ceil(countStudents + countStudents * 15 / 100);
        } else {
        countStudents = Math.ceil(countStudents + countStudents * 5 / 100);
        }
    }
    console.log(`Students: ${countStudents}`)
}

solve(2000, 5)