function solve(num1, num2, num3, num4, num5, num6) {
    let x1 = Number(num1);
    let y1 = Number(num2);
    let x2 = Number(num3);
    let y2 = Number(num4);
    let x = Number(num5);
    let y = Number(num6);
    let firstCondition = (x == x1 || x == x2) && ( y1 <= y && y <= y2);
    let secondCondition = (y == y1 || y == y2) && ( x1 <= x && x <= x2);

    if (firstCondition || secondCondition) {
        console.log("Border");
         } else {
        console.log("Inside / Outside");
}
} 


solve(2, -3, 12, 3, 12, -1)
solve(2, -3, 12, 3, 8, -1)
solve(2, -3, 12, 3, 1, 3)