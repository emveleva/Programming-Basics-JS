function solve(input){
    let M = Number(input.shift());
    let counter = 0;
    let password = ``;
    let found = false;
    let print = "";

    for (let a = 1; a <= 9; a++){
        for (let b = 1; b <= 9; b++){
            for (let c = 1; c <= 9; c++){
                for (let d = 1; d <= 9; d++){
                    if (a*b + c*d == M && a < b && c > d){
                        counter++;
                        print += `${a}${b}${c}${d} `;
                        if (counter == 4){
                            found = true;
                            password = `${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }
    console.log(print)
    if (found){
        console.log(`Password: ${password}`)
    } else {
        console.log(`No!`)
    }
}

solve(["139"])