function solve(input){
    let a = Number(input.shift());
    let b = Number(input.shift());
    let maxPass = Number(input.shift());
    let print = '';
    let counter = 0;
    let A = 35;
    let B = 64;
    let done = false;

    for (let x = 1; x <= a; x++){
        for (let y = 1; y <= b; y++){
            let charA = String.fromCharCode(A);
            let charB = String.fromCharCode(B);
            print += `${charA}${charB}${x}${y}${charB}${charA}|`;
            counter++;
            A++;
            B++;

            if (A > 55){
                A = 35;
            }
            if (B > 96){
                B = 64;
            }
            if (counter == maxPass){
                done = true;
                break;
            }

        }
        if (done){
            break;
        }
    }
    
    console.log(print);
}

solve(["2", "3", "10"])