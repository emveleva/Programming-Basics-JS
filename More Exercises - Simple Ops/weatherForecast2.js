function solve(num) {
    let grad = Number(num);

    if (grad >= 26 && grad <= 35) {
        console.log("Hot");
    } else if (grad >= 20.1 && grad <= 25.9) {
        console.log("Warm");
    } else if (grad >= 15 && grad <= 20) {
        console.log("Mild");
    } else if (grad >= 12 && grad <= 14.9) {
        console.log("Cool");
    } else if (grad >= 5 && grad <= 11.9) {
        console.log("Cold")
    } else {
        console.log("unknown");
    }
}

solve(0)