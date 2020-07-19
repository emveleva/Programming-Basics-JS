function solve(input) {
    let kozunakCount = Number(input.shift());
    let eggBoxesCount = Number(input.shift());
    let kgCookies = Number(input.shift());

    let eggs = eggBoxesCount * 4.35 + eggBoxesCount * 12 * 0.15;
    let total = eggs + kozunakCount * 3.20 + kgCookies * 5.40;

    console.log(total.toFixed(2));
}

solve(["2", "3", "2"])