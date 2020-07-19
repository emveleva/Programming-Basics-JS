function solve(num1, num2, num3){
    let difficulty = Number(num1);
    let complication = Number(num2);
    let pages = Number(num3);


    if (difficulty >= 80 && complication >= 80 && pages >= 8){
        console.log("Legacy");
    } else if (difficulty >= 80 && complication <= 10){
        console.log("Master");
    } else if (difficulty <= 30 && pages <= 1){
        console.log("Easy");
    } else if (difficulty <= 10){
        console.log("Elementary");
    } else if (complication >= 50 && pages >= 2){
        console.log("Hard");
    } else {
        console.log("Regular")
    }
}

solve(50, 60, 2)