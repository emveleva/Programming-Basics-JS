function solve(x1, y1, x2, y2) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
    let length = Math.abs(x1-x2);
    let width = Math.abs(y1-y2);
    let area = length * width;
    let par = length*2 + width*2;
    console.log(area.toFixed(2));
    console.log(par.toFixed(2))
}

solve(30, 40, 70, -10)
