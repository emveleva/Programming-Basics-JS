function solve(num1, num2, num3, num4, num5) {
    let priceSkumria = Number(num1);
    let priceCaca = Number(num2);
    let kgPalamud = Number(num3);
    let kgSafrid = Number(num4);
    let kgMidi = Number(num5);
    let priceMidi = 7.50;

    let pricePalamud = priceSkumria + priceSkumria*0.60;
    let priceSafrid = priceCaca + priceCaca*0.80;

    let total = pricePalamud * kgPalamud + kgSafrid * priceSafrid + kgMidi * priceMidi;

    console.log(total.toFixed(2));

}

solve(6.90, 4.20, 1.5, 2.5, 1)