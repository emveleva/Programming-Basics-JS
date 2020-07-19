function solve(num1, num2, num3, num4, num5) {
    let days = Number(num1);
    let totalFood = Number(num2);
    let dogPerDay = Number(num3);
    let catPerDay = Number(num4);
    let turtlePerDay = Number(num5)/1000;   
    let eatenFood = dogPerDay*days+catPerDay*days+turtlePerDay*days;

    if(eatenFood <= totalFood) {
        let foodLeft = Math.floor(totalFood - eatenFood);
        console.log(`${foodLeft} kilos of food left.`);
    } else {
        let neededFood = Math.ceil(eatenFood - totalFood);
        console.log(`${neededFood} more kilos of food are needed.`)
    }
}

solve(['5', '10', '2.1','0.8','321'])