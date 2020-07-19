function solve(input){
    let n = Number(input.shift());
    let print = '';

    for (let s1 = 1; s1 <= 9; s1++){
        if (n % s1 == 0){
            for (s2 = 1; s2 <= 9; s2++){
                if (n % s2 == 0){
                    for (s3 = 1; s3 <= 9; s3++){
                        if (n % s3 == 0){
                            for (s4 = 1; s4 <= 9; s4++){
                                if (n % s4 == 0){
                                print += `${s1}${s2}${s3}${s4} `
                                }
                                }
                            }
                    }
                }
            }
        }
    }
    console.log(print)
}

solve(["16"])