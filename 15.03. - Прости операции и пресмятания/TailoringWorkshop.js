function solve(count, length, width) {
    count = Number(count);
    length = Number(length);
    width = Number(width);
    let clothRect = 7;
    let clothSqu = 9;
    let bgn = 1.85;
    let areaRect = count*(length+2*0.30)*(width+2*0.30);
    let areaSqu = count*(length/2)*(length/2);
    let usd = areaRect*clothRect+areaSqu*clothSqu;
    let sumBgn = usd*bgn;
    console.log(`${usd.toFixed(2)} USD`);
    console.log(`${sumBgn.toFixed(2)} BGN`)
}

solve("10", "1.20", "0.65")
