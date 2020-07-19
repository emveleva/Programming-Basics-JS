function solve(num) {
let number = Number(num);

for (i = 0; i <= number; i+=2) {
    if (i % 2 == 0) {
    console.log(Math.pow(2, i))
    }
}
}

solve(3)