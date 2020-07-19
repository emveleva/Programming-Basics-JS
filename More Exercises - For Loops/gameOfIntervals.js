function solve(input){
    let moves = Number(input.shift());
    let counter = 0;
    let totalPoints = 0;
    let number = Number(input.shift());
    let zeroTo9 = 0;
    let nineTo19 = 0;
    let twentyTo29 = 0;
    let thirtyTo39 = 0;
    let fourtyTo50 = 0;
    let invalid = 0;
    
    while (counter <= moves){
        counter++;
        
        if (number >= 0 && number <= 9) {
            totalPoints = totalPoints + number*0.20;   
            zeroTo9++;             
        } else if ( number > 9 && number <=19){
            totalPoints = totalPoints + number*0.30;
            nineTo19++;
        } else if (number > 19 && number <= 29){
            totalPoints = totalPoints + number*0.40;
            twentyTo29++;
        } else if (number > 29 && number <= 39){
            totalPoints += 50;
            thirtyTo39++;
        } else if (number > 39 && number <= 50) {
            totalPoints += 100;
            fourtyTo50++;
        } else if (number > 50 || number < 0) {
            totalPoints = totalPoints/2;
            invalid++;
                             
        }

        number = Number(input.shift());
    }
    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${(zeroTo9/moves*100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(nineTo19/moves*100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(twentyTo29/moves*100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(thirtyTo39/moves*100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fourtyTo50/moves*100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid/moves*100).toFixed(2)}%`);

}

solve([ '3', '12', '-23', '46' ])