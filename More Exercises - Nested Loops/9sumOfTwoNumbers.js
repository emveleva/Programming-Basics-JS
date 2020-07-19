function solve(input){
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let counter = 0;
    let found = false;

    for (let i = start; i <= end; i++){
        for (let j = start; j <= end; j++){
            counter++;
            let result = i + j;
            if (result == magicNumber){
                console.log(`Combination N:${counter} (${i} + ${j} = ${result})`);
                found = true;
                break;
            }
        }
        if (found){
            break;
        }
    }
    if (found == false){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
        
    }
}


solve(["23", "24", "20"])