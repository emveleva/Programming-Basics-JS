function solve(input) {
    let count = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < count; i++) {
        let number = Number(input.shift());
        if (maxNumber < number) {
            maxNumber = number;
        }
    }
    console.log(maxNumber)
}

solve(["2", "100", "99"])