function solve(num) {
    let n = Number(num);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i*i;
    }
    console.log(sum)
}

solve(4)