function solve(num1, num2, num3) {
    let x = Number(num1);
    let y = Number(num2);
    let h = Number(num3);
    let greenPaint = 3.4;
    let redPaint = 4.3;

    let frontBackArea = 2*x*x - 1.2*2;
    let sides = 2*x*y - 2*1.5*1.5;
    let totalGreen = (frontBackArea + sides)/greenPaint;

    let roofTop = 2*x*y;
    let roofSides = 2*(x*h/2);
    let totalRed = (roofSides + roofTop)/redPaint;

    console.log(totalGreen.toFixed(2));
    console.log(totalRed.toFixed(2));
}

solve(6, 10, 5.2)