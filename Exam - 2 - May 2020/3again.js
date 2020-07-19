function solve(num1, num2, num3){
    let difficulty = Number(num1);
    let complication = Number(num2);
    let pages = Number(num3);

    if (difficulty >= 80){
        if (complication >= 80){
            if (pages >= 8){
                console.log("Legacy");
            }
        } else if (complication <= 10){
            console.log("Master");
        }
    } else if (difficulty <= 30){
        if (pages <= 1){
            console.log("Easy");
        }
    } else if (difficulty <= 10){
        console.log("Elementary");
    } else if (difficulty >= 1 && difficulty <= 100){
        if (complication >= 50){
            if (pages >= 2){
                console.log("Hard");
            }
        }
    } else {
        console.log("Regular")
    }

}

solve(90, 60, 2)