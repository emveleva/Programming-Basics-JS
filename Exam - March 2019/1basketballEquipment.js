function solve(input) {
    let tax = Number(input.shift());

    let shoes = tax - tax*0.40;
    let suit = shoes - shoes*0.20;
    let ball = suit/4;
    let stuff = ball/5;

    let all = tax + shoes + suit + ball + stuff;

    console.log(all.toFixed(2))
}

solve([ '230' ])