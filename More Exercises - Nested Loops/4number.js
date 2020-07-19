function solve(input){
    let start = Number(input.shift());
    let end = Number(input.shift());
    let print = "";

    for (let s1 = start; s1 <= end; s1++){
        for (let s2 = start; s2 <= end; s2++){
            for (let s3 = start; s3 <= end; s3++){
                for (let s4 = start; s4 <= end; s4++){
                    if ((s1 % 2 == 0 && s4 % 2 != 0)||(s1 % 2 != 0 && s4 % 2 == 0)){
                        if (s1 > s4){
                            if ((s2 + s3) % 2 == 0){
                                print += `${s1}${s2}${s3}${s4} `;
                            }
                        }

                    }
                }
            }
        }
    }
    console.log(print);
}

solve(["3", "5"])