function solve([num1, num2, num3, num4]) {
    let volumePool = Number(num1);
    let P1 = Number(num2);
    let P2 = Number(num3);
    let hoursMissing = Number(num4);

    let waterP1 = P1 * hoursMissing;
    let waterP2 = P2 * hoursMissing;
    let waterTotal = waterP1 + waterP2;

    if(waterTotal <= volumePool) {
        let percentFull = waterTotal/volumePool*100;
        let percentP1 = waterP1 / waterTotal*100;
        let percentP2 = waterP2 / waterTotal*100;
        console.log(`The pool is ${percentFull.toFixed(2)}%. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`)
    } else {
        let overflow = waterTotal - volumePool;
        console.log(`For ${hoursMissing.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`)
    }
}

solve([100, 100, 100, 2.5])