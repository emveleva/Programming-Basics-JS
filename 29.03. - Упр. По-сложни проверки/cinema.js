function solve(arg1, arg2, arg3) {
    let type = arg1;
    let rows = Number(arg2);
    let cols = Number(arg3);
    let area = rows * cols;
    let income = 0;

    if (type == "Premiere") {
        income = area * 12;
        console.log(`${income.toFixed(2)} leva`)
    } else if (type == "Normal") {
        income = area * 7.5;
        console.log(`${income.toFixed(2)} leva`)
    } else if (type == "Discount") {
        income = area * 5;
        console.log(`${income.toFixed(2)} leva`)

    }

}

solve("Premiere", 10, 12);
solve("Normal", 21, 13);
solve("Discount", 12, 30)