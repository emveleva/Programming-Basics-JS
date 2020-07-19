function solve(num1, num2, num3) {
    let start = Number(num1);
    let end = Number(num2);
    let divider = Number(num3);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % divider == 0) {
            sum += i;
        }
    }
    console.log(sum)
}

solve(61, 125, 25)