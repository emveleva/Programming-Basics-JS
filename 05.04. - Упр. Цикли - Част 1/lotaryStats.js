function solve(num) {
    let n = Number(num);
    let countOddNumbers = 0;
    let countEvenNumbers = 0;
    let countOddNumbers7 = 0;
    let count100 = 0;

    for (i = 1; i <= n; i++) {
        if (i < 10 && i % 2 != 0) {
            countOddNumbers += 1;
        } 
        if (i % 2 == 0) {
            countEvenNumbers += 1;
        } 
        if (i % 2 != 0 && i % 10 == 7) {
            countOddNumbers7 +=1;
        }
        if (100 % i == 0) {
            count100 += 1;

        }
    }
    console.log(`${((countOddNumbers/n)*100).toFixed(2)}%`);
    console.log(`${((countEvenNumbers/n)*100).toFixed(2)}%`);
    console.log(`${((countOddNumbers7/n)*100).toFixed(2)}%`);
    console.log(`${((count100/n)*100).toFixed(2)}%`)
}

solve(35)