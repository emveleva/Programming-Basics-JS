function solve(input) {
    let n = Number(input.shift());
    let currentNumber = Number(input.shift());
    let counter = 0;
    let total = 0;

    while (counter < n){
        counter++;
        total += currentNumber
        currentNumber = Number(input.shift());
    }
    let average = total/counter;
    console.log(average.toFixed(2))
}
solve(["4", "3", "2", "4", "2"])