function solve(num) {
    let celsius = Number(num);
    let fahr = celsius *9/5+32;
    console.log(fahr.toFixed(2));
}

solve(25)