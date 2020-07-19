function solve(input) {
    let number = Number(input.shift());
    let counter = 1;

    while (counter <= number) {
        console.log(counter);
        counter = counter * 2 + 1;
    }

    }