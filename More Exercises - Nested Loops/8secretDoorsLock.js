function solve(input){
    let max100 = Number(input.shift());
    let max10 = Number(input.shift());
    let max1 = Number(input.shift());

    for (let n1 = 1; n1 <= max100; n1++){
        for (let n2 = 1; n2 <= max10; n2++){
            for (let n3 = 1; n3 <= max1; n3++){
                if (n1 % 2 == 0 && n3 % 2 == 0){
                    if (n2 == 2 || n2 == 3 || n2 == 5 || n2 == 7){
                        console.log(`${n1} ${n2} ${n3}`);
                    }
                }
            }
        }
    }
}

solve(["3", "5", "5"])