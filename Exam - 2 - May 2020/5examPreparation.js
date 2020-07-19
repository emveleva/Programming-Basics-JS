function solve(num1, num2, num3){
    let students = Number(num1);
    let problems = Number(num2);
    let energy = Number(num3);
    let totalProblems = 0;
    let totalQuestions = 0;

    while (energy != 0){
        energy += 2*problems;
        totalProblems += problems;
        students -= problems; 
        let questions = students*2 * 3;
        totalQuestions += students*2;
        energy -= questions;
        if (energy < 0){
            energy = 0;
            break;
        }
        if (students < 10){
            break;
    }
        
        students = students + Math.floor(students / 10);
    }
        if (students < 10){
            console.log(`The students are too few!`);
            console.log(`Problems solved: ${totalProblems}`)
        } else if (energy <= 0){
            console.log(`The trainer is too tired!`);
            console.log(`Questions answered: ${totalQuestions}`)
        }
}

solve(20, 5, 500)