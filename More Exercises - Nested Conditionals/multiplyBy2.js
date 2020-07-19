function solve(arg){
    let n = arguments[0];
    let result = 0;
    let counter = 0;

    while (n >= 0){
        counter++;
        result = n*2;
        console.log(`Result: ${result.toFixed(2)}`)
        n = arguments[counter];
        if (n < 0){
            console.log(`Negative number!`)
        }
    }
}

solve(12, 43.2144, 12.3, 543.23, -20)