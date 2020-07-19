function solve(input) {
    let count = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i <= count; i++) {
        let number = Number(input.shift());
        if (minNumber > number) {
            minNumber = number
        }
    }
    console.log(minNumber)
}

solve(["2", "100", "99"])