function solve(input){
    let end1 = Number(input.shift());
    let end2 = Number(input.shift());
    let end3 = Number(input.shift());

    for (let i = 1; i <= end1; i++){
       for (let j = 2; j <= end2; j++){
           for (let k = 1; k <= end3; k++){
                if (i % 2 == 0 && k % 2 == 0){
                    if (j == 2 || j == 3 || j == 5 || j == 7)
                   
                    console.log(`${i} ${j} ${k}`)
                    
                }
           }
       }
    }
}

solve(["8", "2", "8"])