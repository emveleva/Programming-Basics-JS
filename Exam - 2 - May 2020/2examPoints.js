function solve(arg1, arg2, arg3){
    let problem = Number(arg1);
    let points = Number(arg2);
    let course = arg3;

    switch (problem) {
        case 1:
            if (course == "Basics"){
                points = points * 8 / 100;
                points = points - points * 0.20;
            } else if (course == "Fundamentals"){
                points = points * 11 / 100;
            } else if (course == "Advanced"){
                points = points * 14 / 100;
                points = points + points * 0.20;
            }
            
            break;
        case 2:
            if (course == "Basics"){
                points = points * 9 / 100;
            } else if (course == "Fundamentals"){
                points = points * 11 / 100;
            } else if (course == "Advanced"){
                points = points * 14 / 100;
                points = points + points * 0.20;
            }
            break;
        case 3:
            if (course == "Basics"){
                points = points * 9 / 100;
            } else if (course == "Fundamentals"){
                points = points * 12 / 100;
            } else if (course == "Advanced"){
                points = points * 15 / 100;
                points = points + points * 0.20;
            }
            break;
        case 4:
            if (course == "Basics"){
                points = points * 10 / 100;
            } else if (course == "Fundamentals"){
                points = points * 13 / 100;
            } else if (course == "Advanced"){
                points = points * 16 / 100;
                points = points + points * 0.20;
            }
            
            break;
    }
    console.log(`Total points: ${points.toFixed(2)}`)
}

solve("2", "95", "Advanced")