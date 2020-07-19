function solve(input) {
    let element = input.shift();
    let sum = 0;

    while (element != "Stop"){
        let number = Number(element);
        sum += number;
        element = input.shift();

    }
    console.log(sum);
}

solve(["10", "20", "30", "45", "Stop"])