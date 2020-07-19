function solve(input){
    let n = Number(input.shift());
    let print = '';

    for (let s1 = 1; s1 <= 9; s1++){
        for (let s2 = 1; s2<= 9; s2++){
            for (let s3 = 1; s3 <= 9; s3++){
                for (s4 = 1; s4<= 9; s4++){
                    if ((s1 + s2 == s3 + s4) && (n%(s1+s2) == 0)){
                        print += `${s1}${s2}${s3}${s4} `
                    }
                }
            }
        }
    }
    console.log(print);
}

solve(["7"])