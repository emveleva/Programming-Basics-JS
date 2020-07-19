function solve(num1, num2, num3) {
    let start = Number(num1);
    let end = Number(num2);
    let n = Number(num3);

    for (let i = start; i <= end; i++) {
        if (i % (Math.pow(n, 2)) == 0) {
            console.log(`Very special number: ${i}`);
        } else if (i % n == 0) {
            console.log(`Special number: ${i}`)
        } else {
            console.log(i);
        }
    }
}

solve(1, 25, 3)