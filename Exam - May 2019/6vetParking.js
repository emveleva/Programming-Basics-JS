function solve(input){
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let total = 0;
    

    for (let i = 1; i <= days; i++){
        let tax = 0;
        for (let j = 1; j <= hours; j++){
            if (i % 2 == 0 && j % 2 != 0){
                tax += 2.50;
            } else if (i % 2 != 0 && j % 2 == 0){
                tax += 1.25;
            } else {
                tax += 1;
            }
        }
        total += tax;
        console.log(`Day: ${i} - ${tax.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`)
    
}

solve([ '5', '2' ])