function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combination = 0;
    let isFinished = false;
    let firstNumber = 0;
    let secondNumber = 0;

    for (let i = start; i <= end; i++) {
        firstNumber = i;
        for (let j = start; j <= end; j++){
            secondNumber = j;
            combination++
            if (i + j == magicNumber){
                isFinished = true;
                break;
            }
            
        }
        if(isFinished){
            break;
        }
    }
    if (isFinished){
    console.log(`Combination N:${combination} (${firstNumber} + ${secondNumber} = ${magicNumber}) `);
    } else {
        console.log(`${combination} combinations - neither equals ${magicNumber}`)
    }

}

solve(['88', '888', "1000"])