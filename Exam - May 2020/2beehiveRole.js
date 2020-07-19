function solve(arg1, arg2, arg3){
    let intellect = Number(arg1);
    let power = Number(arg2);
    let gender = arg3;

    if (intellect >=80){
        if (power >= 80){
            if (gender == "female"){
                console.log("Queen Bee");
            } else {
                console.log("Repairing Bee");
            }
        } else {
            console.log("Repairing Bee");
        }
    } else if (intellect >= 60) {
        console.log("Cleaning Bee");
    } else if (intellect > 0 ) {
        if (power >= 80){
            if (gender == "male"){
                console.log("Drone Bee");
            }
        } else if (power >= 60) {
            console.log("Guard Bee");
        } else {
            console.log("Worker Bee");
        }
    }
}

solve("20", "20", "male")