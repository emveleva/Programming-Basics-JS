function solve(input){
    let n = Number(input.shift());

    let leftRight = Math.floor((n-1)/2);

    for (let i = 0; i <= Math.floor(n/2)+1 ; i++){
        console.log("-".repeat(leftRight));
        console.log("*");

    }
}

solve([3])