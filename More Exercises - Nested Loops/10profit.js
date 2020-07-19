function solve(input){
    let coins1 = Number(input.shift());
    let coins2 = Number(input.shift());
    let coins5 = Number(input.shift());
    let sum = Number(input.shift());

    for (let i = 0; i  <= coins1; i++){
        for (let j = 0; j <= coins2; j++){
            for (let k = 0; k <= coins5; k++){
                let result = i + j*2 + k*5;
                if (result == sum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

solve(["3", "2", "3", "10"])