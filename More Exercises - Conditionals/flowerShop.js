function solve(num1, num2, num3, num4, num5) {
    let magnoliiCount = Number(num1);
    let zumbulCount = Number(num2);
    let roseCount = Number(num3);
    let cactusCount = Number(num4);
    let priceGift = Number(num5);

    let flowersCost = magnoliiCount*3.25 + 
                zumbulCount*4 + 
                roseCount*3.50 + 
                cactusCount*8;
    let flowers = flowersCost - flowersCost*0.05;

    if (priceGift > flowers) {
        let moneyNeeded = Math.ceil(priceGift - flowers);
        console.log(`She will have to borrow ${moneyNeeded} leva.`);
        
    } else {
        let moneyLeft = Math.floor(flowers - priceGift);
        console.log(`She is left with ${moneyLeft} leva.`);
    }
    
}

solve(15, 7, 5, 10, 100);